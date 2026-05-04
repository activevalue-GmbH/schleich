import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Gauge,
  Link2Off,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Waypoints,
} from "lucide-react";

/**
 * Designphilosophie dieser Datei:
 * Die Visualisierung orientiert sich zu 100 % an der Bruder-Referenzseite: helle Dossier-Optik,
 * große serifengeprägte Hero-These links, rechte Infokarten, klare Kapitelanker und sachliche
 * Präsentationsdramaturgie. Inhaltlich bleibt die Seite bewusst scharf: Jede Sektion benennt,
 * was im Test gefunden wurde, warum es relevant ist und welcher Hebel daraus folgt.
 */

const navItems = [
  { label: "Einordnung", href: "#einordnung" },
  { label: "Befunde", href: "#befunde" },
  { label: "Hebel", href: "#hebel" },
  { label: "GEO", href: "#geo" },
  { label: "Review", href: "#review" },
];

const hardFindings = [
  {
    eyebrow: "Performance",
    value: "1/100",
    title: "HORSE CLUB im Lighthouse-Test",
    text: "Zentrale Seiten wirken messbar langsam. Für Mobile Commerce ist das kein Feintuning, sondern ein Reibungsverlust vor der Kaufentscheidung.",
    icon: Gauge,
  },
  {
    eyebrow: "Navigation",
    value: "404",
    title: "Prominenter Produktwelt-Pfad lief ins Leere",
    text: "Ein HORSE-CLUB-Einstieg führte im Test auf eine fehlerhafte URL mit `horse-club%20tabindex=`. Ein Kernpfad darf nicht abbrechen.",
    icon: Link2Off,
  },
  {
    eyebrow: "Suche",
    value: "Intent",
    title: "Geschenk-Suche berät zu schwach",
    text: "Die Anfrage „geschenk 5 jahre“ lieferte keine überzeugende Beratung und teils irrelevante Seitentreffer. Geschenkintention bleibt damit untergenutzt.",
    icon: Search,
  },
];

const observations = [
  {
    number: "01",
    kicker: "Beobachtung 1",
    title: "Die technische Basis bremst digitale Wirkung.",
    finding: "Gefunden wurde ein sehr schwaches Lighthouse-Signal: Startseite im niedrigen zweistelligen Bereich, HORSE CLUB bei 1/100. Zusätzlich wurden lange Interaktions- und Ladezeiten sichtbar.",
    relevance: "Wenn zentrale Einstiege langsam reagieren, entsteht Wartezeit aus vorhandener Nachfrage. Das betrifft nicht nur UX, sondern auch Vertrauen, Markenwahrnehmung und Conversion-Voraussetzungen.",
    lever: "Performance, Third-Party-Code, Bildlast, Script-Last und zentrale mobile Pfade priorisiert prüfen.",
  },
  {
    number: "02",
    kicker: "Beobachtung 2",
    title: "Ein prominenter Produktwelt-Einstieg lief im Test auf 404.",
    finding: "Der HORSE-CLUB-Pfad aus der Navigation führte auf eine fehlerhafte URL mit `horse-club%20tabindex=` und damit auf ein 404-Erlebnis.",
    relevance: "HORSE CLUB ist keine Randkategorie. Wenn ein sichtbarer Produktwelt-Einstieg ins Leere läuft, entsteht ein Qualitätsbruch an einer kaufnahen Stelle.",
    lever: "Navigation, URL-Generierung, interne Links und Fehlerseiten-Monitoring kurzfristig validieren.",
  },
  {
    number: "03",
    kicker: "Beobachtung 3",
    title: "Die Suche findet Produkte, berät aber zu wenig nach Kaufabsicht.",
    finding: "Produktnahe Suchanfragen funktionieren besser als beratende Anfragen. Bei „geschenk 5 jahre“ werden Kaufanlass, Alter und Geschenklogik nicht stark genug geführt.",
    relevance: "Viele schleich-Käufe beginnen nicht mit einer Artikelnummer, sondern mit Anlass, Alter, Interesse oder Geschenkidee. Genau dort muss der Shop Orientierung leisten.",
    lever: "Suchlogik, Synonyme, kuratierte Landingpages und Geschenkberatung nach Alter, Interesse und Spielwelt aufbauen.",
  },
];

