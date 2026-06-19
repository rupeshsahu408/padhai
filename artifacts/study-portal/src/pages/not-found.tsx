import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
      <p className="text-6xl font-bold text-muted-foreground/30 mb-4">404</p>
      <h1 className="text-xl font-semibold text-foreground mb-2">Page not found</h1>
      <p className="text-sm text-muted-foreground mb-6">This page doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Go Home
      </button>
    </div>
  );
}
