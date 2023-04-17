const another = require('./another_module')

function log() {
    console.log(`well done ${another.username}`)
}

module.exports.run = () => {
    log()
}