import { makeServer } from './miragejs/server'

describe('App', () => {
  let server;

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  test('test test ', () => {
    const users = server.createList("user", 10);

    console.log(JSON.parse(JSON.stringify(users)));
  });
});