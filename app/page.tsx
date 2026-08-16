"use client";

import { useState } from "react";
import Link from "next/link";

interface Toast {
  id: string;
  message: string;
}

const FAQ_ITEMS = [
  {
    q: "What is RIZZ AI and how does it revolutionize AI dating?",
    a: "RIZZ AI is a cutting-edge artificial intelligence platform specifically designed for enhancing dating experiences. By leveraging advanced language models similar to ChatGPT, RIZZ AI revolutionizes AI dating by providing personalized conversation starters, flirting tips, and relationship advice. This innovative tool helps users navigate the complex world of modern dating with confidence and charm."
  },
  {
    q: "How does RIZZ AI differ from other AI chatbots in the realm of AI dating?",
    a: "RIZZ AI sets itself apart in the AI dating landscape by offering a unique blend of natural language processing and emotional intelligence. Unlike generic chatbots, RIZZ AI is specifically trained on dating scenarios, allowing it to understand nuanced social cues and provide context-appropriate responses. This specialized focus makes RIZZ AI powered by advanced AI an invaluable asset for those looking to improve their dating skills and build meaningful connections."
  },
  {
    q: "Can RIZZ AI help improve my dating profile and online presence?",
    a: "Absolutely! RIZZ AI is equipped with advanced algorithms that analyze successful dating profiles and online interactions. By utilizing RIZZ AI, you can receive tailored suggestions to optimize your dating profile, select the most appealing photos, and craft engaging bios. The AI dating assistant can also provide real-time feedback on your online conversations, helping you maintain interesting and flirtatious exchanges that are more likely to lead to successful matches."
  },
  {
    q: "How does RIZZ AI ensure privacy and security in the context of AI dating?",
    a: "Privacy and security are paramount in RIZZ AI's design. The platform employs end-to-end encryption for all communications and does not store personal conversation data permanently. RIZZ AI operates on a privacy-first principle, ensuring that your dating conversations and personal information remain confidential. The AI dating assistant processes information locally when possible and adheres to strict data protection protocols, giving users peace of mind while improving their dating skills."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const showToast = (message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Toast Container */}
      <div className="toast-container" id="toastContainer">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast">
            <span>ℹ️</span> {toast.message}
          </div>
        ))}
      </div>

      <div className="landing-bg"></div>

      <div className="landing-content">
        
        {/* Hero Section */}
        <section className="hero">
          <div className="stats-bar">
            <div className="stat">
              <div className="stat-value">10M+</div>
              <div className="stat-label">Users Worldwide</div>
            </div>
            <div className="stat">
              <div className="stat-value">#5</div>
              <div className="stat-label">Dating App in US</div>
            </div>
            <div className="stat">
              <div className="stat-value">4.9★</div>
              <div className="stat-label">App Store Rating</div>
            </div>
          </div>

          <h1 className="hero-title">
            Unlock Your <span className="accent-text">Natural Charisma</span>
          </h1>

          <p className="hero-subtitle">
            Science-backed techniques to master social dynamics and build genuine connections
          </p>

          <Link href="/quiz" className="cta-btn">
            <span className="icon">🎯</span>
            Start Your Free Assessment
            <span className="arrow">→</span>
          </Link>

          <div className="trust-badges">
            <span><span className="check">✓</span> Free</span>
            <span className="divider">·</span>
            <span><span className="check">✓</span> 2 minutes</span>
            <span className="divider">·</span>
            <span><span className="check">✓</span> No credit card required</span>
          </div>

          {/* About App Section */}
          <div className="about-app-container">
            <h2 className="about-app-title">About this app</h2>
            <div className="about-app-content">
              <p>Looking for a little help with your dating game? RIZZ has you covered! Our AI-powered app uses cutting edge LLMs to generate personalized responses that are sure to impress your crush.</p>
              <p>RIZZ gives you the edge you need to stand out from the crowd. With our intuitive interface and personalized algorithms, you'll never be at a loss for words again.</p>
              <p>With RIZZ, you can upload screenshots of your conversations with your matches, and even your matches' bio, and receive instant and witty replies tailored to your unique situation. Our app is designed to help you keep the conversation going, whether you're trying to make a great first impression, impress your date, or simply want to spice up a chat.</p>
              <p>But RIZZ isn't just a tool for online dating – it's also great for conversations with friends or family. There's even a formal option to use for networking and professional communications. RIZZ is your AI wingman eager to provide you with the perfect response to keep things flowing smoothly or spice life up.</p>
              <p>One of the best things about RIZZ is that it adapts to your unique communication style. Our AI algorithms analyze your style to understand your tone, humor, and vocabulary, and then generate responses that reflect your personality. The more you use RIZZ the better your rizzponses get. This means that you'll always sound like yourself, but with a splash of extra charm!</p>
              <p>So why wait? Download RIZZ now and experience the power of AI. Whether you're looking for love, trying to make a great impression, or simply want to keep the conversation going, we've got you covered. With RIZZ as your wingman, you're sure to make a lasting connection.</p>
            </div>
          </div>
        </section>

        {/* Press Section */}
        <section className="press-section">
          <div className="section-tag">AS SEEN IN</div>
          <h2 className="section-title">
            Covered by the <span className="accent-text">World's Best</span>
          </h2>

          {/* Scrolling Logos */}
          <div className="logos-track-wrapper">
            <div className="logos-track">
              <span className="logo-item serif">TIME</span>
              <span className="logo-item" style={{ fontFamily: "Georgia, serif" }}>Forbes</span>
              <span className="logo-item" style={{ fontWeight: 900 }}>a16z</span>
              <span className="logo-item serif" style={{ fontStyle: "italic" }}>WSJ</span>
              <span className="logo-item serif">Post</span>
              <span className="logo-item" style={{ fontWeight: 900 }}>CBS</span>
              <span className="logo-item serif">Mashable</span>
              <span className="logo-item" style={{ fontWeight: 900 }}>InsideHook</span>
              {/* Duplicate for seamless loop */}
              <span className="logo-item serif">TIME</span>
              <span className="logo-item" style={{ fontFamily: "Georgia, serif" }}>Forbes</span>
              <span className="logo-item" style={{ fontWeight: 900 }}>a16z</span>
              <span className="logo-item serif" style={{ fontStyle: "italic" }}>WSJ</span>
              <span className="logo-item serif">Post</span>
              <span className="logo-item" style={{ fontWeight: 900 }}>CBS</span>
              <span className="logo-item serif">Mashable</span>
              <span className="logo-item" style={{ fontWeight: 900 }}>InsideHook</span>
            </div>
          </div>

          {/* Press Cards */}
          <div className="press-cards">
            <a href="https://www.rizzai.space/" className="press-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="press-card-quote">❝</div>
              <div className="press-card-title">Best Inventions of 2024</div>
              <div className="press-card-footer">
                <span className="press-card-source">TIME</span>
                <span className="press-card-arrow">↗</span>
              </div>
            </a>
            <a href="https://www.rizzai.space/" className="press-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="press-card-quote">❝</div>
              <div className="press-card-title">5th Most Downloaded Dating App</div>
              <div className="press-card-footer">
                <span className="press-card-source">FORBES</span>
                <span className="press-card-arrow">↗</span>
              </div>
            </a>
            <a href="https://www.rizzai.space/" className="press-card" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="press-card-quote">❝</div>
              <div className="press-card-title">Top 100 Gen AI Apps</div>
              <div className="press-card-footer">
                <span className="press-card-source">A16Z</span>
                <span className="press-card-arrow">↗</span>
              </div>
            </a>
          </div>
        </section>

        {/* Also Featured In */}
        <section className="featured-section">
          <div className="section-tag">ALSO FEATURED IN</div>
          <div className="featured-tags">
            <span className="featured-tag">WSJ</span>
            <span className="featured-tag">Washington Post</span>
            <span className="featured-tag">CBS News</span>
            <span className="featured-tag">Mashable</span>
            <span className="featured-tag">InsideHook</span>
          </div>

          <Link href="/quiz" className="cta-btn">
            <span className="icon">🔥</span>
            See What the Buzz Is About
            <span className="arrow">→</span>
          </Link>
        </section>

        {/* Why We Need RIZZ Section */}
        <section className="why-rizz-section">
          <h2 className="why-rizz-title">
            Why We Need <span className="accent-text">RIZZ AI Dating Assistant?</span>
          </h2>
          <p className="why-rizz-subtitle">
            Transform your dating conversations with RIZZ AI powered confidence
          </p>

          <div className="why-rizz-grid">
            {/* Left: Image Container */}
            <div className="why-rizz-image-container">
              <div className="why-rizz-image-frame">
                <img src="/Couple1.png" alt="Happy couple using RIZZ AI dating assistant for romantic conversations" className="why-rizz-img" />
              </div>
            </div>

            {/* Right: Features Content */}
            <div className="why-rizz-features">
              {/* Feature 1 */}
              <div className="why-rizz-feature-item">
                <div className="why-rizz-feature-icon-wrapper">
                  <div className="why-rizz-feature-icon sparkles-gradient">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5Z"/>
                      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/>
                    </svg>
                  </div>
                </div>
                <div className="why-rizz-feature-text">
                  <h3>✨ Effortless Impression</h3>
                  <p>Want to impress your crush effortlessly? Our RIZZ AI dating assistant, trained on countless successful dating cases, offers proven chat techniques tailored to your unique personality. Whether you're shy or outgoing, you'll quickly master the art of flirting with RIZZ AI and make incredible strides in your dating life! 💕</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="why-rizz-feature-item">
                <div className="why-rizz-feature-icon-wrapper">
                  <div className="why-rizz-feature-icon shield-gradient">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                </div>
                <div className="why-rizz-feature-text">
                  <h3>🔒 Privacy Guaranteed</h3>
                  <p>Worried about privacy? Don't be! RIZZ AI never saves your chat records or screenshots. Share your dating stories freely with our AI coach and receive honest advice without compromising your privacy. With this trustworthy dating assistant, you can fully enjoy the exciting journey of love! 💖</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <div className="social-proof">
          <div className="avatar-stack">
            <div className="avatar">👤</div>
            <div className="avatar">👩</div>
            <div className="avatar">👨</div>
            <div className="avatar">👧</div>
            <div className="avatar">🧑</div>
          </div>
          <div className="social-proof-right">
            <div className="stars">★★★★★</div>
            <div className="social-proof-text"><strong>10+ million users</strong> have improved their dating game</div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="faq-title">
            Frequently QA About <span className="accent-text">RIZZ AI Assistant & AI Dating</span>
          </h2>
          <p className="faq-subtitle">
            Find answers to our most commonly asked questions below. If you can't find what you're looking for, please contact our customer support team.
          </p>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? "active" : ""}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-chevron-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <div className="faq-answer-wrapper">
                    <div className="faq-answer-content">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="final-cta-card">
            <h2 className="final-cta-title">
              Ready to Transform Your <span className="accent-text">Dating Life</span>?
            </h2>
            <p className="final-cta-subtitle">
              Join over 10 million users who've already discovered their dating superpower
            </p>
            <Link href="/quiz" className="cta-btn">
              <span className="icon">🚀</span>
              Take the Free Quiz Now
              <span className="arrow">→</span>
            </Link>
            <div className="final-trust">
              <span><span className="trust-icon">🛡️</span> 100% Private</span>
              <span><span className="trust-icon">⏱️</span> 2 Min Quiz</span>
              <span><span className="trust-icon">✅</span> Works on Any App</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-download-label">Download the App</div>
          <div className="store-buttons">
            <a className="store-btn" href="#" onClick={(e) => { e.preventDefault(); showToast("App Store link — demo only"); }}>
              <span className="store-btn-icon">🍎</span>
              <div className="store-btn-text">
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </a>
            <a className="store-btn" href="#" onClick={(e) => { e.preventDefault(); showToast("Google Play link — demo only"); }}>
              <span className="store-btn-icon">▶️</span>
              <div className="store-btn-text">
                <small>Get it on</small>
                <span>Google Play</span>
              </div>
            </a>
          </div>

          <div className="social-links">
            <a className="social-link" title="Instagram" onClick={() => showToast("Social Links — demo only")}>📷</a>
            <a className="social-link" title="TikTok" onClick={() => showToast("Social Links — demo only")}>🎵</a>
            <a className="social-link" title="X (Twitter)" href="https://x.com/Vijay_Jadav_7" target="_blank" rel="noopener noreferrer">✖</a>
            <a className="social-link" title="YouTube" onClick={() => showToast("Social Links — demo only")}>▶</a>
          </div>

          <div className="footer-links">
            <Link href="/about" className="footer-link">About</Link>
            <Link href="/terms" className="footer-link">Terms</Link>
            <Link href="/privacy" className="footer-link">Privacy</Link>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>

          <p className="footer-copyright">
            Rizz AI © 2026 ·{" "}
            <a
              href="https://rizzai.space"
              className="hover:text-[var(--accent)]"
              style={{ color: "inherit", textDecoration: "underline", transition: "color 0.2s" }}
            >
              rizzai.space
            </a>{" "}
            · Free AI Wingman App
          </p>
        </footer>
      </div>
    </div>
  );
}
