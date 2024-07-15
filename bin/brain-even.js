#!/usr/bin/env node

import askForName from "../src/cli.js";
import brainEven from "../src/brain-even-game.js";

const name = askForName();
brainEven(name);
