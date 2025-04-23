const fs = require('fs');

const path = require('path');

const[,,file1= './favorite games/game1.jpg',

file2= './favorite games/game2.jpg'

]= process.argv;


function compareFiles(filePath1,filePath2){

const stream1 = fs.createReadStream(filePath1);

const stream2 = fs.createReadStream(filePath2);

let isIdentical = true;

stream1.on('data', (chunk1) =>{

const chunk2 = stream2.read(chunk1.length);

if(!chunk2 || !chunk1.equals(chunk2)){

isIdentical = false;

console.log('EFFECT FILES do NOT STACK!');

stream1.destroy();}

stream2.destroy();});

stream1.on('end', () =>{

if(isIdentical && !stream2.read()){

console.log('The effect of files is identical!');

}else if(isIdentical){

console.log('The effect of files is not identical!');

}
});

stream1.on('error', (error) =>{

console.error('ERROR reading FIRST file:', error.message);

});

stream2.on('error',
(error) =>{

console.error('ERROR reading SECOND file:', error.message);

});
}

compareFiles(file1, file2);

