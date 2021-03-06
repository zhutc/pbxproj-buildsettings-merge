const ConsoleTable = require('tty-table')
const PBXProjectHelper = require('./pbxprojecthelper')

class XcodeBuildSettingsMergeManager { 
    constructor({src,dst,output,})
    {
        this.src = src
        this.dst = dst
        this.output = output
        this.setUp()
    }

    setUp(){
        this.srcProjectHelper = new PBXProjectHelper({ pbxprojPath : this.src})
        this.dstProjectHelper = new PBXProjectHelper({ pbxprojPath : this.dst})
    }
    readAllConfiguration(){
        try {
            
        } catch (error) {
            
        }
    }

    async showBuildSettings(){
        try {
            await this.srcProjectHelper.startParse()
            let configurationList = await this.srcProjectHelper.getConfigurationList()
            for (const configurationID in configurationList) {
                if (configurationID.endsWith('_comment')) {
                    continue
                }
                let configuration = configurationList[configurationID]
                console.log('======  configuration  =========')
                console.log(`uuid : ${configurationID}`)
                console.log(`name : ${configuration.name}`)
                console.log(`buildSettings : `, configuration.buildSettings)
            }

        } catch (error) {
            console.log('src parse error')
        }
    }
    /* 获取pbx所有的configuration  */
    async showConfigurations(){
        try {
            this.showConfigurationsForProjectHelper(this.srcProjectHelper)
        } catch (error) {
            
        }
    }
    
    async showConfigurationsForProjectHelper(helper){
        await helper.startParse()
        let configurationDescriptionList = helper.getConfigurationDescriptionList()
        /* 终端输出列表 */
        let headers = [{value:'name'},{value:'uuid'}]
        let rows = []
        for (const dsc of configurationDescriptionList) {
            rows.push([dsc.name,dsc.uuid])   
        }
        let table = new ConsoleTable(headers,rows)
        console.log(table.render())
    }
}


module.exports = XcodeBuildSettingsMergeManager
