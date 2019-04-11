
import Request from '../../../common/scripts/request/request.js'
import SessionStorage from '../../../common/scripts/storage/promise/session-storage.js'

class HomeService {

	constructor () {
		this.request = new Request()
		this.storage = new SessionStorage()
	}

}

export default HomeService
