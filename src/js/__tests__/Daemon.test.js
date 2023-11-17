import Character from "../characters/Character.js";
import Daemon from "../characters/Daemon.js";

test("New Character with unCorrect type", () => {
	const error = "Некорректный тип персонажа"
	
	const testFunc = () => {
		new Character("Maks", "Warrior");
	}

	expect(testFunc).toThrow(error);
});


test("New Character with unCorrect name", () => {
	const error = "Некорректное имя"
	
	const testFunc = () => {
		new Daemon(true);
	}

	expect(testFunc).toThrow(error);
});



test("New Character with long name", () => {
	const error = "Имя должно быть от 2 до 10 символов"
	
	const testFunc = () => {
		new Daemon("Maksimillian");
	}

	expect(testFunc).toThrow(error);
});



test("New Character with short name", () => {
	const error = "Имя должно быть от 2 до 10 символов"
	
	const testFunc = () => {
		new Daemon("I");
	}

	expect(testFunc).toThrow(error);
});



test("LvlUp dead character", () => {
	const error = "Нельзя повысить левел умершего"
	
	const testFunc = () => {
		const andrew = new Daemon("Andrew");
		andrew.health = 0;
		andrew.levelUp();
	}

	expect(testFunc).toThrow(error);
});



test("Correct lvlUp", () => {
	const maks = new Daemon("Maks");
	maks.levelUp();

	const expected = [100, 2, 30, 30]
	const received = [maks.health, maks.level, maks.attack, maks.defence]

	expect(received).toEqual(expected)
})


