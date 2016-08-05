module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    "mainnet": {
      network_id: 1, // Ethereum public network
    },
    "morden": {
      network_id: 2,        // Official Ethereum test network
    },
    "consensysnet": {
      network_id: 161,
    },
    "development": {
      network_id: "default"
    }
  }
};
