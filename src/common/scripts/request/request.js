/**
 * 请求层的封装类
 * @author 周亮
 * @createDate 2019-04-04
 * @notice 我本地用了 nginx 做的代理，这里并没有跨域处理
 */

import axios from 'axios'

class Request {

	constructor () {
		this.config = {
			baseURL: 'http://localhost/apis/'
		}
		this.baseURL = 'http://localhost/apis/'
	}

	get (url, options) {
		let data = options.data
		let requestURL = url
		if (data) {
			requestURL = requestURL + '?'
			for (let key in data) {
				requestURL = requestURL + key + '=' + data[key] + '&'
			}
			requestURL = requestURL.substr(0, requestURL.length - 1)
		}
		return axios.get(requestURL, this.config)
	}

	post (url, options) {
		let data = options.data
		return axios.post(url, data, this.config)
	}

	put (url, options) {
		let data = options.data
		let requestURL = this.baseURL + url
		return axios.put(requestURL, data)
	}

	delete (url, options) {
		let data = options.data
		let requestURL = this.baseURL + url
		return axios.delete(requestURL, data)
	}

}

export default Request
