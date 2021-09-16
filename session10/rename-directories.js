const fs = require('fs')

// Asynchronous renaming 
fs.rename('test2', 'test3', err => {
  if (err) {
    console.error(err)
    return
  }
  console.log( 'Rename successful' )
})

//Synchronous renaming
try{
    fs.renameSync('test3', 'test4')
    console.log('Directory renamed')
}
catch(err) {
    console.error(err)
}