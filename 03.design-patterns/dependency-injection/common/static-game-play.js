// The GameReader class
class GameReader {
	constructor(input) {
		this.input = input;
	}
	readDisc() {
		console.log('Now playing: ', this.input);
	}
}

// The NoSleepStation Console class
class NSSConsole {
	gameReader = new GameReader('TurboCars Racer');

	play() {
		this.gameReader.readDisc();
	}
}

// use the classes above to play
const nssConsole = new NSSConsole();
nssConsole.play();
