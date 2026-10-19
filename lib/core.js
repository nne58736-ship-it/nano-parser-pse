export function executeCommand(args) {
  const command = args[0] || '--help';
  if (command === '--help') {
    console.log('Nano Parser Pse v1.0.0 by @nne58736-ship-it');
    console.log('Commands: run, status, version');
  } else {
    console.log(`Executing ${command}...`);
  }
}