class ArrayBufferConverter {
	constructor (buffer) {
		this.load(buffer)
	}

	load(buffer) {
		this.buffer = buffer;
	}

	toString() {
		let str = '';
		const array = new Uint16Array(this.buffer);
		for (let i = 0; i < array.length; i++) {
			str += String.fromCharCode(array[i])
		}
		return str;
	}
}


export default ArrayBufferConverter;