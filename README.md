# 🧠 DevPulse - Enhanced Terminal Focus Tracker

[![npm version](https://img.shields.io/npm/v/devpulse.svg)](https://www.npmjs.com/package/devpulse)
[![npm downloads](https://img.shields.io/npm/dm/devpulse.svg)](https://www.npmjs.com/package/devpulse)
[![GitHub release](https://img.shields.io/github/release/lalitcap23/DevPulse.svg)](https://github.com/lalitcap23/DevPulse/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful, terminal-based focus timer with **multiple notification methods** to ensure you never miss when your session completes!

**📦 Available on npm**: [`devpulse`](https://www.npmjs.com/package/devpulse)

## 🎯 Quick Start

```bash
# Install globally
npm install -g devpulse

# Try it immediately
devpulse focus 1
```

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

### **📦 Global Installation (Recommended)**

**Install from npm:**

```bash
# Using npm
npm install -g devpulse

# Using Bun (recommended for faster performance)
bun add -g devpulse

# Using pnpm
pnpm add -g devpulse
```

**After installation, use anywhere:**

```bash
devpulse focus 25    # Start using immediately!
```

### **🔗 Package Links**

- **📦 npm Package**: [devpulse](https://www.npmjs.com/package/devpulse)
- **🐙 GitHub Repository**: [lalitcap23/DevPulse](https://github.com/lalitcap23/DevPulse)
- **📋 Issues**: [Report bugs](https://github.com/lalitcap23/DevPulse/issues)
- **📖 Releases**: [View all versions](https://github.com/lalitcap23/DevPulse/releases)

**Install from source:**

```bash
git clone https://github.com/lalitcap23/DevPulse.git
cd DevPulse
bun install
bun link
```

### **Local Development**

```bash
git clone https://github.com/lalitcap23/DevPulse.git
cd DevPulse
bun install
```

## 📖 Usage

### **Global Commands (After Installation)**

```bash
# Quick test (1 minute)
devpulse focus 1

# Standard sessions
devpulse focus 25      # 25-minute Pomodoro
devpulse focus 45      # 45-minute extended focus
devpulse break 5       # 5-minute break

# Check your progress (coming soon)
devpulse log           # Today's sessions
devpulse report        # Weekly summary

# Get help
devpulse --help
devpulse --version
```

### **Local Development Commands**

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

- **Bun runtime** (v1.0.0+) or **Node.js** (v16+)
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

### **Installation Issues**

**Package not found?**

```bash
npm install -g devpulse@latest
```

**Permission errors?**

```bash
sudo npm install -g devpulse
# Or use a node version manager like nvm
```

**Update to latest version:**

```bash
npm update -g devpulse
```

**Uninstall:**

```bash
npm uninstall -g devpulse
```

### **Runtime Issues**

**No sound?**

- Check audio system: `speaker-test -t sine -f 800 -l 1`
- Install audio tools: `sudo apt install alsa-utils pulseaudio-utils sox`

**No desktop notifications?**

- Install notification daemon: `sudo apt install notification-daemon`

**Browser popup not opening?**

- Ensure you have a web browser installed
- Check if `xdg-open` works: `xdg-open https://google.com`

**Command not found?**

- Ensure npm global bin is in PATH: `npm bin -g`
- Restart your terminal after installation

## 🎯 **✅ SIMPLE COMMANDS**

### **🚀 Global Commands (After `bun add -g devpulse`):**

```bash
# Quick test (1 minute)
devpulse focus 1

# Standard sessions
devpulse focus 25      # 25-minute Pomodoro focus
devpulse focus 45      # 45-minute extended focus
devpulse break 5       # 5-minute break

# Default sessions
devpulse focus         # 25-minute focus (default)
devpulse break         # 25-minute break (default)

# Check progress
devpulse log           # Today's sessions
devpulse report        # Weekly summary

# Help & info
devpulse --help
devpulse --version
```

### **🚀 Local Development Commands:**

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
# Global install
devpulse log       # Today's sessions
devpulse report    # Weekly summary

# Local development
bun devlog         # Today's sessions
bun devreport      # Weekly summary
```

### **🧪 Quick Testing:**

```bash
# Global install
devpulse focus 0.1     # 6-second test

# Local development
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
# Install globally first
npm install -g devpulse

# Try this first to test all notifications:
devpulse focus 1
```

### **💡 Alternative Commands:**

```bash
# If you prefer longer commands or local development:
bun run src/index.ts focus 1       # 1-minute test
bun run src/index.ts focus 25      # 25-minute focus
bun run src/index.ts break 5       # 5-minute break
bun run src/index.ts log           # Today's sessions
bun run src/index.ts report        # Weekly summary
```

## 📊 Package Information

- **📦 Package Name**: `devpulse`
- **🏷️ Latest Version**: `1.1.0`
- **📏 Package Size**: 7.4 kB (packed)
- **🔗 Dependencies**: 3 (chalk, node-notifier, ora)
- **📄 License**: MIT
- **🌐 Homepage**: [GitHub Repository](https://github.com/lalitcap23/DevPulse)

## 🤝 Contributing

Found a bug or want to contribute?

1. **🐛 Report Issues**: [GitHub Issues](https://github.com/lalitcap23/DevPulse/issues)
2. **💡 Feature Requests**: [Discussions](https://github.com/lalitcap23/DevPulse/discussions)
3. **🔀 Pull Requests**: Fork → Feature → PR

## 📈 Roadmap

- [ ] Session logging and statistics
- [ ] Custom notification sounds
- [ ] Configuration file support
- [ ] Cross-platform notifications
- [ ] Session templates and presets




**🚀 Get started now**: `npm install -g devpulse && devpulse focus 1`

Built with ❤️ using [Bun](https://bun.sh) - the fast all-in-one JavaScript runtime.
