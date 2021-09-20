/* Create a buffer */
const buffer = Buffer.from('My is name David')
/* Access the contents of the buffer like an array */
console.log(buffer[0])

/* Convert the buffer to a string*/
const bufferStr = buffer.toString()
/* Access part of the string */
console.log(bufferStr[0])

/* Writing the buffer */

const countryBuffer = Buffer.alloc(4)
//Writing a string whose length will be larger than the allocated bytes will truncate the string
countryBuffer.write('Uganda')
console.log(countryBuffer.toString()) //This will give us Ugan instead of Uganda

const countriesBuffer = Buffer.alloc(4)
const countries = ['Uganda','Tanzania','Kenya', 'Rwandan']
//countriesBuffer.write(countries) //This won't work because buffer.write accepts string yet the countries is an array
//console.log(countriesBuffer[0])

//Slicing a buffer: To access a portion of it

const buf = Buffer.from('Hey!')
//Use the subarray() to slice.

const bufSubArray = buf.subarray(0)
const bufSubArrayStr = bufSubArray.toString() //Hey!
console.log(bufSubArrayStr) //Hey!

const sliceOfTheFirstTwo = buf.subarray(0, 2) //He
console.log(sliceOfTheFirstTwo.toString()) //He
buf[1] = 111 //o
console.log(bufSubArray.subarray(0,2).toString()) //Ho
console.log(bufSubArray.toString()) //Hoy