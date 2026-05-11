"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/biography", label: "Биография" },
  { href: "/today", label: "Ярослав сегодня" },
  { href: "/meeting", label: "Записаться" },
  { href: "/contacts", label: "Контакты" },
  { href: "/calculator", label: "Шанс отчисления" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link 
          href="/" 
          className="text-xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          Yaroslav
        </Link>
        
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-accent",
                  pathname === item.href 
                    ? "text-accent" 
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <MobileMenu pathname={pathname} />
      </nav>
    </header>
  )
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <div className="md:hidden">
      <details className="group relative">
        <summary className="list-none cursor-pointer p-2">
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-card p-2 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary",
                pathname === item.href
                  ? "text-accent bg-secondary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  )
}
