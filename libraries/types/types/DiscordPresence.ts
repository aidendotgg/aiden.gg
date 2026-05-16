import type { PresenceActivity } from "./PresenceActivity";

export type DiscordPresence = {
    _id: string;
    tag: string;
    pfp: string;
    status: string;
    activities: PresenceActivity[];
}