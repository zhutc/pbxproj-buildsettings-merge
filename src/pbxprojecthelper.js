const ASSERT = require('assert')
const FS = require('fs')
const XCODE = require('xcode')
const COMMENT_KEY = /_comment$/


function nonComments(obj) {
    var keys = Object.keys(obj),
        newObj = {}, i = 0;

    for (i; i < keys.length; i++) {
        if (!COMMENT_KEY.test(keys[i])) {
            newObj[keys[i]] = obj[keys[i]];
        }
    }

    return newObj;
}


class PBXProjectHelper {
    constructor({ pbxprojPath }){
        this.pbxprojPath = pbxprojPath
        ASSERT.ok(this.pbxprojPath,"PBXProjectHelper : 必须传递pbxprojPath")
        ASSERT.ok(FS.existsSync(pbxprojPath),`PBXProjectHelper : ${pbxprojPath} 文件不存在`)
        this.pbxProject = new XCODE.project(this.pbxprojPath)
        
    }

    /** 获取描述 */
    async getConfigurationDescriptionList(){
        let configurationList = this.getConfigurationList()
        let configurationDescriptionList = []
        for (const configurationId in this.configurationList) {
            let configuration = {
                'uuid': configurationId,
                'name': this.configurationList[configurationId].name
            }
            configurationDescriptionList.push(configuration)
        }
        return configurationDescriptionList
    }

    /** 获取所有的配置 */
    getConfigurationList(){
        return nonComments(this.pbxProject.pbxXCBuildConfigurationSection())
    }
    /* 解析 */
    startParse(){
        return new Promise((resolve,reject)=>{
                if(this.parsed){
                    return resolve()
                }
                this.parsed = true
                this.pbxProject.parseSync()
                resolve()
        })
    }
    /* 获取所有的target */
    getTargets(){
        return nonComments(this.pbxProject.pbxNativeTargetSection())
    }
    
    /** 获取root project 对象 */
    getProject(){
        return nonComments(this.pbxProject.pbxProjectSection())
    }
    
    
}

module.exports = PBXProjectHelper
