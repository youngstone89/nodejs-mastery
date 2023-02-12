const Config = require('./config')

const config = new Config()

console.log(config.Object)

console.log(config.Object.hello)

config.modify('hi', 'there')

console.log(config.Object)

function Setting (config) {
  this.config = config
}

const setting = new Setting(config.Object)
console.log(setting)

config.modify('you', 'there')
console.log(setting)
