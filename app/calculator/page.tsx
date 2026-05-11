"use client"

import { Header } from "@/components/header"
import { useState, useEffect, useRef } from "react"

const loadingMessages = [
  "Инициализация квантового анализатора...",
  "Подключение к базе данных деканата...",
  "Анализируем посещаемость...",
  "Сверяем с долгами по предметам...",
  "Консультируемся с деканатом...",
  "Запрашиваем данные из космоса...",
  "Калибровка нейросети...",
  "Обработка 999+ пропущенных пар...",
  "Вычисляем траекторию отчисления...",
  "Синхронизация с матрицей судьбы...",
  "Финальный анализ...",
]

const codeLines = [
  "$ ssh root@urfu-dekanat.edu",
  "Password: ************",
  "Connected to URFU-MAINFRAME-v2.1",
  "Loading student database...",
  "SELECT * FROM students WHERE luck = 0;",
  "Found 1 record: YAROSLAV",
  "Analyzing attendance_log...",
  "WARNING: attendance_rate < 0.01%",
  "Running neural_network.predict()",
  "import tensorflow as tf",
  "model = load_model('expulsion_predictor')",
  "result = model.predict(student_data)",
  "Connecting to NASA satellite...",
  "Downloading cosmic_fate_data.bin",
  "Decrypting quantum_probability...",
  "ALERT: Critical threshold exceeded",
  "Generating final report...",
  "sudo rm -rf /student/hope/*",
  "Process completed with code 99",
]

