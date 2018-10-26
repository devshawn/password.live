module.exports = {
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ],
      "plugins": [
        "react-html-attrs",
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ],
        "@babel/plugin-proposal-object-rest-spread"
      ]
    },
    "development": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "modules": false
          }
        ],
        "@babel/preset-react"
      ],
      "plugins": [
        "react-hot-loader/babel",
        "react-html-attrs",
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ],
        "@babel/plugin-proposal-object-rest-spread"
      ]
    },
    "production": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "modules": false
          }
        ],
        "@babel/preset-react"
      ],
      "plugins": [
        "react-html-attrs",
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ],
        "@babel/plugin-proposal-object-rest-spread"
      ]
    }
  }
}
