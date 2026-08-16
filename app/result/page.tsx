"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "rizz_app_v2";

const PERSONALITIES = [
  {
    title: "The Thoughtful Observer",
    desc: "You process deeply before speaking, which is actually a superpower. You notice details others completely miss. Your growth edge is translating those sharp observations into confident action.",
    superpowerTitle: "Emotional Intelligence",
    superpowerDesc: "You sense what others feel. Use this to validate emotions before offering solutions or changing topics.",
    growthTitle: "Building Resilience",
    growthDesc: "Collect 'No's as badges of courage. Each rejection is proof you're putting yourself out there and mastering social confidence.",
    insight1: { emoji: "🔋", title: "Energy-Conscious Socializer", desc: "You recharge alone. We will teach you high-impact conversation techniques that don't drain your social battery." },
    insight2: { emoji: "👥", title: "Deep Diver", desc: "You excel in intimate one-on-one settings. We will help you bring that same depth into group environments." }
  },
  {
    title: "The Charismatic Connector",
    desc: "You bring positive energy to every group you enter. You excel at keeping conversations alive and engaging. Your growth edge is learning to listen with depth rather than just responding with wit.",
    superpowerTitle: "Social Alignment",
    superpowerDesc: "You match the vibe of the room effortlessly. Use this to make people feel safe, respected, and heard.",
    growthTitle: "Active Listening",
    growthDesc: "Slow down the pace. Letting silences hang briefly creates a comfortable space for deeper connection.",
    insight1: { emoji: "⚡", title: "High-Energy Initiator", desc: "You thrive on group interactions. We will help you optimize your energy for meaningful interactions." },
    insight2: { emoji: "🌟", title: "Magnet Personality", desc: "People naturally gravitate to you. Learn how to convert simple magnetism into lasting relationships." }
  },
  {
    title: "The Witty Conversationalist",
    desc: "Your mind works at lightning speed, allowing you to break the ice with sharp humor and creative banter. Your growth edge is showing vulnerability to build trust.",
    superpowerTitle: "Creative Spark",
    superpowerDesc: "You see humorous connections instantly. Use this to defuse awkwardness and put others at ease.",
    growthTitle: "Expressing Authenticity",
    growthDesc: "Vulnerability is charisma. Sharing real, unpolished parts of yourself makes you immediately relatable.",
    insight1: { emoji: "🧠", title: "Mental Agility", desc: "You think fast on your feet. Learn to align your verbal responses with emotional depth." },
    insight2: { emoji: "😂", title: "Icebreaker Master", desc: "You lead with humor. Discover when to switch from comedy to sincere conversation." }
  },
  {
    title: "The Bold Initiator",
    desc: "You are not afraid of making the first move. You lead with confidence and direction. Your growth edge is ensuring your directness doesn't overshadow the quiet voices in the room.",
    superpowerTitle: "Unshakable Direction",
    superpowerDesc: "You guide the path of interactions clearly. Use this to step in and support shy peers in groups.",
    growthTitle: "Conversational Balance",
    growthDesc: "Ask open questions and pass the mic. True confidence lies in building up those around you.",
    insight1: { emoji: "🔥", title: "Action-Oriented Leader", desc: "You create opportunities instead of waiting. Let's direct that drive to target your perfect matches." },
    insight2: { emoji: "🛡️", title: "Confidence Engine", desc: "You face social challenges head-on. Let's structure your approach to yield optimal results." }
  }
];

interface Toast {
  id: string;
  message: string;
}

