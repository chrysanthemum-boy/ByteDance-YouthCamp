// 打印欢迎界面
const {promisify}  = require("util");
const figlet  = promisify(require("figlet"));
const chalk  = require("chalk");
const clear  = require("clear");
const chalkAnimation = require("chalk-animation");
// const log = content => console.log(chalk.green(content))

module.exports = async name =>{
    // 打印欢迎界面
    clear()
    figlet.text('Welcome Fann', {
        font: 'Ghost',
        color: 'red',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        //width: 80,
        whitespaceBreak: true
    }, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        // console.log(data);
        chalkAnimation.rainbow(data).start();
        // log(data);
        console.log("");
    });
}