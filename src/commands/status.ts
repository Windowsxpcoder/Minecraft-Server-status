export const checkStatus = async (interaction) => {
    const { getMinecraftStatus } = require('../utils/minecraftStatus');

    try {
        const status = await getMinecraftStatus('wings2.mrserver.ddnss.de', 25612);
        await interaction.reply(`Server Status: ${status.online ? 'Online' : 'Offline'}\nPlayer Count: ${status.players.online}/${status.players.max}`);
    } catch (error) {
        console.error('Error fetching server status:', error);
        await interaction.reply('Failed to retrieve server status.');
    }
};
