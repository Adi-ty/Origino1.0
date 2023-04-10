import type { ReactNode } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="pt-10">{children}</section>;
}
