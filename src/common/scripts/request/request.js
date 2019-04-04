
import axios from 'axios'

class Request {

	constructor () {
		this.baseURL = 'http://192.168.192.28/'
	}

	get (url, options) {
		let data = options.data
		let requestURL = this.baseURL + url
		if (data) {
			requestURL = requestURL + '?'
			for (let key in data) {
				requestURL = requestURL + key + '=' + data[key]
			}
			requestURL = requestURL.substr(0, requestURL.length - 1)
		}

		return axios.get(requestURL)
	}

	post (url, options) {
		let data = options.data
		let requestURL = this.baseURL + url
		return axios.post(requestURL, data)
	}

}

export default Request
