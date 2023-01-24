const { createWriteStream, existsSync, mkdirSync } = require('fs');
const { resolve, join } = require('path');
const { homedir } = require('os');
const request = require('request');

if (!existsSync(getCachePath())) {
  mkdirSync(getCachePath());
}

function getCachePath(...props) {
  const CACHE_PATH = join(homedir(), '.picsum');

  return resolve(join(CACHE_PATH, ...props));
}

function createFileName({ id, width, height }) {
  return `${id}-${width}-${height}.jpg`;
}

function createURL({ id, width, height }) {
  const host = 'https://picsum.photos';
  let url = id ? `${host}/id/${id}` : host;
  url += `/${height}/${width}`;

  return url;
}

function downloadPic(props) {
  const default_props = { id: null, width: 100, height: 100 };
  props = { ...default_props, ...props };

  const file_path = getCachePath(createFileName(props));

  if (existsSync(file_path)) {
    return;
  }

  const url = createURL(props);

  request({
    url,
    headers: {
      'User-Agent': 'request',
    },
  }).pipe(createWriteStream(file_path));
  console.log('File downloaded !');
}

downloadPic({
  id: 237,
});
