import fs from "fs/promises";

class Io {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async readFile() {
    try {
      const data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
  async writeFille(data) {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf-8");
  }
}
export default Io;
