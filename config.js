// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    
    valentineName: "Ghinaaa",

    // The title that appears in the browser tab
    // You can use emojis!
    pageTitle: "Happy Valentine's day, Ghina🩵",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🖤', '🤍', '🩵', '🌊'],  // Heart emojis
        bears: ['🐥', '🥬']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: " Do u like me ?",                                    // First interaction
            yesBtn: "Yayaya",                                             // Text for "Yes" button
            noBtn: "Gboleh no",                                               // Text for "No" button
            secretAnswer: "I don't like u, I love uu! 💙"           // Secret hover message
        },
        second: {
            text: "Berapa persen sihh do u love me?",                          // For the love meter
            startText: "Sebanyakk ini!",                                   // Text before the percentage
            nextBtn: "Lanjut cuyy💙"                                         // Text for the next button
        },
        third: {
            text: "Will u be ma Valentine? Ghinnn🌊", // The big question!
            yesBtn: "Yayaya, Lanjut cuyy!",                                             // Text for "Yes" button
            noBtn: "No👀"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Just wow..Are u serious?! Gpp aku tau kok 🌚🌊🩵",  // Shows when they go past 5000%
        high: "Speechless 🌝🩵",              // Shows when they go past 1000%
        normal: "0 Persen👀"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Huwaaaa! u've made me the happiest, ghinnn🩵🌊",
        message: "I’m thankful for u, for the moments we’ve shared. I don’t just want feelings, I hope we both keep growing, jdi versi yg lebih baik setiap harinya — with more understanding and less overthinking...lov u",
        emojis: "💙🌚🌊🌝🤍"
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#0992c2",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#0b2d72",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#0ac4e0",     // Button color (should stand out against the background)
        buttonHover: "#547792",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#94b4c1"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/di2mzbr6i/video/upload/v1771045184/Bruno_Mars_-_Count_on_Me_Official_Lyric_Video_imhvun.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 1.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
