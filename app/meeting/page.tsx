"use client"

import { Header } from "@/components/header"
import { useState } from "react"

const formFields = [
  { name: "lastName", label: "Фамилия", type: "text", placeholder: "Иванов" },
  { name: "firstName", label: "Имя", type: "text", placeholder: "Иван" },
  { name: "middleName", label: "Отчество", type: "text", placeholder: "Иванович" },
  { name: "nickname", label: "Никнейм в интернете", type: "text", placeholder: "xXx_Pro_xXx" },
  { name: "age", label: "Возраст", type: "number", placeholder: "20" },
  { name: "birthDate", label: "Дата рождения", type: "date", placeholder: "" },
  { name: "birthPlace", label: "Место рождения", type: "text", placeholder: "Екатеринбург" },
  { name: "zodiacSign", label: "Знак зодиака", type: "text", placeholder: "Козерог" },
  { name: "chineseZodiac", label: "Знак по восточному календарю", type: "text", placeholder: "Дракон" },
  { name: "bloodType", label: "Группа крови", type: "text", placeholder: "II+" },
  { name: "height", label: "Рост (см)", type: "number", placeholder: "175" },
  { name: "shoeSize", label: "Размер обуви", type: "number", placeholder: "42" },
  { name: "email", label: "Email", type: "email", placeholder: "ivan@mail.ru" },
  { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 999 123 45 67" },
  { name: "telegram", label: "Telegram", type: "text", placeholder: "@username" },
  { name: "vk", label: "ВКонтакте", type: "text", placeholder: "vk.com/id123" },
  { name: "favoriteColor", label: "Любимый цвет", type: "text", placeholder: "Синий" },
  { name: "favoriteCatBreed", label: "Любимая порода кошки", type: "text", placeholder: "Британская" },
  { name: "favoriteDogBreed", label: "Любимая порода собаки", type: "text", placeholder: "Корги" },
  { name: "favoriteFood", label: "Любимая еда", type: "text", placeholder: "Пельмени" },
  { name: "favoriteDrink", label: "Любимый напиток", type: "text", placeholder: "Чай" },
  { name: "favoriteMovie", label: "Любимый фильм", type: "text", placeholder: "Интерстеллар" },
  { name: "favoriteGame", label: "Любимая игра", type: "text", placeholder: "Brawl Stars" },
  { name: "brawlStarsRating", label: "Рейтинг в Brawl Stars", type: "number", placeholder: "25000" },
  { name: "brawlStarsFavoriteChar", label: "Любимый персонаж в Brawl Stars", type: "text", placeholder: "Spike" },
  { name: "beachVolleyballAttitude", label: "Отношение к пляжному волейболу", type: "text", placeholder: "Обожаю" },
  { name: "volleyballSkill", label: "Уровень игры в волейбол (1-10)", type: "number", placeholder: "7" },
  { name: "favoriteSubject", label: "Любимый предмет на матмехе", type: "text", placeholder: "Физкультура" },
  { name: "worstSubject", label: "Худший предмет на матмехе", type: "text", placeholder: "Всё остальное" },
  { name: "missedClassesThisWeek", label: "Пропущено пар на этой неделе", type: "number", placeholder: "15" },
  { name: "missedClassesTotal", label: "Пропущено пар всего (примерно)", type: "number", placeholder: "999" },
  { name: "sleepHours", label: "Часов сна в сутки", type: "number", placeholder: "4" },
  { name: "procrastinationLevel", label: "Уровень прокрастинации (1-10)", type: "number", placeholder: "11" },
  { name: "favoriteMusic", label: "Любимый жанр музыки", type: "text", placeholder: "Lo-fi" },
  { name: "favoriteAnime", label: "Любимое аниме", type: "text", placeholder: "Нет / Death Note" },
  { name: "pizzaTopping", label: "Любимая начинка пиццы", type: "text", placeholder: "Пепперони" },
  { name: "dreamCountry", label: "Страна мечты", type: "text", placeholder: "Япония" },
  { name: "lifeGoal", label: "Цель в жизни", type: "text", placeholder: "Не быть отчисленным" },
  { name: "superpower", label: "Желаемая суперспособность", type: "text", placeholder: "Сдавать сессию без подготовки" },
  { name: "worstFear", label: "Самый большой страх", type: "text", placeholder: "Отчисление" },
  { name: "meetingReason", label: "Причина встречи", type: "text", placeholder: "Хочу подружиться" },
  { name: "preferredDate", label: "Предпочтительная дата встречи", type: "date", placeholder: "" },
  { name: "preferredTime", label: "Предпочтительное время", type: "time", placeholder: "" },
  { name: "preferredPlace", label: "Предпочтительное место", type: "text", placeholder: "Кофейня" },
  { name: "howDidYouFindMe", label: "Как вы меня нашли?", type: "text", placeholder: "Случайно" },
  { name: "whyYaroslav", label: "Почему именно Ярослав?", type: "text", placeholder: "Он классный" },
  { name: "whatCanYouOffer", label: "Что вы можете предложить?", type: "text", placeholder: "Дружбу и печеньки" },
  { name: "secretCode", label: "Секретный код (если знаете)", type: "text", placeholder: "???" },
  { name: "agreement", label: "Согласие на обработку данных", type: "checkbox", placeholder: "" },
]

export default function MeetingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleChange = () => {
    const form = document.querySelector("form")
    if (form) {
      const inputs = form.querySelectorAll("input")
      let filled = 0
      inputs.forEach((input) => {
        if (input.type === "checkbox") {
          if (input.checked) filled++
        } else if (input.value.trim()) {
          filled++
        }
      })
      setProgress(Math.round((filled / inputs.length) * 100))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20">
          <section className="mx-auto max-w-2xl px-6 py-16 text-center">
            <div className="rounded-xl border border-accent/30 bg-card p-12">
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-4">Заявка отправлена!</h1>
              <p className="text-muted-foreground mb-2">
                Спасибо за заполнение формы.
              </p>
              <p className="text-muted-foreground">
                Ярослав рассмотрит вашу заявку в ближайшее время.
              </p>
            </div>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="mx-auto max-w-3xl px-6 py-16">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">
              Записаться на встречу
            </h1>
            <p className="text-lg text-muted-foreground">
              Хотите встретиться с Ярославом? Заполните форму ниже.
            </p>
          </div>

          {/* Warning */}
          <div className="mb-8 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
            <p className="text-sm text-destructive">
              Все поля обязательны для заполнения.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Прогресс заполнения</span>
              <span className="text-accent font-mono">{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} onChange={handleChange} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {formFields.map((field) => (
                <div key={field.name} className={field.type === "checkbox" ? "md:col-span-2" : ""}>
                  <label 
                    htmlFor={field.name}
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {field.label} <span className="text-destructive">*</span>
                  </label>
                  {field.type === "checkbox" ? (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        id={field.name}
                        name={field.name}
                        required
                        className="h-4 w-4 rounded border-border bg-input accent-accent"
                      />
                      <span className="text-sm text-muted-foreground">
                        Согласен на обработку персональных данных
                      </span>
                    </label>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      className="w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                Отправить заявку
              </button>
            </div>
          </form>
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
