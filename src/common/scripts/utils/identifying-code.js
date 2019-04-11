/**
 * 生成二位码类
 * @author 周亮
 * @createDate 2018-04-10
 */
class IdentifyingCode {

	constructor () {
		this.codesArray = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
		]
		this.codesLength = 4
		this.toCheckCodes = ''
	}

	_getCodes () {
		let codesStr = ''
		for (var i = 0; i < this.codesLength; i++) {
			var charIndex = Math.floor(Math.random() * 36)
			codesStr += this.codesArray[charIndex]
		}
		return codesStr
	}

	_randomNum (min, max) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	_randomColor (min, max) {
		let r = this._randomNum(min, max)
		let g = this._randomNum(min, max)
		let b = this._randomNum(min, max)
		return "rgb(" + r + "," + g + "," + b + ")"
	}

	/**
	 *
	 * @param codes 待校验的字符串
	 * @notice 没有生成二维码之前不要调用这个方法
	 * @returns {*}
	 */
	checkCode (codes) {
		let is = false
		let toCheckCode = codes.toUpperCase()
		if (this.toCheckCodes && this.toCheckCodes === toCheckCode) {
			is = true
		}
		return is
	}

	/**
	 * 生成二维码方法
	 * @param options { canvasId: 画布元素id, txt: 验证码内容（没有内容会默认生成一个长度为四的字符串）, height: 画布高度, width: 画布宽度 }
	 */
	writeAuthCode (options) {
		if (!options.hasOwnProperty('txt') || !options.txt) {
			options.txt = this._getCodes()
			this.toCheckCodes = options.txt
		}
		console.log(options)
		let canvas = document.getElementById(options.canvasId)
		canvas.width= options.width || 300
		canvas.height= options.height || 150
		let ctx = canvas.getContext('2d')                                                                              // 创建一个 canvas 对象
		ctx.textBaseline = "middle"
		ctx.fillStyle = this._randomColor(180, 255)                                                                   // 这个范围的颜色作背景看起来清晰一些
		ctx.fillRect(0, 0, options.width, options.height)
		for (let i = 0; i < options.txt.length; i++) {
			let txt = options.txt.charAt(i)                                                                            // 让每个字不一样
			ctx.font = '20px SimHei'
			ctx.fillStyle = this._randomColor(50, 160)                                                                // 随机生成字体颜色
			ctx.shadowOffsetY = this._randomNum(-3, 3)
			ctx.shadowBlur = this._randomNum(-3, 3)
			ctx.shadowColor = "rgba(0, 0, 0, 0.3)"
			let x = options.width / (options.txt.length+1) * (i + 1)
			let y = options.height / 2
			let deg = this._randomNum(-30, 30)
			/** 设置旋转角度和坐标原点 */
			ctx.translate(x, y)
			ctx.rotate(deg * Math.PI / 180)
			ctx.fillText(txt, 0, 0)
			/** 恢复旋转角度和坐标原点 */
			ctx.rotate(-deg * Math.PI / 180)
			ctx.translate(-x, -y)
		}
		/** 1~4条随机干扰线随机出现 */
		for (let i = 0; i < this._randomNum(1,4); i++) {
			ctx.strokeStyle = this._randomColor(40, 180)
			ctx.beginPath()
			ctx.moveTo(this._randomNum(0, options.width), this._randomNum(0, options.height))
			ctx.lineTo(this._randomNum(0, options.width), this._randomNum(0, options.height))
			ctx.stroke();
		}
		/** 绘制干扰点 */
		for (let i = 0; i < options.width / 6; i++) {
			ctx.fillStyle = this._randomColor(0, 255)
			ctx.beginPath()
			ctx.arc(this._randomNum(0, options.width), this._randomNum(0, options.height), 1, 0, 2 * Math.PI)
			ctx.fill()
		}
	}

}

export default IdentifyingCode
