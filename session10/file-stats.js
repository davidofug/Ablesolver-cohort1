// const fs = require('fs')
// fs.stat('test.txt', (err, stats) => {
//   if (err) {
//     console.error(err)
//     return
//   }

//   console.log(stats)
// //   process.stdout.write(stats)
// })

/* const fs = require('fs')
try {
  const stats = fs.statSync('test.txt')
  console.log( stats )
} catch (err) {
  console.error(err)
}

console.log('After the stats') */

const fs = require('fs')

try {
    const stats = fs.statSync('test.txt')
    console.log( `Is it a file? ${stats.isFile()}`)
    console.log( `Is it a directory? ${stats.isDirectory()}`)
    console.log( `File size in bytes: ${stats.size}`)
    console.log( `Is it a symbolic link? ${stats.isSymbolicLink()}`)
} catch (err) {
  console.error(err)
}