const levers = [
  {
    icon: Gauge,
    title: "Performance & Stabilität",
    finding: "Lighthouse zeigte zentrale Reibung auf Start- und Kategorieseiten.",
    impact: "Weniger Wartezeit, bessere mobile Nutzbarkeit und stärkere Conversion-Grundlage.",
    action: "Core Web Vitals, JavaScript-Last, Bilder, Consent-/Tracking-Tags und Renderpfade priorisieren.",
  },
  {
    icon: Waypoints,
    title: "Navigation & Produktwelt-Pfade",
    finding: "Ein HORSE-CLUB-Kernpfad führte auf 404.",
    impact: "Weniger Orientierungslücken und höhere Verlässlichkeit in zentralen Einstiegen.",
    action: "Interne Linklogik, URL-Encoding, Fehlerseiten-Monitoring und Produktwelt-Navigation prüfen.",
  },
  {
    icon: Search,
    title: "Suche & Kaufintention",
    finding: "Geschenk- und Altersintentionen werden nicht stark genug verstanden.",
    impact: "Mehr Relevanz für Eltern, Großeltern und Schenkende ohne konkrete Artikelnummer.",
    action: "Beratende Suchmuster, Synonyme, Nulltrefferlogik und kuratierte Ergebnisflächen ausbauen.",
  },
  {
    icon: Target,
    title: "Kategorie-Führung",
    finding: "HORSE CLUB zeigt viel Sortiment, aber zu wenig kuratierte Entscheidungshilfe.",
    impact: "Aus Auswahl wird Orientierung: nach Alter, Anlass, Einstiegsset, Spielniveau und Ergänzung.",
    action: "Kategorie-Module für Geschenklogik, Starter-Sets, Sammlerpfade und Spielwelt-Erweiterung entwickeln.",
  },
  {
    icon: Sparkles,
    title: "Warenkorbwert & Spielwelt-Komplettierung",
    finding: "Upsell wirkt stärker schwellen- als spielweltgetrieben.",
    impact: "Mehr AOV durch passende Ergänzungen statt rein promotionbasierter Mechanik.",
    action: "Cross-Sell nach Spielwelt, Zubehör, Geschenkset, Ergänzungsfigur und Wiederkaufimpuls ausrichten.",
  },
  {
    icon: ShieldCheck,
    title: "Datenstruktur, Compliance & Trust",
    finding: "Accessibility-, Struktur- und Produktdaten-Signale bleiben prüfbar relevant.",
    impact: "Mehr Vertrauen, bessere Lesbarkeit für Suchmaschinen und bessere Grundlage für KI-Antwortsysteme.",
    action: "Alt-Texte, Kontraste, Linknamen, Produktattribute, strukturierte Daten und Trust-Informationen prüfen.",
  },
];

const reviewSteps = [
  "404-Pfade und technische Reibungspunkte validieren",
  "Performance-Bremsen nach Wirkung priorisieren",
  "Suche nach Geschenk-, Alters- und Interessenintentionen testen",
  "Kategorie- und Warenkorb-Hebel in schnelle Maßnahmen übersetzen",
  "Compliance-, Accessibility- und GEO-Signale als Trust-Basis prüfen",
];

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{label}</p>
    </div>
  );
}

