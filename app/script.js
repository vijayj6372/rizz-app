// ============================================================
//  RIZZ APP — Shared JavaScript Logic
// ============================================================

const STORAGE_KEY = 'rizz_app_v2';

let state = {
    onboarded: false,
    userName: '',
    quizAnswers: {},
    history: [],
    stats: { generated: 0, copied: 0 },
    prefs: { autoCopy: false, saveHistory: true },
    selectedTone: 'smooth',
    currentImage: null
};

// ===== STATE MANAGEMENT =====
function loadState() {
    try {
        const d = localStorage.getItem(STORAGE_KEY);
        if (d) state = { ...state, ...JSON.parse(d) };
    } catch (e) {}
}

function saveState() {
    try {
        const s = { ...state };
        delete s.currentImage;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch (e) {}
}

// ===== UTILITIES =====
function showToast(msg, type) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `${type === 'error' ? '❌' : '✅'} ${msg}`;
    container.appendChild(t);
    setTimeout(() => t.remove(), 3000);
}

async function clipCopy(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
    }
}

async function copyText(text, el) {
    await clipCopy(text);
    state.stats.copied++;
    saveState();
    if (el) {
        const orig = el.innerHTML;
        el.innerHTML = '✅ Copied!';
        el.style.color = '#10b981';
        setTimeout(() => { el.innerHTML = orig; el.style.color = ''; }, 2000);
    }
    showToast('Copied to clipboard! 📋');
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function escapeHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function escapeAttr(s) { return s.replace(/'/g, "\\'").replace(/"/g, '\\"'); }

function timeAgo(iso) {
    try {
        const d = new Date(iso), diff = Date.now() - d;
        const m = Math.floor(diff / 60000), h = Math.floor(diff / 3600000), dy = Math.floor(diff / 86400000);
        if (m < 1) return 'Just now';
        if (m < 60) return `${m}m ago`;
        if (h < 24) return `${h}h ago`;
        if (dy < 7) return `${dy}d ago`;
        return d.toLocaleDateString();
    } catch { return ''; }
}

function getToneEmoji(tone) {
    const emojis = { smooth: '😎', flirty: '😏', witty: '🧠', bold: '🔥', romantic: '💕', funny: '😂' };
    return emojis[tone] || '✨';
}

// ===== MODAL HELPERS =====
function openModal(id) { document.getElementById(id)?.classList.add('active'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('active'); }

// Close modals on overlay click
document.addEventListener('click', e => {
    if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('active');
});

// Escape key closes modals
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
});

// ===== REPLY TEMPLATES =====
const replyTemplates = {
    smooth: [
        "I'd say something clever, but you've already got me speechless 😏",
        "You know what? I was having an average day until I saw your message.",
        "If conversations were art, this one would already be in a gallery.",
        "Something about you makes me want to use my best material. Consider this that.",
        "I could play it cool, but honestly you're making that really hard right now.",
        "I don't usually say this, but I think we might have something here.",
        "You're the kind of person I'd share my Spotify playlists with, and that's saying a lot.",
        "I'm not usually this forward, but something about you says I should be."
    ],
    flirty: [
        "You're making my phone the most exciting thing in my life right now 🔥",
        "If being this cute is your thing, you're absolutely nailing it.",
        "Quick question — do you always make people smile like this, or am I special?",
        "Not to be dramatic, but I think you might be the highlight of my week.",
        "Is it weird that I already look forward to your messages?",
        "You've got me checking my phone way more than I should 📱",
        "I think flirting with you might be my new favorite hobby.",
        "If this conversation gets any better, I might actually have to take you out."
    ],
    witty: [
        "Well played. I'd give you a standing ovation but I'm lying on my couch.",
        "You've got the kind of wit that makes me Google 'how to keep up.' 🤓",
        "On a scale of 1 to a TED Talk, this conversation is at least a panel discussion.",
        "You know you're interesting when I'm choosing to text you over watching Netflix.",
        "If sarcasm is a love language, we're already fluent.",
        "You're dangerously clever and I respect that more than I probably should.",
        "This is the most intellectual fun I've had without a library card."
    ],
    bold: [
        "Let's cut to the chase — I'm interested and I'm not going to pretend I'm not. 💯",
        "Life's too short for boring messages. So here's my unfiltered take: you're incredible.",
        "I'm going to be direct — when are we upgrading from texting to an actual date?",
        "Bold move: I'm going to say what we're both thinking. This has potential. 🔥",
        "I could play hard to get, but that's never been my style. What's yours?",
        "Confidence looks good on both of us. When are we making something happen?"
    ],
    romantic: [
        "There's something about your words that makes everything else feel quiet. 💫",
        "In a world of swiping and scrolling, you made me actually stop and pay attention.",
        "I think the best love stories start with conversations exactly like this one.",
        "You have this warmth about you that I can feel even through a screen. 🌹",
        "Everything about this conversation makes me want to know you in person.",
        "If I could bottle up this feeling of talking to you, I'd never run out."
    ],
    funny: [
        "I would flex my dating skills but you're carrying this conversation and I'm just grateful 😂",
        "Plot twist: I actually Googled 'how to be charming' before this. How am I doing?",
        "My friend told me to be myself but that seems risky so I'm being my *best* self.",
        "Fun fact: I rehearsed this message three times. This was the best take. 🎬",
        "Between us, my autocorrect thinks I'm hitting on a duck. Excuse any quacking.",
        "Full disclosure: I'm way more fun in person. Via text I'm like a 7/10, tops.",
        "If our texts were a sitcom, we'd already have been renewed for season 2."
    ]
};

function getContextReplies(input, tone) {
    const pool = replyTemplates[tone] || replyTemplates.smooth;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);

    if (input && input.length > 5) {
        const w = input.toLowerCase();
        if (w.includes('hey') || w.includes('hi') || w.includes('hello')) {
            selected[0] = tone === 'flirty'
                ? "Hey yourself! I've been waiting for a message worth replying to 😏"
                : tone === 'funny'
                ? "Hey! I've been staring at my phone pretending to be busy. Your timing is *chef's kiss*"
                : "Hey! Something tells me this is going to be a great conversation.";
        }
        if (w.includes('read') || w.includes('ghost')) {
            selected[0] = "Maybe they're composing a novel-length response. Or they're just not that bright — their loss! 💅";
        }
        if (w.includes('about you') || w.includes('tell me')) {
            selected[0] = "Alright, speed round: coffee over tea, dogs over cats, and conversations like this over pretty much anything else. Your turn? 😊";
        }
        if (w.includes('fun') || w.includes('hobby')) {
            selected[0] = "For fun? I'd tell you but I think it'd be way more fun to *show* you. What are you doing this weekend? 🎯";
        }
    }
    return selected;
}

// ===== INIT LOAD STATE =====
loadState();

// ===== FAQ ACCORDION INTERACTIVITY =====
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn?.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close other items for a cleaner accordion layout
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
            });
            
            if (!isActive) {
                item.classList.add('active');
                questionBtn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAccordion);
} else {
    initFaqAccordion();
}

