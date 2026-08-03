import {
  Award,
  Code,
  FileText,
  Gem,
  Handshake,
  Palette,
  PenTool,
  Rocket,
  SearchCheck,
  Star,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  award: Award,
  code: Code,
  "file-text": FileText,
  gem: Gem,
  handshake: Handshake,
  palette: Palette,
  "pen-tool": PenTool,
  rocket: Rocket,
  "search-check": SearchCheck,
  star: Star,
  "trending-up": TrendingUp,
  trophy: Trophy,
  users: Users,
  zap: Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Lucide = icons[name] ?? Zap;
  return <Lucide className={className} />;
}
