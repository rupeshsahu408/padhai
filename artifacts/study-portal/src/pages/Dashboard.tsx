import { useLocation } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sun, Moon, BookOpen, FlaskConical, Atom, Languages, BookMarked, ChevronRight, GraduationCap
} from "lucide-react";

const SUBJECTS = [
  { key: "math",      label: "Mathematics", icon: BookMarked,   available: true  },
  { key: "physics",   label: "Physics",     icon: Atom,         available: false },
  { key: "chemistry", label: "Chemistry",   icon: FlaskConical, available: false },
  { key: "hindi",     label: "Hindi",       icon: Languages,    available: false },
  { key: "english",   label: "English",     icon: BookOpen,     available: false },
];

export default function Dashboard() {
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-background">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground tracking-tight">Alone 12th</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-xs text-muted-foreground">
              <GraduationCap className="w-3.5 h-3.5" />
              Class 12 · 2025–26
            </div>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
        <h1 className="text-2xl font-bold text-foreground tracking-tight mb-6">My Subjects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SUBJECTS.map((subject) => {
            const Icon = subject.icon;
            return (
              <button
                key={subject.key}
                onClick={() => subject.available && navigate(`/subject/${subject.key}`)}
                disabled={!subject.available}
                className={[
                  "text-left p-5 rounded-xl border bg-card",
                  subject.available
                    ? "cursor-pointer hover:bg-muted/40 border-border"
                    : "cursor-not-allowed coming-soon-card",
                ].join(" ")}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  {subject.available ? (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                      Open
                    </span>
                  ) : (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                      Coming soon
                    </span>
                  )}
                </div>

                <h2 className="font-semibold text-foreground text-sm">{subject.label}</h2>

                {subject.available && (
                  <div className="flex items-center gap-1 mt-4 text-xs text-primary font-medium">
                    Open folder <ChevronRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        Alone 12th · Class 12
      </footer>
    </div>
  );
}
