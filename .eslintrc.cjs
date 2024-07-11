module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 15,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "warn"
    }
};
