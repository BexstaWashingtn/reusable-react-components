# Reusable React Components

Sammlung wiederverwendbarer React-Komponenten und Hooks mit Fokus auf Struktur, Wartbarkeit und Barrierefreiheit.

## Überblick

Dieses Repository enthält:

- UI-Komponenten (z.B. Container, Stack, BackgroundGradient, Link)
- Utility-Komponenten für Accessibility
- Custom Hooks zur Wiederverwendung von Logik

Ziel ist eine saubere Trennung von Darstellung, Logik und Struktur sowie eine konsistente Nutzung über mehrere Projekte hinweg.

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
      a11y.module.css
      a11y.tsx
      SkipToContent.tsx
      SrOnly.tsx
      useFocusOnMount.ts
    layout/
      background/
        backgrondGradient.tsx
        backgrondGradient.module.css
        backgroundImage.tsx
        backgroundImage.module.css
      container/
        Container.tsx
        container.module.css
      stack/
        Stack.tsx
        stack.module.css
    ui/
      Link/
        link.module.css
        Link.tsx
  hooks/
  styles/
    gloabls/
      tokens.css
    normalize.css
    styles.css
```

### Beschreibung

- **components/**
  Wiederverwendbare UI-Komponenten

- **accessibility/**
  Komponenten und Hooks zur Verbesserung der Barrierefreiheit
  (z. B. Skip Links, Screenreader-Helfer, Fokus-Management)

- **hooks/**
  Allgemeine Custom Hooks (nicht zwingend a11y-bezogen)

- **styles/**
  Design Tokens und globale Styles

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
import { SkipToContent } from "@/accessibility/a11y";
import { useFocusOnMount } from "@/accessibility/useFocusOnMount";
```

---

## Beispiel: useFocusOnMount

Hook zum automatischen Setzen des Fokus beim Mount eines Elements.

```tsx
import { useFocusOnMount } from "@/accessibility/useFocusOnMount";

export default function Example() {
  const ref = useFocusOnMount<HTMLInputElement>();

  return <input ref={ref} />;
}
```

### Verhalten

- Setzt Fokus beim ersten Rendern
- Kein Fehler, wenn kein Element vorhanden ist
- Funktioniert nur bei fokussierbaren Elementen

---

## Accessibility

Dieses Projekt berücksichtigt grundlegende Accessibility-Prinzipien:

- Fokus-Management
- Skip-to-Content Links
- Screenreader-Unterstützung
- Semantische Struktur

---

## Konventionen

- Komponenten sind funktional (Function Components)
- Hooks beginnen mit `use`
- TypeScript wird durchgehend verwendet
- CSS über CSS Modules
- Keine Inline-Styles (außer begründet)

---

## Ziel

Ziel dieses Repositories ist der Aufbau einer stabilen, wiederverwendbaren Komponentenbasis für zukünftige Projekte.

---

## Lizenz

Private Nutzung / noch keine öffentliche Lizenz definiert
