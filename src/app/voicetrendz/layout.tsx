

import LayoutWrapper from "@/components/layout/LayoutWrapper";

export const metadata = {
  title: "VoiceTrendz | Music Blog",
  description: "Latest songs, artists, and news from VoiceTrendz",
};

export default function VoiceTrendzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
