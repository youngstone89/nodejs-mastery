class Config {
  constructor () {
    this.config = {
      hello: 'world'
    }
  }

  get Object () {
    return this.config
  }

  modify (key, value) {
    this.config[key] = value
  }
}

module.exports = Config
