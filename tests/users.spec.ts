import request from 'supertest';
import userRepository from '../app/services/users';
import app from '../app';

describe('users', () => {
  beforeEach(() =>
    userRepository.createMany([
      { firstName: 'u1', lastName: 'u1', email: 'u1@wolox.com', password: 'u1111111' },
      { firstName: 'u2', lastName: 'u2', email: 'u2@wolox.com', password: 'u2222222' }
    ])
  );
  describe('/users GET', () => {
    it('should return all users', (done: jest.DoneCallback) => {
      request(app)
        .get('/users')
        .expect(200)
        .then((res: request.Response) => {
          expect(res.body.length).toBe(2);
          done();
        });
    });
  });
  describe('/users POST', () => {
    it('should create an user', (done: jest.DoneCallback) => {
      request(app)
        .post('/users')
        .send({ firstName: 'u3', lastName: 'u3', email: 'u3@wolox.com', password: 'u3333333' })
        .expect(201)
        .then(async () => {
          const user = await userRepository.findUser({ firstName: 'u3' });
          expect(user).not.toBeNull();
          done();
        });
    });
    describe('/users/:id GET', () => {
      it('should return user with id 1', (done: jest.DoneCallback) => {
        request(app)
          .get('/users/1')
          .expect(200)
          .then((res: request.Response) => {
            expect(res.body).toHaveProperty('firstName');
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('lastName');
            expect(res.body).toHaveProperty('email');
            expect(res.body).toHaveProperty('password');
            done();
          });
      });
      it('should return error for user with id 5', (done: jest.DoneCallback) => {
        request(app)
          .get('/users/5')
          .expect(404)
          .then((res: request.Response) => {
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('internal_code');
            done();
          });
      });
    });
  });
});
