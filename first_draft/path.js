const { dirname } = require('path');
const appDir = dirname(require.main.filename);
console.log(appDir)