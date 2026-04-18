import { Clock, BatteryFull, BatteryMedium, BatteryLow, BatteryCharging } from 'lucide-react';
import { useTimeBattery } from '@/hooks/useTimeBattery';

export default function TimeBattery() {
  const { time, date, battery, isCharging } = useTimeBattery();

  const batteryColor =
    battery > 50 ? 'text-green-400' : battery > 20 ? 'text-yellow-400' : 'text-red-400';

  const BatteryIcon = isCharging
    ? BatteryCharging
    : battery > 50
      ? BatteryFull
      : battery > 20
        ? BatteryMedium
        : BatteryLow;

  return (
    <div
      className="glass-card rounded-xl mx-auto max-w-xs px-5 py-3 flex items-center justify-between gap-4 animate-fade-in-up"
      style={{ animationDelay: '0.25s' }}
    >
      <div className="flex items-center gap-2">
        <Clock className="size-4 text-primary" />
        <div>
          <p className="text-sm font-mono tabular-nums text-foreground">{time}</p>
          <p className="text-xs text-muted-foreground">{date} • EAT</p>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <BatteryIcon className={`size-4 ${batteryColor}`} />
        <span className={`text-sm font-mono tabular-nums ${batteryColor}`}>
          {battery}%
        </span>
      </div>
    </div>
  );
}
