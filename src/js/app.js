import Daemon from "./characters/Daemon.js";
import Magician from "./characters/Magician.js";
import ArrayBufferConverter from "./ArrayBufferConverter.js";
import getBuffer from "./getBuffer.js";

const nastia = new Magician("Nastia");
const maks = new Daemon("Maks");

console.log(nastia, maks);

const buffer = getBuffer();
const arrayBufferConverter = new ArrayBufferConverter(buffer);

console.log(arrayBufferConverter.toString());
