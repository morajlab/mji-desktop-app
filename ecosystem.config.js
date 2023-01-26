module.exports = {
  apps: [
    {
      name: 'picsum',
      script: './scripts/picsum/picsum.js',
      autorestart: false,
    },
    {
      name: 'frontend:build',
      script: './node_modules/nx/bin/nx.js',
      args: 'build frontend-frontend',
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
