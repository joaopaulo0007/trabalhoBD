import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; 
const dbName = 'trabalho_bd'; 

let client: MongoClient;

export async function connect_mongoDB() {
   
        client = await MongoClient.connect(uri);


        const db = client.db(dbName);

        console.log('Conectado ao banco de dados');

        return db;
 
        
}

export function disconnect() {
    if (client) {
        client.close();
        console.log('Conexão com o banco de dados fechada');
    }
}
