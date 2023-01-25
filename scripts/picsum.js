const {
  createWriteStream,
  createReadStream,
  existsSync,
  mkdirSync,
} = require('fs');
const { resolve, join, extname } = require('path');
const { createServer } = require('http');
const { homedir } = require('os');
const request = require('request');

const CACHE_PATH = join(homedir(), '.picsum');
const MIME_TYPES = {
  default: 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};
const MESSAGES = {
  invalid_url: 'url is invalid',
};

if (!existsSync(getCachePath())) {
  mkdirSync(getCachePath());
}

function getCachePath(...props) {
  return resolve(join(CACHE_PATH, ...props));
}

function isNum(str) {
  return !isNaN(str) && !isNaN(parseInt(str));
}

function picsumPlugin(url) {
  const host = 'picsum.photos';
  const props = { id: null, width: 100, height: 100 };
  const parts = getURLParts(url);

  if (parts[0] === host) {
    parts.shift();
  }

  if (parts[0] === 'id') {
    parts.shift();
    props.id = parts[0];
    parts.shift();
  }

  for (const side of ['height', 'width']) {
    const part = parts[0];

    if (!isNum(part)) {
      break;
    }

    props[side] = parseInt(part);
    parts.shift();
  }

  if (parts.length !== 0) {
    throw new Error(MESSAGES.invalid_url);
  }

  // TODO: work on 'id'
  const file_path = join(
    host,
    `${props.id}-${props.width}-${props.height}.jpg`
  );
  const url_array = [`https://${host}`];

  if (props.id) {
    url_array.push('id', props.id);
  }

  url_array.push(props.height, props.width);

  return { url: url_array.join('/'), path: file_path };
}

const plugins = {
  picsum: picsumPlugin,
};

function callPlugin({ plugin, url }) {
  const file = plugin(url);
  const path = getCachePath(file.path);

  if (!existsSync(path)) {
    request({
      url: file.url,
      headers: {
        'User-Agent': 'request',
      },
    }).pipe(createWriteStream(path));
    console.log('File downloaded !');
  }

  return path;
}

function getURLParts(url) {
  return url.split('/').filter((item) => item.length > 0);
}

function validateURL(url) {
  const parts = getURLParts(url);

  const conditions = [
    [() => parts.length <= 1, MESSAGES.invalid_url],
    [() => plugins[parts[0]] == undefined, `plugin ${parts[0]} is invalid`],
  ];

  for (const [condition, error] of Object.values(conditions)) {
    if (condition()) {
      throw new Error(error);
    }
  }
}

function getInfoFromURL(url) {
  const parts = getURLParts(url);

  const info = {
    plugin: plugins[parts[0]],
  };

  parts.shift();

  info.url = parts.join('/');

  return info;
}

function startServer(port = 8080) {
  createServer(({ url }, res) => {
    let path = '';
    let status_code = 200;

    console.clear();
    console.log(url);

    try {
      validateURL(url);
      path = callPlugin(getInfoFromURL(url));
    } catch (err) {
      path = getCachePath('404.html');
      status_code = 404;
      console.log(err.message);
    }

    const ext = extname(path).substring(1).toLowerCase();
    const mimeType = MIME_TYPES[ext] || MIME_TYPES.default;
    res.writeHead(status_code, { 'Content-Type': mimeType });
    createReadStream(path).pipe(res);
  }).listen(port);

  console.log(`Server running at http://127.0.0.1:${port}/`);
}

startServer(8090);
