const fs = require('fs')
/* const dir = 'test4'

fs.rmdir(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
});
 */
const dir2 = "test2"
try {
    fs.rmSync(dir2, {recursive: true, force:true})
    console.log('Deleted successfully')

} catch(err){
    console.error(err)
}

//Asynchronous deletion of directory
const dir3 = "test4"
fs.rm(dir3, {recursive: true, force:true}, (err) => {
    if(err){
        throw err
    }

    console.log(`${dir3} deleted!`)
})

//There is a robust well maintained node package for performing the same functionality but in slightly different syntax
//The module is fs-extra which you can install using npm install fs-extra