import Elysia from "elysia";
import { client } from "..";
import { sendPresence } from "../utils/PresenceUtils";

export const PresenceRouter = new Elysia({ prefix: "/presence" })
    .ws('/', {
        async open(ws) {
            ws.subscribe(process.env.USER_ID!)
            let guildMember = client.guilds.cache.get(process.env.GUILD_ID!)?.members?.cache?.get(process.env.USER_ID!)

            if (guildMember) sendPresence(guildMember, guildMember.presence, ws)
        },
        async message(ws, message) {
            if (message === "ping") {
                ws.send("pong")
            }
        },
    })