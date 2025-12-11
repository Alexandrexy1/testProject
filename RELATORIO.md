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

### Bug 1 — Tarefa aparecendo automaticamente ao carregar a tela

**Descrição do problema:**  
Ao abrir o vite pela primeira vez, uma task já era exibida na lista mesmo sem o usuário ter criado nada. Isso causava confusão e não representava o comportamento esperado.

**Causa raiz e solução do problema**  
O estado inicial definido no `useState` de tasks tinha uma task já definida, eu removi essa task e deixei o estado vazio.

---

### Bug 2 — Ao salvar task, ela era adicionada duplicada

**Descrição do problema:**  
Ao criar uma nova task, ela era adicionada duas vezes na lista.

**Causa raiz e solução do problema:**  
No componente `ModalTask`, a função `onCreate` chamava `createTask` duas vezes.  
Eu removi a chamada duplicada e deixei apenas a que criava a task quando as anteriores eram carregadas.

---

### Bug 3 — O botão “Remover” deve ser vermelho

**Descrição do problema:**  
O botão de remover não tinha destaque visual e não seguia a orientação do projeto, que pedia que a cor fosse vermelha.

**Causa raiz e solução do problema:**  
O botão estava usando a cor padrão e não transmitia que se tratava de uma ação de exclusão de task.  
Eu apliquei a cor vermelha diretamente no estilo/componente do botão de remover, deixando a ação mais evidente.

## 5. Relatório de Melhorias

## 6. Decisões e Considerações
