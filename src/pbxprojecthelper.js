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
    /** 获取所有配置 */
    getConfigurationList(){
        return new Promise((resolve,reject) => {
            let configurationList = nonComments(this.pbxProject.pbxXCBuildConfigurationSection())
            resolve(configurationList)
        })
    }
}

module.exports = PBXProjectHelper
