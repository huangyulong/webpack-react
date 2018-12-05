const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, '../client/main.js')
    },
    output: {
        publicPath: ''
    }
}
