import Points from "@/assets/placeholders/points.png";

export const config: Config = {
  // Removing one or all of these socials will remove them from the page
  socials: {
    twitter: "https://twitter.com/cmuba_th",
    homepage: "https://arcadia.cmuba.org",
  },

  defaultAsset: {
    name: "Points",
    image: Points,
  },

  ourStory: {
    title: "Points: Yet Another Points in Game and Business",
    description: "Triple Revolution for Your Consumption, Your Business. Limited On-chain Points for your consumption, your business.",
    socialLink: "https://arcadia.cmuba.org/business",
  },
};

export interface Config {
  socials?: {
    twitter?: string;
    discord?: string;
    homepage?: string;
  };

  defaultAsset?: {
    name: string;
    image: string;
  };

  ourStory?: {
    title: string;
    subTitle?: string;
    description: string;
    socialLink: string;
  };
}
