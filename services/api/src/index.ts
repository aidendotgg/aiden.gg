import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { helmet } from "elysia-helmet";
import { PresenceRouter } from "./routes/PresenceRouter";
import { Client, GatewayIntentBits } from "discord.js";
import { sendPresence } from "./utils/PresenceUtils";

export const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences],
})

client.on("clientReady", (client) => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("presenceUpdate", async (oldPresence, newPresence) => {
    let guildMember = client.guilds.cache.get(process.env.GUILD_ID!)?.members?.cache?.get(process.env.USER_ID!)

    if (guildMember) sendPresence(guildMember, newPresence)
})

client.login(process.env.BOT_TOKEN)

export const app = new Elysia()
    .use(PresenceRouter)
    .get("/", () => {
        return {
            success: true,
        };
    })
    .onError(({ code }) => {
        if (code === "NOT_FOUND") {
            return "Route not found :(";
        }
    })
    .use(cors({
        origin: [process.env.FRONTEND_URL!, 'http://localhost:3070'],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }))
    .use(helmet({
        originAgentCluster: true,
        dnsPrefetchControl: true,
        permittedCrossDomainPolicies: true,
        hidePoweredBy: true,
    }))
    .listen(process.env.PORT!);

console.log(`Elysia is running at ${app.server?.hostname}:${app.server?.port}`)