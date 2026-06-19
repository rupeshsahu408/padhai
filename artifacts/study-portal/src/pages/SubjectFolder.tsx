import { useLocation, useParams } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import {
  Sun, Moon, ArrowLeft, BookMarked, Atom, FlaskConical,
  Languages, BookOpen, FolderOpen, Star, Target, BookText
} from "lucide-react";

const MATH_CHAPTERS = [
  { no: 1,  title: "संबंध एवं फलन" },
  { no: 2,  title: "प्रतिलोम त्रिकोणमितीय फलन" },
  { no: 3,  title: "आव्यूह" },
  { no: 4,  title: "सारणिक" },
  { no: 5,  title: "सांतत्य तथा अवकलनीयता" },
  { no: 7,  title: "समाकलन" },
  { no: 9,  title: "अवकल समीकरण" },
  { no: 10, title: "सदिश बीजगणित" },
  { no: 11, title: "त्रि-विमीय ज्यामिति" },
  { no: 12, title: "रेखीय प्रोग्रामन" },
  { no: 13, title: "प्रायिकता" },
];

const SUB_FOLDERS = [
  { label: "Unic Question",  icon: Star,     color: "text-yellow-500" },
  { label: "Unic Objective", icon: Target,   color: "text-blue-500"   },
  { label: "Revision Notes", icon: BookText, color: "text-green-600"  },
];

const SUBJECT_META: Record<string, { label: string; icon: React.ElementType }> = {
  math:      { label: "Mathematics", icon: BookMarked   },
  physics:   { label: "Physics",     icon: Atom         },
  chemistry: { label: "Chemistry",   icon: FlaskConical },
  hindi:     { label: "Hindi",       icon: Languages    },
  english:   { label: "English",     icon: BookOpen     },
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
          <button onClick={() => navigate("/dashboard")} className="mt-4 text-primary text-sm hover:underline">
            ← Back
          </button>
        </div>
      </div>
    );
  }

  const Icon = meta.icon;
  const isMath = subject === "math";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-muted rounded-lg flex items-center justify-center">
              <Icon className="w-3.5 h-3.5 text-foreground" />
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

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-8">
        <h1 className="text-xl font-bold text-foreground tracking-tight mb-1">{meta.label}</h1>
        <p className="text-xs text-muted-foreground mb-6">बिहार बोर्ड · कक्षा 12</p>

        {isMath ? (
          <div className="flex flex-col gap-2.5">
            {MATH_CHAPTERS.map((ch) => (
              <button
                key={ch.no}
                onClick={() => navigate(`/subject/${subject}/chapter/${ch.no}`)}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl border border-border bg-card hover:bg-muted/40 text-left"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FolderOpen className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-primary mb-0.5">अध्याय {ch.no}</p>
                  <p className="text-sm font-semibold text-foreground leading-tight">{ch.title}</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-muted-foreground flex-shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-28 text-center border border-border rounded-2xl bg-card">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-muted-foreground" />
            </div>
            <h2 className="text-base font-semibold text-foreground mb-2">Folder तैयार है</h2>
            <p className="text-sm text-muted-foreground">Content जल्द add किया जाएगा।</p>
          </div>
        )}
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        Alone 12th · Bihar Board · Class 12
      </footer>
    </div>
  );
}
