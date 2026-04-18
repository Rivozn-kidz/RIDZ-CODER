import { Github, Send, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants/config';

const ICON_MAP: Record<string, React.ElementType> = {
  github: Github,
  send: Send,
  messageCircle: MessageCircle,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4 py-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICON_MAP[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="glass-card-hover flex items-center justify-center size-11 rounded-full text-muted-foreground transition-colors duration-200 hover:text-primary"
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </div>
  );
}
