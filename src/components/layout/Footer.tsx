export default function Footer() {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const yearRange = currentYear > startYear ? `${startYear} - ${currentYear}` : `${startYear}`;

  return (
    <footer className="py-8 px-4 text-center">
      <p className="text-xs text-muted-foreground">
        ©{yearRange} • Developed With 🌋 by{' '}
        <span className="text-primary font-medium">Ridz Coder</span>
      </p>
    </footer>
  );
}
