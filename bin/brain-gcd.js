#!/usr/bin/env node

import askForName from '../src/cli.js';
import brainGCD from '../src/brain-gcd-game.js';

brainGCD(askForName());
