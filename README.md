# 🧠 DevPulse - Enhanced Terminal Focus Tracker

A powerful, terminal-based focus timer with **multiple notification methods** to ensure you never miss when your session completes!

## ✨ Features

### 🔥 Core Functionality

- **Focus sessions** - Pomodoro-style focused work periods
- **Break timers** - Reminder for rest periods
- **Session logging** - Track your daily and weekly progress
- **Beautiful terminal UI** - Colorful, animated spinner with real-time countdown

### 🚨 **Enhanced Notifications** (NEW!)

When your timer completes, DevPulse uses **multiple notification methods** for maximum impact:

1. **🔊 System Audio Alerts**

   - Multiple sound methods (PulseAudio, ALSA, SoX, speaker-test)
   - Synthetic beep sounds as fallback
   - Optional voice announcements (espeak/festival)

2. **🖥️ Visual Notifications**

   - Colorful terminal flash alerts
   - Desktop notifications (node-notifier)
   - Full-screen browser popup with animations

3. **📱 Browser Alarm Page**

   - Animated gradient background
   - Confetti effects
   - Multiple audio sources
   - Auto-closing popup

4. **⚡ Terminal Features**
   - Multiple terminal bells
   - Vibrant colored alerts
   - ASCII celebration messages

## 🚀 Installation

```bash
bun install
```

## 📖 Usage

### Basic Commands

```bash
# Start a 25-minute focus session
bun run src/index.ts focus

# Start a custom focus session (e.g., 45 minutes)
bun run src/index.ts focus 45

# Start a 5-minute break
bun run src/index.ts break 5

# View today's sessions
bun run src/index.ts log

# Weekly summary
bun run src/index.ts report
```

### Testing Notifications

```bash
# Test all notification methods
bun run test-notifications.ts

# Test just the sound alerts
bun run test-sound

# Quick timer test (6 seconds)
bun run test-timer
```

## 🛠️ Requirements

- **Bun runtime** (v1.2.14+)
- **Linux desktop environment** (for full notification support)
- **Audio system** (PulseAudio/ALSA recommended)
- **Web browser** (for enhanced alarm popup)

## 📁 Project Structure

```
devpulse/
├── src/index.ts              # Main application
├── alerts/
│   ├── alarm.html            # Enhanced browser notification
│   └── play-sound.sh         # Multi-method sound script
├── data/logs.json            # Session history
└── test-notifications.ts    # Notification test suite
```

## 🎨 Notification Customization

The notification system is designed to work across different Linux environments:

- **Desktop environments**: Full visual + audio notifications
- **Server/headless**: Terminal + audio notifications
- **Minimal systems**: Terminal bells + text alerts

## 🔧 Troubleshooting

**No sound?**

- Check audio system: `speaker-test -t sine -f 800 -l 1`
- Install audio tools: `sudo apt install alsa-utils pulseaudio-utils sox`

**No desktop notifications?**

- Install notification daemon: `sudo apt install notification-daemon`

**Browser popup not opening?**

- Ensure you have a web browser installed
- Check if `xdg-open` works: `xdg-open https://google.com`

## 🎯 **✅ SIMPLE COMMANDS**

### **🚀 Super Easy Focus & Break:**

```bash
# Quick test (1 minute)
bun focus1

# Standard sessions
bun focus25        # 25-minute Pomodoro focus
bun focus45        # 45-minute extended focus
bun break5         # 5-minute break

# Default sessions
bun focus          # 25-minute focus (default)
bun break          # 25-minute break (default)
```

### **📊 Check Your Progress:**

```bash
bun devlog         # Today's sessions
bun devreport      # Weekly summary
```

### **🧪 Quick Testing:**

```bash
bun test           # Test all notifications
bun test-sound     # Test sound alerts only
```

### **📱 What You Get When Timer Completes:**

- 🎨 **Colorful terminal alerts**
- 🔔 **8 terminal bells** (extra loud!)
- 🔊 **System beep sound** (1000Hz tone)
- 📱 **Desktop notification** (if available)
- 🌐 **Browser alarm popup** (if display available)
- ✨ **Celebration messages**

### **🎯 Quick Start:**

```bash
# Try this first to test all notifications:
bun focus1
```

### **💡 Alternative Commands:**

```bash
# If you prefer longer commands:
bun run src/index.ts focus 1       # 1-minute test
bun run src/index.ts focus 25      # 25-minute focus
bun run src/index.ts break 5       # 5-minute break
bun run src/index.ts log           # Today's sessions
bun run src/index.ts report        # Weekly summary
```

---

Built with ❤️ using [Bun](https://bun.sh) - the fast all-in-one JavaScript runtime.
