import RangeCharacter from "./RangeCharacters.js";

class Daemon extends RangeCharacter {
	constructor (name) {
		super(name, "Daemon");
		this.attack = 25;
		this.defence = 25;
	}
}

export default Daemon;