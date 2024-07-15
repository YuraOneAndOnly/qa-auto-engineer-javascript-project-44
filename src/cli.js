import readlineSync from "readline-sync";

export default () => {
  try {
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello, ${name}!`);
    return name;
  } catch (err) {
    console.error(err);
    process.exit(1);
    return '';
  }
};
