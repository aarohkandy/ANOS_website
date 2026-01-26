import { supabase } from './supabaseClient.js';

// --- Global Elements ---
const demoStage = document.getElementById('demo-stage');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initDemo();
    setupWaitlist();
    setupScrollAnimations();
});

function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
}

async function setupWaitlist() {
    const form = document.querySelector('.waitlist-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input');
        const email = emailInput.value;
        const button = form.querySelector('button');

        button.textContent = 'Joining...';
        button.disabled = true;

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert([{ email: email }]);

            if (error) throw error;

            button.textContent = 'Added to Waitlist!';
            button.style.backgroundColor = 'var(--accent-hover)';
            emailInput.value = '';
            console.log(`Waitlist success: ${email}`);
        } catch (err) {
            console.error('Waitlist error:', err.message);
            button.textContent = 'Try again';
            button.disabled = false;
        }
    });
}

// --- Scenarios Data ---
const SCENARIOS = [
    { u: "Where did my download go?", a: "I see it. It's safe in your folder. Let me show you.", action: 'open_downloads' },
    { u: "How do I turn up the sound?", a: "I'll adjust that for you. Bringing it to 80%.", action: 'volume_up' },
    { u: "Find the photo of the cat I saved.", a: "Found it in your Photos app. Opening it now.", action: 'find_cat_photo' },
    { u: "Is the internet working?", a: "Checking... Yes, you are connected to 'Home_WiFi'.", action: 'check_wifi' },
    { u: "Make the screen brighter.", a: "Sure thing. Increasing brightness for you.", action: 'brightness_up' },
    { u: "I want to write an email to Mom.", a: "Opening your Email app and starting a new draft.", action: 'open_mail' },
    { u: "Where is the calculator?", a: "It's right here. Opening it for you.", action: 'open_calc' },
    { u: "How do I print this?", a: "I've sent it to your 'Living Room Printer'.", action: 'print_doc' },
    { u: "My fonts are too small.", a: "I'll make everything a bit larger and clearer for you.", action: 'zoom_in' },
    { u: "What time is it in London?", a: "It's 12:45 PM in London right now.", action: 'check_clock' },
    { u: "Clear my messy desktop.", a: "Tidying up. I've moved your loose files into a 'Recent' folder.", action: 'organize_desktop' },
    { u: "Which apps are open?", a: "You have Files, Mail, and the Browser running.", action: 'show_apps' },
    { u: "How much battery is left?", a: "You have 85% remaining—plenty of time.", action: 'check_battery' },
    { u: "Open my recipes.", a: "Opening your 'Cooking' folder.", action: 'open_folder_recipes' },
    { u: "I need to take a quick note.", a: "Ready. Just start typing here.", action: 'open_notes' },
    { u: "Search for 'Taxes' in my files.", a: "Searching... Found 'Taxes_2025.pdf'.", action: 'search_files' },
    { u: "Where are my settings?", a: "Opening your control panel now.", action: 'open_settings' },
    { u: "How do I restart?", a: "I can do that for you. Just say the word.", action: 'show_power' },
    { u: "The screen is too blue.", a: "Turning on Night Shift to make the colors warmer.", action: 'night_shift' },
    { u: "What's the weather like?", a: "It's a beautiful sunny day, about 72 degrees.", action: 'show_weather' },
    { u: "Close all my windows.", a: "Closing everything. You have a clean slate now.", action: 'close_all' },
    { u: "Find my last screenshot.", a: "Opening your 'Screenshots' folder.", action: 'open_screenshots' },
    { u: "How do I copy this text?", a: "Just select it, and I'll copy it to your clipboard for you.", action: 'copy_assist' },
    { u: "Connect to my headphones.", a: "Searching for your Bluetooth headphones... Connected.", action: 'connect_bt' },
    { u: "Show me my calendar.", a: "Opening your schedule for today.", action: 'open_calendar' },
    { u: "Is my computer safe?", a: "Yes, I'm monitoring everything. No threats found.", action: 'security_check' },
    { u: "Delete this old file.", a: "Moving it to the trash for you.", action: 'delete_file' },
    { u: "Help me find a recipe for pasta.", a: "Opening the browser to your favorite cooking site.", action: 'open_web_pasta' },
    { u: "Make a new folder for my trip.", a: "Created 'Trip 2026' on your desktop.", action: 'create_folder' },
    { u: "Where is my music?", a: "Opening your music library.", action: 'open_music' },
    { u: "How do I scroll down?", a: "I'll scroll for you. Just let me know when to stop.", action: 'scroll_demo' },
    { u: "Find the PDF I opened yesterday.", a: "Opening 'Monthly_Report.pdf' from yesterday.", action: 'open_recent_pdf' },
    { u: "What's taking up space?", a: "Mostly your high-quality videos. I can help clear some.", action: 'check_storage' },
    { u: "Opening the news.", a: "Sure, here are today's headlines.", action: 'open_news' },
    { u: "Hide my private files.", a: "Hiding your 'Secret' folder now.", action: 'hide_files' },
    { u: "How do I go back?", a: "I'll take you back to the previous screen.", action: 'back_button' },
    { u: "Find a contact named 'John'.", a: "Found John in your address book.", action: 'open_contacts' },
    { u: "Turn off the sound.", a: "Muted. It's nice and quiet now.", action: 'mute' },
    { u: "Eject my USB drive.", a: "Safely removed. You can unplug it now.", action: 'eject_usb' },
    { u: "Check for updates.", a: "Your system is completely up to date.", action: 'check_updates' },
    { u: "Make the text bigger in this email.", a: "Zooming in on the message for you.", action: 'zoom_email' },
    { u: "I need help with my password.", a: "Opening your secure password vault.", action: 'open_vault' },
    { u: "Find my flight ticket.", a: "Found it in your 'Travel' folder.", action: 'find_ticket' },
    { u: "Show me my photos from Hawaii.", a: "Filtering your photos for 'Hawaii'...", action: 'filter_photos' },
    { u: "How do I zoom out?", a: "Bringing the view back to normal.", action: 'zoom_out' },
    { u: "Open my bank website.", a: "Opening your bank's login page securely.", action: 'open_bank' },
    { u: "Where is the trash?", a: "It's right here in the corner.", action: 'show_trash' },
    { u: "I'm lost.", a: "Don't worry. I've reset your view to the home screen.", action: 'home_reset' },
    { u: "How do I use this?", a: "I'll guide you through it step-by-step.", action: 'tutorial_start' },
    { u: "Goodnight, Amy.", a: "Goodnight. I'll be here if you need anything tomorrow.", action: 'sleep_mode' }
];

