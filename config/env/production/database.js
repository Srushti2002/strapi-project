// module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connection: {
//         host: env('PGHOST', '127.0.0.1'),
//         port: env.int('PGPORT', 5432),
//         database: env('PGDATABASE', 'strapi'),
//         user: env('PGUSER', 'strapi'),
//         password: env('PGPASSWORD', 'password'),
//         ssl: env.bool(true),
//       },
//       pool: { min: 0 }
//     },
//   });
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('viaduct.proxy.rlwy.net'), // Change 'PGHOST' to the actual environment variable provided by Railway for the host
      port: env.int('33607'), // Change 'PGPORT' to the actual environment variable provided by Railway for the port
      database: env('railway'), // Change 'PGDATABASE' to the actual environment variable provided by Railway for the database name
      user: env('postgres'), // Change 'PGUSER' to the actual environment variable provided by Railway for the username
      password: env('QxmmsPGYKAanZgylbSAXAmgTcfkNyvMt'), // Change 'PGPASSWORD' to the actual environment variable provided by Railway for the password
      ssl: env.bool('820', true), // Change 'PGSSL' to the actual environment variable provided by Railway for SSL, assuming it's enabled
    },
    pool: { min: 0 }
  },
});
