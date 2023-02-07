const shared_opts = {
  autorestart: false,
  time: true,
};

const apps = [
  {
    name: 'picsum:serve',
    script: './scripts/picsum/picsum.js',
  },
  {
    name: 'frontend:build:development',
    script: './node_modules/nx/bin/nx.js',
    args: 'run frontend-frontend:build:development --watch',
  },
  {
    name: 'plugins:storybook',
    script: './node_modules/nx/bin/nx.js',
    args: 'run plugins:storybook',
    env: {
      NODE_OPTIONS: '--openssl-legacy-provider',
    },
  },
  {
    name: 'frontend:storybook',
    script: './node_modules/nx/bin/nx.js',
    args: 'run frontend-frontend:storybook',
    env: {
      NODE_OPTIONS: '--openssl-legacy-provider',
    },
  },
  {
    name: 'backend:serve',
    script: './node_modules/nx/bin/nx.js',
    args: 'serve backend',
  },
];

module.exports = {
  apps: apps.map((app) => ({ ...shared_opts, ...app })),
};
