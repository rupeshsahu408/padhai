import { useLocation, useParams } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sun, Moon, BookOpen, ArrowLeft, ExternalLink, Lock,
  BookMarked, Atom, FlaskConical, Languages, CheckCircle2, Clock
} from "lucide-react";

const SUBJECT_META: Record<string, {
  label: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  chapters: { id: number; title: string; subtitle: string; available: boolean; noteUrl?: string }[];
}> = {
  math: {
    label: "Mathematics",
    icon: BookMarked,
    iconBg: "bg-blue-50 dark:bg-blue-950/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    chapters: [
      { id: 1, title: "Chapter 1", subtitle: "Relations and Functions", available: false },
      { id: 2, title: "Chapter 2", subtitle: "Inverse Trigonometric Functions", available: false },
      { id: 3, title: "Chapter 3", subtitle: "Matrices (आव्यूह)", available: false },
      {
        id: 4,
        title: "Chapter 4",
        subtitle: "Determinants (सारणिक)",
        available: true,
        noteUrl: "/api/notes/notes.html",
      },
      { id: 5, title: "Chapter 5", subtitle: "Continuity and Differentiability", available: false },
      { id: 6, title: "Chapter 6", subtitle: "Application of Derivatives", available: false },
      { id: 7, title: "Chapter 7", subtitle: "Integrals", available: false },
      { id: 8, title: "Chapter 8", subtitle: "Application of Integrals", available: false },
      { id: 9, title: "Chapter 9", subtitle: "Differential Equations", available: false },
      { id: 10, title: "Chapter 10", subtitle: "Vector Algebra", available: false },
      { id: 11, title: "Chapter 11", subtitle: "Three Dimensional Geometry", available: false },
      { id: 12, title: "Chapter 12", subtitle: "Linear Programming", available: false },
      { id: 13, title: "Chapter 13", subtitle: "Probability", available: false },
    ],
  },
  physics: {
    label: "Physics",
    icon: Atom,
    iconBg: "bg-violet-50 dark:bg-violet-950/40",
    iconColor: "text-violet-600 dark:text-violet-400",
    chapters: [],
  },
  chemistry: {
    label: "Chemistry",
    icon: FlaskConical,
    iconBg: "bg-emerald-50 dark:bg-emerald-950/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    chapters: [],
  },
  hindi: {
    label: "Hindi",
    icon: Languages,
    iconBg: "bg-orange-50 dark:bg-orange-950/40",
    iconColor: "text-orange-600 dark:text-orange-400",
    chapters: [],
  },
  english: {
    label: "English",
    icon: BookOpen,
    iconBg: "bg-rose-50 dark:bg-rose-950/40",
    iconColor: "text-rose-600 dark:text-rose-400",
    chapters: [],
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
          <p className="text-muted-foreground">Subject not found.</p>
          <button onClick={() => navigate("/dashboard")} className="mt-4 text-primary text-sm hover:underline">
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const Icon = meta.icon;
  const availableCount = meta.chapters.filter((c) => c.available).length;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Topbar */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
        {/* Subject Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${meta.iconBg}`}>
            <Icon className={`w-7 h-7 ${meta.iconColor}`} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">{meta.label}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              {meta.chapters.length} chapters total · {availableCount} ready
            </p>
          </div>
        </div>

        {/* Empty state for subjects with no chapters yet */}
        {meta.chapters.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${meta.iconBg} mb-5`}>
              <Icon className={`w-8 h-8 ${meta.iconColor}`} />
            </div>
            <h2 className="text-lg font-semibold text-foreground mb-2">Coming Soon</h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Notes for {meta.label} are being prepared. Check back soon!
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="mt-6 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              ← Go to Dashboard
            </button>
          </div>
        )}

        {/* Chapter List */}
        {meta.chapters.length > 0 && (
          <div className="space-y-2">
            {meta.chapters.map((chapter) => (
              <div
                key={chapter.id}
                className={[
                  "group flex items-center justify-between p-4 rounded-xl border bg-card transition-all duration-150",
                  chapter.available
                    ? "border-border hover:border-primary/40 hover:shadow-sm cursor-pointer hover:bg-card"
                    : "border-border opacity-60 cursor-default",
                ].join(" ")}
                onClick={() => {
                  if (chapter.available && chapter.noteUrl) {
                    window.open(chapter.noteUrl, "_blank");
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Chapter number badge */}
                  <div
                    className={[
                      "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0",
                      chapter.available
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground",
                    ].join(" ")}
                  >
                    {chapter.id}
                  </div>

                  {/* Chapter info */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-0.5">{chapter.title}</p>
                    <p className={`text-sm font-semibold ${chapter.available ? "text-foreground" : "text-muted-foreground"}`}>
                      {chapter.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  {chapter.available ? (
                    <>
                      <span className="hidden sm:inline text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        Notes Ready
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <ExternalLink className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline text-xs text-muted-foreground">Coming soon</span>
                      <Clock className="w-4 h-4 text-muted-foreground/50" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        StudySpace · Built for you
      </footer>
    </div>
  );
}
