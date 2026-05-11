# Reusable React Components

Sammlung modularer, wiederverwendbarer React-Komponenten und Hooks mit Fokus auf Struktur, Wartbarkeit und Barrierefreiheit.

Dieses Repository dient als Grundlage für skalierbare Frontend-Projekte sowie als Referenz für moderne React-Architektur mit TypeScript.

---

## Überblick

Dieses Projekt enthält:

- UI- und Layout-Komponenten
- Accessibility-Komponenten und -Utilities
- Wiederverwendbare Custom Hooks
- Utility-Funktionen
- TS Types

Ziel ist eine klare Trennung von Darstellung, Logik und Struktur, um Komponenten effizient über mehrere Projekte hinweg nutzen zu können.

---

## Features

- Modulare Komponentenstruktur (UI / Layout / Accessibility)
- Wiederverwendbare und isolierte Custom Hooks
- Fokus auf Accessibility (Skip Links, Fokus-Management, Screenreader-Support)
- TypeScript für Typsicherheit
- CSS Modules für gekapselte Styles
- Saubere und skalierbare Projektarchitektur

---

## Technologien

- React
- Next.js (App Router)
- TypeScript
- CSS Modules

---

## Projektstruktur

```bash
src/
  components/
    accessibility/
    layout/
    ui/
  lib/
    hooks/
    utils/
      data/
  styles/
  types/
```

### Beschreibung

- **components/**
  Wiederverwendbare UI- und Layout-Komponenten

- **components/accessibility/**
  Komponenten und Hooks zur Verbesserung der Barrierefreiheit
  (z. B. Skip Links, Screenreader-Helfer, Fokus-Management)

- **hooks/**
  Allgemeine Custom Hooks zur Wiederverwendung von Logik

- **utils/**
  Reine Hilfsfunktionen (z. B. String-Manipulation, Formatter)

- **styles/**
  Design Tokens und globale Styles

- **types/**
  Zentrale TypeScript-Typdefinitionen

---

## Installation

```bash
npm install
```

Projekt starten:

```bash
npm run dev
```

---

## Verwendung

Komponenten und Hooks können direkt importiert werden:

```tsx
import { SkipToContent } from "@/components/accessibility/SkipToContent";
import { useFocusOnMount } from "@/components/accessibility/useFocusOnMount";
```

Optional (bei Nutzung von Barrel Exports):

```tsx
import { SkipToContent, useFocusOnMount } from "@/components/accessibility";
```

---

## Beispiele

### useFocusOnMount

Hook zum automatischen Setzen des Fokus beim Mount eines Elements.

```tsx
import { useFocusOnMount } from "@/components/accessibility/useFocusOnMount";

export default function Example() {
  const ref = useFocusOnMount<HTMLInputElement>();

  return <input ref={ref} />;
}
```

**Verhalten:**

- Setzt Fokus beim ersten Rendern
- Kein Fehler, wenn kein Element vorhanden ist
- Funktioniert nur bei fokussierbaren Elementen

---

### SkipToContent

Accessibility-Komponente zum schnellen Überspringen von Navigationselementen.

```tsx
import { SkipToContent } from "@/components/accessibility/SkipToContent";

export default function Layout() {
  return (
    <>
      <SkipToContent />
      <main id='main'>Inhalt</main>
    </>
  );
}
```

---

## Accessibility

Dieses Projekt berücksichtigt grundlegende Accessibility-Prinzipien:

- Fokus-Management
- Skip-to-Content Links
- Screenreader-Unterstützung
- Semantische HTML-Struktur

---

## Konventionen

- Komponenten sind funktionale Komponenten (Function Components)
- Hooks beginnen mit `use`
- TypeScript wird durchgehend verwendet
- CSS wird über CSS Modules organisiert
- Keine Inline-Styles (außer begründet)

---

## Ziel

Dieses Repository dient als:

- Grundlage für wiederverwendbare Komponenten in mehreren Projekten
- Referenz für saubere und skalierbare React-Architektur
- Basis für eine mögliche zukünftige Component Library

---

## Status

Dieses Projekt befindet sich in aktiver Entwicklung.
Neue Komponenten und Hooks werden kontinuierlich ergänzt und verbessert.

---

## Lizenz

Derzeit keine öffentliche Lizenz definiert (private Nutzung).
