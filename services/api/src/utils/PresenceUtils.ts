import { ActivityType, GuildMember, Presence } from "discord.js";
import { type DiscordPresence } from "@aiden/types";
import { formatAssets, formatTitle } from "./FormatUtils";
import { app, client } from "..";

export async function sendPresence(guildMember: GuildMember, newPresence?: Presence | null, ws?: any) {
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
            for (const activity of newPresence.activities) {
                if (activity.name !== "Custom Status") {
                    presenceObject.activities.push({
                        applicationId: activity.applicationId,
                        assets: await formatAssets(activity),
                        details: activity.details,
                        name: activity.name,
                        title: formatTitle(activity),
                        state: activity.state,
                        type: ActivityType[activity.type],
                        timestamps: activity.timestamps ? { start: activity.timestamps.start, end: activity.timestamps?.end } : null,
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

    if (ws) {
        ws.send(JSON.stringify(presenceObject))
    } else {
        app.server?.publish(guildMember.id, JSON.stringify(presenceObject));
    }
}