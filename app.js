/** 入口文件 */
// process.stdin.setEncoding('utf8');

process.on('beforeExit', () => {
    console.log('beforeExit')
})
process.on('exit', (code) => {
    console.log('exit ', code)
})
process.on('SIGINT', () => {
    console.log('receive CTL+c')
    process.exit(0)
})

// process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     if (chunk !== null) {
//         process.stdout.write(`readable: ${chunk}`);
//     }
// });

// process.stdin.on('end', () => {
//     console.log('end')
//     process.stdout.write('end');
// });

process.stdin.on('data',(chunk)=>{
    console.log('chunk , ' ,new String(chunk))
    process.stdout.write('data : ',chunk);
})

// process.stdin.resume();
