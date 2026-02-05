// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Charvinn 🩷",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Hi baby! I made something for you 🩷",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💙', '🩵', '💎', '✨'],  // Blue-themed emojis
        bears: ['🧸', '🐻']
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Be honest...Do you like me?",                                    // First interaction
            yesBtn: "Obviously",                                             // Text for "Yes" button
            noBtn: "You can't say No",                                               // Text for "No" button
            secretAnswer: "Too late! You're already mine 🩷"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine this year (and forever) ? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "Break my heart💔" // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "Thats Crazyyyyy! 🚀💝",              // Shows when they go past 1000%
        normal: "OMG SO MUCH?! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YOU SAID YES?! I'm the luckiest girl in the world! 🎉💝💖💝💓",
        message: "Congratulations! Now you're stuck with me forever😈",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#a1c4fd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#c2e9fb",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#4d96ff",     // Button color (should stand out against the background)
        buttonHover: "#6aa9ff",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#1e3a8a"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
