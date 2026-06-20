import { useLocation, useParams } from "wouter";
import { useTheme } from "@/components/ThemeProvider";

const MATH_CHAPTERS: Record<number, string> = {
  1: "संबंध एवं फलन",
  2: "प्रतिलोम त्रिकोणमितीय फलन",
  3: "आव्यूह",
  4: "सारणिक",
  5: "सांतत्य तथा अवकलनीयता",
  7: "समाकलन",
  9: "अवकल समीकरण",
  10: "सदिश बीजगणित",
  11: "त्रि-विमीय ज्यामिति",
  12: "रेखीय प्रोग्रामन",
  13: "प्रायिकता",
};

const FOLDERS = [
  {
    id: "revision-notes",
    label: "Revision Notes",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="15" y2="11" />
        <line x1="9" y1="15" x2="13" y2="15" />
      </svg>
    ),
  },
  {
    id: "trick",
    label: "Trick",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "theory-concepts",
    label: "Theory Concepts",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function ChapterPage() {
  const { subject, chapterNo } = useParams<{ subject: string; chapterNo: string }>();
  const [, navigate] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const num = parseInt(chapterNo ?? "0");
  const title = MATH_CHAPTERS[num] ?? "";

  const handleClick = (folderId: string) => {
    const base = import.meta.env.BASE_URL;
    const go = (path: string) => { window.location.href = base + path; };
    const revisionChapters = [1,2,3,4,5,7,9,10,11,12,13];
    if (revisionChapters.includes(num) && folderId === "revision-notes") {
      go(`ch${num}-revision/index.html`);
    }
    if (num === 1 && folderId === "theory-concepts") go("theory-ch1.html");
    if (num === 1 && folderId === "trick")            go("tricks-ch1.html");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-background">
        <div className="max-w-2xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={() => navigate(`/subject/${subject}`)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>

          <span className="text-sm font-semibold text-foreground">अध्याय {num}</span>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-8">
        <div className="mb-8">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
            अध्याय {num}
          </p>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-xs text-muted-foreground mt-1">बिहार बोर्ड · कक्षा 12 · Mathematics</p>
        </div>

        <div className="flex flex-col gap-2">
          {FOLDERS.map((folder) => (
            <button
              key={folder.id}
              onClick={() => handleClick(folder.id)}
              className="w-full flex items-center gap-4 px-4 py-4 rounded-xl border border-border bg-card text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-foreground">
                {folder.svg}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">{folder.label}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-muted-foreground flex-shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          ))}
        </div>
      </main>

      <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        Alone 12th · Bihar Board · Class 12
      </footer>
    </div>
  );
}
