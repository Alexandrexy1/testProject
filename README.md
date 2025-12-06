# Desafio de Código: Gerenciador de Tarefas

## Visão Geral do Projeto

Bem-vindo(a) ao nosso desafio de código!

Este repositório contém uma aplicação de gerenciamento de tarefas desenvolvida em React com TypeScript. Sua missão é resolver os bugs e desenvolver melhorias no código utilizando boas práticas. 

Este desafio tem mais que o objetivo de entender o nível de conhecimento, mas também de auxiliar na sua evolução. Você passa a entender não só que você já "manja" mas também o que merece sua atenção nos estudos. 

Este projeto é um **Todo List** simples, criado como desafio para praticar:
- CRUD completo (Create, Read, Update, Delete)
- Integração entre **frontend React** e **API Node.js**
- Uso de **Sequelize**, **Express** e **SQL Server**
- TypeScript
- Estilização com Material UI (MUI)

## Como Começar

Para configurar o ambiente, siga os passos:

1.  **Clone o repositório** para sua máquina local.

2.  **Instale as dependências** do projeto:
    ```bash
    npm install
    ```
3.  **Tente iniciar o servidor** de desenvolvimento:
    ```bash
    npm run dev
    ```

> **Atenção:** A aplicação não irá iniciar corretamente. Seu primeiro desafio é consertar os erros que impedem a execução bem-sucedida deste comando.

---

### Bugs a Corrigir
1. Ao carregar a tela, existe uma tarefa que não foi criada pelo usuário
2. Ao salvar tarefa ela é adicionada duplicada
3. Ao criar uma tarefa sem descrição, nada acontece. O ideal é mostrar pro usuário que o campo não pode ser nulo
4. Ao excluir uma tarefa, ela exclui a última criada
5. Ao clicar no Enter do teclado, não aciona a função do botão
6. Ao mudar a tarefa para finalizada, ela não <del>risca</del> a tarefa.
7. Ao clicar em excluir, a ação é executada sem pedir uma confirmação ao usuário.
8. O botão de Editar não está funcional. O comportamento esperado é: ao clicar, o campo “Título da Tarefa” deve ser preenchido com o texto da tarefa selecionada. Ao salvar, o item na lista deve ser atualizado e o campo de texto limpo.
9. A task está desalinhada e deve ser posicionado alinhado aos outros elementos.
10.  O botão “Remover” deve ser vermelho.
11. A lista de tarefas não apresenta uma barra de rolagem quando o número de itens ultrapassa a altura do painel, impedindo a visualização de todas as tarefas.
13. Digitar apenas espaços no campo “Título da Tarefa” e salvar também está adicionando um item em branco.
## Melhorias
- Adicionar notificação de alertas em caso de erro ou sucesso para melhorar a experiência do usuário
- Utilizar zod para validação de campo obrigatório do título

## Instruções de Entrega

1.  **Fazer o commit de cada item separadamente**

2.  **Criar um arquivo para relatório `RELATORIO.md`** pelo seu relatório técnico final. O seu relatório deve conter as seguintes seções:

    * **Relatório - [Seu Nome]**
    * **1. Visão Geral da Solução:** Um breve resumo do que foi feito.
    * **2. Como Executar a Aplicação:** Instruções claras para clonar, instalar e rodar o projeto (`npm install`, `npm run dev`).
    * **3. Correção dos Erros Iniciais (`npm run dev`):** Descreva quais eram os erros que impediam a aplicação de rodar e como você os solucionou.
    * **4. Relatório de Correção de Bugs:** Para cada bug da lista, explique a causa raiz e a solução que você implementou.
    * **7. Relatório de Melhorias:** Descreva quais melhorias (novas funcionalidades) você acha interessante que sejam implementadas para evoluir o sistema.
    * **8. Decisões e Considerações:** Aqui você é livre para dar sugestões ou opinar sobre a experiência
    

### Commits
Cada melhoria deve ser um commit individual no repositório. Suas mensagens de commit devem ser claras e descritivas.


## Avaliação

Será avaliado:
* **Funcionalidade:** Cumprimento dos requisitos.
* **Qualidade do Código:** Legibilidade, organização e boas práticas.
* **Lógica e Eficiência:** Robustez das suas soluções.
* **Comunicação:** Clareza do seu relatório (`RELATORIO.md`).
* **Controle de Versão:** Qualidade das suas mensagens de commit e envio do PR.


## Por último

Sabemos que cada desafio tem seu próprio ritmo e que nem sempre tudo sai exatamente como planejado. Se algum ponto ficar pendente, tudo bem — entregue o que conseguir e conte como foi sua experiência durante o processo.

Valorizamos muito mais a evolução do que a perfeição. Estamos em busca de alguém curioso, disposto a aprender e que entenda que tropeços fazem parte do desenvolvimento de qualquer pessoa. O importante é seguir tentando e crescer a cada etapa.

**Boa sorte!**