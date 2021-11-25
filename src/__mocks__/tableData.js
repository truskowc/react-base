import Faker from 'faker';

const numRecords = 20;
const records = [];

for (let i = 0; i < numRecords; i++) {
  records.push({
    id: Faker.datatype.uuid(),
    email: Faker.internet.email(),
    password: Faker.internet.password(),
    fname: Faker.name.firstName(),
    lname: Faker.name.lastName(),
    created: Faker.date.past(),
    updated: Faker.date.past(),
  });
}

export default records;
