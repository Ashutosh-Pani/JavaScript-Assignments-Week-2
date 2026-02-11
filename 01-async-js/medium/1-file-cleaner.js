// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs").promises;

async function cleanFile() {
  try {
    const data = await fs.readFile(path, "utf-8");
    const cleaned = data.replace(/\s+/g, " ").trim();
    await fs.writeFile(path, cleaned);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

cleanFile();
