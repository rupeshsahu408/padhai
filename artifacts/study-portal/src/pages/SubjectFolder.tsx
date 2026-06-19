import { useLocation, useParams } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, ArrowLeft, BookMarked, Atom, FlaskConical, Languages, BookOpen, FolderOpen } from "lucide-react";

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

const SUBJECT_META: Record<string, {
  label: string;
  icon: React.ElementType;
  description: string;
}> = {
  math:      { label: "Mathematics", icon: BookMarked,   description: "बिहार बोर्ड · कक्षा 12" },
  physics:   { label: "Physics",     icon: Atom,         description: "बिहार बोर्ड · कक्षा 12" },
  chemistry: { label: "Chemistry",   icon: FlaskConical, description: "बिहार बोर्ड · कक्षा 12" },
  hindi:     { label: "Hindi",       icon: Languages,    description: "बिहार बोर्ड · कक्षा 12" },
  english:   { label: "English",     icon: BookOpen,     description: "बिहार बोर्ड · कक्षा 12" },
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
            ← Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const Icon = meta.icon;
  const isMath = subject === "math";

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

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">
        {/* Header */}
        <div className="mb-2">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">{meta.label}</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{meta.description}</p>
        </div>

        {isMath ? (
          <>
            <p className="text-xs text-muted-foreground mb-6 mt-1">
              {MATH_CHAPTERS.length} अध्याय उपलब्ध हैं
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MATH_CHAPTERS.map((ch) => (
                <div
                  key={ch.no}
                  className="border border-border bg-card rounded-xl p-4 cursor-pointer hover:bg-muted/40"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <FolderOpen className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-xs font-semibold text-primary">अध्याय {ch.no}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground leading-snug">{ch.title}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-28 text-center border border-border rounded-2xl bg-card mt-6">
            <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-muted-foreground" />
            </div>
            <h2 className="text-base font-semibold text-foreground mb-2">Folder तैयार है</h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {meta.label} का content जल्द add किया जाएगा।
            </p>
          </div>
        )}
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        StudySpace · Bihar Board · Class 12
      </footer>
    </div>
  );
}
