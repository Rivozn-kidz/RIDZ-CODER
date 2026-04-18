import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/constants/config';

interface TimeBatteryState {
  time: string;
  date: string;
  battery: number;
  isCharging: boolean;
}

export function useTimeBattery() {
  const [state, setState] = useState<TimeBatteryState>({
    time: '',
    date: '',
    battery: 100,
    isCharging: false,
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: SITE_CONFIG.timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      const dateStr = now.toLocaleDateString('en-US', {
        timeZone: SITE_CONFIG.timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      setState((prev) => ({ ...prev, time: timeStr, date: dateStr }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    if ('getBattery' in navigator) {
      (navigator as unknown as { getBattery: () => Promise<{ level: number; charging: boolean; addEventListener: (event: string, cb: () => void) => void }> })
        .getBattery()
        .then((batt) => {
          const update = () => {
            setState((prev) => ({
              ...prev,
              battery: Math.round(batt.level * 100),
              isCharging: batt.charging,
            }));
          };
          update();
          batt.addEventListener('levelchange', update);
          batt.addEventListener('chargingchange', update);
        });
    }

    return () => clearInterval(interval);
  }, []);

  return state;
}
