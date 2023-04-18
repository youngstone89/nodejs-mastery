class GameReader {
	constructor(input) {
		this.input = input;
	}

	readDisc() {
		console.log('Now playing: ', this.input);
	}

	changeDisc(input) {
		this.input = input;
		this.readDisc();
	}
}

class NSSConsole {
	constructor(gameReader) {
		this.gameReader = gameReader;
	}

	play() {
		this.gameReader.readDisc();
	}

	playAnotherTitle(input) {
		this.gameReader.changeDisc(input);
	}
}

const gameReader = new GameReader('TurboCars Racer');
const nssConsole = new NSSConsole(gameReader);

nssConsole.play();
nssConsole.playAnotherTitle('TurboCars Racer 2');
