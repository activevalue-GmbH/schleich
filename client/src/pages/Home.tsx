import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Gauge,
  Search,
  ShieldCheck,
  Target,
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
    eyebrow: "Funnel",
    value: "45 %",
    title: "Fast jeder zweite Einstieg bricht ab",
    text: "Bei rund 317.000 monatlichen Besuchen wird der Einstieg zur kommerziellen Schlüsselfrage: Nachfrage ist da, Produktentdeckung entsteht zu selten schnell genug.",
    icon: Gauge,
  },
  {
    eyebrow: "Acquisition",
    value: "~1.900",
    title: "Organik wirkt fast nur als Markenkanal",
    text: "Wer schleich kennt, findet schleich. Wer nach Pferde-Spielzeug, Dinosaurier-Sets oder Geschenkideen sucht, wird offenbar zu selten früh genug abgeholt.",
    icon: Search,
  },
  {
    eyebrow: "Prüfbedarf",
    value: "BFSG",
    title: "Barrierefreiheit wird zum sichtbaren Trust-Thema",
    text: "Die öffentliche Erklärung macht Accessibility zum konkreten Prüfpunkt: nicht als juristische Bewertung, sondern als akuter Review-Anlass mit Markenrelevanz.",
    icon: ShieldCheck,
  },
];

const observations = [
  {
    number: "01",
    kicker: "Acquisition",
    title: "Die Marke wird gefunden. Die generische Nachfrage wird zu selten gewonnen.",
    finding: "Der Quick Check weist rund 1.900 organische Keywords aus, nahezu vollständig im Markenraum. Kaufnahe Motive wie Spielwelt, Alter, Anlass und Geschenkidee werden damit nicht konsequent als Einstiege genutzt.",
    relevance: "Für eine bekannte Marke ist das die eigentliche Wachstumslücke: Menschen mit Kaufabsicht suchen nicht zwingend nach „schleich“, sondern nach dem passenden Geschenk, Tier, Set oder Spielthema.",
    lever: "Non-Brand-Keyword-Architektur je Spielwelt entwickeln: Entdecken, Schenken, Sammeln, Alter und Starter-Sets als eigene Kategoriestruktur führen.",
  },
  {
    number: "02",
    kicker: "Conversion",
    title: "Der Einstieg muss schneller von Interesse zu Produktentdeckung führen.",
    finding: "317.000 monatliche Besuche und 45 % Bounce Rate sind kein reines Traffic-Thema. Sie zeigen, dass Orientierung, Geschwindigkeit und Produktlogik direkt am Eintrittspunkt entscheiden.",
    relevance: "Wenn Nutzer den Shop verlassen, bevor sie eine Produktseite sehen, verliert nicht die Marke an Stärke. Der Shop verliert die Chance, vorhandene Nachfrage in Auswahl, Set und Warenkorb zu übersetzen.",
    lever: "Einstiegsseiten, Suche, Filter, Produktwelt-Pfade und Cross-Sell-Logik als zusammenhängenden Funnel prüfen statt isolierte UI-Korrekturen vorzunehmen.",
  },
  {
    number: "03",
    kicker: "Trust",
    title: "Compliance und strukturierte Daten werden Teil der Commerce-Qualität.",
    finding: "Accessibility, Consent, Produktdaten und GEO sind keine Nebenthemen. Sie entscheiden mit darüber, ob Nutzer, Suchmaschinen und Antwortsysteme den Shop verlässlich lesen können.",
    relevance: "Gerade bei Spielzeug entsteht Vertrauen aus Klarheit: barrierefreie Bedienbarkeit, verständliche Produktinformationen, Alterslogik, Sicherheitshinweise und zitierfähige Antworten.",
    lever: "BFSG-/WCAG-Prüfbedarf, Consent-Setup, Produktdatenstruktur und GEO-Fähigkeit in einem kompakten Audit-Sprint priorisieren.",
  },
];

