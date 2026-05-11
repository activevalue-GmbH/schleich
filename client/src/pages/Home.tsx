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
    value: "mobil",
    title: "Produktwelten brauchen schnelle Einstiege",
    text: "Starke Nachfrageanker wie HORSE CLUB entfalten digital nur dann Wirkung, wenn mobile Nutzer ohne Wartezeit und Reibung in die passende Spielwelt finden.",
    icon: Gauge,
  },
  {
    eyebrow: "Orientierung",
    value: "Pfad",
    title: "Spielwelt-Einstiege müssen verlässlich führen",
    text: "Produktwelten sind kaufnahe Einstiege. Hier zählen klare Wege, konsistente Links und schnelle Übergänge von Interesse zu Produkt, Set und Ergänzung.",
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
    title: "Starke Produktwelten verlieren Wirkung, wenn der mobile Einstieg bremst.",
    finding: "HORSE CLUB, DINOSAURS und WILD LIFE sind klare Nachfrageanker. In der digitalen Journey wird daraus erst dann Kaufnähe, wenn Einstieg, Ladeverhalten und Orientierung sauber zusammenspielen.",
    relevance: "Wenn mobile Nutzer an zentralen Spielwelt-Einstiegen warten, suchen oder neu ansetzen müssen, verliert der Shop Potenzial an genau den Stellen, an denen Interesse bereits vorhanden ist.",
    lever: "Mobile Performance, Third-Party-Code, Bildlast, Script-Last und zentrale Spielwelt-Einstiege priorisiert prüfen.",
  },
  {
    number: "02",
    kicker: "Beobachtung 2",
    title: "Produktwelt-Pfade müssen wie Verkaufsflächen funktionieren.",
    finding: "Die Analyse fokussiert nicht auf einzelne Fehlerbilder, sondern auf die Verlässlichkeit zentraler Einstiege: Nutzer müssen von Spielwelt, Alter oder Geschenkidee ohne Bruch zum passenden Produkt geführt werden.",
    relevance: "HORSE CLUB, DINOSAURS und WILD LIFE sind keine Randbereiche. Wenn diese Einstiege unklar, langsam oder technisch inkonsistent wirken, entsteht Reibung an kaufnahen Stellen.",
    lever: "Navigation, URL-Logik, interne Links, Kategorie-Einstiege und Fehlerseiten-Monitoring regelmäßig validieren.",
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
    finding: "Spielwelt-Einstiege müssen konsistent, schnell und ohne technische Brüche funktionieren.",
    impact: "Weniger Orientierungslücken und höhere Verlässlichkeit in zentralen kaufnahen Einstiegen.",
    action: "Interne Linklogik, URL-Encoding, Fehlerseiten-Monitoring und Produktwelt-Navigation regelmäßig prüfen.",
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

const geoQuestions = [
  "Bei welchen KI-Fragen sollte schleich sichtbar sein?",
  "Welche Wettbewerber werden in KI-Antworten genannt?",
  "Welche Quellen nutzen Antwortsysteme für Produkt- und Markeninformationen?",
  "Sind Spielwelten, Alterslogik und Geschenkideen strukturiert lesbar?",
  "Wo fehlen klare Antworten auf typische Nutzerfragen?",
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
            <small>Commerce-Hebel</small>
            <strong>PRODUKTWELTEN</strong>
          </div>
          <div className="score-pill">mobil</div>
        </div>
        <div className="audit-lines">
          <span className="wide" />
          <span />
          <span className="medium" />
          <span className="wide muted" />
        </div>
        <div className="error-row">
          <AlertTriangle size={18} />
          <p>Starke Nachfrageanker, schwacher digitaler Einstieg</p>
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
          <span className="active-logo-block" aria-label="active value">
            <span className="active-wordmark">
              <span>active</span>
              <span>value</span>
            </span>
            <span className="active-logo-url">active-value.de</span>
          </span>
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
            <p className="eyebrow">schleich Webshop-Impulsanalyse</p>
            <h1>
              Starke Produktwelten, schwacher digitaler Einstieg.
            </h1>
            <p className="hero-intro">
              Schleich hat mit HORSE CLUB, DINOSAURS und WILD LIFE klare Nachfrageanker. Wenn diese Einstiege mobil langsam, unklar oder technisch inkonsistent wirken, verliert der Shop genau dort Potenzial, wo Kaufinteresse bereits vorhanden ist.
            </p>
          </motion.div>

          <motion.aside
            className="hero-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <div className="hero-dossier-card">
              <div className="hero-dossier-head">
                <span>Analyse-Fokus</span>
                <p>Externe E-Commerce-, Nutzerführungs- und Sichtbarkeitsperspektive von active value.</p>
              </div>
              <div className="summary-card">
                <span>Kurzaussage</span>
                <h2>Die Marke ist stark. Der Hebel liegt im schnelleren Zugang zu den Spielwelten.</h2>
              </div>
              <BrowserFindingCard />
              <div className="focus-card">
                <span>Was daraus folgt</span>
                <p>Performance messbar verbessern</p>
                <p>Spielwelt-Einstiege klarer führen</p>
                <p>Suche nach Kaufintention führen</p>
                <p>Warenkorbwert markenlogisch erhöhen</p>
              </div>
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
                Die Außenprüfung zeigt: Die Substanz ist vorhanden. Der kurzfristige Hebel liegt darin, starke Nachfrageanker digital schneller, klarer und verlässlicher in Kaufimpulse zu übersetzen.
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
            schleich hat keine Markenlücke, sondern eine digitale Zugangslücke. Der Shop sollte starke Spielwelten schneller, klarer und beratender vom Interesse zum passenden Produkt übersetzen.
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
          <div className="geo-card geo-card--bruder">
            <div className="geo-copy">
              <p className="eyebrow">GEO als Zusatzspur</p>
              <h2>Wenn KI Antworten baut, müssen Spielwelten und Produktdaten lesbar werden.</h2>
              <p>
                GEO bleibt hier eine Zusatzspur. Für schleich ist sie trotzdem relevant, weil Antwortsysteme künftig stärker entscheiden, welche Marken bei konkreten Fragen sichtbar werden.
              </p>
              <p>
                Die Prüffrage ist pragmatisch: Sind Spielwelten, Produktdaten, Alterslogik, Geschenkideen und Quellen so strukturiert, dass Antwortsysteme sie korrekt lesen, einordnen und zitieren können?
              </p>
            </div>
            <div className="geo-review-box">
              <span>Mögliche Prüffragen im Review</span>
              {geoQuestions.map((question) => (
                <p key={question}><CheckCircle2 size={16} />{question}</p>
              ))}
            </div>
            <div className="geo-business-point">
              <span>Unternehmerischer Punkt</span>
              <p>
                GEO ist kein separates Trendthema. Es zeigt, wie wichtig klare Struktur, Autorität und zitierfähiger Content für Sichtbarkeit werden.
              </p>
            </div>
            <form className="geo-domain-check" action="mailto:anton.klees@active-value.de?subject=schleich%20GEO-Status%20anfragen" method="post" encType="text/plain">
              <div>
                <p className="eyebrow">Direkte Anfrage</p>
                <h3>Domain-Check für den GEO-Status anfragen</h3>
                <p>Wenn schleich die Ausgangslage direkt prüfen möchte, reicht hier die Angabe der Domain. Die Anfrage geht direkt an Anton Klees.</p>
              </div>
              <label>
                <span>Zu prüfende Domain</span>
                <input name="domain" type="text" placeholder="z. B. schleich-s.com" defaultValue="schleich-s.com" />
              </label>
              <label>
                <span>Ihr Name</span>
                <input name="name" type="text" placeholder="Vor- und Nachname" />
              </label>
              <label>
                <span>Ihre E-Mail</span>
                <input name="email" type="email" placeholder="name@unternehmen.de" />
              </label>
              <button type="submit">Analyse anfragen <ArrowRight size={17} /></button>
            </form>
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
              <a className="primary-cta" href="mailto:anton.klees@active-value.de?subject=schleich%20Webshop-Impulsanalyse">
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

      <footer className="footer footer--bruder">
        <div className="footer-address">
          <strong>active value GmbH</strong>
          <span>Benzenbergstraße 39–47</span>
          <span>40219 Düsseldorf</span>
          <a href="https://www.active-value.de">www.active-value.de</a>
        </div>
        <div className="footer-contact">
          <span>Kontakt</span>
          <strong>Anton Klees</strong>
          <a href="mailto:anton.klees@active-value.de">Mit anton.klees@active-value.de Kontakt aufnehmen</a>
          <a href="tel:+491733420483">Tel. 0173 3420483</a>
        </div>
        <p>Webshop-Impulsanalyse · Eine externe E-Commerce-, Nutzerführungs- und Sichtbarkeitsperspektive von active value</p>
      </footer>
    </div>
  );
}
