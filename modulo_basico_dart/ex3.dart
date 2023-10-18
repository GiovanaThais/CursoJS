import 'dart:io';

void main() {
  // Entrada de dados
  int saldoTotal = int.parse(stdin.readLineSync()!);
  int valorSaque = int.parse(stdin.readLineSync()!);

 //TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
   // Verifica se o saldo é suficiente para o saque
  if (saldoTotal >= valorSaque) {
    // Subtrai o valor do saque do saldo total
    saldoTotal -= valorSaque;

    // Imprime a mensagem de saque realizado com sucesso e o novo saldo
    print("Saque realizado com sucesso! Novo saldo: $saldoTotal");
  } else {
    // Imprime a mensagem de saldo insuficiente
    print("Saldo insuficiente. Saque nao realizado!");
  }
}