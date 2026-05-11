import { Header } from "@/components/header"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
                Привет, я{" "}
                <span className="text-accent">Ярослав</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Студент УрФУ, мечтатель, и профессиональный прокрастинатор. 
                Изучаю программирование, пока оно не изучило меня.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/biography"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Узнать обо мне
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Проверить шанс отчисления
                </Link>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-card border border-border">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-muted flex items-center justify-center">
                      <svg className="h-16 w-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Фото Ярослава</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">(когда-нибудь будет)</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-accent/20" />
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="border-y border-border bg-card/50">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <StatCard label="Курс" value="1" sublabel="второй семестр" />
              <StatCard label="Пропущенных пар" value="999+" sublabel="и это не предел" />
              <StatCard label="Сданных сессий" value="1" sublabel="пока что" />
              <StatCard label="Шанс отчисления" value="99%" sublabel="стабильно" />
            </div>
          </div>
        </section>

        {/* Sections Preview */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-12 text-2xl font-semibold tracking-tight">Разделы сайта</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SectionCard
              href="/biography"
              title="Биография"
              description="История жизни от рождения до (почти) отчисления. Таймлайн событий и достижений."
            />
            <SectionCard
              href="/today"
              title="Ярослав сегодня"
              description="Что происходит в жизни прямо сейчас. Борьба с учёбой, мысли о будущем."
            />
            <SectionCard
              href="/meeting"
              title="Записаться на встречу"
              description="Хотите встретиться? Заполните форму с необходимыми данными."
            />
            <SectionCard
              href="/contacts"
              title="Контакты"
              description="Все способы связи с Ярославом. Telegram, VK, Instagram и другие."
            />
            <SectionCard
              href="/calculator"
              title="Калькулятор отчисления"
              description="Узнайте свои шансы на отчисление с помощью передовых технологий."
              accent
            />
          </div>
        </section>

        {/* Credits Section */}
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-center">Благодарности</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Этот сайт не появился бы без поддержки замечательных людей. 
              Спасибо всем членам группы за вдохновение и помощь.
            </p>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              <CreditCard name="Имя 1" role="Роль в проекте" />
              <CreditCard name="Имя 2" role="Роль в проекте" />
              <CreditCard name="Имя 3" role="Роль в проекте" />
              <CreditCard name="Имя 4" role="Роль в проекте" />
              <CreditCard name="Имя 5" role="Роль в проекте" />
              <CreditCard name="Имя 6" role="Роль в проекте" />
              <CreditCard name="Имя 7" role="Роль в проекте" />
              <CreditCard name="Имя 8" role="Роль в проекте" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <p className="text-center text-sm text-muted-foreground">
              2026 Yaroslav. Сделано с любовью и отчаянием.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

function StatCard({ label, value, sublabel }: { label: string; value: string; sublabel: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-foreground md:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </div>
  )
}

function SectionCard({ 
  href, 
  title, 
  description, 
  accent = false 
}: { 
  href: string
  title: string
  description: string
  accent?: boolean
}) {
  return (
    <Link
      href={href}
      className={`group block rounded-xl border p-6 transition-all hover:border-accent/50 hover:bg-card ${
        accent ? "border-accent/30 bg-accent/5" : "border-border bg-card/50"
      }`}
    >
      <h3 className="mb-2 text-lg font-medium text-foreground group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
        Перейти
        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}

function CreditCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 text-center">
      <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
        <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <p className="font-medium text-foreground text-sm">{name}</p>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  )
}
