import { Message } from 'discord.js-selfbot-v13';
import { login } from './src/login';

const prefix = '.';

(async () => {
    const client = await login();

    client.on('messageCreate', async (message: Message) => {
        const text = message.content;
        const channel = message.channel;

        if (text === `${prefix}ping`) {
            const ping = client.ws.ping;
            await channel.send({ content: `ping : **${ping}ms**` });
        }
    });
})();
