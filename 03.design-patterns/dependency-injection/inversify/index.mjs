// index.mjs
// Import reflect-metadata as a polyfill
import 'reflect-metadata';
import { container, TYPES } from './config.mjs';

// Resolve dependencies
// Notice how we do not need to explicitly declare a GameReader instance anymore
const myConsole = container.get(TYPES.NSSConsole);

myConsole.play();
myConsole.playAnotherTitle('Some other game');
