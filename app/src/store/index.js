import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default ({preState}) => {
    return new Vuex.Store({
        getters,
        mutations,
        actions,
        state:preState || {},
        strict: true

    })
}