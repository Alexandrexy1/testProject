# Relatório - Alexandre Nascimento

## 1. Visão Geral da Solução

## 2. Como Executar a Aplicação

## 3. Correção dos Erros Iniciais
Ao executar `npm run dev`, o backend não estava iniciando. Abaixo, eu listei os problemas que identifiquei e suas correções:

- **package.json apontava para o arquivo errado**  
  O `start` estava configurado incorretamente. Eu ajustei para apontar para `src/index.js`.

- **Erro no require do taskController**  
  O caminho do require estava incorreto: `taskControler` (com apenas um L). Eu ajustei para `taskController`.

- **Dependência `tedious` ausente**  
  O backend utiliza o pacote, mas ele não estava instalado. Executei `npm i tedious` e resolveu o problema.

- **Erro "argument handler must be a function"**  
  Faltavam funções no `module.exports` do `taskController`. Adicionei as funções exportadas corretamente.

- **Porta do servidor retornando undefined**  
  Não havia carregamento do arquivo `.env`. Eu adicionei `require('dotenv').config()` no topo do arquivo `index.js` e verifiquei a variável `PORT`.

Após essas correções, a aplicação passou a iniciar corretamente.

## 4. Relatório de Correção de Bugs

## 5. Relatório de Melhorias

## 6. Decisões e Considerações
