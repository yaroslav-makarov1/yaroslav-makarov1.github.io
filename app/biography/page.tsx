import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const timelineEvents = [
  {
    year: "2006",
    title: "Рождение легенды",
    description: "Ярослав появился на свет. Врачи сразу поняли - этот ребёнок особенный. Он кричал громче всех.",
  },
  {
    year: "2012",
    title: "Первый компьютер",
    description: "Получил свой первый компьютер. Начал играть в игры и говорить родителям, что это 'развивает логику'.",
  },
  {
    year: "2015",
    title: "Первая программа",
    description: "Написал первую программу на Scratch. Это был кот, который говорил 'Привет'. Революционно.",
  },
  {
    year: "2018",
    title: "Школьный программист",
    description: "Стал тем самым парнем, который 'разбирается в компьютерах'. Чинил учителям принтеры.",
  },
  {
    year: "2022",
    title: "Открытие пляжного волейбола",
    description: "Открыл для себя пляжный волейбол. Новая страсть, новая отмазка для пропуска всего.",
  },
  {
    year: "2024",
    title: "Окончание школы",
    description: "Сдал ЕГЭ. Результаты были... результатами. Главное - живой.",
  },
  {
    year: "2025",
    title: "Поступление в УрФУ",
    description: "Поступил на матмех УрФУ. Не знал, во что ввязывается. Наивный.",
  },
  {
    year: "2026",
    title: "Первая сессия",
    description: "Пережил первую сессию. Понял, что школа была детским садом. Начал задумываться о смысле жизни.",
  },
  {
    year: "2026",
    title: "Настоящее время",
    description: "Второй семестр первого курса. Продолжает учиться (иногда). Создал этот сайт. Шанс отчисления стабильно высокий.",
  },
]

export default function BiographyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="mx-auto max-w-4xl px-6 py-16">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
              Биография
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              История одного студента. От рождения до (возможного) отчисления.
              Путь, полный взлётов, падений и пропущенных пар.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={index}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">Продолжение следует...</h2>
            <p className="text-muted-foreground">
              История ещё пишется. Если Ярослава не отчислят, здесь появятся новые события.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

function TimelineItem({
  year,
  title,
  description,
  isLeft,
}: {
  year: string
  title: string
  description: string
  isLeft: boolean
}) {
  return (
    <div className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} pl-8 md:pl-0`}>
        <div className="group">
          <span className="inline-block text-sm font-mono text-accent mb-2">{year}</span>
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Dot */}
      <div className="absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full bg-accent border-2 border-background md:-translate-x-1/2" />

      {/* Empty space for the other side */}
      <div className="hidden md:block w-1/2" />
    </div>
  )
}
