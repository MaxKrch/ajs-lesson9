import getBuffer from "../getBuffer.js";
import ArrayBufferConverter from "../ArrayBufferConverter.js";

test("chek toString", () => {
	const buffer = getBuffer();
	const testArrayBufferConverter = new ArrayBufferConverter(buffer);
	const received = testArrayBufferConverter.toString();
	const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'

	expect(received).toBe(expected);
})