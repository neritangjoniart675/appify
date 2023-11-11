// filename: complexProgram.js

/**
 * Complex Program
 * Author: Your Name
 * Date: Today's Date
 * Description: This complex program demonstrates various advanced concepts in JavaScript,
 * including object-oriented programming, asynchronous programming, error handling, and more.
 */

class ComplexProgram {
  constructor() {
    this.data = [];
    this.timer = null;
    this.errorCount = 0;
  }

  async initialize() {
    console.log("Initializing program...");

    try {
      await this.loadData();
      this.startTimer();
    } catch (error) {
      console.error("Error initializing program:", error);
    }
  }

  async loadData() {
    console.log("Loading data...");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (let i = 0; i < 1000; i++) {
          this.data.push(Math.random());
        }

        if (this.data.length === 1000) {
          console.log("Data loaded successfully.");
          resolve();
        } else {
          reject(new Error("Failed to load data."));
        }
      }, 2000);
    });
  }

  startTimer() {
    console.log("Starting timer...");

    this.timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.data.length);
      const randomData = this.data[randomIndex];

      try {
        this.processData(randomData);
      } catch (error) {
        console.error("Error processing data:", error);
        this.errorCount++;
      }

      if (this.errorCount === 3) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    console.log("Stopping timer.");

    clearInterval(this.timer);
  }

  processData(data) {
    if (data < 0.5) {
      throw new Error("Invalid data detected.");
    } else {
      console.log("Processing data:", data);
    }
  }
}

// Usage example
const program = new ComplexProgram();
program.initialize();