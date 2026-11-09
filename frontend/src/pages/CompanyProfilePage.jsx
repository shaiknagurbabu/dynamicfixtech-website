import { useState } from "react";

const sourceUrl =
  "https://tracxn.com/d/legal-entities/india/dynamicfix-tech-innovation-private-limited/__ndrVYBvDysqvf2snGwCIZ8HxuVRpZJ4Xac-cY_9V3hM";

const directors = [
  { name: "Sunkara Jagadeesh Babu", appointed: "August 29, 2024" },
  { name: "Venkata Ajay Kumar Gude", appointed: "October 25, 2024" },
  { name: "Sibagathullah Yaseen Sarayana Mohamed", appointed: "January 20, 2025" },
];

const filings = [
  { name: "Form AOC-4", type: "Financial statements", date: "December 30, 2025" },
  { name: "Form MGT-7A", type: "Annual return", date: "December 31, 2025" },
  { name: "Director’s Report", type: "Annual filing", date: "December 30, 2025" },
  { name: "INC-33 eMOA", type: "Incorporation", date: "November 6, 2025" },
  { name: "Form INC-20A", type: "Commencement of business", date: "November 7, 2024" },
];

const financialMetrics = [
  "Total sales",
  "Total expenses",
  "Operating income (EBIT)",
  "EBITDA",
  "Net profit",
  "Assets and liabilities",
  "Cash flow",
  "Financial ratios",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="section-heading" id={id}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function CompanyProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span className="utility-dot" />
          <span>Company profile</span>
          <span className="utility-divider">/</span>
          <span>India</span>
          <a href={sourceUrl} target="_blank" rel="noreferrer">
            Based on supplied company information <ArrowIcon />
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="DynamicFix home" onClick={closeMenu}>
            <span className="brand-symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-wordmark">dynamic<span>fix</span></span>
          </a>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
          </button>

          <nav className={`site-nav${menuOpen ? " site-nav-open" : ""}`} aria-label="Company sections">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#activity" onClick={closeMenu}>Business activity</a>
            <a href="#financials" onClick={closeMenu}>Financials</a>
            <a href="#filings" onClick={closeMenu}>Filings</a>
            <a href="#leadership" onClick={closeMenu}>Leadership</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact details <span>↓</span></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="hero-breadcrumb"><span>India</span><i>/</i><span>Private company</span></div>
              <div className="status-pill"><span /> Active company</div>
              <h1>DynamicFix Tech<br />Innovation <em>Private Limited</em></h1>
              <p className="hero-description">
                Company information, statutory details and reported business activity in one clear profile.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#about">Explore company <span>↓</span></a>
                <a className="button button-outline" href={sourceUrl} target="_blank" rel="noreferrer">
                  View source profile <ArrowIcon />
                </a>
              </div>
            </div>
            <aside className="hero-card" aria-label="Company registration summary">
              <div className="hero-card-top">
                <span className="hero-card-icon">D</span>
                <span className="verified-label"><span /> REGISTRATION SUMMARY</span>
              </div>
              <p className="hero-card-label">Corporate identification number</p>
              <p className="hero-cin">U62091AP2024PTC115844</p>
              <div className="hero-card-divider" />
              <div className="hero-card-details">
                <div><span>Incorporated</span><strong>29 Aug 2024</strong></div>
                <div><span>Registrar</span><strong>ROC Vijayawada</strong></div>
                <div><span>Registered in</span><strong>Andhra Pradesh, India</strong></div>
              </div>
            </aside>
          </div>
          <div className="hero-foot container">
            <span>LEGAL ENTITY PROFILE</span>
            <span>INFORMATION SHARED FOR REFERENCE</span>
          </div>
        </section>

        <section className="metrics-strip" aria-label="Company at a glance">
          <div className="container metrics-grid">
            <article className="metric-item">
              <span className="metric-icon metric-icon-blue">↗</span>
              <div><span className="metric-label">Latest revenue</span><strong>₹0–10 Cr</strong><small>FY ended March 31, 2025</small></div>
            </article>
            <article className="metric-item">
              <span className="metric-icon metric-icon-green">₹</span>
              <div><span className="metric-label">Authorized capital</span><strong>₹1 lakh</strong><small>As stated in the supplied profile</small></div>
            </article>
            <article className="metric-item">
              <span className="metric-icon metric-icon-violet">◎</span>
              <div><span className="metric-label">Paid-up capital</span><strong>₹1 lakh</strong><small>As stated in the supplied profile</small></div>
            </article>
            <article className="metric-item">
              <span className="metric-icon metric-icon-amber">⌖</span>
              <div><span className="metric-label">Company status</span><strong>Active</strong><small>Private limited company</small></div>
            </article>
          </div>
        </section>

        <div className="container page-body">
          <section className="about-section section-block" aria-labelledby="about-title">
            <div className="about-copy">
              <SectionHeading
                eyebrow="01 — COMPANY OVERVIEW"
                title="About the company"
                description="A concise overview of the legal entity and the information available in the supplied company profile."
                id="about"
              />
              <p className="body-copy">
                DynamicFix Tech Innovation Private Limited is a private limited company incorporated in India on August 29, 2024. The company is registered with the Registrar of Companies, Vijayawada, and its status is listed as active.
              </p>
              <a className="inline-link" href={sourceUrl} target="_blank" rel="noreferrer">
                View the referenced company profile <ArrowIcon />
              </a>
            </div>
            <div className="company-facts">
              <div className="fact-row"><span>Legal name</span><strong>DynamicFix Tech Innovation Private Limited</strong></div>
              <div className="fact-row"><span>CIN</span><strong>U62091AP2024PTC115844</strong></div>
              <div className="fact-row"><span>Entity type</span><strong>Private Limited Company</strong></div>
              <div className="fact-row"><span>Date of incorporation</span><strong>August 29, 2024</strong></div>
              <div className="fact-row"><span>Registrar of Companies</span><strong>ROC Vijayawada</strong></div>
              <div className="fact-row"><span>Current status</span><strong><span className="inline-status" /> Active</strong></div>
            </div>
          </section>

          <section className="activity-section section-block" aria-labelledby="activity-title">
            <SectionHeading
              eyebrow="02 — WHAT THE COMPANY DOES"
              title="Principal business activity"
              description="Business activity descriptions as listed in the information provided."
              id="activity"
            />
            <div className="activity-card">
              <div className="activity-main">
                <span className="activity-index">J / 62</span>
                <div>
                  <p className="activity-kicker">Main activity group</p>
                  <h3>Information and communication</h3>
                  <p>Computer programming, consultancy and related activities</p>
                </div>
              </div>
              <div className="activity-meta">
                <span>Business activity code</span>
                <strong>62</strong>
                <span>Turnover percentage</span>
                <strong>Not specified</strong>
              </div>
            </div>
            <div className="source-note">
              <span className="note-icon">i</span>
              <p><strong>Classification note</strong> The supplied summary also labels the MCA industry classification as “Air Transport.” This differs from the stated principal activity above and should be confirmed against official filings.</p>
            </div>
          </section>

          <section className="contact-section section-block" aria-labelledby="contact-title">
            <div>
              <SectionHeading
                eyebrow="03 — GET IN TOUCH"
                title="Contact details"
                description="Registered office information available in the supplied profile."
                id="contact"
              />
            </div>
            <div className="contact-card">
              <div className="contact-card-icon">⌖</div>
              <div className="contact-card-copy">
                <span className="contact-label">REGISTERED OFFICE</span>
                <address>Door No: 24-20-49, Nallacheruvu, 9th Line,<br />Nallacheruvu, East Godavari, Ainavilli Mandal,<br />Andhra Pradesh, India — 533241</address>
                <span className="contact-email"><span className="email-dot" /> Email is masked in the supplied source</span>
              </div>
              <span className="contact-country">INDIA</span>
            </div>
          </section>

          <section className="financials-section section-block" aria-labelledby="financials-title">
            <div className="financials-heading">
              <SectionHeading
                eyebrow="04 — FINANCIAL SNAPSHOT"
                title="Financials"
                description="Financial year 2024–25, ending March 31, 2025."
                id="financials"
              />
              <span className="fy-badge">FY 2024–25</span>
            </div>
            <div className="financials-layout">
              <div className="revenue-card">
                <span className="revenue-overline">REPORTED REVENUE BAND</span>
                <strong>₹0–10 <small>Cr</small></strong>
                <span className="revenue-period">For the year ended March 31, 2025</span>
                <div className="revenue-rule"><span /></div>
                <p>The supplied profile reports revenue below ₹10 crore. Exact revenue is not included.</p>
              </div>
              <div className="financial-detail-card">
                <div className="detail-card-heading"><div><h3>Statement details</h3><p>Line-item figures were not included in the supplied information.</p></div><span>FY25</span></div>
                <div className="financial-list">
                  {financialMetrics.map((metric) => (
                    <div className="financial-row" key={metric}><span>{metric}</span><span className="not-listed">Not provided</span></div>
                  ))}
                </div>
                <p className="financial-disclaimer">Financial statements and annual return filings are listed in the documents section.</p>
              </div>
            </div>
          </section>

          <section className="filings-section section-block" aria-labelledby="filings-title">
            <div className="filings-intro">
              <SectionHeading
                eyebrow="05 — STATUTORY RECORD"
                title="Documents & filings"
                description="Recent filing items and FY 2024–25 document availability shown in the supplied profile."
                id="filings"
              />
              <div className="availability-card"><span className="availability-check">✓</span><div><strong>FY 2024–25</strong><span>Financial statements & annual return listed</span></div></div>
            </div>
            <div className="filings-table-wrap">
              <table className="filings-table">
                <thead><tr><th>DOCUMENT</th><th>FILING CATEGORY</th><th>FILING DATE</th><th /></tr></thead>
                <tbody>
                  {filings.map((filing) => (
                    <tr key={filing.name}>
                      <td><span className="document-mark">▤</span><strong>{filing.name}</strong></td>
                      <td>{filing.type}</td>
                      <td>{filing.date}</td>
                      <td><span className="filed-label">Listed</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="table-footnote">Filings are listed as described in the supplied company profile; this page does not host or verify the source documents.</p>
            </div>
          </section>

          <section className="compliance-section section-block" aria-label="Additional company records">
            <div className="compliance-card">
              <span className="compliance-icon compliance-icon-orange">◷</span>
              <div><span className="compliance-eyebrow">PAYMENT INFORMATION</span><h3>MSME payment delays</h3><p>Payment-delay figures are not included in the supplied details. A detailed report is referenced by the source.</p></div>
              <a href={sourceUrl} target="_blank" rel="noreferrer" aria-label="View MSME payment delay source information"><ArrowIcon /></a>
            </div>
            <div className="compliance-card">
              <span className="compliance-icon compliance-icon-green">▦</span>
              <div><span className="compliance-eyebrow">TAX REGISTRATION</span><h3>GSTIN details</h3><p>GSTIN numbers and filing history were not included in the supplied details.</p></div>
              <a href={sourceUrl} target="_blank" rel="noreferrer" aria-label="View GST source information"><ArrowIcon /></a>
            </div>
            <div className="compliance-card">
              <span className="compliance-icon compliance-icon-purple">◉</span>
              <div><span className="compliance-eyebrow">OWNERSHIP</span><h3>Shareholding</h3><p>Shareholding breakdown and cap table figures were not included in the supplied details.</p></div>
              <a href={sourceUrl} target="_blank" rel="noreferrer" aria-label="View shareholding source information"><ArrowIcon /></a>
            </div>
            <div className="compliance-card">
              <span className="compliance-icon compliance-icon-blue">§</span>
              <div><span className="compliance-eyebrow">LEGAL RECORD</span><h3>Legal cases</h3><p>No legal-case information was included in the supplied details.</p></div>
              <a href={sourceUrl} target="_blank" rel="noreferrer" aria-label="View legal case source information"><ArrowIcon /></a>
            </div>
          </section>

          <section className="leadership-section section-block" aria-labelledby="leadership-title">
            <div className="leadership-heading">
              <SectionHeading
                eyebrow="06 — LEADERSHIP"
                title="Board of directors"
                description="Current directors and appointment dates as listed in the supplied profile."
                id="leadership"
              />
              <span className="director-count">03 DIRECTORS</span>
            </div>
            <div className="director-grid">
              {directors.map((director, index) => (
                <article className="director-card" key={director.name}>
                  <div className={`director-avatar director-avatar-${index + 1}`}>{director.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}</div>
                  <span className="director-role"><span /> DIRECTOR · CURRENT</span>
                  <h3>{director.name}</h3>
                  <p>Appointed {director.appointed}</p>
                </article>
              ))}
            </div>
            <p className="signatory-note"><span>✓</span> The supplied summary lists all three directors as current signatories.</p>
          </section>

          <section className="closing-banner">
            <div className="closing-mark"><span /><span /><span /></div>
            <div><p>COMPANY INFORMATION</p><h2>Built around the details that matter.</h2><span>Clear company facts. Thoughtfully presented.</span></div>
            <a href="#top" className="back-top">Back to top <span>↑</span></a>
          </section>
          <p className="page-disclaimer">Information on this page is based on details supplied by the user and is presented for reference only. Confirm legal, financial and compliance information with official records before relying on it.</p>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#top">
            <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-wordmark">dynamic<span>fix</span></span>
          </a>
          <span>© {new Date().getFullYear()} DynamicFix Tech Innovation Private Limited</span>
          <a href={sourceUrl} target="_blank" rel="noreferrer">Source profile <ArrowIcon /></a>
        </div>
      </footer>
    </div>
  );
}

export default CompanyProfilePage;
