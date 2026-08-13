import { useState } from "react";
import Home from "./pages/Home";

// Ledger Modernism reminder: keep the application calm, editorial, evidence-first, and semantically color-coded.
export default function App() {
  const [view, setView] = useState<"landing" | "login" | "app">("landing");
  return <Home view={view} onViewChange={setView} />;
}

export type AppView = "landing" | "login" | "app";
