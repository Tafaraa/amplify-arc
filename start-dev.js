const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Colors for console output
const colors = {
  web: '\x1b[36m', // Cyan
  mobile: '\x1b[32m', // Green
  error: '\x1b[31m', // Red
  reset: '\x1b[0m', // Reset
};

// Function to check if directory exists
const directoryExists = (dirPath) => {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch (err) {
    return false;
  }
};

// Function to start a process
const startProcess = (name, command, args, cwd) => {
  console.log(`${colors[name]}Starting ${name} application...${colors.reset}`);
  
  if (!directoryExists(cwd)) {
    console.error(`${colors.error}Error: Directory ${cwd} does not exist${colors.reset}`);
    return null;
  }
  
  const process = spawn(command, args, {
    cwd,
    shell: true,
    stdio: 'pipe',
  });
  
  process.stdout.on('data', (data) => {
    console.log(`${colors[name]}[${name}] ${data.toString().trim()}${colors.reset}`);
  });
  
  process.stderr.on('data', (data) => {
    console.error(`${colors.error}[${name}] ${data.toString().trim()}${colors.reset}`);
  });
  
  process.on('close', (code) => {
    if (code !== 0) {
      console.log(`${colors.error}[${name}] process exited with code ${code}${colors.reset}`);
    }
  });
  
  return process;
};

// Get root directory
const rootDir = __dirname;
const webDir = path.join(rootDir, 'web');
const mobileDir = path.join(rootDir, 'mobile');

// Start web application
const webProcess = startProcess('web', 'npm', ['start'], webDir);

// Start mobile application
const mobileProcess = startProcess('mobile', 'npm', ['start'], mobileDir);

// Handle termination
const cleanup = () => {
  if (webProcess) webProcess.kill();
  if (mobileProcess) mobileProcess.kill();
  console.log('\nShutting down all processes...');
  process.exit();
};

// Listen for termination signals
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
