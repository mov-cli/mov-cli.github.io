build: npm tw

npm:
	npm i

tw:
	npx tailwindcss -i ./src/static/input.css -o ./src/static/output.css --minify

tw-watch:
	npx tailwindcss -i ./src/static/input.css -o ./src/static/output.css --watch