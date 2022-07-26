module.exports = {
  apps : [{
    name: 'mopcon-2022-wallet-api',
    script: 'app.js',
    watch: '.',
    env: {
      "NODE_ENV": "uat",
    },
  }]
};
