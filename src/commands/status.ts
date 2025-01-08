export const checkStatus = async (interaction) => {
    const { getMinecraftStatus } = require('../utils/minecraftStatus');

    try {
        const status = await getMinecraftStatus('Minecraft server IP', 'port');
        await interaction.reply(`Server Status: ${status.online ? 'Online' : 'Offline'}\nPlayer Count: ${status.players.online}/${status.players.max}`);
    } catch (error) {
        console.error('Error fetching server status:', error);
        await interaction.reply('Failed to retrieve server status.');
    }
};
