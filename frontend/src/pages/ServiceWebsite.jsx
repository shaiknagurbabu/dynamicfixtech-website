import { useEffect, useState } from "react";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Web & mobile apps",
    description: "Build useful digital products with web and mobile applications shaped around your business and customers.",
    tags: ["Web development", "Mobile apps"],
    tone: "mint",
  },
  {
    number: "02",
    icon: "▥",
    title: "Data analytics",
    description: "Turn business data into clearer insights that help your teams make more informed decisions.",
    tags: ["Data insights", "Business intelligence"],
    tone: "gold",
  },
  {
    number: "03",
    icon: "◎",
    title: "Salesforce CRM",
    description: "Bring customer relationships and business workflows together with CRM solutions built around your needs.",
    tags: ["CRM solutions", "Workflow support"],
    tone: "blue",
  },
  {
    number: "04",
    icon: "↗",
    title: "IT staffing",
    description: "Strengthen your technical teams with staffing support aligned to your project and business goals.",
    tags: ["Technical talent", "Team support"],
    tone: "peach",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand your goals",
    description: "Tell us about your business, current challenges and what you want to achieve.",
  },
  {
    number: "02",
    title: "Shape the right solution",
    description: "Explore a practical approach across development, data, CRM or technical staffing.",
  },
  {
    number: "03",
    title: "Deliver, support and grow",
    description: "Move forward with quality-focused delivery and 24/7 customer support.",
  },
];

const faqs = [
  {
    question: "What services does DynamicFix provide?",
    answer: "DynamicFix offers web and mobile application development, data analytics, Salesforce CRM solutions and IT staffing services.",
  },
  {
    question: "Can I enquire about more than one service?",
    answer: "Yes. Share the business goals or challenges you want to address, and the DynamicFix team can discuss which capabilities may be relevant.",
  },
  {
    question: "Does DynamicFix provide ongoing support?",
    answer: "DynamicFix describes its customer support as available 24/7. Contact the team to discuss support needs for a specific engagement.",
  },
  {
    question: "Where is DynamicFix based?",
    answer: "The registered office is in Andhra Pradesh, India. This is the registered office address; service coverage and delivery locations are not specified here.",
  },
];

const solutionGoals = [
  {
    id: "digital-product",
    label: "Build a digital product",
    detail: "Plan a web or mobile application around a customer or business need.",
    services: ["Web & mobile apps"],
  },
  {
    id: "data-insights",
    label: "Make better use of data",
    detail: "Explore analytics to help teams make more informed decisions.",
    services: ["Data analytics"],
  },
  {
    id: "customer-workflows",
    label: "Improve customer workflows",
    detail: "Consider CRM and connected workflows for customer relationships.",
    services: ["Salesforce CRM"],
  },
  {
    id: "technical-team",
    label: "Grow a technical team",
    detail: "Explore IT staffing support for your team's technical needs.",
    services: ["IT staffing"],
  },
  {
    id: "multiple-goals",
    label: "I have a few goals",
    detail: "Bring multiple needs together and start with a broader conversation.",
    services: ["Web & mobile apps", "Data analytics", "Salesforce CRM", "IT staffing"],
  },
];

const projectChecklist = [
  "Describe the business challenge you want to solve",
  "Choose the service area that best fits your goal",
  "List the people or teams who will use the solution",
  "Note any important timing or constraints",
];

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#home" aria-label="DynamicFix home">
      <img
        className="brand-logo"
        alt="DynamicFix Tech logo"
        src={`${import.meta.env.BASE_URL}dynamicfix-logo.jpg`}
        onLoad={(event) => { event.currentTarget.dataset.loaded = "true"; }}
        onError={(event) => { event.currentTarget.hidden = true; }}
      />
      <span className="brand-monogram" aria-hidden="true">DF</span>
      <span className="brand-name">dynamic<span>fix</span></span>
    </a>
  );
}

function ServiceWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [darkTheme, setDarkTheme] = useState(
    () => window.localStorage.getItem("dynamicfix-theme") === "dark",
  );
  const closeMenu = () => setMenuOpen(false);

  const selectedGoalDetails = solutionGoals.find((goal) => goal.id === selectedGoal);

  function toggleChecklistItem(item) {
    setCheckedItems((items) =>
      items.includes(item)
        ? items.filter((checkedItem) => checkedItem !== item)
        : [...items, item],
    );
  }

  useEffect(() => {
    window.localStorage.setItem("dynamicfix-theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <div className="service-site" data-theme={darkTheme ? "dark" : "light"} id="home">
      <header className="service-header">
        <div className="service-container header-inner">
          <Brand />
          <div className="header-actions">
            <nav className={`main-nav${menuOpen ? " main-nav-open" : ""}`} aria-label="Main navigation">
              <a href="#services" onClick={closeMenu}>Solutions</a>
              <a href="#solution-finder" onClick={closeMenu}>Find a solution</a>
              <a href="#how-it-works" onClick={closeMenu}>Our approach</a>
              <a href="#why-dynamicfix" onClick={closeMenu}>Why DynamicFix</a>
              <a href="#about" onClick={closeMenu}>About us</a>
              <a href="#faq" onClick={closeMenu}>FAQ</a>
              <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <span>↗</span></a>
            </nav>
            <button
              aria-label={`Switch to ${darkTheme ? "light" : "dark"} theme`}
              aria-pressed={darkTheme}
              className="theme-toggle"
              onClick={() => setDarkTheme((current) => !current)}
              type="button"
            >
              <svg aria-hidden="true" className="theme-icon" viewBox="0 0 24 24" fill="none">
                {darkTheme ? (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                  </>
                ) : (
                  <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
                )}
              </svg>
            </button>
            <button
              className={`nav-toggle${menuOpen ? " nav-toggle-open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="service-hero">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="service-container hero-layout">
            <div className="hero-copy">
              <span className="eyebrow"><i /> TECHNOLOGY THAT MOVES BUSINESS FORWARD</span>
              <h1>Ideas into<br /><em>impact.</em></h1>
              <p className="hero-lede">
                DynamicFix Tech Innovation helps organizations build digital products, unlock data insights, improve customer relationships and grow technical teams.
              </p>
              <div className="hero-buttons">
                <a className="button button-primary" href="#services">Explore our solutions <span>↓</span></a>
                <a className="button button-quiet" href="#how-it-works">Our approach <span>↗</span></a>
              </div>
              <div className="hero-note">
                <span className="note-avatars" aria-hidden="true"><i>D</i><i>F</i><i>+</i></span>
                <span>Customer-first delivery. 24/7 support.</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustration of a digital dashboard and technology solutions">
              <div className="visual-sun" />
              <div className="tech-dashboard">
                <div className="dashboard-topbar"><span /><span /><span /><i>dynamicfix / insights</i></div>
                <div className="dashboard-content">
                  <div className="dashboard-sidebar"><b /><i /><i /><i /><i /></div>
                  <div className="dashboard-main">
                    <div className="dashboard-title"><span /><i /></div>
                    <div className="dashboard-metrics"><i /><i /><i /></div>
                    <div className="dashboard-chart">
                      <span /><span /><span /><span /><span /><span /><span />
                      <i />
                    </div>
                    <div className="dashboard-footer"><i /><i /><i /></div>
                  </div>
                </div>
              </div>
              <div className="floating-card card-tool">
                <span className="tool-icon">&lt;/&gt;</span>
                <span><strong>Digital solutions</strong><small>Built around your business</small></span>
                <span className="tool-check">✓</span>
              </div>
              <div className="floating-card card-spark"><span>✦</span><strong>Better insights.<br />Smarter decisions.</strong></div>
              <div className="visual-caption">BUILD. CONNECT. GROW.</div>
            </div>
          </div>
          <div className="service-container hero-bottom">
            <span>YOUR PARTNER IN DIGITAL TRANSFORMATION</span>
            <a href="#services">Discover our capabilities <span>↓</span></a>
          </div>
        </section>

        <section className="service-strip" aria-label="Technology capabilities">
          <div className="service-container strip-inner">
            <span>TECHNOLOGY FOR BUSINESS GROWTH</span>
            <div><i>&lt;/&gt;</i> Web & mobile</div>
            <div><i>▥</i> Data analytics</div>
            <div><i>◎</i> Salesforce CRM</div>
            <div><i>↗</i> IT staffing</div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="service-container">
            <div className="section-topline">
              <div>
                <span className="eyebrow eyebrow-dark">OUR IT SOLUTIONS</span>
                <h2>Technology for what’s next.</h2>
                <p className="section-intro">From building digital products to strengthening teams, we bring together the services that help businesses keep moving.</p>
              </div>
              <span className="section-count">01 <i>—</i> 04</span>
            </div>

            <div className="service-cards">
              {services.map((service) => (
                <article className={`service-card service-card-${service.tone}`} key={service.number}>
                  <div className="service-card-top">
                    <span className="service-card-icon">{service.icon}</span>
                    <span className="service-number">{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href="#contact" aria-label={`Ask us about ${service.title}`}>Ask us about this <span>↗</span></a>
                </article>
              ))}
            </div>
            <p className="service-footnote">Looking for a solution tailored to your organization? Let’s start with a conversation about your goals.</p>
          </div>
        </section>

        <section className="connected-section section-pad" aria-labelledby="connected-title">
          <div className="service-container">
            <div className="connected-heading">
              <span className="eyebrow eyebrow-dark">A CONNECTED APPROACH</span>
              <h2 id="connected-title">Different strengths.<br /><em>One business vision.</em></h2>
              <p>Bring together the capabilities that fit your goals. Start with one need, or explore how digital products, data, CRM and technical talent can support the bigger picture.</p>
            </div>
            <div className="connected-flow" aria-label="DynamicFix technology capabilities">
              {services.map((service, index) => (
                <article className="connected-item" key={service.number}>
                  <span className="connected-number">{service.number}</span>
                  <span className="connected-icon">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{["Create digital experiences", "See data more clearly", "Connect customer workflows", "Strengthen technical teams"][index]}</p>
                  {index < services.length - 1 && <span className="connected-arrow" aria-hidden="true">→</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solution-finder section-pad" id="solution-finder">
          <div className="service-container">
            <div className="finder-heading">
              <span className="eyebrow eyebrow-dark">INTERACTIVE SOLUTION FINDER</span>
              <h2>What would you like<br /><em>to move forward?</em></h2>
              <p>Choose the goal that sounds closest. We’ll show the related DynamicFix services as a useful starting point.</p>
            </div>
            <div className="finder-layout">
              <div className="goal-options" role="group" aria-label="Choose a business goal">
                {solutionGoals.map((goal) => (
                  <button
                    aria-pressed={selectedGoal === goal.id}
                    className={`goal-option${selectedGoal === goal.id ? " goal-option-selected" : ""}`}
                    key={goal.id}
                    onClick={() => {
                      setSelectedGoal(goal.id);
                    }}
                    type="button"
                  >
                    <span className="goal-radio" />
                    <span><strong>{goal.label}</strong><small>{goal.detail}</small></span>
                    <span className="goal-arrow">↗</span>
                  </button>
                ))}
              </div>
              <aside className="recommendation-card" aria-live="polite">
                <span className="recommendation-label">YOUR STARTING POINT</span>
                {selectedGoalDetails ? (
                  <>
                    <h3>{selectedGoalDetails.label}</h3>
                    <p>{selectedGoalDetails.detail}</p>
                    <div className="recommendation-services">
                      {selectedGoalDetails.services.map((service) => (
                        <span key={service}><i>✓</i>{service}</span>
                      ))}
                    </div>
                    <a href="#contact">Discuss this capability <span>↓</span></a>
                  </>
                ) : (
                  <>
                    <h3>Start with your goal.</h3>
                    <p>Select an option to see which capabilities may be relevant. This is a general guide, not a formal assessment.</p>
                    <div className="recommendation-placeholder">Choose a goal to get started <span>←</span></div>
                  </>
                )}
              </aside>
            </div>
          </div>
        </section>

        <section className="readiness-section section-pad" id="project-readiness">
          <div className="service-container readiness-layout">
            <div className="readiness-intro">
              <span className="eyebrow eyebrow-dark">A PRACTICAL START</span>
              <h2>Make your next<br /><em>conversation count.</em></h2>
              <p>A few notes can help you explain what you need. Use this optional checklist to organize your thoughts before getting in touch.</p>
              <div className="readiness-progress" aria-live="polite">
                <span>{checkedItems.length} of {projectChecklist.length} ready</span>
                <div
                  aria-label={`${checkedItems.length} of ${projectChecklist.length} checklist items complete`}
                  className="readiness-progress-track"
                  role="img"
                >
                  <span style={{ width: `${(checkedItems.length / projectChecklist.length) * 100}%` }} />
                </div>
              </div>
            </div>
            <div className="readiness-list" aria-label="Project readiness checklist">
              {projectChecklist.map((item, index) => {
                const checked = checkedItems.includes(item);
                return (
                  <label className={`readiness-item${checked ? " readiness-item-checked" : ""}`} key={item}>
                    <input checked={checked} onChange={() => toggleChecklistItem(item)} type="checkbox" />
                    <span className="readiness-check" aria-hidden="true">{checked ? "✓" : String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </label>
                );
              })}
              <a className="readiness-contact-link" href="#contact">I’m ready to talk <span>↓</span></a>
            </div>
          </div>
        </section>

        <section className="how-section section-pad" id="how-it-works">
          <div className="service-container how-layout">
            <div className="how-copy">
              <span className="eyebrow eyebrow-light">PARTNERING FOR PROGRESS</span>
              <h2>Built around<br /><em>your business.</em></h2>
              <p>Good technology starts with understanding people and business needs. We bring a customer-first mindset to every solution, team and engagement.</p>
              <a className="button button-light" href="#contact">Start a conversation <span>↗</span></a>
            </div>
            <div className="steps-list">
              {steps.map((step) => (
                <article className="step-row" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                  <span className="step-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
          <div className="how-decoration" aria-hidden="true">FIX</div>
        </section>

        <section className="why-section section-pad" id="why-dynamicfix">
          <div className="service-container">
            <div className="why-heading">
              <span className="eyebrow eyebrow-dark">WHY DYNAMICFIX</span>
              <h2>Committed to progress<br />that works for you.</h2>
              <p>Our stated focus brings together thoughtful solutions, dependable support and a customer-first mindset.</p>
            </div>
            <div className="why-grid">
              <article className="why-card">
                <span className="why-card-icon">✳</span>
                <span className="why-index">01 / QUALITY</span>
                <h3>Quality in every delivery</h3>
                <p>A commitment to quality guides the way DynamicFix approaches its services and client work.</p>
              </article>
              <article className="why-card">
                <span className="why-card-icon">◎</span>
                <span className="why-index">02 / PARTNERSHIP</span>
                <h3>Built around your business</h3>
                <p>Business-driven, customer-centric delivery keeps your organization’s goals at the center.</p>
              </article>
              <article className="why-card why-card-highlight">
                <span className="why-card-icon">◷</span>
                <span className="why-index">03 / SUPPORT</span>
                <h3>Support, day and night</h3>
                <p>DynamicFix describes its customer support as available 24/7, helping teams stay supported.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="service-container about-layout">
            <div className="about-visual">
              <div className="about-note"><span>THE DYNAMICFIX WAY</span><strong>Technology<br />with purpose.</strong><i>✳</i></div>
              <div className="about-shape shape-back" />
              <div className="about-shape shape-front" />
              <div className="about-data-card">
                <div className="about-data-heading"><span>Business insights</span><i>•••</i></div>
                <div className="about-data-value">Decisions, informed<span>↗</span></div>
                <div className="about-data-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                <div className="about-data-legend"><i /><span>Connected data</span><b>Built to scale</b></div>
              </div>
              <div className="about-stamp">BUILT<br />TO SCALE</div>
            </div>
            <div className="about-copy">
              <span className="eyebrow eyebrow-dark">ABOUT DYNAMICFIX</span>
              <h2>Technology with<br />purpose.</h2>
              <p>DynamicFix Tech Innovation Pvt. Ltd. is an emerging IT solutions company focused on delivering innovative, scalable and business-driven digital services, with a commitment to quality and 24/7 support.</p>
              <p>We help organizations streamline operations, build strong technical teams and make data-informed decisions through thoughtful technology partnerships.</p>
              <a className="text-link" href="#contact">Let’s discuss your goals <span>↗</span></a>
              <div className="about-values">
                <span><i>✓</i> Quality-focused</span>
                <span><i>✓</i> Customer-centric</span>
                <span><i>✓</i> Scalable by design</span>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="service-container faq-layout">
            <div className="faq-heading">
              <span className="eyebrow eyebrow-dark">GOOD TO KNOW</span>
              <h2>Questions,<br /><em>answered.</em></h2>
              <p>A few helpful details about DynamicFix services and support.</p>
              <a className="text-link" href="#contact">Still have a question? <span>↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details className="faq-item" key={faq.question} open={index === 0}>
                  <summary>
                    <span>{faq.question}</span>
                    <i aria-hidden="true">+</i>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="service-container contact-layout">
            <div className="contact-copy">
              <span className="eyebrow eyebrow-light">LET’S BUILD WHAT’S NEXT</span>
              <h2>Ready to move<br /><em>forward?</em></h2>
              <p>Tell us about your goals. Let’s explore how the right technology and team can help you get there.</p>
              <div className="contact-detail">
                <span className="contact-detail-icon">✳</span>
                <span><strong>DynamicFix Tech Innovation Pvt. Ltd.</strong><small>Registered office · Andhra Pradesh, India</small></span>
              </div>
            </div>
            <div className="contact-panel">
              <span className="contact-panel-label">GET IN TOUCH</span>
              <h3>Our registered office.</h3>
              <p>DynamicFix Tech Innovation Private Limited</p>
              <address className="registered-address">
                Door No: 24-20-49, Nallacheruvu, 9th Line,<br />
                Nallacheruvu, East Godavari, Ainavilli Mandal,<br />
                Andhra Pradesh, India — 533241
              </address>
              <a className="address-map-link" href="https://maps.google.com/?q=Door+No+24-20-49%2C+Nallacheruvu%2C+East+Godavari%2C+Andhra+Pradesh+533241" target="_blank" rel="noreferrer">
                View address on map <span>↗</span>
              </a>
              <a className="contact-source-link" href="#services">Explore our capabilities <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="service-footer">
        <div className="service-container footer-main">
          <div className="footer-brand-block">
            <Brand footer />
            <p>Technology that works for your business.<br />Let’s build a smarter way forward.</p>
          </div>
          <div className="footer-links">
            <span>EXPLORE</span>
            <a href="#services">Our solutions</a>
            <a href="#solution-finder">Find a solution</a>
            <a href="#how-it-works">Our approach</a>
            <a href="#why-dynamicfix">Why DynamicFix</a>
            <a href="#about">About DynamicFix</a>
            <a href="#faq">FAQs</a>
          </div>
          <div className="footer-links">
            <span>OUR CAPABILITIES</span>
            <a href="#services">Web & mobile apps</a>
            <a href="#services">Data & Salesforce CRM</a>
            <a href="#services">IT staffing</a>
          </div>
          <a className="footer-top" href="#home">Back to top <span>↑</span></a>
        </div>
        <div className="service-container footer-bottom">
          <span>© {new Date().getFullYear()} DynamicFix Tech Innovation Private Limited</span>
          <span>Quality-focused. Customer-centric. Built to scale.</span>
        </div>
      </footer>
      <a
        aria-label="Chat with DynamicFix on WhatsApp"
        className="whatsapp-float"
        href="https://wa.me/917075044554?text=Hello%20DynamicFix%2C%20I%27d%20like%20to%20discuss%20your%20IT%20services."
        rel="noreferrer"
        target="_blank"
        title="Chat with DynamicFix on WhatsApp"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.93c0 2.1.55 4.16 1.61 5.98L0 24l6.24-1.64a11.97 11.97 0 0 0 5.83 1.49h.01C18.66 23.85 24 18.5 24 11.93c0-3.19-1.24-6.19-3.48-8.45ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.6-.23-.37a9.82 9.82 0 0 1-1.51-5.28c0-5.49 4.47-9.96 9.96-9.96 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 0 1 2.91 7.05c0 5.49-4.47 9.96-10.05 9.96Zm5.47-7.46c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.64-.93-2.24-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.89 1.23 3.09c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.07-.13-.27-.2-.59-.35Z" />
        </svg>
      </a>
    </div>
  );
}

export default ServiceWebsite;
