import { MinecraftServer } from 'minecraft-server-util';

export async function getMinecraftStatus(host: string, port: number) {
    try {
        const status = await MinecraftServer.status(host, port);
        return {
            online: true,
            players: status.players.online,
            maxPlayers: status.players.max,
            version: status.version.name,
            motd: status.motd.clean,
        };
    } catch (error) {
        return {
            online: false,
            error: error.message,
        };
    }
}