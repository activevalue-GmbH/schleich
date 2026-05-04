# Deployment-Verifikation: schleich Impulsanalyse

Stand: 2026-05-04

Die GitHub-Pages-Veröffentlichung unter `https://activevalue-gmbh.github.io/schleich/` wurde nach dem erneuten Push des `gh-pages`-Builds im Browser geprüft. Die Seite rendert nicht mehr die interne 404-Ansicht, sondern die vollständige Landingpage mit Header-Navigation, Hero-Bereich und den inhaltlichen Abschnitten `Einordnung`, `Befunde`, `Hebel`, `GEO` und `Review`.

Der zuvor sichtbare 404-Zustand wurde durch einen veralteten gecachten Build ausgelöst. Ein Cache-Buster-Aufruf zeigte den aktuellen Build; anschließend lud auch die Ziel-URL ohne Query-Parameter korrekt.

Verifizierte Ziel-URL: https://activevalue-gmbh.github.io/schleich/

Relevante Git-Stände:

| Branch | Zweck | Stand |
|---|---|---|
| `main` | Quellcode | Routing-Fix für `/schleich` und `/schleich/` gepusht |
| `gh-pages` | Statischer Build | Aktueller Build aus `dist/public/` veröffentlicht |

Visuelle Prüfung: Der Browser-Screenshot zeigt den Bruder-orientierten Dossier-Stil mit active-value/schleich-Kopf, typografischem Hero, rechter Befundkarte, Navigation und den analysenahen Befundtexten.

## Referenzprüfung Bruder für Logo und Headline

Die Bruder-Referenz zeigt im Header links ein kompaktes active-value-Originallogo als zusammenhängende Logo-Grafik mit grüner Bildmarke, weißem Icon, rechtsstehendem `active value` und darunter `active-value.de`. Daneben steht das jeweilige Kundenlogo. Die Hero-Headline ist groß, aber deutlich kontrollierter als der aktuelle schleich-Stand; sie wirkt als Editorial-These mit ungefähr fünf bis sieben Zeilen und lässt mehr Weißraum zur rechten Infokarte.

## Bruder-Maßstab für GEO-Check und Footer

Die Bruder-Referenz behandelt GEO ausdrücklich als **Zusatzspur** und nicht als großes Zukunftskapitel. Der Abschnitt besteht aus einer klaren These, einem pragmatischen Prüfrahmen, konkreten Prüffragen und einem unternehmerischen Punkt. Zusätzlich folgt direkt darunter ein kompakter Domain-Check mit wenigen Eingabefeldern. Der Footer ist ebenfalls reduziert: Absenderadresse, Kontaktperson, Mailkontakt, Telefonnummer und eine kurze Dossier-Zeile statt eines generischen Marketing-Footers.

## Live-Prüfung nach Bruder-Angleichung von GEO-Check und Footer

Die aktualisierte GitHub-Pages-Version wurde mit Cache-Buster unter `https://activevalue-gmbh.github.io/schleich/?v=geo-footer-bruder-4#geo` geprüft. Der ausgelieferte JavaScript-Build enthält die neuen Inhalte `GEO als Zusatzspur`, `Domain-Check für den GEO-Status anfragen` und `active value GmbH`; die ältere GEO-Formulierung `KI- und GEO-Zusatzspur` ist im aktuellen Build nicht mehr enthalten. Im Browser sind der reduzierte GEO-Check mit Domain-Formular sowie der an Bruder angelehnte, zurückhaltendere Abschlussbereich sichtbar.
