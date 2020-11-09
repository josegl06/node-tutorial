const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        demand: true,
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('list', 'List all the values', opts)
    .command('create', 'Create new values', opts)
    .help()
    .argv;


module.exports = {
    argv
}