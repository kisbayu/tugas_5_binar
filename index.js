const os = require('os')
const fs = require('fs')

const pathInfo = './cpu_info.json'
fs.writeFileSync(pathInfo, JSON.stringify(os.cpus(), null,'\t'), 'utf-8')
