const functions = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Nick' };
    user.lastName = 'Gee';
    return user;
  },
};

module.exports = functions;
