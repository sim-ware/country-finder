const fs = require('fs')

const storeJsonData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

module.exports = storeJsonData;