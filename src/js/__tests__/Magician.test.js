import Magician from "../characters/Magician.js";


test("damage", () => {
	const nastia = new Magician("Nastia");

	const expected = nastia.health - 10 * (1 - 40 / 100);
	
	nastia.damage(10);

	const received = nastia.health;

	expect(received).toBe(expected);
})



test("damage with kill", () => {
	const nastia = new Magician("Nastia");

	const expected = 0
	
	nastia.damage(1000);

	const received = nastia.health;

	expect(received).toBe(expected);

})

test("set stoned",() => {
	const nastia = new Magician("Nastia");
	nastia.setStoned = true;

	const expected = true;
	const received = nastia.stoned;

	expect(received).toBe(expected);

})

test("get stoned", () => {
	const nastia = new Magician("Nastia");
	nastia.setStoned = true;

	const expected = true;
	const received = nastia.getStoned;

	expect(received).toBe(expected);
})

test("set attack", () => {
	const nastia = new Magician("Nastia");
	nastia.setAttack = 5;
	const expected = 5;
	const received = nastia.attack;

	expect(received).toBe(expected);
})

test("set 0 attack", () => {
	const nastia = new Magician("Nastia");
	nastia.setAttack = 11;
	const expected = 0;
	const received = nastia.attack;

	expect(received).toBe(expected);
})

test("get atatck", () => {
	const nastia = new Magician("Nastia");
	nastia.setStoned = true;
	nastia.setAttack = 2;

	const expected = 5;
	const received = nastia.getAttack;

	expect(received).toBe(expected);
})