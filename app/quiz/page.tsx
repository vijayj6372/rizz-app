"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "rizz_app_v2";

const QUESTIONS = [
  {
    emoji: "😰",
    title: "How confident do you feel in social situations?",
    desc: "Be honest — this helps us personalize your experience",
    options: [
      { icon: "😰", text: "Not confident at all" },
      { icon: "😅", text: "Somewhat shy" },
      { icon: "🤔", text: "Depends on the situation" },
      { icon: "😎", text: "Pretty confident" },
      { icon: "🔥", text: "Extremely confident" }
    ]
  },
  {
    emoji: "🔋",
    title: "How do you feel after spending time with people?",
    desc: "There's no wrong answer — we're all wired differently",
    options: [
      { icon: "🔋", text: "Usually drained — I need alone time to recharge" },
      { icon: "⚖️", text: "It depends on who I'm with" },
      { icon: "😌", text: "Pretty neutral either way" },
      { icon: "⚡", text: "Usually energized — I love being around people" }
    ]
  },
  {
    emoji: "📱",
    title: "What brings you here today?",
    desc: "Select the option that resonates most",
    options: [
      { icon: "📱", text: "Get better at texting" },
      { icon: "👋", text: "Talk to people I just met" },
      { icon: "🫦", text: "Get better at flirting" },
      { icon: "💕", text: "Improve my dating life" },
      { icon: "💑", text: "Deepen my current relationship" }
    ]
  },
  {
    emoji: "💬",
    title: "How do you typically start conversations?",
    desc: "There's no wrong answer — choose what feels natural",
    options: [
      { icon: "🕐", text: "I wait for others to approach me" },
      { icon: "👋", text: "A simple hello or hi" },
      { icon: "💬", text: "I ask a question about something around us" },
      { icon: "🌟", text: "I give a genuine compliment" },
      { icon: "😂", text: "I lead with humor" }
    ]
  },
  {
    emoji: "👂",
    title: "What's your social superpower?",
    desc: "Everyone has something — what comes naturally to you?",
    options: [
      { icon: "👂", text: "I'm a great listener" },
      { icon: "💗", text: "I understand how others feel" },
      { icon: "😄", text: "I can make people laugh" },
      { icon: "📖", text: "I tell great stories" },
      { icon: "🤔", text: "I ask thoughtful questions" },
      { icon: "🔍", text: "I'm not sure yet" }
    ]
  },
  {
    emoji: "😓",
    title: "What's your biggest social challenge?",
    desc: "We'll focus on helping you overcome this",
    options: [
      { icon: "😓", text: "Social anxiety" },
      { icon: "💔", text: "Fear of rejection" },
      { icon: "🤐", text: "Running out of things to say" },
      { icon: "🔍", text: "Reading social cues" },
      { icon: "🎭", text: "Being my authentic self" },
      { icon: "📱", text: "Following up and maintaining connections" }
    ]
  },
  {
    emoji: "🚶",
    title: "When does social anxiety hit you hardest?",
    desc: "Understanding your triggers helps us help you",
    options: [
      { icon: "🚶", text: "Walking up to someone new" },
      { icon: "👀", text: "When all eyes are on me" },
      { icon: "😶", text: "Awkward silences in conversation" },
      { icon: "💔", text: "Fear of being rejected" },
      { icon: "💬", text: "Making small talk" },
      { icon: "😎", text: "I rarely feel anxious" }
    ]
  },
  {
    emoji: "🌊",
    title: "Imagine your ideal social self — what would change?",
    desc: "Paint a picture of where you want to be",
    options: [
      { icon: "🌊", text: "Conversations would feel effortless" },
      { icon: "✨", text: "I'd leave lasting impressions" },
      { icon: "🔗", text: "I'd have deeper connections" },
      { icon: "🚪", text: "I'd walk into any room with confidence" },
      { icon: "💯", text: "I'd be unapologetically myself" }
    ]
  },
  {
    emoji: "⚡",
    title: "How much time can you dedicate to improving?",
    desc: "Choose a daily commitment that fits your lifestyle",
    options: [
      { icon: "⚡", text: "5 minutes a day" },
      { icon: "📖", text: "15 minutes a day" },
      { icon: "💪", text: "30 minutes a day" },
      { icon: "🎯", text: "Flexible — whenever I can" }
    ]
  },
  {
    emoji: "🚀",
    title: "What's your name?",
    desc: "Last step — we'll personalize everything for you",
    isNameInput: true
  }
];

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize and load state from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.userName) setUserName(parsed.userName);
        if (parsed.quizAnswers) setQuizAnswers(parsed.quizAnswers);
      }
    } catch (e) {}
  }, []);

  // Autofocus the input on name step
  useEffect(() => {
    if (QUESTIONS[currentStep]?.isNameInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  const saveStateToStorage = (updatedAnswers: Record<number, number>, nameValue: string, onboardedStatus = false) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed = stored ? JSON.parse(stored) : {};
      const updatedState = {
        ...parsed,
        quizAnswers: updatedAnswers,
        userName: nameValue,
        onboarded: onboardedStatus
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedState));
    } catch (e) {}
  };

  const handleSelectOption = (optionIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newAnswers = { ...quizAnswers, [currentStep]: optionIndex };
    setQuizAnswers(newAnswers);
    saveStateToStorage(newAnswers, userName);

    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
      setIsTransitioning(false);
    }, 250);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNextSubmit = () => {
    if (currentStep >= QUESTIONS.length) return;
    const q = QUESTIONS[currentStep];

    if (q.isNameInput) {
      const trimmedName = userName.trim();
      if (!trimmedName) return;

      saveStateToStorage(quizAnswers, trimmedName, true);
      localStorage.setItem("show_celebration", "true");
      router.push("/result?celebrate=true");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNextSubmit();
    }
  };

  const totalSteps = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentStep];
  const progressPercent = (currentStep / totalSteps) * 100;
  const isFirstStep = currentStep === 0;

  return (
    <div className="quiz-page select-none">
      
      {/* Toast container wrapper */}
      <div className="toast-container" id="toastContainer"></div>

      {/* Header / Progress bar */}
      <div className="quiz-header">
        <button
          className="quiz-back-btn"
          onClick={handleBack}
          disabled={isFirstStep}
          style={{ opacity: isFirstStep ? 0.3 : 1, pointerEvents: isFirstStep ? "none" : "auto" }}
          title="Back"
        >
          ←
        </button>
        <div className="quiz-progress-container">
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-fill"
              style={{ width: `${progressPercent}%`, transition: "width 0.3s ease-in-out" }}
            ></div>
          </div>
          <div className="quiz-step-count">{`${currentStep + 1} of ${totalSteps}`}</div>
        </div>
      </div>

      {/* Body Section */}
      <div className="quiz-body">
        {currentQuestion && (
          <>
            <div className="quiz-question">
              <span className="quiz-question-emoji">{currentQuestion.emoji}</span>
              <h2 className="quiz-question-title">{currentQuestion.title}</h2>
              <p className="quiz-question-desc">{currentQuestion.desc}</p>
            </div>

            {currentQuestion.isNameInput ? (
              <div style={{ width: "100%" }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your name..."
                  maxLength={30}
                  className="modal-input"
                  style={{ textAlign: "center", fontSize: "18px", padding: "18px" }}
                />
              </div>
            ) : (
              <div className="quiz-options">
                {currentQuestion.options?.map((opt, i) => {
                  const isSelected = quizAnswers[currentStep] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(i)}
                      className={`quiz-option ${isSelected ? "selected" : ""}`}
                    >
                      <span className="quiz-option-icon">{opt.icon}</span>
                      {opt.text}
                      <span className="quiz-option-radio"></span>
                    </button>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer (only visible on name input step) */}
      {currentQuestion?.isNameInput && (
        <div className="quiz-footer">
          <button
            onClick={handleNextSubmit}
            disabled={!userName.trim()}
            className="quiz-next-btn"
          >
            Let's Go! 🚀
          </button>
        </div>
      )}

    </div>
  );
}
