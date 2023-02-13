const createAuthenticator = require('./auth_factory')
const auth = createAuthenticator({ type: 'BASIC' })
auth.authenticate()

const auth2 = createAuthenticator({ type: 'JWT' })
auth2.authenticate()
