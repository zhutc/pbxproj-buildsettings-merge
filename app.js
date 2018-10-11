/** 入口文件 */
const CommandManager = require('./command')
console.log('env = ',process.argv)
let src = process.argv[2]
let dst = process.argv[3]
let commander = new CommandManager({src,dst})

process.stdin.setEncoding('utf-8');

process.on('beforeExit', () => {
    console.log('beforeExit')
})
process.on('exit', (code) => {
    console.log('exit ', code)
})
process.on('SIGINT', () => {
    process.exit(0)
})

process.stdin.on('data',(chunk)=>{
    console.log('【 接收到指令 】：  ' ,chunk)
    commander.runCommand(chunk)
})

