module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
// module.exports = [
//   'strapi::logger',
//   'strapi::errors',
//   {
//     resolve: 'strapi::cors',
//     config: {
//       origin: '*',
//     },
//   },
//   'strapi::security',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];