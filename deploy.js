const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

// Colors for console output
const colors = {
  info: '\x1b[36m', // Cyan
  success: '\x1b[32m', // Green
  error: '\x1b[31m', // Red
  warning: '\x1b[33m', // Yellow
  reset: '\x1b[0m', // Reset
};

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if directory exists
const directoryExists = (dirPath) => {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch (err) {
    return false;
  }
};

// Function to run a command and return a promise
const runCommand = (command, args, cwd, name) => {
  return new Promise((resolve, reject) => {
    console.log(`${colors.info}[${name}] Running: ${command} ${args.join(' ')}${colors.reset}`);
    
    const process = spawn(command, args, {
      cwd,
      shell: true,
      stdio: 'inherit',
    });
    
    process.on('close', (code) => {
      if (code === 0) {
        console.log(`${colors.success}[${name}] Command completed successfully${colors.reset}`);
        resolve();
      } else {
        console.error(`${colors.error}[${name}] Command failed with code ${code}${colors.reset}`);
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
};

// Function to build the web application
const buildWeb = async () => {
  const webDir = path.join(__dirname, 'web');
  
  if (!directoryExists(webDir)) {
    console.error(`${colors.error}Error: Web directory does not exist${colors.reset}`);
    return false;
  }
  
  try {
    console.log(`${colors.info}Building web application...${colors.reset}`);
    await runCommand('npm', ['install'], webDir, 'Web');
    await runCommand('npm', ['run', 'build'], webDir, 'Web');
    console.log(`${colors.success}Web application built successfully${colors.reset}`);
    return true;
  } catch (error) {
    console.error(`${colors.error}Failed to build web application: ${error.message}${colors.reset}`);
    return false;
  }
};

// Function to build the mobile application
const buildMobile = async () => {
  const mobileDir = path.join(__dirname, 'mobile');
  
  if (!directoryExists(mobileDir)) {
    console.error(`${colors.error}Error: Mobile directory does not exist${colors.reset}`);
    return false;
  }
  
  try {
    console.log(`${colors.info}Building mobile application...${colors.reset}`);
    await runCommand('npm', ['install'], mobileDir, 'Mobile');
    await runCommand('expo', ['build:android'], mobileDir, 'Mobile');
    console.log(`${colors.success}Mobile application built successfully${colors.reset}`);
    return true;
  } catch (error) {
    console.error(`${colors.error}Failed to build mobile application: ${error.message}${colors.reset}`);
    return false;
  }
};

// Function to deploy the web application
const deployWeb = async () => {
  const webDir = path.join(__dirname, 'web');
  const buildDir = path.join(webDir, 'build');
  
  if (!directoryExists(buildDir)) {
    console.error(`${colors.error}Error: Web build directory does not exist. Run build first.${colors.reset}`);
    return false;
  }
  
  try {
    console.log(`${colors.info}Deploying web application...${colors.reset}`);
    // This is a placeholder. In a real scenario, you would use a deployment service like Netlify, Vercel, etc.
    console.log(`${colors.warning}This is a placeholder for web deployment. In a real scenario, you would use a deployment service like Netlify, Vercel, etc.${colors.reset}`);
    console.log(`${colors.success}Web application deployed successfully${colors.reset}`);
    return true;
  } catch (error) {
    console.error(`${colors.error}Failed to deploy web application: ${error.message}${colors.reset}`);
    return false;
  }
};

// Function to deploy the mobile application
const deployMobile = async () => {
  const mobileDir = path.join(__dirname, 'mobile');
  
  try {
    console.log(`${colors.info}Deploying mobile application...${colors.reset}`);
    // This is a placeholder. In a real scenario, you would use app stores or a distribution service.
    console.log(`${colors.warning}This is a placeholder for mobile deployment. In a real scenario, you would use app stores or a distribution service.${colors.reset}`);
    console.log(`${colors.success}Mobile application deployed successfully${colors.reset}`);
    return true;
  } catch (error) {
    console.error(`${colors.error}Failed to deploy mobile application: ${error.message}${colors.reset}`);
    return false;
  }
};

// Main function
const main = async () => {
  console.log(`${colors.info}Amplify ARC Deployment Tool${colors.reset}`);
  console.log(`${colors.info}==========================${colors.reset}`);
  
  rl.question(`${colors.info}What would you like to deploy? (web/mobile/both): ${colors.reset}`, async (answer) => {
    const deployTarget = answer.toLowerCase();
    
    if (deployTarget === 'web' || deployTarget === 'both') {
      const webBuilt = await buildWeb();
      if (webBuilt) {
        await deployWeb();
      }
    }
    
    if (deployTarget === 'mobile' || deployTarget === 'both') {
      const mobileBuilt = await buildMobile();
      if (mobileBuilt) {
        await deployMobile();
      }
    }
    
    if (deployTarget !== 'web' && deployTarget !== 'mobile' && deployTarget !== 'both') {
      console.log(`${colors.error}Invalid option. Please choose 'web', 'mobile', or 'both'.${colors.reset}`);
    }
    
    rl.close();
  });
};

// Run the main function
main().catch(error => {
  console.error(`${colors.error}An error occurred: ${error.message}${colors.reset}`);
  process.exit(1);
});