function BrowserFindingCard() {
  return (
    <div className="browser-card" aria-label="Visualisierte Befundkarte zur schleich-Website">
      <div className="browser-topbar">
        <span />
        <span />
        <span />
        <p>de.schleich-s.com / audit-ausschnitt</p>
      </div>
      <div className="browser-body">
        <div className="mini-hero">
          <div>
            <small>Messbarer Befund</small>
            <strong>HORSE CLUB</strong>
          </div>
          <div className="score-pill">1/100</div>
        </div>
        <div className="audit-lines">
          <span className="wide" />
          <span />
          <span className="medium" />
          <span className="wide muted" />
        </div>
        <div className="error-row">
          <AlertTriangle size={18} />
          <p>404 bei prominentem Produktwelt-Link</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand-cluster" href="#top" aria-label="Zum Seitenanfang">
          <span className="active-logo">active<br />value</span>
          <span className="brand-divider" />
          <span className="client-logo">schleich</span>
        </a>
        <nav className="main-nav" aria-label="Kapitel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="eyebrow">schleich Website-Impulsanalyse</p>
            <h1>
              schleich bringt starke Spielwelten mit. Der deutsche Shop verliert an konkreten Stellen digitale Wirkung.
            </h1>
            <p className="hero-intro">
              Die Analyse startet nicht bei Markenmeinungen, sondern bei prüfbaren Befunden: Performance, fehlerhafte Pfade, Suche, Kategorie-Führung, Warenkorbwert, Datenstruktur und Trust. Die zentrale Frage lautet: Führt der Shop Nutzer schnell genug vom Interesse zur passenden Spielwelt und zum nächsten Kaufimpuls?
            </p>
          </motion.div>

          <motion.aside
            className="hero-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <div className="summary-card">
              <span>Kurzaussage</span>
              <h2>Die Marke ist stark. Die digitale Führung zeigt messbare Reibung.</h2>
              <p>Eine externe E-Commerce-, Nutzerführungs- und Sichtbarkeitsperspektive von active value.</p>
            </div>
            <BrowserFindingCard />
            <div className="focus-card">
              <span>Fokus</span>
              <p>Performance messbar verbessern</p>
              <p>Produktwelt-Pfade absichern</p>
              <p>Suche nach Kaufintention führen</p>
              <p>Warenkorbwert markenlogisch erhöhen</p>
            </div>
          </motion.aside>
        </section>

        <section id="einordnung" className="chapter chapter-intro">
          <SectionLabel number="1" label="Einordnung" />
          <div className="chapter-grid">
            <div>
              <p className="eyebrow">Warum wir geschaut haben</p>
              <h2>Der Hebel liegt nicht in einer neuen Markenerzählung, sondern in der besseren digitalen Übersetzung vorhandener Nachfrage.</h2>
            </div>
            <div className="chapter-text">
              <p>
                schleich verkauft nicht nur Figuren. Die Marke verkauft Spielwelten, Fantasie, Tiernähe, Sammelimpulse und Geschenkideen. Genau deshalb muss der Shop mehr leisten als Produktlisten: Er muss beraten, führen, ergänzen und Suchintentionen verstehen.
              </p>
              <p>
                Die Außenprüfung zeigt: Die Substanz ist vorhanden. Sichtbar sind aber konkrete Reibungspunkte, die den Weg vom Interesse zum Kaufimpuls unnötig schwer machen.
              </p>
            </div>
          </div>
        </section>

        <section className="evidence-strip" aria-label="Harte Befunde">
          {hardFindings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="evidence-card"
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="evidence-icon"><Icon size={20} /></div>
                <span>{item.eyebrow}</span>
                <strong>{item.value}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            );
          })}
        </section>

        <section id="befunde" className="chapter observations-chapter">
          <SectionLabel number="2" label="Befunde" />
          <div className="wide-heading">
            <p className="eyebrow">Was wir gefunden haben</p>
            <h2>Digitale Wirkung entsteht, wenn Geschwindigkeit, Einstieg, Produktlogik und nächster Schritt zusammenspielen.</h2>
          </div>
          <div className="observation-list">
            {observations.map((item) => (
              <article className="observation-card" key={item.number}>
                <div className="observation-number">{item.number}</div>
                <div className="observation-content">
                  <span>{item.kicker}</span>
                  <h3>{item.title}</h3>
                  <div className="triad-grid">
                    <div>
                      <small>Gefunden</small>
                      <p>{item.finding}</p>
                    </div>
                    <div>
                      <small>Warum relevant</small>
                      <p>{item.relevance}</p>
                    </div>
                    <div>
                      <small>Hebel</small>
                      <p>{item.lever}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="thesis-section">
          <p>Zentrale These</p>
          <h2>
            schleich hat keine Markenlücke, sondern eine digitale Übersetzungslücke: Die Marke bringt starke Welten, Emotion und Produktqualität mit, aber der Shop verliert an konkreten Stellen Geschwindigkeit, Führung, Beratungsleistung und maschinenlesbare Sichtbarkeit.
          </h2>
        </section>

        <section id="hebel" className="chapter levers-chapter">
          <SectionLabel number="3" label="Hebel" />
          <div className="wide-heading compact">
            <p className="eyebrow">Sechs prüfbare Ansatzpunkte</p>
            <h2>Aus Befunden werden priorisierbare Commerce-Hebel.</h2>
          </div>
          <div className="lever-grid">
            {levers.map((lever, index) => {
              const Icon = lever.icon;
              return (
                <motion.article
                  className="lever-card"
                  key={lever.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 0.42, delay: (index % 3) * 0.06 }}
                >
                  <div className="lever-head">
                    <Icon size={22} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3>{lever.title}</h3>
                  <dl>
                    <div>
                      <dt>Befund</dt>
                      <dd>{lever.finding}</dd>
                    </div>
                    <div>
                      <dt>Wirkung</dt>
                      <dd>{lever.impact}</dd>
                    </div>
                    <div>
                      <dt>Ansatz</dt>
                      <dd>{lever.action}</dd>
                    </div>
                  </dl>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="geo" className="chapter geo-chapter">
          <SectionLabel number="4" label="GEO" />
          <div className="geo-card">
            <div>
              <p className="eyebrow">KI- und GEO-Zusatzspur</p>
              <h2>Wenn KI Antworten baut, müssen Spielwelten und Produktinformationen maschinenlesbar werden.</h2>
            </div>
            <div className="chapter-text">
              <p>
                GEO ist nicht das Hauptthema dieser Impulsanalyse, aber eine relevante Zukunftsspur. Fragen wie „Geschenk für Pferdefan ab 5 Jahren“, „realistische Tierfiguren“ oder „pädagogisch wertvolles Spielzeug“ werden künftig stärker von Antwortsystemen vorstrukturiert.
              </p>
              <p>
                Der Hebel für schleich liegt darin, Produktdaten, Spielwert, Alterslogik, Geschenkideen und Produktwelt-Beziehungen so aufzubauen, dass Menschen, Suchmaschinen und KI-Systeme dieselbe klare Antwort lesen können.
              </p>
            </div>
          </div>
        </section>

        <section className="not-relaunch-section">
          <div>
            <p className="eyebrow">Was daraus nicht folgt</p>
            <h2>Diese Unterlage behauptet keinen pauschalen Relaunch-Bedarf.</h2>
          </div>
          <div className="comparison-table" role="table" aria-label="Einordnung der Aussagen">
            <div role="row">
              <span role="cell">Nicht die Aussage</span>
              <strong role="cell">„Der Shop ist schlecht.“</strong>
            </div>
            <div role="row">
              <span role="cell">Bessere Lesart</span>
              <strong role="cell">„Es gibt messbare und sichtbare Hebel, die priorisiert geprüft werden sollten.“</strong>
            </div>
            <div role="row">
              <span role="cell">Nächster Schritt</span>
              <strong role="cell">„404, Performance, Suche, Kategorie, Warenkorb und Datenstruktur konkret validieren.“</strong>
            </div>
          </div>
        </section>

        <section id="review" className="review-section">
          <SectionLabel number="5" label="Review" />
          <div className="review-grid">
            <div>
              <p className="eyebrow">Vorschlag für den nächsten Schritt</p>
              <h2>UX-, Tech- und Compliance-Review: konkrete Hebel für den deutschen schleich-Shop priorisieren.</h2>
              <p>
                Sinnvoll ist kein allgemeiner Austausch, sondern ein fokussierter Review mit priorisierter Hebelliste. Ziel ist eine belastbare Shortlist für Technik, Nutzerführung, Suche, Commerce-Führung, Sichtbarkeit, Compliance und GEO.
              </p>
              <a className="primary-cta" href="mailto:anton.klees@active-value.de?subject=schleich%20Website-Impulsanalyse">
                Review mit active value vorbereiten <ArrowRight size={18} />
              </a>
            </div>
            <div className="review-card">
              <span>Review-Schwerpunkte</span>
              {reviewSteps.map((step) => (
                <p key={step}><CheckCircle2 size={17} />{step}</p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#top" className="footer-brand">active-value.de</a>
        <p>Externe Impulsanalyse für E-Commerce, Nutzerführung, Sichtbarkeit und digitale Vertrauenssignale.</p>
        <a href="mailto:anton.klees@active-value.de">anton.klees@active-value.de</a>
      </footer>
    </div>
  );
}
