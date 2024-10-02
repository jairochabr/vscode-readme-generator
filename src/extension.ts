import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';
import * as marked from 'marked';
import { getWebviewContent } from './components/getWebviewContent';

export function activate(context: vscode.ExtensionContext) {
    console.log('README Generator is now active!');

    let disposable = vscode.commands.registerCommand('extension.generateReadme', () => {
        const panel = vscode.window.createWebviewPanel(
            'readmeGenerator',
            'README Generator',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true
            }
        );
				
        panel.webview.html = getWebviewContent();

        panel.webview.onDidReceiveMessage(
            async (message) => {
                switch (message.command) {
                    case 'generate':
                        generateReadme(message.content);
                        return;
                    case 'preview':
                        previewReadme(message.content, panel.webview);
                        return;
                }
            },
            undefined,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);
}

async function previewReadme(content: any, webview: vscode.Webview) {
    // Preview implementation will go here
}

function generateReadme(content: any) {
    // README generation implementation will go here
}

export function deactivate() {}