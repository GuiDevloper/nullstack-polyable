const defaultOptions = {
  launch: {
    headless: true,
  },
  server: {
    command: 'npm run start',
    port: 3000,
    launchTimeout: 10000,
  },
  browserContext: 'incognito',
}

module.exports = defaultOptions
