import { Client, GatewayIntentBits } from 'discord.js';
import { checkStatus } from './commands/status';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.content.startsWith('!status')) {
        await checkStatus(message);
    }
});

client.login(MTMyNjI0MDM5NTQxNTM5MjQ0Nw.GSEBOW.Xg8KncWJfuEVYB-rj_BVk6anngZAOU0_X-X3LQ);
