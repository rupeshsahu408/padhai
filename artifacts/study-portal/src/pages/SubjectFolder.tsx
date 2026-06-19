import { useLocation, useParams } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, ArrowLeft, BookMarked, Atom, FlaskConical, Languages, BookOpen } from "lucide-react";

const SUBJECT_META: Record<string, {
  label: string;
  icon: React.ElementType;
  description: string;
  iconBg: string;
  iconColor: string;
}> = {
  math: {
    label: "Mathematics",
    icon: BookMarked,
    description: "Algebra, Calculus, Matrices, Vectors & more",
    iconBg: "bg-blue-50 dark:bg-blue-950/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  physics: {
    label: "Physics",
    icon: Atom,
    description: "Electrostatics, Optics, Modern Physics & more",
    iconBg: "bg-violet-50 dark:bg-violet-950/30",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  chemistry: {
    label: "Chemistry",
    icon: FlaskConical,
    description: "Organic, Inorganic, Physical Chemistry & more",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  hindi: {
    label: "Hindi",
    icon: Languages,
    description: "गद्य, पद्य, व्याकरण और लेखन कौशल",
    iconBg: "bg-orange-50 dark:bg-orange-950/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  english: {
    label: "English",
    icon: BookOpen,
    description: "Flamingo, Vistas, Writing & Grammar skills",
    iconBg: "bg-rose-50 dark:bg-rose-950/30",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
};

export default function SubjectFolder() {
  const { subject } = useParams<{ subject: string }>();
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const meta = SUBJECT_META[subject ?? ""] ?? null;

  if (!meta) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">Subject not found.</p>
          <button
            onClick={() => navigate("/dashboard")}
            className="mt-4 text-primary text-sm hover:underline"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const Icon = meta.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Topbar */}
      <header className="border-b border-border bg-background">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back</span>
          </button>

          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${meta.iconBg}`}>
              <Icon className={`w-3.5 h-3.5 ${meta.iconColor}`} />
            </div>
            <span className="font-semibold text-foreground text-sm">{meta.label}</span>
          </div>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${meta.iconBg}`}>
            <Icon className={`w-7 h-7 ${meta.iconColor}`} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">{meta.label}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">{meta.description}</p>
          </div>
        </div>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center py-28 text-center border border-border rounded-2xl bg-card">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${meta.iconBg} mb-5`}>
            <Icon className={`w-8 h-8 ${meta.iconColor}`} />
          </div>
          <h2 className="text-base font-semibold text-foreground mb-2">Folder is ready</h2>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Content for {meta.label} will be added here. Check back soon.
          </p>
        </div>
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        StudySpace · Built for you
      </footer>
    </div>
  );
}
