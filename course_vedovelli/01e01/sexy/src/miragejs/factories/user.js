/* eslint-disable import/no-anonymous-default-export */
// import { randomNumber } from './utils';

/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import faker from 'faker';

export default {
  user: Factory.extend({
    name() {
      return faker.name.findName();
    },
    email() {
      return faker.internet.email();
    },
    role() {
      return faker.random.arrayElement(['admin', 'user']);
    },
    department() {
      return faker.random.arrayElement(['Sales', 'Marketing', 'IT']);
    },
    mobile() {
      return faker.phone.phoneNumber();
    },
    address: {
      street() {
        return faker.address.streetAddress();
      },
      city() {
        return faker.address.city();
      },
      state() {
        return faker.address.state();
      },
      country() {
        return faker.address.country();
      },
      zip() {
        return faker.address.zipCode();
      }
    }
  }),
};
