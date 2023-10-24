const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposableLogClipboard = vscode.commands.registerCommand(
    "extension.logClipboard",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let fileType = editor.document.languageId;
        let snippet;
        if (
          fileType === "javascript" ||
          fileType === "typescript" ||
          fileType === "javascriptreact" ||
          fileType === "typescriptreact"
        ) {
          snippet = new vscode.SnippetString(
            "$1console.log(\"\\x1b[8m\\x1b[40m\\x1b[0m\\x1b[7m%c    $CLIPBOARD    \\x1b[8m\\x1b[40m\\x1b[0m%c $TM_FILENAME $TM_LINE_INDEX \\n\", 'color: white; background: black; font-weight: bold', '');"
          );
        } else if (fileType === "php") {
          snippet = new vscode.SnippetString(
            '$1error_log("$CLIPBOARD - $TM_FILENAME $TM_LINE_INDEX");'
          );
        } else {
          return;
        }
        editor.insertSnippet(snippet);
        vscode.commands.executeCommand("workbench.action.files.save");
      }
    }
  );

  let disposableLogClipboardAsVariable = vscode.commands.registerCommand(
    "extension.logClipboardAsVariable",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let fileType = editor.document.languageId;
        let snippet;
        if (
          fileType === "javascript" ||
          fileType === "typescript" ||
          fileType === "javascriptreact" ||
          fileType === "typescriptreact"
        ) {
          snippet = new vscode.SnippetString(
            "$1console.log(\"\\x1b[8m\\x1b[40m\\x1b[0m\\x1b[7m%c    $CLIPBOARD    \\x1b[8m\\x1b[40m\\x1b[0m%c $TM_FILENAME $TM_LINE_INDEX \\n\", 'color: white; background: black; font-weight: bold', '', $CLIPBOARD);"
          );
        } else if (fileType === "php") {
          snippet = new vscode.SnippetString(
            '$1error_log("$" . "$CLIPBOARD: " . print_r($$CLIPBOARD, true) . " - $TM_FILENAME $TM_LINE_INDEX");'
          );
        } else {
          return;
        }
        editor.insertSnippet(snippet);
        vscode.commands.executeCommand("workbench.action.files.save");
      }
    }
  );

  context.subscriptions.push(
    disposableLogClipboard,
    disposableLogClipboardAsVariable
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
