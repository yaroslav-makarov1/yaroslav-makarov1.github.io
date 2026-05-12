import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  { name: "Ярослав Макаров", role: "Молодец", image: "/images/yaroslav.jpg" },
  { name: "Руслан Сафиуллин", role: "Координатор", image: "/images/team/ruslan.jpg" },
  { name: "Александр Киселев", role: "Докладчик", image: "/images/team/alexander.jpg" },
  { name: "Артем Сироткин", role: "Дизайн", image: "/images/team/artem.jpg" },
  { name: "Иван Золотов", role: "Кодер", image: "/images/team/ivan.jpg" },
  { name: "Коршняк Кирилл", role: "Вайбкодер", image: "/images/team/kirill.jpg" },
  { name: "ChatGPT", role: "", image: null },
]

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

            {/* Photo */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-card border border-border">
                <Image
                  src="/images/yaroslav.jpg"
                  alt="Ярослав Макаров"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
                />
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
              <StatCard label="Сданных сессий" value="0.5" sublabel="есть долги" />
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
              Этот сайт - коллективное творение всех людей ниже. Спасибо всем членам группы за их бесценный вклад.
            </p>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <CreditCard key={index} name={member.name} role={member.role} image={member.image} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
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

function CreditCard({ name, role, image }: { name: string; role: string; image: string | null }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 text-center">
      <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        ) : (
          <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
        )}
      </div>
      <p className="font-medium text-foreground text-sm">{name}</p>
      {role && <p className="text-xs text-muted-foreground">{role}</p>}
    </div>
  )
}
