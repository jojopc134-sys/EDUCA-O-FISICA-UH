import ScrollReveal from "./ScrollReveal";
import TypewriterName from "./TypewriterName";

const participants = [
  { name: "JOÃO VITOR SANTOS" },
  { name: "VICTOR ARAÚJO" },
  { name: "MARIA EDUARDA FERREIRA" },
  { name: "LUÍZA LÓTUS" },
];

const importanceItems = [
  {
    label: "Saúde Física",
    desc: "Melhora o condicionamento cardiovascular, a coordenação motora e a resistência muscular.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: "Saúde Mental",
    desc: "A prática ao ar livre, especialmente em ambientes como a praia, reduz o estresse e melhora o bem-estar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    label: "Socialização",
    desc: "O beach tennis reúne pessoas de diferentes origens e estimula o trabalho em equipe e a amizade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Inclusão Social",
    desc: "Projetos esportivos com beach tennis alcançam pessoas surdas, crianças em situação vulnerável e diferentes realidades sociais.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    label: "Hábitos Saudáveis",
    desc: "O contato com o esporte desde cedo forma rotinas de atividade física que duram para a vida toda.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Crescimento do Esporte",
    desc: "O Brasil é o país com mais praticantes no mundo, mostrando o potencial transformador da modalidade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="site-wrapper">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            Educação Física · 3° A
          </div>
          <h1 className="hero-title">
            Beach Tennis
            <br />
            <span className="gradient-text">Esporte &amp; Sociedade</span>
          </h1>
          <p className="hero-subtitle">
            Uma análise sobre o crescimento do beach tennis no Brasil, seus dados estatísticos e o impacto social da modalidade no cotidiano das pessoas.
          </p>
          <div className="hero-scroll-indicator">
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      <div className="glow-sep" />

      {/* ── QUESTÃO 1 ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-number">1</div>
              <div className="section-title-group">
                <div className="section-label">Questão 1</div>
                <h2 className="section-title">Notícia Recente — Avanço Social no Esporte</h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card">
              <div className="card-body">
                <p>
                  O <strong>Santos Open Beach Tennis</strong>, realizado na Praia do Gonzaga, em Santos, reuniu cerca de <strong>700 atletas</strong> durante o feriadão de 1º de maio. Além das competições, houve clínicas especiais para iniciantes.
                </p>
                <br />
                <p>
                  A iniciativa teve como objetivo aproximar crianças e jovens do beach tennis, estimular hábitos saudáveis e transformar o campeonato em um grande <strong>evento esportivo e cultural</strong> para a comunidade.
                </p>

                <a
                  href="https://www.santos.sp.gov.br/?q=noticia/atracao-no-feriadao-santos-beach-tennis-faz-clinica-com-alunos-da-rede-municipal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Ver Notícia Completa
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div style={{
              marginTop: 16,
              padding: "12px 20px",
              borderRadius: "var(--radius-sm)",
              background: "rgba(255,140,0,0.06)",
              border: "1px solid rgba(255,140,0,0.15)",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Fonte: Prefeitura de Santos — Notícia publicada em 2025
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="glow-sep" />

      {/* ── QUESTÃO 2 ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-number">2</div>
              <div className="section-title-group">
                <div className="section-label">Questão 2</div>
                <h2 className="section-title">Dado Estatístico — Beach Tennis no Brasil</h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="stat-grid">
              <div className="stat-box">
                <div className="stat-value gradient-text">1,5M</div>
                <div className="stat-label">Praticantes no Brasil</div>
              </div>
              <div className="stat-box">
                <div className="stat-value gradient-text">#1</div>
                <div className="stat-label">País com mais jogadores no mundo</div>
              </div>
              <div className="stat-box">
                <div className="stat-value gradient-text">Alto</div>
                <div className="stat-label">Crescimento nos últimos anos</div>
              </div>
            </div>
          </ScrollReveal>

          <div className="speaker-grid">
            <ScrollReveal delay={150}>
              <div className="speaker-card">
                <div className="speaker-tag">
                  <div className="speaker-tag-dot" />
                  1
                </div>
                <p className="speaker-text">
                  Atualmente, o Brasil possui cerca de <strong style={{ color: "var(--text)" }}>1,5 milhão de praticantes</strong> de beach tennis, sendo considerado o país com o maior número de jogadores no mundo.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <div className="speaker-card">
                <div className="speaker-tag">
                  <div className="speaker-tag-dot" />
                  2
                </div>
                <p className="speaker-text">
                  Além de ser uma atividade de lazer, o beach tennis também se tornou um esporte muito importante para a <strong style={{ color: "var(--text)" }}>saúde, socialização e inclusão social</strong> em diversas comunidades.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="glow-sep" />

      {/* ── QUESTÃO 3 ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <div className="section-number">3</div>
              <div className="section-title-group">
                <div className="section-label">Questão 3</div>
                <h2 className="section-title">Qual é a importância de praticar esta modalidade?</h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="card" style={{ marginBottom: 20 }}>
              <div className="card-body">
                <p>
                  O beach tennis melhora o condicionamento físico, a coordenação e a saúde mental — tudo isso ao ar livre, o que torna o hábito mais fácil de manter. O esporte aproxima pessoas de todas as idades e realidades.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="importance-grid">
            {importanceItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={100 + i * 60}>
                <div className="importance-item">
                  <div className="importance-icon">{item.icon}</div>
                  <div className="importance-label">{item.label}</div>
                  <div className="importance-desc">{item.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTICIPANTES ─────────────────────────────────────── */}
      <section className="participants-section">
        <div className="container">
          <ScrollReveal>
            <div className="participants-header">
              <div className="participants-eyebrow">Integrantes do Grupo</div>
              <h2 className="participants-title">Participantes</h2>
              <div className="divider" />
            </div>
          </ScrollReveal>

          <div className="participants-list">
            {participants.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 180}>
                <div className="participant-row">
                  <span className="participant-name-wrap">
                    <TypewriterName name={p.name} delay={i * 200} />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="footer">
        <p>Trabalho de Educação Física &mdash; <span className="gradient-text" style={{ fontSize: "inherit" }}>Beach Tennis</span> &mdash; 3° A</p>
      </footer>

    </div>
  );
}
