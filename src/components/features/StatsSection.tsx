import { Code2, FolderGit2, Calendar, Coffee } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useProjectStore } from '@/stores/projectStore';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  accentColor?: string;
}

function StatCard({ icon, value, suffix = '', label, accentColor = 'text-primary' }: StatCardProps) {
  const { count, ref } = useCountUp(value, 1800);

  return (
    <div ref={ref} className="glass-card rounded-xl p-4 text-center group hover:border-primary/30 transition-colors">
      <div className={`inline-flex items-center justify-center size-10 rounded-lg bg-primary/10 mb-3 ${accentColor}`}>
        {icon}
      </div>
      <p className="text-2xl font-bold text-foreground tabular-nums">
        {count}
        {suffix && <span className="text-primary">{suffix}</span>}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const projects = useProjectStore((s) => s.projects);

  const uniqueTechs = new Set(projects.flatMap((p) => p.techs));
  const currentYear = new Date().getFullYear();
  const startYear = 2021;
  const yearsActive = currentYear - startYear;

  return (
    <section className="px-4 pb-8 animate-fade-in-up">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard
          icon={<FolderGit2 className="size-5" />}
          value={projects.length}
          label="Projects"
        />
        <StatCard
          icon={<Code2 className="size-5" />}
          value={uniqueTechs.size}
          label="Technologies"
        />
        <StatCard
          icon={<Calendar className="size-5" />}
          value={yearsActive}
          suffix="+"
          label="Years Active"
        />
        <StatCard
          icon={<Coffee className="size-5" />}
          value={1240}
          suffix="+"
          label="Commits"
        />
      </div>
    </section>
  );
}
