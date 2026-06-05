// Web Audio API wrapper for zero-asset sci-fi UI sounds

let audioCtx = null;

const getAudioContext = () => {
    if (typeof window === 'undefined') return null;
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            return null;
        }
    }
    return audioCtx;
};

export const playHoverSound = () => {
    const ctx = getAudioContext();
    if (!ctx || ctx.state === 'suspended') return; // Browsers block audio before first user interaction

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

    // Keep it VERY quiet (premium feel)
    gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.05);
};

export const playClickSound = () => {
    const ctx = getAudioContext();
    if (!ctx) return;
    
    // Resume context if suspended (since click is a user interaction)
    if (ctx.state === 'suspended') {
        ctx.resume();
    }

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(150, ctx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.1);
};
