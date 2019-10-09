//PUERTO
process.env.PORT = process.env.PORT || 3000;
//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//bd
let urlBD;
if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD = process.env.MONGO_URL;
}
process.env.URLDB = urlBD;
//fecha de expiracion del token 
//60s*60m*24h*30d
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//seed
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';
//google client id 
process.env.CLIENT_ID = process.env.CLIENT_ID || '1088248397088-5deq1fjkson51pqsqpvv5a6piopn9bjt.apps.googleusercontent.com';