const levers = [
  {
    icon: ShieldCheck,
    title: "Compliance als akuter Prüfpfad",
    finding: "Accessibility, Consent und Produktsicherheitsinformationen sind öffentlich sichtbare Trust-Signale und sollten nicht als spätere Hygiene betrachtet werden.",
    impact: "Weniger Risiko, mehr Vertrauen und bessere Bedienbarkeit für eine Marke, die Kinder und Familien adressiert.",
    action: "BFSG-/WCAG-Scan, Consent-Kategorisierung, Produktdaten- und Checkout-Barrieren in einem priorisierten Fahrplan bündeln.",
  },
  {
    icon: Search,
    title: "Non-Brand-Sichtbarkeit aufbauen",
    finding: "Das organische Profil wirkt stark markengetrieben; kaufnahe Suchmotive rund um Alter, Anlass und Spielwelt werden zu wenig als Einstieg genutzt.",
    impact: "Mehr qualifizierte Nachfrage vor der Marke gewinnen, statt nur bestehende Markenbekanntheit zu bedienen.",
    action: "Keyword-Architektur und Kategorieseiten pro Spielwelt entwickeln: Entdecken, Schenken, Sammeln, Starter-Sets und Alterslogik.",
  },
  {
    icon: Target,
    title: "Produktentdeckung in Conversion übersetzen",
    finding: "Hoher Einstiegstraffic und starke Produktwelten erzeugen erst dann Umsatzwirkung, wenn Nutzer schnell zum passenden Produkt, Set oder Zubehör finden.",
    impact: "Weniger Absprung, klarere Orientierung und höhere Chance auf Warenkorbwert durch spielweltlogische Ergänzungen.",
    action: "Startseite, Suche, Filter, Produktwelt-Pfade und Cross-Sell als einen zusammenhängenden Entdeckungsfunnel prüfen.",
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
  "BFSG-/WCAG-Prüfbedarf und Consent-Setup priorisieren",
  "Non-Brand-Suchmotive je Spielwelt, Alter und Anlass mappen",
  "Startseite, Suche und Kategoriepfade als Entdeckungsfunnel testen",
  "Cross-Sell nach Spielwelt, Set-Logik und Ergänzungsfigur bewerten",
  "GEO-Fähigkeit von Produktdaten, FAQs und Geschenk-Guides prüfen",
];

const heroStats = [
  { label: "Besuche / Monat", value: "317k", note: "externe Schätzung" },
  { label: "Bounce Rate", value: "45 %", note: "Funnel-Signal" },
  { label: "organische Keywords", value: "~1.900", note: "fast nur Brand" },
  { label: "Leitfrage", value: "3 Hebel", note: "Compliance · SEO · Conversion" },
];

const heroLevers = [
  "Compliance prüfen",
  "Non-Brand-Sichtbarkeit aufbauen",
  "Produktentdeckung in Conversion übersetzen",
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
        <section className="hero-section hero-section--free">
          <motion.div
            className="hero-copy hero-copy--free"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="eyebrow">schleich Digital Quick Read</p>
            <div className="hero-title-wrap">
              <span className="hero-kicker-number">317k</span>
              <h1>
                Bekannte Marke.<br />
                Verlorene Nachfrage.
              </h1>
            </div>
            <p className="hero-intro">
              schleich wird gefunden, wenn Menschen bereits nach schleich suchen. Die größere Chance liegt davor: bei Eltern, die nach Pferden, Dinosauriern, Geschenkideen und passenden Spielwelten suchen – und im Shop-Einstieg zu früh wieder aussteigen.
            </p>
            <div className="hero-proof-line" aria-label="Einordnung der Datenbasis">
              <span>externe Schätzwerte</span>
              <span>April 2026</span>
              <span>kein Rechtsgutachten</span>
            </div>
          </motion.div>

          <motion.aside
            className="hero-board hero-board--calm"
            aria-label="Quick-Read-Evidenz zur schleich-Analyse"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <article className="hero-evidence-panel">
              <span className="hero-panel-label">Evidenz statt Dashboard</span>
              <div className="hero-dominant-stat">
                <strong>317k</strong>
                <p>monatliche Besuche machen den Shop-Einstieg zur kommerziellen Schlüsselfrage.</p>
              </div>
              <div className="hero-marginalia" aria-label="Zusätzliche Quick-Read-Signale">
                {heroStats.slice(1).map((stat) => (
                  <div key={stat.label}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                    <p>{stat.note}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="quick-read-card quick-read-card--inline">
              <div className="quick-read-head">
                <span>45-Minuten-Gespräch</span>
                <strong>Digital Quick Read</strong>
              </div>
              <p>Kein Pitch. Eine priorisierte Route aus drei Befunden: Compliance, Non-Brand-Sichtbarkeit und Produktentdeckung.</p>
              <div className="quick-read-levers">
                {heroLevers.map((lever) => (
                  <span key={lever}>{lever}</span>
                ))}
              </div>
            </article>
          </motion.aside>
        </section>

        <section id="einordnung" className="chapter chapter-intro">
          <SectionLabel number="1" label="Einordnung" />
          <div className="chapter-grid">
            <div>
              <p className="eyebrow">Warum wir geschaut haben</p>
              <h2 className="statement-heading">
                <span>Nicht neue Markenerzählung.</span>
                <span>Nachfrage besser übersetzen.</span>
              </h2>
            </div>
            <div className="chapter-text">
              <p>
                schleich verkauft nicht nur Figuren. Die Marke verkauft Spielwelten, Fantasie, Tiernähe, Sammelimpulse und Geschenkideen. Genau deshalb muss der Shop mehr leisten als Produktlisten: Er muss beraten, führen, ergänzen und Suchintentionen verstehen.
              </p>
              <p>
                Die Außenprüfung zeigt: Die Substanz ist vorhanden. Die Akquisechance liegt darin, Brand-Nachfrage nicht nur zu bedienen, sondern Non-Brand-Suchmotive, Spielwelt-Einstiege und Compliance-/Trust-Signale zu einem klaren Commerce-Funnel zu verbinden.
              </p>
            </div>
          </div>
        </section>

        <section className="evidence-strip" aria-label="Harte Befunde">
          {hardFindings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className={`evidence-card ${index === 0 ? "evidence-card--lead" : ""}`}
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
            <h2>Acquisition, Orientierung und Trust als ein Funnel.</h2>
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
            schleich hat keine Markenlücke. Die offene Frage ist, wie viel Nachfrage vor der Marke und wie viel Produktentdeckung im Shop noch nicht in Umsatz übersetzt wird.
          </h2>
        </section>

        <section id="hebel" className="chapter levers-chapter">
          <SectionLabel number="3" label="Hebel" />
          <div className="wide-heading compact">
            <p className="eyebrow">Drei priorisierte Ansatzpunkte</p>
            <h2>Aus dem Quick Check wird eine klare Route für Compliance, Sichtbarkeit und Conversion.</h2>
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
              <h2 className="statement-heading statement-heading--geo">
                <span>Wenn KI Antworten baut,</span>
                <span>müssen Produktdaten lesbar werden.</span>
              </h2>
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
                <h3>GEO-Status der Domain prüfen</h3>
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
            <h2>Kein Relaunch-Urteil. Eine priorisierte Prüfliste.</h2>
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
              <strong role="cell">„Compliance, Non-Brand-Sichtbarkeit und Produktentdeckung konkret priorisieren.“</strong>
            </div>
          </div>
        </section>

        <section id="review" className="review-section">
          <SectionLabel number="5" label="Review" />
          <div className="review-grid">
            <div>
              <p className="eyebrow">Vorschlag für den nächsten Schritt</p>
              <h2>45-Minuten-Quick-Read: drei Befunde, nächste Schritte.</h2>
              <p>
                Sinnvoll ist kein allgemeiner Austausch, sondern ein fokussierter Quick Read: Was zeigt der externe Blick zu Compliance, Non-Brand-Sichtbarkeit und Produktentdeckung – und welche Maßnahmen gehören in das nächste Quartal?
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
