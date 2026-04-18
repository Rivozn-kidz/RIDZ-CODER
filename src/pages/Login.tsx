import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/stores/authStore';
import { toast } from 'sonner';
import Scene3D from '@/components/features/Scene3D';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.error('Please enter email and password');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        toast.success('Welcome back, Ridz!');
        navigate('/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <Scene3D />
      <div className="relative z-10 w-full max-w-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="size-4" />
          Back to Portfolio
        </Link>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 space-y-5">
          <div className="text-center mb-2">
            <div className="size-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
              <LogIn className="size-5 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Admin Login</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to manage your projects</p>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="login-email" className="text-sm text-muted-foreground">Email</Label>
            <Input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="*********@gmail.com"
              className="bg-background/50 border-border/60 focus:border-primary"
              autoComplete="email"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="login-password" className="text-sm text-muted-foreground">Password</Label>
            <div className="relative">
              <Input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-background/50 border-border/60 focus:border-primary pr-10"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full glow-button bg-primary text-primary-foreground hover:brightness-110 font-semibold"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Forgot password?{' '}
            <a
              href="mailto:smtechofcmods@gmail.com"
              className="text-primary hover:underline"
            >
              Contact admin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
