import * as mysql from 'hapi-plugin-mysql';

const dbcon = {
      plugin: mysql,
      options: {
         host: 'localhost',
         user: 'root',
         password: '123456789'
      }
};

export default dbcon;
