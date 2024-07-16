#!/usr/bin/env node

import askForName from '../../src/cli.js';
import brainProgression from '../../src/brain-progression-game.js';

brainProgression(askForName());
