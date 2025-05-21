import fs from "fs";
import path from "path";

const gamelist = fs.readdirSync(path.join(process.cwd(), "public/logos"));

export { gamelist };
