#!/usr/bin/env node

import askForName from '../../src/cli.js';
import brainCalc from '../../src/brain-calc-game.js';

brainCalc(askForName());
