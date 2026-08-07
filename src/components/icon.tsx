import {
  Award,
  BrainCircuit,
  Bug,
  Code,
  FileText,
  Gem,
  Handshake,
  Package,
  Palette,
  PenTool,
  Rocket,
  SearchCheck,
  Server,
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
  "file-text": Server,
  gem: Gem,
  handshake: Handshake,
  package: Package,
  "pen-tool": Palette,
  rocket: Rocket,
  "brainCircuit": BrainCircuit,
  star: Star,
  "bug": Bug,
  trophy: Trophy,
  users: Users,
  zap: Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Lucide = icons[name] ?? Zap;
  return <Lucide className={className} />;
}
