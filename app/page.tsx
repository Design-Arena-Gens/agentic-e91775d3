import { analysis } from '../data/analysis';

export default function Page() {
  const a = analysis;
  return (
    <div>
      <header className="header">
        <div className="kicker">Product Intelligence</div>
        <h1 className="h1">{a.productName}</h1>
        <p className="sub">Comprehensive, CEO?ready product narrative, SEO, prompts, and long?form content.</p>
        <p className="sub"><a href={a.canonicalUrl} target="_blank" rel="noreferrer">View on Amazon</a></p>
      </header>

      <section className="section">
        <h2>CEO?Friendly Product Titles</h2>
        <ul>
          {a.titles.map((t) => (
            <li key={t} className="badge">{t}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>SEO + Marketplace Tags</h2>
        <div className="grid">
          <div>
            <h3 className="kicker">Short SEO Keywords</h3>
            <div className="list">
              {a.seo.shortKeywords.map((k) => (
                <span key={k} className="badge">{k}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="kicker">Long?tail Keywords</h3>
            <div className="list">
              {a.seo.longKeywords.map((k) => (
                <span key={k} className="badge">{k}</span>
              ))}
            </div>
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <h3 className="kicker">Social Hashtags</h3>
          <div className="list">
            {a.seo.hashtags.map((k) => (
              <span key={k} className="badge">{k}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Unique AI Image Prompts</h2>
        {a.imagePrompts.map((p, idx) => (
          <div key={idx} className="section" style={{ margin: '12px 0', padding: 16 }}>
            <div className="grid">
              <div>
                <p><span className="kicker">Style</span><br/> {p.style}</p>
                <p><span className="kicker">Subject</span><br/> {p.subject}</p>
                <p><span className="kicker">Background</span><br/> {p.background}</p>
                <p><span className="kicker">Lighting</span><br/> {p.lighting}</p>
              </div>
              <div>
                <p><span className="kicker">Angle</span><br/> {p.angle}</p>
                <p><span className="kicker">Details</span><br/> {p.details}</p>
                <p><span className="kicker">Aesthetic</span><br/> {p.aesthetic}</p>
                <p><span className="kicker">Composition</span><br/> {p.composition}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="section article">
        <h2>{a.article.headline}</h2>
        {a.article.intro.map((p) => (<p key={p}>{p}</p>))}
        <h3 className="kicker">Problem ? Solution</h3>
        {a.article.problemSolution.map((p) => (<p key={p}>{p}</p>))}
        <h3 className="kicker">Features & Benefits</h3>
        <ul>
          {a.article.features.map((f) => (
            <li key={f.feature}><strong>{f.feature}:</strong> {f.benefit}</li>
          ))}
        </ul>
        <h3 className="kicker">Real?life Use Cases</h3>
        <ul>
          {a.article.useCases.map((u) => (<li key={u}>{u}</li>))}
        </ul>
        <h3 className="kicker">Who This Is For</h3>
        <ul>
          {a.article.whoFor.map((w) => (<li key={w}>{w}</li>))}
        </ul>
        <h3 className="kicker">Social Proof</h3>
        <ul>
          {a.article.socialProof.map((s) => (<li key={s}>{s}</li>))}
        </ul>

        <h3 className="kicker">Comparison</h3>
        <div className="section" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                {a.article.comparison.headers.map((h) => (<th key={h}>{h}</th>))}
              </tr>
            </thead>
            <tbody>
              {a.article.comparison.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (<td key={j}>{cell}</td>))}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: 12, color: '#b7b7bd' }}>
            {a.article.comparison.notes}
          </div>
        </div>

        <h3 className="kicker">FAQ</h3>
        {a.article.faqs.map((f) => (
          <details key={f.q} style={{ marginBottom: 10 }}>
            <summary><strong>{f.q}</strong></summary>
            <div style={{ paddingTop: 6 }}>
              <p>{f.a}</p>
            </div>
          </details>
        ))}

        {a.article.cta.map((p) => (<p key={p}><strong>{p}</strong></p>))}
      </section>
    </div>
  );
}
