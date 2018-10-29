const convict = require('convict')
const defaultConfig = require('./default')

// Load the default configuration
const config = convict(defaultConfig)

// Override default with specifics from our environment
config.loadFile(`${__dirname}/${config.get('env')}.json`)
config.validate({ allowed: 'strict' })

module.exports = config