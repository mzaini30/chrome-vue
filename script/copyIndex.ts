import { writeFileSync, readFileSync } from "fs";

const origin = readFileSync("index.html").toString();

const modified = origin
  .replace(
    `<script type="module" src="/src/main.ts"></script>`,
    `
		<script type="module" src="http://localhost:3000/src/main.ts"></script>
	`
  )
  .replace(
    `<head>`,
    `
		<head>
		<script type="module" src="http://localhost:3000/@vite/client"></script>
	`
  );

writeFileSync("public/index.html", modified);
