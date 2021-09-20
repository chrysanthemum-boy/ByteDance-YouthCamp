// 打印欢迎界面
const {promisify}  = require("util");
const figlet  = promisify(require("figlet"));
const chalk  = require("chalk");
const clear  = require("clear");
const log = content => console.log(chalk.green(content))

module.exports = async name =>{
    // 打印欢迎界面
    clear()
    const data = await figlet("Welcome Fann")
    log(data)
}