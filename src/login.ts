import { Client } from 'discord.js-selfbot-v13';
import fs from 'fs';

export async function login(): Promise<Client> {
    const { token } = JSON.parse(fs.readFileSync('./libs/info.json', 'utf-8'));

    const client = new Client();
    await client.login(token).then(() => {
        console.clear();
        console.log('Login Success');
    });

    return client;
}
