// O módulo 'vscode' contém a API de extensibilidade do VS Code
// Importe o módulo e faça referência a ele com o alias vscode em seu código abaixo
import * as vscode from 'vscode';

// Esse método é chamado quando sua extensão é ativada
// Sua extensão é ativada na primeira vez que o comando é executado
export function activate(context: vscode.ExtensionContext) {

	// Usar o console para gerar informações de diagnóstico (console.log) e erros (console.error)
	// Esta linha de código só será executada uma vez quando sua extensão for ativada
	console.log('Congratulations, your extension "vscode-readme-generator" is now active!');

	// O comando foi definido no arquivo package.json
	// Agora forneça a implementação do comando com registerCommand
	// O parâmetro commandId deve corresponder ao campo de comando em package.json
	const disposable = vscode.commands.registerCommand('vscode-readme-generator.helloWorld', () => {
		// O código que você colocar aqui será executado toda vez que seu comando for executado
		// Exibir uma caixa de mensagem para o usuário
		vscode.window.showInformationMessage('Hello World from vscode-readme-generator!');
	});

	context.subscriptions.push(disposable);
}

// Esse método é chamado quando sua extensão é desativada
export function deactivate() {}