'use strict'

const loginStore = {
	state: {
		test: 'dfdfdf'
	},
	mutations: {
		setTest (state, data) {
			state.test = data
		}
	}
}

export default loginStore