import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const posts = [
  {
    date: "10 мая 2026",
    title: "Сессия близко",
    content: `Осталось несколько недель до второй сессии. Пора начинать паниковать. 
    
Список дел:
- Найти конспекты (где они вообще?)
- Понять, что было на лекциях
- Принять неизбежное

Время пошло.`,
    mood: "паника",
  },
  {
    date: "5 мая 2026",
    title: "Открытие года",
    content: `Сегодня узнал, что посещаемость влияет на оценку. Кто бы мог подумать.

В защиту скажу - я посещал... иногда. Ну, один раз точно был. Или это был сон?`,
    mood: "шок",
  },
  {
    date: "28 апреля 2026",
    title: "Пляжный волейбол возвращается",
    content: `Весна пришла - значит пора на площадку. Теперь есть чем заниматься вместо учёбы снова.

Приоритеты расставлены правильно.`,
    mood: "счастье",
  },
  {
    date: "15 апреля 2026",
    title: "Разговор с деканатом",
    content: `Вызвали в деканат. Думал, всё - конец. Оказалось, просто хотели уточнить документы.

Сердце до сих пор в пятках. Надо меньше пропускать. Или лучше прятаться.`,
    mood: "облегчение",
  },
  {
    date: "1 апреля 2026",
    title: "Brawl Stars затягивает",
    content: `Дошёл до нового ранга в Brawl Stars. Это важнее курсовой, правда?

Курсовую сдавать через месяц. Не начинал. Классика.`,
    mood: "прокрастинация",
  },
  {
    date: "15 марта 2026",
    title: "Философские размышления",
    content: `Сидел на паре по философии и думал о смысле жизни. Преподаватель спросил моё мнение. Я сказал "42". 

Он не оценил шутку. Зато я оценил свой юмор.`,
    mood: "задумчивость",
  },
]

const stats = [
  { label: "Дней без отчисления", value: "???" },
  { label: "Сданных сессий", value: "0.5" },
  { label: "Часов сна в неделю", value: "~105" },
  { label: "Рейтинг в Brawl Stars", value: "Высокий" },
]

export default function TodayPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="mx-auto max-w-4xl px-6 py-16">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
              Ярослав сегодня
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Хроники студенческой жизни. Борьба, надежда, и бесконечная прокрастинация.
            </p>
          </div>

          {/* Current Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Status Banner */}
          <div className="mb-12 rounded-xl border border-accent/30 bg-accent/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-accent animate-pulse" />
              <div>
                <p className="font-medium text-foreground">Текущий статус: Выживает</p>
                <p className="text-sm text-muted-foreground">Последнее обновление: только что</p>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="space-y-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                date={post.date}
                title={post.title}
                content={post.content}
                mood={post.mood}
              />
            ))}
          </div>

          {/* Load More (fake) */}
          <div className="mt-12 text-center">
            <button className="rounded-lg border border-border px-6 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors cursor-not-allowed">
              Загрузить ещё (когда-нибудь)
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

function PostCard({
  date,
  title,
  content,
  mood,
}: {
  date: string
  title: string
  content: string
  mood: string
}) {
  return (
    <article className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/30">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <time className="text-sm font-mono text-muted-foreground">{date}</time>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
          {mood}
        </span>
      </div>
      <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </article>
  )
}
