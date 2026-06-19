import { useLocation } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, BookOpen, Zap, Target, ArrowRight } from "lucide-react";

export default function Landing() {
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-border px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground text-lg tracking-tight">StudySpace</span>
        </div>
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-3xl mx-auto w-full py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
          <Zap className="w-3.5 h-3.5" />
          Your Personal Study Space
        </div>

        <h1 className="text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
          Study Smarter,<br />
          <span className="text-primary">Not Harder</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
          A clean, distraction-free space to organize your Class 12 notes,
          chapters, and formulas — all in one place, just for you.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-base hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md shadow-primary/20"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Features row */}
        <div className="grid grid-cols-3 gap-4 mt-20 w-full max-w-2xl">
          {[
            { icon: Target, title: "Focused", desc: "Zero distractions. Pure study mode." },
            { icon: BookOpen, title: "Organized", desc: "All subjects neatly in one place." },
            { icon: Zap, title: "Quick Access", desc: "Jump to any topic instantly." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 border border-border">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <p className="font-semibold text-sm text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground text-center leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        Built for you · Class 12 · 2025–26
      </footer>
    </div>
  );
}
