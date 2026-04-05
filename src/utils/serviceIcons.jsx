import {
  Award,
  BarChart3,
  Brain,
  Building2,
  ClipboardList,
  Cloud,
  Compass,
  Cpu,
  Gamepad2,
  Globe,
  LayoutTemplate,
  Layers,
  Monitor,
  Palette,
  Rocket,
  Smartphone,
  Smile,
  Sparkles,
  TrendingUp,
  Users,
  Video,
  LayoutDashboard,
} from 'lucide-react'

const map = {
  brain: Brain,
  sparkles: Sparkles,
  gamepad2: Gamepad2,
  clipboardList: ClipboardList,
  layoutTemplate: LayoutTemplate,
  award: Award,
  trendingUp: TrendingUp,
  users: Users,
  building2: Building2,
  compass: Compass,
  smile: Smile,
  rocket: Rocket,
  monitor: Monitor,
  smartphone: Smartphone,
  palette: Palette,
  globe: Globe,
  layers: Layers,
  barChart3: BarChart3,
  cpu: Cpu,
  cloud: Cloud,
  kanban: LayoutDashboard,
  video: Video,
}

export function ServiceIcon({ name, className }) {
  const Cmp = map[name] || Brain
  return <Cmp className={className} aria-hidden />
}
