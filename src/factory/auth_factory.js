
class Authenticator {
  constructor (options) {
    console.log('initializing authenticator')
  }

  authenticate () {
    console.log('Authenticating...')
  }
}

class BasicAuthenticator extends Authenticator {
  constructor (options) {
    super()
    this.username = options.username
    this.password = options.password
  }

  authenticate () {
    console.log('basic auth')
    //   business logic
  }
}
class JwtAuthenticator extends Authenticator {
  constructor (options) {
    super()
    this.token = options.token
  }

  authenticate () {
    console.log('jwt auth')
    //   business logic
  }
}

function createAuthenticator (options) {
  switch (options.type) {
    case 'BASIC':
      return new BasicAuthenticator(options)
    case 'JWT':
      return new JwtAuthenticator(options)
    default:
      return new BasicAuthenticator(options)
  }
}

module.exports = createAuthenticator
