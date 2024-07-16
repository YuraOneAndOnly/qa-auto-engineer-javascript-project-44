#!/usr/bin/env node

import askForName from '../src/cli.js';
import brainPrime from '../src/brain-prime-game.js';

brainPrime(askForName());
