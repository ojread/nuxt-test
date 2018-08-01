// Create fake content for testing.

const fs = require('fs');
const rimraf = require('rimraf');
const faker = require('faker');

// Promisify functions so we can await their results.

// Clear the given dir of all files.
const emptyDir = (dir) => {
  return new Promise((resolve, reject) => {
    rimraf(dir, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

// Write content to the filename.
const writeFile = (filename, content) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, content, function (err) {
      if (err) reject(err);
      else resolve();
    }); 
  });
};

// Convert object to Markdown text with front matter and body.
function objToMarkdown(obj) {
  let md = '---' + '\n';
  Object.keys(obj).forEach((key) => {
    if (key !== 'body') {
      md += key + ': ' + obj[key] + '\n';
    }
  });
  md += '---' + '\n';
  if (obj.body) {
    md += obj.body + '\n';
  }
  return md;
}

// Create fake content.
const createCompany  = () => {
  return new Promise((resolve, reject) => {
    const company = {
      name: faker.company.companyName(),
      description: faker.company.catchPhrase(),
      city: faker.address.city(),
      body: faker.lorem.paragraph(),
    };
    company.slug = faker.helpers.slugify(company.name).toLowerCase()
    const filename = './content/companies/' + company.slug + '.md';
  
    const markdown = objToMarkdown(company);
    //console.log(markdown);

    writeFile(filename, markdown)
      .then(resolve(), reject());
  });
}


const createPerson = () => {
  return new Promise((resolve, reject) => {
    // Pick a company for this person.
    fs.readdir('./content/companies', (err, files) => {
      const companyIndex = Math.floor( Math.random() * files.length );
      const companyFilename = files[companyIndex];
      const companySlug = companyFilename.split('.')[0];

      const person = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        job: faker.name.jobTitle(),
        avatar: faker.image.avatar(),
        companySlug: companySlug,
        body: faker.lorem.paragraph(),
      };
      person.slug = faker.helpers.slugify( person.firstName + '-' + person.lastName ).toLowerCase();
      const filename = './content/people/' + person.slug + '.md';
    
      const markdown = objToMarkdown(person);
      //console.log(markdown);
  
      writeFile(filename, markdown)
        .then(resolve(), reject());
    });    
  });
}




const peopleCount = 30;
const companyCount = 10;

// Main function. Await promises to ensure correct order.
async function createFixtures() {
  await emptyDir('./content/companies/*');
  for (let i = 0; i < companyCount; i++) {
    await createCompany()
  }
  console.log(`Created ${companyCount} companies`);

  await emptyDir('./content/people/*');
  for (let i = 0; i < peopleCount; i++) {
    await createPerson()
  }
  console.log(`Created ${peopleCount} people`);
}

createFixtures();


