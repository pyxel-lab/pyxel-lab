const fs = require('fs');
const path = require('path');
const {spaceName, paperNumbers} = require('./config.json');

const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/paper_programs_development',
});

const initialCode = fs.readFileSync(path.join(__dirname, 'initial-code.js'), 'utf8')

function getInitialCode (id) {
  return `// Program ${id}
` + initialCode
}

(async () => {
  // delete existing programs in space
  await knex('programs').where({spaceName}).delete()

  // create program with initial code for each paper
  await Promise.all(paperNumbers.map((number, index) => {
    const code = getInitialCode(index + 1)

    console.log(`create paper #${number}`)

    return knex('programs').insert({spaceName, number, originalCode: code, currentCode: code})
  }));

  console.log('done');
  process.exit(1)
})();
