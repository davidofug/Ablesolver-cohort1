const OS = require('os')

console.log(OS.hostname()) //Outputs the Hostname

console.log(OS.homedir()) //Outputs the absolute path of the user i.e /Users/username

console.log(OS.arch()) //Outputs operating system architecture e.g: arm, x64, x86, arm64

console.log(OS.cpus()) //Outputs information about the processor in an array of objects

console.log(OS.endianness()) //Outputs the Endianess that Node.js was compiled with

console.log(OS.freemem() / 1024 / 1024 / 1024) //Outputs the total number of free memory in bytes

console.log(OS.loadavg()) //Outputs 3 values for the OS load average in an array

console.log(OS.networkInterfaces()) //Ouputs information about the network interfaces in the computer.
console.log(OS.platform()) //Outputs the OS platform i.e. Linux, darwin, Windows_NT etc

console.log(OS.release()) //Outputs the OS release number

console.log(OS.tmpdir()) //Outputs the temporary director of the OS
console.log(OS.totalmem() / (1024 ** 3)) //Outputs the total physical memory (RAM) of the computer in GBs
console.log(OS.type()) //Outputs the OS type i.e. Darwin, Linux, Windows_NT etc

console.log(OS.uptime() / (3600 * 24)) //Outputs the total number of days since the computer was rebooted/restarted or (booted/ started if it wasn't shutdown before)
console.log(OS.userInfo()) //Outputs information about the logged in user