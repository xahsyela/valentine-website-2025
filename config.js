// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Charvinn 🩷",

    // The title that appears in the browser tab
    pageTitle: "Hi baby! I made something for you 🩷",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['💙', '🩵', '💎', '✨', '❄️', '🔹'],  // Blue-themed + sparkle emojis
        bears: ['🧸', '🐻']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Be honest...Do you like me?",  
            yesBtn: "Obviously",  
            noBtn: "You can't say No",  
            secretAnswer: "Too late! You're already mine 🩷"
        },
        second: {
            text: "How much do you love me?",  
            startText: "This much!",  
            nextBtn: "Next🩷"
        },
        third: {
            text: "Will you be my Valentine this year (and forever) ? 🌹",  
            yesBtn: "Yes!",  
            noBtn: "Break my heart💔"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰💝",  
        high: "Thats Crazyyyyy! 🚀💝",  
        normal: "OMG SO MUCH?! 🥰"  
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YOU SAID YES?! I knew you would MUAHAHA 💝💖💝💓",
        message: "Congratulations! You have no choice! Now you're stuck with me forever😈",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#a1c4fd",
        backgroundEnd: "#c2e9fb",
        buttonBackground: "#4d96ff",
        buttonHover: "#6aa9ff",
        textColor: "#1e3a8a"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    }
};

// Mobile-friendly tweaks
const mobileStyle = document.createElement('style');
mobileStyle.innerHTML = `
@media only screen and (max-width: 600px) {
  .floating-emoji {
    font-size: 1.2rem;       /* smaller hearts for mobile */
    animation-duration: 20s;  /* float slower on mobile */
  }
}
`;
document.head.appendChild(mobileStyle);

// Don't modify below this line
window.VALENTINE_CONFIG = CONFIG;