export default function ResultPage() {
  const router = useRouter();
  const [profile, setProfile] = useState(PERSONALITIES[0]);
  const [insightsUnlocked, setInsightsUnlocked] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    // 1. Calculate and set personality profile based on state
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedState = JSON.parse(stored);
        const ans = parsedState.quizAnswers;
        let index = 0;
        if (ans) {
          if (ans[2] === 0) index = 1; // Charismatic Connector
          else if (ans[2] === 3) index = 2; // Witty Conversationalist
          else if (ans[0] === 4) index = 3; // Bold Initiator
        }
        setProfile(PERSONALITIES[index] || PERSONALITIES[0]);
      }
    } catch (e) {}

    // 2. Check if celebration modal and confetti should trigger
    try {
      const celebrateLocal = localStorage.getItem("show_celebration");
      const urlParams = new URLSearchParams(window.location.search);
      const celebrateQuery = urlParams.get("celebrate");

      if (celebrateLocal === "true" || celebrateQuery === "true") {
        localStorage.removeItem("show_celebration");
        setTimeout(() => {
          setShowCelebration(true);
          startConfetti();
        }, 300);
      }
    } catch (e) {}
  }, []);

  const startConfetti = () => {
    if (typeof window === "undefined") return;
    if (document.getElementById("confettiCanvas")) return;

    const canvas = document.createElement("canvas");
    canvas.id = "confettiCanvas";
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const colors = ["#c4b5fd", "#e8b4f8", "#ddd6fe", "#a78bfa", "#ffb3ba", "#baffc9", "#bae1ff"];
    const confettiCount = 150;
    const pieces: any[] = [];

    class ConfettiPiece {
      x = Math.random() * width;
      y = Math.random() * -height - 20;
      size = Math.random() * 8 + 6;
      color = colors[Math.floor(Math.random() * colors.length)];
      speed = Math.random() * 3 + 4;
      rotation = Math.random() * 360;
      rotationSpeed = Math.random() * 4 - 2;
      oscillationSpeed = Math.random() * 0.03 + 0.01;
      oscillationDistance = Math.random() * 30 + 10;
      oscillationOffset = Math.random() * 100;

      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        this.x += Math.sin(this.oscillationOffset) * 0.5;
        this.oscillationOffset += this.oscillationSpeed;

        if (this.y > height) {
          this.y = -20;
          this.x = Math.random() * width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    }

    for (let i = 0; i < confettiCount; i++) {
      pieces.push(new ConfettiPiece());
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      pieces.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    setTimeout(() => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      canvas.remove();
    }, 6000);
  };

  const showToast = (message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const handleRevealInsights = () => {
    setInsightsUnlocked(true);
    showToast("Dynamic insights unlocked successfully! 🔓");
  };

  const handleUnlockActionPlan = () => {
    showToast("Premium features unlocked successfully! Redirecting... 🚀");
    setTimeout(() => {
      router.push("/");
    }, 1000);
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

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="modal-overlay active" id="celebrationModal">
          <div className="modal-box" style={{ textAlign: "center" }}>
            <div style={{ fontSize: "56px", marginBottom: "16px", animation: "float 3s ease-in-out infinite" }}>🎉</div>
            <h3
              className="modal-title"
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                background: "var(--gradient-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Lucky Winner!
            </h3>
            <p className="modal-desc" style={{ fontSize: "15px", color: "var(--text-light)", lineHeight: "1.6", marginBottom: "24px" }}>
              ✨ You are lucky! You get unlimited free premium $ 100 worth of paid features for free✨
            </p>
            <div className="modal-actions">
              <button className="modal-btn modal-btn-primary" onClick={() => setShowCelebration(false)}>
                Let's Go! 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="result-container animate-fade-in-up">
        
        {/* Header / Crystal Ball */}
        <div className="crystal-ball-wrapper">
          <div className="crystal-ball-glow"></div>
          <div className="crystal-ball">🔮</div>
        </div>

        <h1 className="result-title">
          You're <span className="accent-text" id="personalityTitle">{profile.title}</span>
        </h1>

        <p className="result-desc" id="personalityDesc">
          {profile.desc}
        </p>

        <button className="action-plan-btn" onClick={handleUnlockActionPlan}>
          See Your AI-Powered Action Plan →
        </button>
        
        <div className="lucky-banner">
          ✨ You are lucky! You get unlimited free premium paid features ✨
        </div>

        {/* What We Learned Section */}
        <h2 className="section-header">What We Learned About You</h2>
        
        <div className="insights-grid">
          <div className="insight-card">
            <span className="insight-emoji" id="insightEmoji1">{profile.insight1.emoji}</span>
            <h3 className="insight-title" id="insightTitle1">{profile.insight1.title}</h3>
            <p className="insight-desc" id="insightDesc1">{profile.insight1.desc}</p>
          </div>
          
          <div className="insight-card">
            <span className="insight-emoji" id="insightEmoji2">{profile.insight2.emoji}</span>
            <h3 className="insight-title" id="insightTitle2">{profile.insight2.title}</h3>
            <p className="insight-desc" id="insightDesc2">{profile.insight2.desc}</p>
          </div>

          {/* Lock Card / Unlocked Cards */}
          {insightsUnlocked ? (
            <>
              <div className="insight-card animate-fade-in-up">
                <span className="insight-emoji">📈</span>
                <h3 className="insight-title">Rapid Growth Curve</h3>
                <p className="insight-desc">You are highly adaptive. Your rate of confidence growth is currently projected in the top 5% of users.</p>
              </div>
              <div className="insight-card animate-fade-in-up">
                <span className="insight-emoji">🎯</span>
                <h3 className="insight-title">Context Optimization</h3>
                <p className="insight-desc">You perform exceptionally well in digital (text-based) interactions. Let's capitalize on this strength.</p>
              </div>
            </>
          ) : (
            <div className="lock-card insight-card" id="lockCard" onClick={handleRevealInsights}>
              <div className="lock-icon">🔒</div>
              <div className="lock-text">+2 more insights</div>
              <div className="lock-subtext">Tap to unlock for free</div>
            </div>
          )}
        </div>

        {/* Superpower Card */}
        <div className="superpower-card">
          <span style={{ fontSize: "40px" }}>💖</span>
          <div>
            <div className="superpower-badge">YOUR SUPERPOWER</div>
            <h3 className="superpower-title" id="superpowerTitle">{profile.superpowerTitle}</h3>
            <p className="superpower-desc" id="superpowerDesc">{profile.superpowerDesc}</p>
          </div>
        </div>

        {/* Growth Edge Card */}
        <div className="growth-card">
          <span style={{ fontSize: "40px", filter: "grayscale(1) sepia(1) hue-rotate(15deg) saturate(3)" }}>💪</span>
          <div>
            <div className="growth-badge">YOUR GROWTH EDGE</div>
            <h3 className="growth-title" id="growthTitle">{profile.growthTitle}</h3>
            <p className="growth-desc" id="growthDesc">{profile.growthDesc}</p>
            <button className="unlock-overlay-btn" onClick={handleUnlockActionPlan}>
              🔓 Unlock personalized growth plan
            </button>
          </div>
        </div>

        {/* Plan Includes Section */}
        <h2 className="section-header">Your Personalized Plan Includes</h2>

        <div className="plan-includes-grid">
          <div className="plan-include-card">
            <span className="plan-include-emoji">📱</span>
            <h3 className="plan-include-title">AI Reply Suggestions</h3>
            <p className="plan-include-desc">Get 3 clever responses for any message, instantly.</p>
            <button className="unlock-mini-btn" onClick={handleUnlockActionPlan}>UNLOCK FREE</button>
          </div>
          
          <div className="plan-include-card">
            <span className="plan-include-emoji">🎯</span>
            <h3 className="plan-include-title">Daily Exercises</h3>
            <p className="plan-include-desc">5-minute drills tailored to your profile type.</p>
            <button className="unlock-mini-btn" onClick={handleUnlockActionPlan}>UNLOCK FREE</button>
          </div>
          
          <div className="plan-include-card">
            <span className="plan-include-emoji">💬</span>
            <h3 className="plan-include-title">Conversation Starters</h3>
            <p className="plan-include-desc">Never run out of things to say again.</p>
            <button className="unlock-mini-btn" onClick={handleUnlockActionPlan}>UNLOCK FREE</button>
          </div>
          
          <div className="plan-include-card">
            <span className="plan-include-emoji">📊</span>
            <h3 className="plan-include-title">Progress Tracking</h3>
            <p className="plan-include-desc">Watch your confidence score rise over time.</p>
            <button className="unlock-mini-btn" onClick={handleUnlockActionPlan}>UNLOCK FREE</button>
          </div>
        </div>

        {/* Footer CTA */}
        <button className="action-plan-btn" onClick={handleUnlockActionPlan} style={{ marginBottom: "12px" }}>
          See Your AI-Powered Action Plan →
        </button>

        <div className="lucky-banner" style={{ marginBottom: "20px" }}>
          ✨ You are lucky! You get unlimited free premium paid features ✨
        </div>

        <div className="saved-banner">
          🔒 Your personalized results are saved
        </div>
      </div>

    </div>
  );
}
