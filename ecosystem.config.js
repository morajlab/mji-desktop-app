module.exports = {
  apps: [
    {
      name: 'picsum:serve',
      script: './scripts/picsum/picsum.js',
      autorestart: false,
    },
    {
      name: 'frontend:build:development',
      script: './node_modules/nx/bin/nx.js',
      args: 'run frontend-frontend:build:development --watch',
      autorestart: false,
    },
    {
      name: 'backend:serve',
      script: './node_modules/nx/bin/nx.js',
      args: 'serve backend',
      autorestart: false,
    },
  ],
};
