import Character from "./Character.js";

class RangeCharacter extends Character {
	constructor(name, type) {
		super(name, type);
		this.stoned = false;
	}

	set setStoned(newState) {
		this.stoned = newState;
	}

	get getStoned() {
		return this.stoned; 
	}

	set setAttack(distance) {
		if(distance >= 10) {
			this.attack = 0;
			return;
		}

		const oldAttack = this.attack;
		const chekStoned = this.getStoned;
		let penalty;
		
		if(chekStoned) {
			penalty = Math.log2(distance) * 5;
			penalty = Math.round(penalty);

		} else {
			const penaltyFract = (10 * distance) / 100;
			penalty = oldAttack * penaltyFract;
			penalty = Math.round(penalty);
		}

		this.attack = oldAttack - penalty;
		
	}

	get getAttack() {
		return this.attack; 
	}

}


export default RangeCharacter;