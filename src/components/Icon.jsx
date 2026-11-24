import { Car, BatteryCharging, Cpu, Cog, PlugZap, Wrench, Zap } from 'lucide-react'

const map = { Car, BatteryCharging, Cpu, Cog, PlugZap, Wrench }

export default function Icon({ name, ...props }) {
  const C = map[name] || Zap
  return <C aria-hidden="true" {...props} />
}
