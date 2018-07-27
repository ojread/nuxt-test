// Create fake content for testing.

const fs = require('fs');
const rimraf = require('rimraf');
const faker = require('faker');

async function emptyOutputDirs() {
  // Delete all files in the output dirs.
  console.log('emptyOutputDirs');
  return await rimraf('./content/people/*', (error) => { if (error) console.error(error); });
}

function createPeople(count) {
  console.log('Creating people...');
  for (let i = 0; i < count; i++) {
    const person = faker.helpers.createCard(); // random contact card containing many properties
    //console.log(person);

    const filename = './content/people/' + faker.helpers.slugify(person.name).toLowerCase() + '.md';

    let content = '';

    content += '---\n';
    content += 'name: ' + person.name + '\n';
    content += 'email: ' + person.email + '\n';
    content += 'phone: ' + person.phone + '\n';
    content += '---\n';
    content += 'Body... \n';

    fs.appendFile(filename, content, function (err) {
      if (err) throw err;
      //console.log('Saved!');
    }); 
  }
  console.log(count + ' people created');
}

//emptyOutputDirs()
  //.then(createPeople(5));

rimraf('./content/people/*', (error) => {
  if (error) {
    throw error;
  } else {
    createPeople(10);
  }
});
