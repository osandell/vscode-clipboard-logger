## Features

- Insert log statements with a variable placeholder, automatically grabbing and placing the clipboard contents.
- Insert log statement with the clipboard contents + a variable dump of any variable of the same name.s
- Supports JavaScript and PHP files.

### Steps to Use the Extension:

1. **Install:** 
   - Get the extension from the Visual Studio Code Marketplace.
   
2. **Open File:** 
   - Work with a JavaScript or PHP file.
   
3. **Commands:** 
   - Use the command palette (Ctrl+Shift+P or Cmd+Shift+P on Mac) or assign to your preferred keybindings.
   
   - `Log Clipboard`: Inserts a log statement using your clipboard content.
   
   - `Log Clipboard as Variable`: Inserts a log statement with your clipboard content, then dumps any variable with the same name. Example: If you've copied `myVar` containing `1234`, it'll log: "`myVar: 1234 - myFile.js 32`".



## Keybindings

Assign keybindings for the `Log Clipboard` and `Log Clipboard as Variable` commands to streamline your logging process. Example:

```json
{
    "key": "ctrl+alt+l",
    "command": "extension.logClipboard",
    "when": "editorTextFocus"
},
{
    "key": "ctrl+alt+shift+l",
    "command": "extension.logClipboardAsVariable",
    "when": "editorTextFocus"
}
```

## Extension Settings

This extension contributes the following commands:

    extension.logClipboard: Log Clipboard
    extension.logClipboardAsVariable: Log Clipboard as Variable

## Building extension
```bash
pnpm vsce package --no-dependencies
```
    
## Contributing

If you want to extend the functionality with support for more coding languages etc, or want to report a bug, open an issue! I appreciate contributions.

## License

MIT © Olof Sandell
