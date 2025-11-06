import { Newspaper, Music, Mic, Megaphone, Home } from "lucide-react";

export interface SublinkItem {
  name: string;
  url?: string;
  enabled?: boolean;
  image?: string;
}

export interface SidebarItem {
  name: string;
  image?: string;
  url?: string;
   icon?: React.ComponentType<{ size?: number }> | null;
  enabled?: boolean;
  sublinks?: SublinkItem[];
}


export const sidebarData: SidebarItem[] = [
  {
    name: "Home",
    url: "/voicetrendz/home",
    icon: Home,
    sublinks: [],
  },
  {
    name: "Songs",
    image: "null",
    icon: Music,
    url: "/voicetrendz/songs",
    sublinks: [
      {
        name: "Music Videos",
        url: "/voicetrendz/songs/music-videos",
        enabled: true,
      },
      {
        name: "Lyrics",
        url: "/voicetrendz/songs/lyrics",
        enabled: true,
      },
    ],
  },
  {
    name: "Press Releases",
    image: "null",
    icon: Newspaper,
    url: "/voicetrendz/press-release",
    sublinks: [],
  },
  {
    name: "Artist",
    image: "null",
    icon: Mic,
    url: "/voicetrendz/artist",
    sublinks: [],
  },
  {
    name: "News",
    image: "null",
    icon: Megaphone,
    url: "/voicetrendz/news",
    sublinks: [
      {
        name: "Hot Stories",
        url: "/voicetrendz/news/hot-stories",
        enabled: true,
      },
      {
        name: "DE Latest",
        url: "/voicetrendz/news/de-latest",
        enabled: true,
      },
      {
        name: "Trending Topics",
        url: "/voicetrendz/news/trending-topics",
        enabled: true,
      },
    ],
  },
  {
    name: "Community Zone",
    url: "/voicetrendz/community-zone",
    enabled: true,
    sublinks: [
      {
        name: "Fan Poll",
        url: "/voicetrendz/community-zone/fan-poll",
        enabled: true,
      },
    ],
  },
  {
    name: "Advertise with Us",
    url: "/voicetrendz/advertise-with-us",
    enabled: true,
    sublinks: [],
  },
];
