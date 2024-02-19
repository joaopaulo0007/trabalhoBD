import { connect_mongoDB } from "./banco_config";

async function main() {
    const db = await connect_mongoDB();
    
}

main().catch(console.error);
