# re-start

a tui-like browser startpage, built with svelte.

features:

- todoist tasks integration
- weather
- customizable links
- random stats (load time, ping, fps, viewport size)

<img width="2359" height="1340" alt="image" src="https://github.com/user-attachments/assets/220a383b-ceb7-4c54-9822-13eee4f63ad9" />


## how to use

### firefox

1. download the latest .xpi file from the `releases` folder.
2. go to the firefox extensions manager (`about:addons`)
3. click the gear icon in the top right.
4. click "Install Add-on From File" and select the .xpi file you downloaded.
5. make sure to click "Add" and "Keep Changes".

### chrome

1. clone/download this repo.
2. run `npm i` (you must have node.js).
3. run `npm run build`. you should see it create a `dist` folder.
4. go to the chrome extensions manager (`chrome://extensions`).
5. turn on developer mode in the top right.
6. click "Load unpacked" in the top left.
7. select the `dist` folder.

### startpage settings

hover your cursor on the top right corner of the startpage, and you should see a settings button appear. click it to configure settings.

to get your todoist api token, open the todoist website and clicking your profile in the top left. then go to "Settings" > "Integrations" > "Developer" > "Copy API Token".

### development / building from souce

1. clone/download this repo.
2. run `npm i` (you must have node.js).
3. run `npm run dev` to start in development mode. the page will run at `http://localhost:5173`.
4. run `npm run build` to build for production.
