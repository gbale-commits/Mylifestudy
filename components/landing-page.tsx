import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { faqItems, featureHighlights, navItems, pricingTiers, teachers } from "@/lib/site-config";

export function LandingPage() {
  return (
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[rgba(240,247,255,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-lg font-black text-white shadow-lg shadow-sky-200">
              M
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900">Mylifestudy</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">IA éducative</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-sky-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/login" className="hidden text-sm font-semibold text-slate-700 sm:inline-flex">
              Connexion
            </a>
            <Button variant="primary" className="px-4 py-2.5 text-sm">
              Commencer gratuitement
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.20),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.18),_transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6 pb-18 pt-16 lg:px-8 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Apprends mieux, plus vite grâce à l’IA
                </div>

                <h1 className="max-w-xl text-5xl font-black leading-none tracking-[-0.06em] text-slate-950 md:text-6xl">
                  L’IA qui motive chaque apprentissage.
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                  Mylifestudy aide les élèves à réussir leurs examens, à progresser en continu et à développer des compétences durables grâce à des parcours personnalisés.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="px-6 py-3.5">Commencer gratuitement</Button>
                  <Button variant="secondary" className="px-6 py-3.5">
                    Découvrir les professeurs IA
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-600">
                  <div>
                    <div className="text-2xl font-black text-slate-900">12k+</div>
                    <div>apprenants actifs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">94%</div>
                    <div>satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">4.9/5</div>
                    <div>expérience</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="glass-panel relative overflow-hidden rounded-[32px] border border-sky-100 bg-white/75 p-5 shadow-[0_30px_80px_rgba(59,130,246,0.12)]">
                  <div className="rounded-[26px] bg-gradient-to-br from-slate-950 via-sky-950 to-blue-900 p-6 text-white">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
                        Session IA
                      </div>
                      <div className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                        +120 XP
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-sky-500 font-bold text-slate-950">
                          N
                        </div>
                        <div>
                          <div className="font-semibold">Nova</div>
                          <div className="text-xs text-sky-100/80">Professeur IA</div>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm text-sky-50">
                        <div className="rounded-2xl bg-white/5 p-3 text-sky-100">
                          “Tu as bien compris la logique, on va maintenant accélérer sur les exercices de synthèse.”
                        </div>
                        <div className="ml-auto max-w-[82%] rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 p-3 text-white">
                          J’ai compris. Quelle est la prochaine étape pour une meilleure mémorisation ?
                        </div>
                        <div className="rounded-2xl bg-white/5 p-3 text-sky-100">
                          Fais 3 mini-quiz, puis je te donne une fiche ultra-claire pour réviser en 10 minutes.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Pourquoi Mylifestudy</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950">Une expérience pensé pour avancer, pas pour se fatiguer.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featureHighlights.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-lg text-white shadow-lg shadow-sky-200">
                    ✦
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="teachers" className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Professeurs IA</p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-white">Choisis ton coach d’apprentissage.</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {teachers.map((teacher) => (
                <Card key={teacher.name} className="border-slate-800 bg-slate-900/80 p-5 text-white shadow-none">
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${teacher.accent} text-2xl font-black text-white`}>
                    {teacher.name[0]}
                  </div>
                  <div className="mb-2 text-xl font-bold">{teacher.name}</div>
                  <div className="mb-3 text-sm font-medium text-sky-300">{teacher.role}</div>
                  <p className="mb-4 text-sm leading-7 text-slate-300">{teacher.description}</p>
                  <div className="space-y-2 text-xs text-slate-400">
                    <div><span className="font-semibold text-slate-200">Spécialité :</span> {teacher.specialty}</div>
                    <div><span className="font-semibold text-slate-200">Niveau :</span> {teacher.level}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="quiz" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Quiz intelligent</p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950">Des évaluations qui apprennent avec toi.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Choisis la matière, le niveau et le nombre de questions. L’IA génère un quiz adapté à ton niveau et t’explique chaque réponse.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Mathématiques",
                  "Sciences",
                  "Histoire",
                  "Langues",
                ].map((subject) => (
                  <span key={subject} className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800">
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[30px] border border-sky-100 bg-white/75 p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-sky-50 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-sky-700">Matière</div>
                  <div className="mt-3 text-lg font-bold text-slate-900">Physique</div>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Niveau</div>
                  <div className="mt-3 text-lg font-bold text-slate-900">Intermédiaire</div>
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Questions</div>
                  <div className="mt-3 text-lg font-bold text-slate-900">10</div>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-emerald-700">XP</div>
                  <div className="mt-3 text-lg font-bold text-slate-900">+50</div>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] bg-slate-950 p-5 text-white">
                <div className="mb-2 text-sm text-sky-300">Question 3</div>
                <div className="text-lg font-semibold">
                  Quelle énergie est convertie en énergie lumineuse dans une ampoule électrique ?
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">Énergie thermique</div>
                  <div className="rounded-xl border border-sky-500 bg-sky-500/10 p-3 text-sky-200">Énergie électrique</div>
                  <div className="rounded-xl border border-slate-700 bg-slate-900 p-3">Énergie mécanique</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-gradient-to-br from-sky-50 via-white to-blue-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Tarifs</p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950">Choisissez le plan qui vous convient.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`${tier.featured ? "border-sky-200 bg-gradient-to-b from-sky-600 to-blue-700 text-white" : "bg-white text-slate-900"}`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className={`text-2xl font-black ${tier.featured ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
                    {tier.featured ? <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">Populaire</span> : null}
                  </div>

                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-black ${tier.featured ? "text-white" : "text-slate-900"}`}>{tier.price}</span>
                    {tier.period ? <span className={`${tier.featured ? "text-sky-100" : "text-slate-500"}`}>{tier.period}</span> : null}
                  </div>

                  <p className={`mt-4 text-sm leading-7 ${tier.featured ? "text-sky-100" : "text-slate-600"}`}>
                    {tier.description}
                  </p>

                  <ul className={`mt-6 space-y-3 text-sm ${tier.featured ? "text-sky-50" : "text-slate-700"}`}>
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ${tier.featured ? "bg-white/15 text-white" : "bg-sky-100 text-sky-700"}`}>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.featured ? "primary" : "secondary"}
                    className={`mt-8 w-full ${tier.featured ? "bg-white text-sky-700 hover:bg-sky-50" : ""}`}
                  >
                    {tier.featured ? "Essayer Premium" : "Commencer"}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">FAQ</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950">Questions fréquentes</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="glass-panel rounded-[24px] border border-sky-100 bg-white/80 p-5">
                <div className="text-lg font-semibold text-slate-900">{item.question}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-sky-100 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-slate-600 md:flex-row lg:px-8">
          <div className="font-semibold text-slate-900">Mylifestudy</div>
          <div>Apprends mieux, plus vite grâce à l’IA.</div>
          <div>© 2026 Mylifestudy</div>
        </div>
      </footer>
    </div>
  );
}
