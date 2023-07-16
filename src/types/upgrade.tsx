type FactionName = "wl" | "bm" | "legion" | "redacted";

export type Upgrade = {
  name: string;
  desc: string;
  type: string;
  isCrown: boolean;
  rep: Record<string | FactionName, number>;
  items: string[];
  need: number[];
  current: number[];
};