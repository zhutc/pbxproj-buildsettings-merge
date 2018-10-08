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
}


module.exports = XcodeBuildSettingsMergeManager
