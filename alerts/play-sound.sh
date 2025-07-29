#!/bin/bash

# Enhanced sound notification script for DevPulse
# This script tries multiple methods to play notification sounds

echo "🔊 Playing alert sounds..."

# Method 1: Try system notification sounds
if command -v paplay >/dev/null 2>&1; then
    paplay /usr/share/sounds/alsa/Front_Left.wav 2>/dev/null &
    paplay /usr/share/sounds/alsa/Front_Right.wav 2>/dev/null &
fi

# Method 2: Try ALSA
if command -v aplay >/dev/null 2>&1; then
    aplay /usr/share/sounds/alsa/Front_Left.wav 2>/dev/null &
fi

# Method 3: Try SoX for synthetic sounds
if command -v play >/dev/null 2>&1; then
    play -n synth 0.3 sine 800 2>/dev/null &
    sleep 0.4
    play -n synth 0.3 sine 1000 2>/dev/null &
    sleep 0.4  
    play -n synth 0.3 sine 800 2>/dev/null &
fi

# Method 4: Try speaker-test
if command -v speaker-test >/dev/null 2>&1; then
    speaker-test -t sine -f 800 -l 1 -s 1 2>/dev/null &
fi

# Method 5: Terminal bell (always works)
echo -e "\a"
sleep 0.3
echo -e "\a"
sleep 0.3
echo -e "\a"

# Method 6: Try espeak for voice notification
if command -v espeak >/dev/null 2>&1; then
    espeak "DevPulse session complete! Great job!" 2>/dev/null &
fi

# Method 7: Try festival for voice notification
if command -v festival >/dev/null 2>&1; then
    echo "DevPulse session complete! Time for a break!" | festival --tts 2>/dev/null &
fi

echo "🎉 Alert notifications sent!"
