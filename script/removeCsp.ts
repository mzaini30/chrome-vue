import {writeFileSync, readFileSync} from 'fs'

let manifest = readFileSync('dist/manifest.json').toString()
manifest = manifest
	.replace(`"content_security_policy": "default-src 'self'; script-src 'self' http://localhost:3000 'unsafe-eval'; connect-src *; style-src * 'unsafe-inline' 'self' blob:; img-src * data:; font-src *;"`, '')
	.replace(`"browser_action": {},`, `"browser_action": {}`)

writeFileSync('dist/manifest.json', manifest)