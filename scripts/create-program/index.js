const fs = require('fs');
const path = require('path');
const {spaceName, paperNumbers} = require('./config.json');

const  DB_URL = process.env.DATABASE_URL;

if (!DB_URL) {
  console.log('Environement variable DATABASE_URL is not set please run `source scripts/init-environment.sh` first');
  process.exit(1);
}

const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL,
});

const defaultCode = fs.readFileSync(path.join(__dirname, 'default-code.js'), 'utf8')

function getInitialCode (id) {
  return `// Program ${id}
` + defaultCode
}

(async () => {

  try {
    const args = process.argv.slice(2);

    if (args.length !== 2) {
      console.log("usage: node create-program [spaceName] [number]");
      process.exit(1);
    }

    const [spaceName, number] = args

    const code = getInitialCode(number);


    await knex('programs').insert({spaceName, number, originalCode: code, currentCode: code})
    console.log(`created paper #${number}`)

    process.exit(1);

  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
