// config.mjs
import { decorate, injectable, inject, Container } from 'inversify';
import GameReader from './game-reader.mjs';
import NSSConsole from './nssconsole.mjs';

// Declare our dependencies' type identifiers
export const TYPES = {
	GameReader: 'GameReader',
	NSSConsole: 'NSSConsole',
};

// Declare injectables
decorate(injectable(), GameReader);
decorate(injectable(), NSSConsole);

// Declare the GameReader class as the first dependency of NSSConsole
decorate(inject(TYPES.GameReader), NSSConsole, 0);

// Declare bindings
const container = new Container();
container.bind(TYPES.NSSConsole).to(NSSConsole);
container.bind(TYPES.GameReader).to(GameReader);

export { container };
