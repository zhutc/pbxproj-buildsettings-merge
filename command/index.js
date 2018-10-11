const XcodeBuildSettingsMergeManager = require('../src/index')

class CommandManager {
    constructor({src,dst}){
        this.manager = new XcodeBuildSettingsMergeManager({ src,dst })
    }
    runCommand(command){
        command = this.trimCommand(command)
        if(command == "showConfigurations"){
            this.manager.showConfigurations()
        }else{
            
        }
    }
    trimCommand(command){
        return command.trim()
    }
}

module.exports = CommandManager