// --- Interactive Demo Logic ---
let scenarioQueue = [];

function shuffleScenarios() {
    scenarioQueue = [...SCENARIOS].sort(() => Math.random() - 0.5);
}

function initDemo() {
    if (!demoStage) return;

    shuffleScenarios();

    // Clear loading state
    demoStage.innerHTML = `
        <div class="os-mockup">
            <div class="os-wallpaper"></div>
            <div class="os-menubar">
                <span class="os-time">16:30</span>
            </div>
            <div class="os-icons">
                <div class="os-icon" id="icon-files">📁 Files</div>
                <div class="os-icon" id="icon-web">🌐 Web</div>
                <div class="os-icon" id="icon-mail">✉️ Mail</div>
                <div class="os-icon" id="icon-settings">⚙️ Settings</div>
            </div>
            
            <div class="ai-bubble-container" id="ai-bubbles"></div>
            <div class="ghost-cursor" id="cursor"></div>
            
            <div class="os-window" id="demo-window" style="display: none;">
                <div class="window-header" id="win-title">Window</div>
                <div class="window-content" id="win-content"></div>
            </div>

            <div class="os-notification" id="os-notif"></div>
        </div>
    `;

    // Inject Demo Specific CSS
    const style = document.createElement('style');
    style.textContent = `
        .os-mockup { width: 100%; height: 100%; position: relative; background: #E5E5E5; overflow: hidden; font-family: var(--font-sans); }
        .os-wallpaper { position: absolute; inset: 0; background: linear-gradient(135deg, #E6D5B8 0%, #D2B48C 100%); opacity: 0.8; }
        .os-menubar { height: 24px; background: rgba(255,255,255,0.8); width: 100%; display: flex; justify-content: flex-end; padding: 0 12px; align-items: center; font-size: 11px; backdrop-filter: blur(4px); z-index: 10; }
        .os-icons { display: flex; flex-direction: column; gap: 12px; padding: 24px; z-index: 5; }
        .os-icon { width: 60px; text-align: center; font-size: 11px; color: #333; cursor: pointer; transition: transform 0.2s; }
        .os-icon:hover { transform: scale(1.1); }
        .ai-bubble-container { position: absolute; bottom: 24px; right: 24px; display: flex; flex-direction: column; gap: 12px; align-items: flex-end; max-width: 300px; z-index: 100; max-height: 80%; overflow-y: auto; padding-right: 8px; }
        .ai-bubble-container::-webkit-scrollbar { width: 4px; }
        .ai-bubble-container::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .bubble { padding: 12px 16px; border-radius: 12px; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); animation: slideIn 0.4s ease-out forwards; width: fit-content; }
        .user-bubble { background: white; color: #333; border-bottom-right-radius: 2px; }
        .amy-bubble { background: var(--accent-color); color: white; border-bottom-right-radius: 2px; }
        .ghost-cursor { width: 22px; height: 22px; background: rgba(0, 71, 171, 0.4); border: 2px solid white; border-radius: 50%; position: absolute; top: 50%; left: 50%; pointer-events: none; z-index: 1000; transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); display: none; box-shadow: 0 0 10px rgba(0,0,0,0.2); }
        .os-window { position: absolute; top: 50px; left: 100px; width: 400px; height: 280px; background: white; border-radius: 12px; box-shadow: 0 15px 45px rgba(0,0,0,0.2); display: flex; flex-direction: column; z-index: 50; animation: windowPop 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28); }
        .window-header { padding: 10px 16px; background: #FAF9F6; border-bottom: 1px solid #EEE; font-weight: 600; font-size: 13px; border-top-left-radius: 12px; border-top-right-radius: 12px; }
        .window-content { padding: 20px; flex: 1; font-size: 14px; color: #555; overflow-y: auto; }
        .highlight { background: rgba(0, 71, 171, 0.08); border: 1.5px solid var(--accent-color) !important; animation: pulse 2s infinite; border-radius: 8px; }
        .os-notification { position: absolute; top: 32px; right: 12px; background: white; padding: 12px 20px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); font-size: 13px; transform: translateX(120%); transition: transform 0.4s ease; z-index: 200; border-left: 4px solid var(--accent-color); }
        .notif-active { transform: translateX(0); }
        @keyframes slideIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes windowPop { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(0, 71, 171, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(0, 71, 171, 0); } 100% { box-shadow: 0 0 0 0 rgba(0, 71, 171, 0); } }
        .file-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .file-box { padding: 12px; border: 1px solid #EEE; border-radius: 8px; text-align: center; }
    `;
    document.head.appendChild(style);

    startDemoLoop();
}

