// Create fake content for testing.

const fs = require('fs');
const rimraf = require('rimraf');
const faker = require('faker');

function createPeople(count) {
  console.log('Creating people...');
  for (let i = 0; i < count; i++) {
    //const person = faker.helpers.createCard(); // random contact card containing many properties
    //console.log(person);
    const person = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      job: faker.name.jobTitle(),
      avatar: faker.image.avatar(),
      bio: faker.lorem.paragraph(),
    };

    const slug = person.firstName + '-' + person.lastName;
    const filename = './content/people/' + faker.helpers.slugify(slug).toLowerCase() + '.md';

    let content = '';

    content += '---\n';
    content += 'firstName: ' + person.firstName + '\n';
    content += 'lastName: ' + person.lastName + '\n';
    content += 'email: ' + person.email + '\n';
    content += 'phone: ' + person.phone + '\n';
    content += 'job: ' + person.job + '\n';
    content += 'avatar: ' + faker.image.avatar() + '\n';
    content += '---\n';
    content += person.bio + '\n';

    fs.appendFile(filename, content, function (err) {
      if (err) throw err;
    }); 
  }
  console.log(count + ' people created');
}

function createCompanies(count) {
  console.log('Creating companies...');
  for (let i = 0; i < count; i++) {

    const company = {
      name: faker.company.companyName(),
      description: faker.company.catchPhrase(),
      city: faker.address.city(),
      body: faker.lorem.paragraph(),
    };

    //console.log(company);

    const filename = './content/companies/' + faker.helpers.slugify(company.name).toLowerCase() + '.md';

    let content = '';

    content += '---\n';
    content += 'name: ' + company.name + '\n';
    content += 'description: ' + company.description + '\n';
    content += 'city: ' + company.city + '\n';
    content += '---\n';
    content += company.body + '\n';

    fs.appendFile(filename, content, function (err) {
      if (err) throw err;
    }); 
  }
  console.log(count + ' companies created');
}


// Clear content directory, then create new content.

rimraf('./content/companies/*', (error) => {
  if (error) {
    throw error;
  } else {
    createCompanies(10);
  }
});

rimraf('./content/people/*', (error) => {
  if (error) {
    throw error;
  } else {
    createPeople(30);
  }
});
