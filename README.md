# vs-code-debugging

## Launch the Server
1. Within VS Code's `Run And Debug` screen, start the debugger using the `API (Launch)` configuration

## Attach to the Server with VS Code
1. Start the app with **or** without the `--inspect` flag (use the `api` or `api-debug` scripts);
2. Within VS Code's `Run And Debug` screen, start the debugger using the `API (Attach)` configuration 

## Attach to the Server with Chrome/Brave
1. Start the app **with** the `--inspect` flag (use the `api-debug` scripts);
2. Within VS Code's `Run And Debug` screen, start the debugger using the `API (Attach)` configuration;
3. Visit `chrome://inspect` within your browser;
4. Pick the Node.js process from the list of Remote Targets;
5. Open the `Sources` tab, and open your codebase's directory


## Launch the Client
1. Ensure that the appropriate debugger plugin in installed ([VS Code - Debugger for Chrome/Brave](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) or [VS Code - Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug));
2. Start the app;
3. Within VS Code's `Run And Debug` screen, start the debugger using the `Chrome (Launch)` configuration

## Attach to the Client with VS Code
1. Ensure that the appropriate debugger plugin in installed ([VS Code - Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) or [VS Code - Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug));
2. Start the app;
3. Ensure that all **instances** of the browser you will be using are entirely closed out.  To do this, you must **quit** the browser entirely; 
4. Start Chrome with the folliwing command: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222` or use the `chrome` NPM script;
5. Alternatively, start Brave with the following command: `/Applications/Brave\ Browser.app/Contents/MacOS/Brave\ Browser  --remote-debugging-port=9222 --new-window http://localhost:8080` or use the `brave` NPM script;
6. Within VS Code's `Run And Debug` screen, start the debugger using the `Chrome (Attach)` configuration