async function startDemoLoop() {
    let index = 0;
    while (true) {
        if (index >= scenarioQueue.length) {
            shuffleScenarios();
            index = 0;
            // Optional: reset bubbles if too long
            document.getElementById('ai-bubbles').innerHTML = "";
        }

        const scenario = scenarioQueue[index];
        await runScenario(scenario);
        index++;
        await wait(3000); // Gap between scenarios
    }
}

async function runScenario(s) {
    const bubbles = document.getElementById('ai-bubbles');
    const cursor = document.getElementById('cursor');
    const win = document.getElementById('demo-window');
    const title = document.getElementById('win-title');
    const content = document.getElementById('win-content');
    const notif = document.getElementById('os-notif');

    // 1. User Message
    addBubble(s.u, 'user');
    await wait(1200);

    // 2. Amy Response
    addBubble(s.a, 'amy');
    await wait(800);

    // 3. Perform Action
    console.log(`Executing action: ${s.action}`);

    switch (s.action) {
        case 'open_downloads':
            await moveCursor(cursor, 40, 40); // Files icon
            showWindow(win, title, content, "Downloads", `
                <div class="file-grid">
                    <div class="file-box">📄 Receipt.pdf</div>
                    <div class="file-box highlight">📄 Ticket.pdf</div>
                    <div class="file-box">📦 update.zip</div>
                </div>
            `);
            break;

        case 'volume_up':
            showNotif(notif, "🔊 Volume: 80%");
            break;

        case 'find_cat_photo':
            await moveCursor(cursor, 40, 100); // Files or Photos
            showWindow(win, title, content, "Photos", `
                <div class="file-grid">
                    <div class="file-box highlight">🐱 Cat_Photo.jpg</div>
                    <div class="file-box">🌳 Park.jpg</div>
                </div>
            `);
            break;

        case 'check_wifi':
            showNotif(notif, "📶 Connected to 'Home_WiFi' (Strong)");
            break;

        case 'brightness_up':
            const overlay = document.querySelector('.os-wallpaper');
            overlay.style.opacity = "0.2";
            showNotif(notif, "🔆 Brightness: 100%");
            await wait(2000);
            overlay.style.opacity = "0.5";
            break;

        case 'open_mail':
            await moveCursor(cursor, 40, 160); // Mail icon
            showWindow(win, title, content, "New Email", "To: Mom<br>Subject: Hello<br><br>Hi Mom, thinking of you...");
            break;

        case 'open_calc':
            showWindow(win, title, content, "Calculator", "0<br><hr><div style='display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;margin-top:10px;'><span>7</span><span>8</span><span>9</span><span>4</span><span>5</span><span>6</span></div>");
            break;

        case 'print_doc':
            showNotif(notif, "🖨️ Printing 'Document.pdf'...");
            break;

        case 'zoom_in':
            demoStage.style.fontSize = "1.2rem";
            await wait(2000);
            demoStage.style.fontSize = "1rem";
            break;

        case 'organize_desktop':
            const icons = document.querySelector('.os-icons');
            icons.style.opacity = '0';
            await wait(500);
            icons.innerHTML += `<div class="os-icon">📂 Recent Files</div>`;
            icons.style.opacity = '1';
            break;

        default:
            // Generic fallback for the other 40 scenarios for brevity
            showNotif(notif, "Task complete: " + s.a);
            break;
    }

    await wait(3000);
    // Hide window & notif for next run
    win.style.display = 'none';
    notif.classList.remove('notif-active');
    cursor.style.display = 'none';

    // Auto-scroll bubbles to latest
    bubbles.scrollTop = bubbles.scrollHeight;
}

async function moveCursor(c, x, y) {
    c.style.display = 'block';
    await wait(100);
    c.style.top = `${y}px`;
    c.style.left = `${x}px`;
    await wait(1000);
}

function showWindow(win, title, content, t, c) {
    title.textContent = t;
    content.innerHTML = c;
    win.style.display = 'flex';
}

function showNotif(notif, txt) {
    notif.textContent = txt;
    notif.classList.add('notif-active');
}

function addBubble(text, type) {
    const container = document.getElementById('ai-bubbles');
    const b = document.createElement('div');
    b.className = `bubble ${type}-bubble`;
    b.textContent = text;
    container.appendChild(b);
}

function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
