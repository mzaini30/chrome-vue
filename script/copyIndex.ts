import {writeFileSync, readFileSync} from 'fs'

const origin = readFileSync('index.html').toString()

const modified = origin
	.replace(`<script type="module" src="/src/main.js"></script>`, `
		<script type="module" src="http://localhost:3000/src/main.js"></script>
	  <script type="module" src="http://localhost:3000/@id/virtual:vue-inspector-path:load.js"></script>
	`)
	.replace(`<head>`, `
		<head>
		<script type="module" src="http://localhost:3000/@vite/client"></script>
	`)

writeFileSync('public/index.html', modified)