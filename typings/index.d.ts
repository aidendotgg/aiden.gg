import type { ReactNode } from "react";

export interface Tech {
    title: string;
    icon: ReactNode;
    link: string;
}

export interface Presence {
    _id: string;
    tag: string;
    pfp: string;
    platform: ClientPresenceStatusData;
    status: string;
    activities: Activity[];
    badges: string[];
    customStatus: {
        name: string;
        createdTimestamp: number;
        emoji: string;
    };
}

interface Activity {
  applicationId: string;
  assets: {
    largeImage: string;
    largeText: string;
    smallImage: string;
    smallText: string;
  };
  details: string;
  emoji: string;
  name: string;
  state: string;
  title: string;
  timestamps: {
    start: Date;
    end: Date;
  };
  type: string;
}