export default function CalculatorPage() {
  const [stage, setStage] = useState<"idle" | "loading" | "result">("idle")
  const [messageIndex, setMessageIndex] = useState(0)
  const [glitchText, setGlitchText] = useState(false)
  const [codeIndex, setCodeIndex] = useState(0)
  const [scanLine, setScanLine] = useState(0)

  const startCalculation = () => {
    setStage("loading")
    setMessageIndex(0)
    setCodeIndex(0)
  }

  useEffect(() => {
    if (stage === "loading") {
      const interval = setInterval(() => {
        setMessageIndex((prev) => {
          if (prev >= loadingMessages.length - 1) {
            clearInterval(interval)
            setTimeout(() => setStage("result"), 1000)
            return prev
          }
          return prev + 1
        })
      }, 800)

      return () => clearInterval(interval)
    }
  }, [stage])

  useEffect(() => {
    if (stage === "loading") {
      const codeInterval = setInterval(() => {
        setCodeIndex((prev) => (prev + 1) % codeLines.length)
      }, 300)

      return () => clearInterval(codeInterval)
    }
  }, [stage])

  useEffect(() => {
    if (stage === "loading" || stage === "result") {
      const scanInterval = setInterval(() => {
        setScanLine((prev) => (prev + 1) % 100)
      }, 50)

      return () => clearInterval(scanInterval)
    }
  }, [stage])

  useEffect(() => {
    if (stage === "result") {
      const glitchInterval = setInterval(() => {
        setGlitchText(true)
        setTimeout(() => setGlitchText(false), 100)
      }, 3000)

      return () => clearInterval(glitchInterval)
    }
  }, [stage])

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 relative overflow-hidden">
        {/* Cyber Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-glow/10 via-background to-background" />
          <GridPattern />
          {/* Scan line effect */}
          {(stage === "loading" || stage === "result") && (
            <div 
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-glow/50 to-transparent pointer-events-none"
              style={{ top: `${scanLine}%` }}
            />
          )}
        </div>

        <section className="mx-auto max-w-5xl px-6 py-16 relative">
          {stage === "idle" && <IdleState onStart={startCalculation} />}
          {stage === "loading" && (
            <LoadingState 
              message={loadingMessages[messageIndex]} 
              progress={(messageIndex / (loadingMessages.length - 1)) * 100}
              codeLines={codeLines}
              codeIndex={codeIndex}
            />
          )}
          {stage === "result" && <ResultState glitch={glitchText} onReset={() => setStage("idle")} />}
        </section>

        {/* Footer */}
        <footer className="border-t border-border relative">
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

function GridPattern() {
  return (
    <div className="absolute inset-0 opacity-20">
      <div 
        className="h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 200, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 200, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}

function IdleState({ onStart }: { onStart: () => void }) {
  return (
    <div className="text-center py-20">
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-cyber-glow via-cyber-blue to-cyber-pink bg-clip-text text-transparent">
            КАЛЬКУЛЯТОР
          </span>
          <br />
          <span className="text-foreground">ОТЧИСЛЕНИЯ</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Передовые технологии для определения вашей академической судьбы
        </p>
      </div>

      {/* Decorative Box */}
      <div className="relative max-w-md mx-auto mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-glow/20 to-cyber-pink/20 blur-xl" />
        <div className="relative rounded-xl border border-cyber-glow/30 bg-card/80 backdrop-blur p-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-3 w-3 rounded-full bg-cyber-glow animate-pulse" />
            <span className="text-sm font-mono text-cyber-glow">СИСТЕМА ГОТОВА</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Нажмите кнопку для запуска анализа. Результат может шокировать.
          </p>
        </div>
      </div>

      <button
        onClick={onStart}
        className="group relative inline-flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-glow to-cyber-pink rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
        <span className="relative rounded-lg bg-gradient-to-r from-cyber-glow to-cyber-blue px-8 py-4 text-sm font-bold text-background uppercase tracking-wider">
          Запустить анализ
        </span>
      </button>
    </div>
  )
}

function LoadingState({ 
  message, 
  progress, 
  codeLines, 
  codeIndex 
}: { 
  message: string
  progress: number
  codeLines: string[]
  codeIndex: number
}) {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-cyber-glow mb-2">
          АНАЛИЗ В ПРОЦЕССЕ
        </h2>
        <p className="text-muted-foreground">Пожалуйста, подождите...</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Code Terminal */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-glow/10 to-cyber-blue/10 blur-xl" />
          <div className="relative rounded-xl border border-cyber-glow/30 bg-black/80 backdrop-blur overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-cyber-glow/20 bg-black/50">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs font-mono text-cyber-glow/70">terminal@urfu-mainframe</span>
            </div>
            {/* Terminal Content */}
            <div className="p-4 h-64 overflow-hidden font-mono text-xs">
              {codeLines.slice(0, codeIndex + 1).map((line, i) => (
                <div 
                  key={i} 
                  className={`mb-1 ${
                    line.includes('WARNING') || line.includes('ALERT') 
                      ? 'text-destructive' 
                      : line.includes('$') || line.includes('sudo')
                        ? 'text-cyber-glow'
                        : 'text-cyber-glow/70'
                  }`}
                >
                  {line}
                  {i === codeIndex && <span className="animate-pulse">_</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Status Panel */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/10 to-cyber-glow/10 blur-xl" />
          <div className="relative rounded-xl border border-cyber-glow/30 bg-card/80 backdrop-blur p-6 h-full flex flex-col justify-between">
            {/* Spinner */}
            <div className="mx-auto mb-6 h-24 w-24 relative">
              <div className="absolute inset-0 rounded-full border-2 border-cyber-glow/20" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyber-glow animate-spin" />
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-cyber-pink animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
              <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-cyber-blue animate-spin" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-mono text-cyber-glow">{Math.round(progress)}%</span>
              </div>
            </div>

            {/* Message */}
            <div className="text-center mb-6">
              <p className="font-mono text-sm text-cyber-glow h-6">
                {message}
              </p>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyber-glow to-cyber-pink transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Fake Stats */}
            <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="rounded bg-black/30 p-2">
                <span className="text-muted-foreground">CPU:</span>
                <span className="text-cyber-glow ml-1">99%</span>
              </div>
              <div className="rounded bg-black/30 p-2">
                <span className="text-muted-foreground">MEM:</span>
                <span className="text-cyber-pink ml-1">87%</span>
              </div>
              <div className="rounded bg-black/30 p-2">
                <span className="text-muted-foreground">NET:</span>
                <span className="text-cyber-blue ml-1">ACTIVE</span>
              </div>
              <div className="rounded bg-black/30 p-2">
                <span className="text-muted-foreground">STATUS:</span>
                <span className="text-yellow-500 ml-1">CRITICAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom data stream */}
      <div className="mt-6 rounded-lg border border-cyber-glow/20 bg-black/50 p-4 overflow-hidden">
        <div className="flex gap-8 animate-marquee font-mono text-xs text-cyber-glow/50">
          <span>STUDENT_ID: [CLASSIFIED]</span>
          <span>THREAT_LEVEL: MAXIMUM</span>
          <span>ATTENDANCE: 0.01%</span>
          <span>DEBT_COUNT: OVERFLOW</span>
          <span>HOPE_INDEX: NULL</span>
          <span>DEKANAT_MOOD: ANGRY</span>
          <span>STUDENT_ID: [CLASSIFIED]</span>
          <span>THREAT_LEVEL: MAXIMUM</span>
        </div>
      </div>
    </div>
  )
}

function ResultState({ glitch, onReset }: { glitch: boolean; onReset: () => void }) {
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowDetails(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="text-center py-12">
      <div className="mb-8">
        <p className="text-sm font-mono text-cyber-glow mb-4 uppercase tracking-wider animate-pulse">
          {">"} Анализ завершён {"<"}
        </p>
        <h2 className="text-xl text-muted-foreground mb-2">
          Вероятность отчисления:
        </h2>
      </div>

      {/* Result Display */}
      <div className="relative max-w-md mx-auto mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-destructive/30 to-cyber-pink/30 blur-3xl animate-pulse" />
        <div className="relative rounded-2xl border-2 border-destructive/50 bg-card/90 backdrop-blur p-12 overflow-hidden">
          {/* Glitch overlay */}
          {glitch && (
            <div className="absolute inset-0 bg-cyber-pink/20 mix-blend-overlay" />
          )}
          <div className={`transition-all ${glitch ? 'translate-x-1 skew-x-1' : ''}`}>
            <p className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-destructive via-cyber-pink to-destructive bg-clip-text text-transparent">
              99%
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-sm font-mono text-destructive uppercase">
              Критический уровень
            </span>
          </div>
        </div>
      </div>

      {/* Analysis Details */}
      <div className={`max-w-lg mx-auto mb-12 grid gap-4 md:grid-cols-2 transition-all duration-500 ${showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <StatBox label="Пропущенных пар" value="999+" status="critical" />
        <StatBox label="Долгов" value="Много" status="critical" />
        <StatBox label="Шансов на выживание" value="1%" status="warning" />
        <StatBox label="Сданных сессий" value="1" status="warning" />
      </div>

      {/* Verdict */}
      <div className={`max-w-md mx-auto mb-8 rounded-xl border border-cyber-glow/30 bg-card/80 backdrop-blur p-6 transition-all duration-500 delay-300 ${showDetails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h3 className="text-lg font-semibold text-foreground mb-2">Вердикт системы:</h3>
        <p className="text-muted-foreground">
          Ситуация стабильно безнадёжная. Рекомендуется начать готовиться к пересдачам. 
          Или к новой профессии. Возможно, пляжный волейбол?
        </p>
      </div>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="rounded-lg border border-border px-6 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
      >
        Проверить ещё раз (результат не изменится)
      </button>
    </div>
  )
}

function StatBox({ label, value, status }: { label: string; value: string; status: "critical" | "warning" }) {
  return (
    <div className={`rounded-lg border p-4 ${
      status === "critical" 
        ? "border-destructive/30 bg-destructive/5" 
        : "border-yellow-500/30 bg-yellow-500/5"
    }`}>
      <p className={`text-2xl font-bold ${
        status === "critical" ? "text-destructive" : "text-yellow-500"
      }`}>
        {value}
      </p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}
