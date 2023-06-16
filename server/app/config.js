const config = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.MONGODB_URI || '<access>',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
