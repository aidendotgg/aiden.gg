export type PresenceActivity = {
  applicationId: string | null;
  assets: {
    largeImage: string;
    largeText: string | null;
    smallImage: string | null;
    smallText: string | null;
  };
  name: string;
  title: string;
  details: string | null;
  state: string | null;
  timestamps: {
    start: Date | null;
    end: Date | null;
  } | null;
  type: string;
}