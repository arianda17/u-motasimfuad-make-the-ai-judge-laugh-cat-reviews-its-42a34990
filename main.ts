import { writeFileSync, mkdirSync } from "node:fs";

const entry = "★☆☆☆☆ One star: closed the bathroom door and expected me to wait outside like a dog. I have not forgiven them; the bowl is also empty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);