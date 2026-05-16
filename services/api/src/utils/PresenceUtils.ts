import { ActivityType, GuildMember, Presence } from "discord.js";
import { type DiscordPresence } from "@aiden/types";
import { formatAssets, formatTitle } from "./FormatUtils";
import { app, client } from "..";

export async function sendPresence(guildMember: GuildMember, newPresence?: Presence | null, ws?: any, local?: boolean) {
    if (!newPresence) newPresence = guildMember.presence

    let presenceObject: DiscordPresence;
    if (newPresence && newPresence.user) {
        presenceObject = {
            _id: guildMember.id,
            tag: guildMember.user.tag,
            pfp: guildMember.user.displayAvatarURL({ forceStatic: false }),
            status: newPresence.status,
            activities: [],
        }
        if (newPresence.activities.length > 0) {
            for (const presence of newPresence.activities) {
                if (presence.name !== "Custom Status") {
                    presenceObject.activities.push({
                        applicationId: presence.applicationId,
                        assets: await formatAssets(presence),
                        details: presence.details,
                        name: presence.name,
                        title: formatTitle(presence),
                        state: presence.state,
                        type: ActivityType[presence.type],
                        timestamps: presence.timestamps ? { start: presence.timestamps.start, end: presence.timestamps?.end } : null,
                    })
                }
            }
        }
    } else {
        presenceObject = {
            _id: guildMember.id,
            tag: guildMember.user.tag,
            pfp: guildMember.user.displayAvatarURL({ forceStatic: false }),
            status: "offline",
            activities: [],
        }
    }

    if (local && ws) {
        ws.send(JSON.stringify(presenceObject))
    } else {
        app.server?.publish(guildMember.id, JSON.stringify(presenceObject));
    }
}