import UserRepository from '../../../../src/services/iam/lib/repositories/UserRepository';
import UserRepositoryInMemory from '../../../../src/services/iam/lib/storage/UserRepositoryInMemory';
import CreateOrLogin from '../../../../src/services/iam/lib/use_cases/CreateOrLogin';

const userRepository = new UserRepository(new UserRepositoryInMemory());

describe('Test the use cases', () => {
  test('CreateOrLogin - ok', async () => {
    const firstName = 'A';
    const lastName = 'Test';
    const email = 'A.Test@gmail.com';
    const password = '2345678';

    const user = await CreateOrLogin(firstName, lastName, email, password, {
      userRepository,
    });

    expect(user.lastName).toEqual('Test');
  });
});
