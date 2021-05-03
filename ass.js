const fetch = require('node-fetch');
const fs = require('fs');
const { clear } = require('console');

//directory path
const dir = './result';

//create new directory
try{
    //check if the directory existed before.
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        console.log('directory created successfully')
    }else{
        console.log('Directory is already in existence')
    }
} catch(err){
    console.log(err);
}

fetch('https://jsonplaceholder.typicode.com/users')
//fetch ('https://jsonplaceholder.typicode.com/todos/')
    .then(res => res.text())
    .then(function (text){
        const streamedData = fs.writeFile('result/post.txt', text, () => {
            console.log('file written successfully');
        })
    })
  // clear();

