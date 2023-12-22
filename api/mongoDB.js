const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://kunalsingh2421:KLXzUjMZFwetPSsx@cluster0.wehnhdp.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        await dataBaseList(client);
    } catch (error) {
        console.error(error);
    }
    finally{
        await client.close();
    }
    
}

main().catch(console.error);

async function dataBaseList(res) {
    const viewDataBaseList = await res.db().admin().listDatabases();

    viewDataBaseList.databases.forEach(element => {
        console.log(`- ${element.name}`); 
    });
}