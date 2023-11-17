import RangeCharacter from "./RangeCharacters.js";

class Magician extends RangeCharacter {
	constructor (name) {
		super(name, "Magician");
		this.attack = 10;
		this.defence = 40;
	}
}

export default Magician;