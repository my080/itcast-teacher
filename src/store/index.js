'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import state from './state'

import loginStore from '../pages/login/store/store.js'
import homeStore from '../pages/home/store/store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        login: loginStore,
        home: homeStore
    }
})

export default store

