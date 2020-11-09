const fs = require('fs');
const colors = require('colors');
let content = '';


let getTable = (base, limit) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Is not a number')
            return;
        }
        for (let i = 0; i <= limit; i++) {
            content += `${base} * ${i} = ${base * i} \n`;
        }
        resolve(content.white)
    })
}

let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Is not a number'.red)
            return;
        }
        for (let i = 0; i <= limit; i++) {
            content += `${base} * ${i} = ${base * i} \n`;
        }
        const data = new Uint8Array(Buffer.from(content));

        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${base}.txt`)
            // console.log('The file has been saved!');
        });
    })
}

module.exports = {
    createFile,
    getTable
}
