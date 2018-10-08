const PATH = require('path')
const XcodeBuildSettingsMergeManager = require('../index')

const ibu = PATH.join(__dirname,'..','pbxproj','ibu-project.pbxproj')
const main = PATH.join(__dirname,'..','pbxproj','main-project.pbxproj')

const manager = new XcodeBuildSettingsMergeManager({ src:ibu,dst:main })
manager.showBuildSettings()