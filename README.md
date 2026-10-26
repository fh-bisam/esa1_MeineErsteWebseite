# FootballZone – Meine erste Webseite

## Projektbeschreibung

FootballZone ist eine statische Webseite rund um American Football und die National Football League (NFL). Das Projekt wurde im Rahmen der Einsendeaufgabe 1 der Lehrveranstaltung Front-End Development erstellt.

Die Webseite stellt alle 32 NFL-Teams vor und bietet grundlegende Informationen über die Liga. Besucher können gezielt nach Mannschaften suchen, Teams nach ihrer Division filtern und persönliche Favoriten auswählen. Zusätzlich werden die wichtigsten Regeln und der Aufbau der NFL erklärt.

## Funktionen

Die Webseite bietet folgende Funktionen:

- **NFL-Teamübersicht:** Anzeige aller 32 Mannschaften mit Conference, Division und Heimstadion. Die Teams sind nach NFC und AFC getrennt.
- **Teamsuche:** Mannschaften können über ein Suchfeld direkt gesucht werden.
- **Divisionsfilter:** Die angezeigten Teams können auf eine der acht NFL-Divisions eingeschränkt werden.
- **Favoritenauswahl:** Mehrere Mannschaften können als Favoriten markiert und wieder entfernt werden. Die Auswahl bleibt während der aktuellen Sitzung bis zum Neuladen der Webseite erhalten.
- **NFL-Wissen:** Informationen zu den Spielregeln, der Punktevergabe, den Conferences, den Playoffs und dem Super Bowl.
- **Navigation:** Eine fixierte Navigationsleiste erleichtert den Wechsel zwischen den Bereichen. Der ausgewählte Menüpunkt wird hervorgehoben.

## Verwendete Technologien

- **HTML5:** Semantische Strukturierung der Webseite mit Elementen wie `header`, `nav`, `main`, `section`, `article`, `aside` und `footer`.
- **CSS3:** Gestaltung des Layouts, der Navigation und der Teamkarten sowie Anpassung an unterschiedliche Bildschirmgrößen.
- **TypeScript:** Umsetzung der interaktiven Funktionen und dynamische Aktualisierung der Webseite.
- **Node.js und npm:** Verwaltung des TypeScript-Compilers und Ausführung des Build-Prozesses.
- **Git und GitHub:** Versionsverwaltung und Dokumentation der einzelnen Entwicklungsschritte.

## Technische Umsetzung

Die Webseite wurde bewusst ohne zusätzliche Frontend-Frameworks wie React entwickelt. Die Umsetzung basiert auf den Grundlagen aus Modul 01 und 02 der Lehrveranstaltung.

Die Daten der 32 NFL-Teams sind direkt in einem TypeScript-Array gespeichert. Ein Interface `Team` definiert die Struktur der einzelnen Mannschaften.

Die Teamsuche und der Divisionsfilter verwenden die Array-Methode `filter()`. Mithilfe von DOM-Manipulation und Event-Handling werden die angezeigten Inhalte bei Benutzereingaben aktualisiert.

Die Favoriten werden in einem Array verwaltet. Auf eine Datenbank oder externe API wurde verzichtet, da diese für den vorgesehenen Funktionsumfang nicht erforderlich sind.

TypeScript wird mit dem TypeScript-Compiler (`tsc`) in JavaScript übersetzt.

## Projektstruktur

```text
footballzone/
├── index.html
├── style.css
├── app.ts
├── js/
│   └── app.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── lighthouse.png
└── README.md
```

Die Datei `reflexion.pdf` wird für die abschließende Abgabe ergänzt.

## Installation und Ausführung

Voraussetzung ist eine installierte Version von Node.js mit npm.

**1. Abhängigkeiten installieren**

```bash
npm install
```

**2. TypeScript kompilieren**

```bash
npm run build
```

Dadurch wird aus `app.ts` die JavaScript-Datei `js/app.js` erzeugt.

**3. Webseite öffnen**

Die Datei `index.html` kann direkt in einem Webbrowser geöffnet werden.

Alternativ kann ein lokaler HTTP-Server gestartet werden:

```bash
npx --yes http-server . -a 127.0.0.1 -p 8080 -c-1
```

Die Webseite ist anschließend über `http://127.0.0.1:8080` erreichbar.

## Barrierefreiheit

Bei der Entwicklung wurde auf semantisches HTML und eine möglichst barrierefreie Bedienung geachtet.

Die Navigation enthält ein `aria-label`. Interaktive Elemente besitzen Beschriftungen und sind mit der Tastatur bedienbar. Zusätzlich werden ARIA-Attribute verwendet, um Änderungen und ausgewählte Elemente zu kennzeichnen.

Die Webseite wurde mit Lighthouse in Microsoft Edge überprüft. Der Accessibility-Test erreichte **100 von 100 Punkten**.

Der Screenshot des Ergebnisses ist in der Datei [lighthouse.png](lighthouse.png) dokumentiert.

## Entwicklungsumgebung

Die Entwicklung erfolgte mit Visual Studio Code unter Windows. Git wurde zur Versionsverwaltung eingesetzt und GitHub zur Bereitstellung des Projekts verwendet.

Die einzelnen Entwicklungsschritte wurden mit aussagekräftigen Commits dokumentiert.

## Projektstatus

Die Webseite wurde als Einsendeaufgabe 1 erstellt. Alle vorgesehenen Funktionen sind implementiert. Der TypeScript-Build wurde erfolgreich durchgeführt und die Barrierefreiheit mit Lighthouse überprüft.