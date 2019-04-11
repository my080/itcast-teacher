
import Request from '../../../common/scripts/request/request.js'
import SessionStorage from '../../../common/scripts/storage/promise/session-storage.js'

class LoginService {

	constructor () {
		this.request = new Request()
		this.storage = new SessionStorage()
	}

	logout () {

	}

	// listZonesByCity (param) {
	//
	// }
	//
	// listSchoolsByZone (param) {
	//
	// }
	//
	// listCities (param) {
	//
	// }



	sendEmail (param) {
		let data = {
			data: param
		}
		return this.request.post('send-email', data)
	}

	getUserByCode (param) {
		let data = {
			data: param
		}
		return this.request.get('consumers', data)
	}

	updateCode (param) {
		let data = {
			data: param
		}
		return this.request.post('update-code', data)
	}

	initConsumer (param) {
		let data = {
			data: param
		}
		return this.request.post('init', data)
	}

	listPeriods () {
		return this.request.get('periods', {})
	}

	listSubjects (param) {
		let paramObj = {
			data: param
		}
		return this.request.get('subjects', paramObj)
	}

	register () {
		// let that = this
		// let p = new Promise(function (resolve, reject) {
		// 	that.request.post('register')
		// })
		// return p
	}

	login (param) {
		// let that = this
		// let success = param.success
		// let error = param.error
		let sendParam = {
			name: param.name,
			password: param.password
		}
		this.request.get('questions/count', sendParam)
		//.then(function (data) {
		// 	console.log(data)
		// 	that.storage.set('userInfo', data)
		// 	success(data)
		// 	// if (data.code === 200) {} else {
		// 	// 	error('请求失败！')
		// 	// }
		// }).catch(function (err) {
		// 	console.log(err)
		// 	error(err)
		// })
	}

}

export default LoginService
