import {
  Award,
  BrainCircuit,
  Bug,
  Code,
  Gem,
  Handshake,
  LayoutDashboard,
  Package,
  Palette,
  Rocket,
  Server,
  Star,
  Trophy,
  Users,
  Workflow,
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
  "layout-dashboard": LayoutDashboard,
  "pen-tool": Palette,
  workflow: Workflow,
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
