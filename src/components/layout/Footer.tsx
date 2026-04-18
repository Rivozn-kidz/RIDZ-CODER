import { KeyRound, QrCode, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-4 pt-12 pb-8">
      <div className="glass-card rounded-2xl p-8 max-w-lg mx-auto text-center space-y-6">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">SUBZERO MD</h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
          Advanced WhatsApp bot solution with powerful automation, secure connections, and seamless integrations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://pair.subzero.gleeze.com/pair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
          >
            <KeyRound className="size-4" />
            Pair Code
          </a>
          <a
            href="https://pair.subzero.gleeze.com/qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
          >
            <QrCode className="size-4" />
            QR Code
          </a>
          <a
            href="https://github.com/mrfrankofcc/SUBZERO-MD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
          >
            <Github className="size-4" />
            Source Code
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <a
            href="https://github.com/mrfrankofcc/SUBZERO-MD/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Report Issues
          </a>
          <span className="text-border">•</span>
          <a
            href="https://wa.me/263719647303"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            WhatsApp Support
          </a>
          <span className="text-border">•</span>
          <a
            href="https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Channel
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © 2026 SUBZERO MD • Built by{' '}
          <a
            href="https://github.com/mrfrankofcc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Mr Frank OFC
          </a>
        </p>
      </div>
    </footer>
  );
}
