import { useLocation } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sun, Moon, BookOpen, FlaskConical, Atom, Languages, BookMarked, ChevronRight, GraduationCap
} from "lucide-react";

const SUBJECTS = [
  {
    key: "math",
    label: "Mathematics",
    icon: BookMarked,
    color: "blue",
    chapters: 13,
    available: true,
    desc: "Algebra, Calculus, Matrices, Vectors & more",
    iconBg: "bg-blue-50 dark:bg-blue-950/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderAccent: "border-blue-200 dark:border-blue-800/60",
    badge: "Active",
    badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  },
  {
    key: "physics",
    label: "Physics",
    icon: Atom,
    color: "violet",
    chapters: 15,
    available: false,
    desc: "Electrostatics, Optics, Modern Physics & more",
    iconBg: "bg-violet-50 dark:bg-violet-950/40",
    iconColor: "text-violet-600 dark:text-violet-400",
    borderAccent: "border-violet-200 dark:border-violet-800/60",
    badge: "Coming Soon",
    badgeClass: "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300",
  },
  {
    key: "chemistry",
    label: "Chemistry",
    icon: FlaskConical,
    color: "emerald",
    chapters: 16,
    available: false,
    desc: "Organic, Inorganic, Physical Chemistry & more",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderAccent: "border-emerald-200 dark:border-emerald-800/60",
    badge: "Coming Soon",
    badgeClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300",
  },
  {
    key: "hindi",
    label: "Hindi",
    icon: Languages,
    color: "orange",
    chapters: 8,
    available: false,
    desc: "गद्य, पद्य, व्याकरण और लेखन कौशल",
    iconBg: "bg-orange-50 dark:bg-orange-950/40",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderAccent: "border-orange-200 dark:border-orange-800/60",
    badge: "Coming Soon",
    badgeClass: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
  },
  {
    key: "english",
    label: "English",
    icon: BookOpen,
    color: "rose",
    chapters: 8,
    available: false,
    desc: "Flamingo, Vistas, Writing & Grammar skills",
    iconBg: "bg-rose-50 dark:bg-rose-950/40",
    iconColor: "text-rose-600 dark:text-rose-400",
    borderAccent: "border-rose-200 dark:border-rose-800/60",
    badge: "Coming Soon",
    badgeClass: "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300",
  },
];

export default function Dashboard() {
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Topbar */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground tracking-tight">StudySpace</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-muted rounded-lg text-xs text-muted-foreground">
              <GraduationCap className="w-3.5 h-3.5" />
              Class 12 · 2025–26
            </div>
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">My Subjects</h1>
          <p className="text-muted-foreground mt-1 text-sm">Choose a subject to start studying</p>
        </div>

        {/* Subject Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUBJECTS.map((subject) => {
            const Icon = subject.icon;
            return (
              <button
                key={subject.key}
                onClick={() => subject.available && navigate(`/subject/${subject.key}`)}
                disabled={!subject.available}
                className={[
                  "group relative text-left p-5 rounded-2xl border bg-card transition-all duration-200",
                  subject.available
                    ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5 border-border hover:border-primary/30"
                    : "cursor-default opacity-70 border-border",
                  subject.available ? subject.borderAccent : "",
                ].join(" ")}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${subject.iconBg}`}>
                    <Icon className={`w-5 h-5 ${subject.iconColor}`} />
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${subject.badgeClass}`}>
                    {subject.badge}
                  </span>
                </div>

                {/* Info */}
                <h2 className="font-semibold text-foreground text-base mb-1">{subject.label}</h2>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{subject.desc}</p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{subject.chapters} chapters</span>
                  {subject.available && (
                    <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-1.5 transition-all">
                      Open <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress section */}
        <div className="mt-10 p-5 rounded-2xl bg-muted/50 border border-border">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <h3 className="text-sm font-semibold text-foreground">Study Progress</h3>
          </div>
          <p className="text-xs text-muted-foreground pl-4">
            1 subject active · 4 coming soon · Keep going! 📚
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        StudySpace · Built for you
      </footer>
    </div>
  );
}
