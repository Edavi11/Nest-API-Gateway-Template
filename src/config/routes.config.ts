export const routes = [
    {
      path: '/users',
      methods: ['GET'],
      target: 'http://localhost:3001/users',
      auth: true,
      rateLimit: true,
    },
    {
      path: '/orders',
      methods: ['GET', 'POST'],
      target: 'http://localhost:3002/orders',
      auth: false,
      rateLimit: false,
    },
  ];
  