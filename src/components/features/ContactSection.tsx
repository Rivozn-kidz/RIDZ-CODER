import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        icon: <CheckCircle className="size-4" />,
      });
      setName('');
      setEmail('');
      setMessage('');
      setSending(false);
    }, 1200);
  };

  return (
    <section id="contact" className="px-4 py-10">
      <h2 className="section-title text-center mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 max-w-sm mx-auto space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="contact-name" className="text-sm text-muted-foreground">Name</Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="bg-background/50 border-border/60 focus:border-primary"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-email" className="text-sm text-muted-foreground">Email</Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="bg-background/50 border-border/60 focus:border-primary"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-message" className="text-sm text-muted-foreground">Message</Label>
          <Textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            rows={4}
            className="bg-background/50 border-border/60 focus:border-primary resize-none"
          />
        </div>
        <Button
          type="submit"
          disabled={sending}
          className="w-full glow-button bg-primary text-primary-foreground hover:brightness-110 font-semibold"
        >
          {sending ? (
            <span className="flex items-center gap-2">
              <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="size-4" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </section>
  );
}
