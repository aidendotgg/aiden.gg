import { ActivityType, Activity } from "discord.js";
import type { PresenceActivity } from "@aiden/types";

export async function formatAssets(activity: Activity): Promise<PresenceActivity['assets']> {
    if (activity.assets) {
        let smallImage = null
        if (activity.assets.smallImage) {
            if (activity.assets.smallImage.startsWith("mp:external")) {
                smallImage = `https://${activity.assets.smallImage.split("https/")[1]}`
            } else {
                smallImage = `https://cdn.discordapp.com/app-assets/${activity.applicationId}/${activity.assets.smallImage}.png?size=4096`
            }
        }

        let largeImage = `https://cdn.discordapp.com/app-assets/${activity.applicationId}/${activity.assets.largeImage}.png?size=4096`
        if (activity.assets.largeImage) {
            switch (true) {
                case activity.assets.largeImage.startsWith("spotify:"):
                    largeImage = `https://i.scdn.co/image/${activity.assets.largeImage.replace("spotify:", "")}`
                    break;
                case activity.assets.largeImage.startsWith("mp:external"):
                    largeImage = `https://${activity.assets.largeImage.split("https/")[1]}`
                    break;
                case activity.assets.largeImage.startsWith("youtube:"):
                    largeImage = `https://i.ytimg.com/vi/${activity.assets.largeImage.split("youtube:")[1]}/hqdefault_live.jpg`
                    break;
            }
        }

        return {
            smallImage,
            largeImage,
            smallText: activity.assets.smallText,
            largeText: activity.assets.largeText,
        }
    } else {
        if (!activity.applicationId) {
            return {
                smallText: null,
                smallImage: null,
                largeImage: 'https://r2.e-z.host/unknown_game.png',
                largeText: null,
            }
        } else {
            let gameData = (await fetch(`https://discord.com/api/v10/applications/${activity.applicationId}/rpc`)).json() as any;
            return {
                smallText: null,
                smallImage: null,
                largeImage: `${gameData ? `https://cdn.discordapp.com/app-icons/${activity.applicationId}/${gameData.icon}.webp?size=56&keep_aspect_ratio=false` : 'https://r2.e-z.host/unknown_game.png'}`,
                largeText: null,
            }
        }
    }
}

export function formatTitle(activity: Activity): string {
    switch (ActivityType[activity.type]) {
        case "Playing":
            return `Playing ${activity.name}`
        case "Listening":
            return `Listening to ${activity.name}`
        case "Watching":
            return `Watching ${activity.name}`
        case "Competing":
            return `Competing in ${activity.name}`
        case "Streaming":
            return `Streaming ${activity.name}`
        default:
            return activity.name
    }
}