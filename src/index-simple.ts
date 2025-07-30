#!/usr/bin/env bun
import chalk from "chalk";
import ora from "ora";

console.log(chalk.blue("🧠 DevPulse Starting..."));

// CLI Args
const args = process.argv.slice(2);
const command = args[0];
const minutes = parseFloat(args[1] ?? "") || 25;

console.log(`Command: ${command}, Minutes: ${minutes}`);

if (command === "focus") {
  console.log(chalk.green(`🎯 Starting ${minutes}-minute focus session...`));
  
  const spinner = ora(`⏳ FOCUS for ${minutes} min`).start();
  let seconds = Math.floor(minutes * 60);
  
  const interval = setInterval(() => {
    seconds--;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    spinner.text = `⏳ ${chalk.green(m)}:${chalk.yellow(s < 10 ? '0' + s : s)}`;
    
    if (seconds <= 0) {
      clearInterval(interval);
      spinner.succeed(`✅ Focus session complete! (${minutes} min)`);
      
      // Simple notifications
      console.log(chalk.bgRed.white.bold("  🚨 TIMER COMPLETE! 🚨  "));
     
      // Terminal bells
      process.stdout.write("\x07\x07\x07");
      
      process.exit(0);
    }
  }, 1000);
  
} else {
  console.log(`
🧠 DevPulse – Terminal Focus Tracker (Bun)
Usage:
  bun run src/index.ts focus [minutes]     Start a focus session
  bun run src/index.ts break [minutes]     Start a break session
  
Examples:
  bun run src/index.ts focus 1    # 1-minute test
  bun run src/index.ts focus 25   # 25-minute session
`);
}
