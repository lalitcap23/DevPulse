# 🧠 DevPulse v1.1.0 - Enhanced Focus Timer

## 🎉 First Stable Release!

DevPulse is now available as a stable Bun package on npm! A powerful terminal-based focus timer with multiple notification methods to ensure you never miss when your session completes.

## 📦 Installation

```bash
# Global installation (recommended)
npm install -g devpulse

# Or with Bun
bun add -g devpulse
```

## 🚀 Quick Start

```bash
devpulse focus 25    # 25-minute Pomodoro session
devpulse break 5     # 5-minute break
devpulse focus 1     # 1-minute test (try this first!)
```

## ✨ Features

### 🔥 Core Functionality

- **Focus sessions** - Pomodoro-style focused work periods
- **Break timers** - Reminder for rest periods
- **Beautiful terminal UI** - Colorful, animated spinner with real-time countdown

### 🚨 Enhanced Notifications

When your timer completes, DevPulse uses **multiple notification methods**:

1. **🔊 System Audio Alerts**

   - Multiple terminal bells
   - System beep sounds
   - Audio fallbacks for reliability

2. **🖥️ Visual Notifications**

   - Colorful terminal flash alerts
   - Desktop notifications
   - Full-screen browser popup with animations

3. **📱 Browser Alarm Page**
   - Animated gradient background
   - Confetti effects
   - Multiple audio sources
   - Auto-closing popup

## 🛠️ Requirements

- **Bun runtime** (v1.0.0+) or **Node.js** (v16+)
- **Linux desktop environment** (for full notification support)
- **Audio system** (PulseAudio/ALSA recommended)
- **Web browser** (for enhanced alarm popup)

## 📖 Usage Examples

```bash
# Start sessions
devpulse focus       # 25-minute focus (default)
devpulse focus 45    # 45-minute extended focus
devpulse break 5     # 5-minute break

# Check progress (coming soon)
devpulse log         # Today's sessions
devpulse report      # Weekly summary

# Get help
devpulse --help
```

## 🔗 Links

- **npm Package**: https://www.npmjs.com/package/devpulse
- **GitHub Repository**: https://github.com/lalitcap23/DevPulse
- **Issues**: https://github.com/lalitcap23/DevPulse/issues

## 📊 Package Stats

- **Size**: 7.4 kB (packed)
- **Dependencies**: 3 (chalk, node-notifier, ora)
- **License**: MIT

---

Built with ❤️ using [Bun](https://bun.sh) - the fast all-in-one JavaScript runtime.

**Try it now**: `npm install -g devpulse && devpulse focus 1`
