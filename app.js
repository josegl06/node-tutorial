const argv = require('./config/yargs').argv;
const colors = require('colors');


const {createFile, getTable} = require('./multiplier/multiplier')


let command = argv._[0];

switch (command) {
    case  'list':

        getTable(argv.base, argv.limit).then(value => {
            console.log(value)
        }).catch(err => {
            console.log(err)
        })
        break;
    case  'create':
        createFile(argv.base, argv.limit).then(file => {
            console.log(file)
        }).catch(err => {
            console.log(err)
        })
        break;

    default:
        console.log('Incorrect command')
        break;
};
