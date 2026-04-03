# 🧾 Sistema de Gestão de Notas Fiscais

Sistema desenvolvido para gerenciar o fluxo de processamento de Notas Fiscais, permitindo controle de atribuição, acompanhamento de status e gestão de operadores.

---

## 🚀 Objetivo

Criar uma aplicação que permita:

- Cadastro e gestão de Notas Fiscais
- Atribuição inteligente de operadores
- Controle de indisponibilidade
- Acompanhamento em tempo real do progresso
- Reatribuição automática sem perda de dados

---

## 👥 Perfis de Usuário

### 👨‍💼 Administrador (ADM)

Responsável por:

- Gerenciar operadores
- Cadastrar e atribuir notas fiscais
- Acompanhar progresso
- Reatribuir tarefas
- Monitorar carga de trabalho

---

### 👷 Operador

Responsável por:

- Visualizar notas atribuídas
- Preencher informações da nota
- Atualizar status
- Finalizar processamento

---

## 🔄 Fluxo do Sistema

1. ADM cria uma nota fiscal
2. Sistema valida operadores disponíveis
3. Nota é atribuída a um operador
4. Operador inicia o preenchimento
5. Status é atualizado em tempo real
6. Caso haja indisponibilidade:
   - Nota é automaticamente reatribuída
   - Progresso é mantido
7. Operador finaliza a nota

---

## 📊 Status da Nota

- [ ] Não iniciada  
- [ ] Em andamento  
- [ ] Pendente  
- [ ] Concluída  
- [ ] Reatribuída  

---

## 🧱 Estrutura de Dados

### Nota Fiscal

- Número da Nota
- Valor
- Data de Recebimento
- Data de Início
- Material do Recibo
- Status da Entrega (Total/Parcial)
- Motivo da Parcialidade
- Operador Responsável
- Status
- Data de Conclusão

---

## ✅ Regras de Negócio

### 📌 Validações

- [ ] Número da nota não pode ser duplicado  
- [ ] Data prevista não pode ser anterior à atual  
- [ ] Campos obrigatórios devem ser preenchidos  
- [ ] Motivo obrigatório em caso de entrega parcial  
- [ ] Operador indisponível não pode receber nota  

---

### 🔁 Regras Automáticas

- [ ] Reatribuição automática em caso de indisponibilidade  
- [ ] Continuidade do progresso após reatribuição  
- [ ] Atualização de status em tempo real  
- [ ] Notificação ao ADM ao concluir nota  

---

## ⚙️ Funcionalidades

### 👨‍💼 ADM

- [ ] Cadastrar operador 
- [ ] Visualizar operador 
- [ ] Editar operador  
- [ ] Remover operador  
- [ ] Criar nota fiscal  
- [ ] Atribuir operador  
- [ ] Reatribuir operador manualmente  
- [ ] Visualizar status das notas  
- [ ] Visualizar carga de trabalho  
- [ ] Filtrar por período  

---

### 👷 Operador

- [ ] Visualizar notas atribuídas  
- [ ] Iniciar preenchimento  
- [ ] Atualizar dados da nota  
- [ ] Marcar entrega como total/parcial  
- [ ] Informar motivo de parcialidade  
- [ ] Finalizar nota  

---

## 📅 Gestão de Disponibilidade

- [ ] Cadastro de férias  
- [ ] Cadastro de atestado  
- [ ] Cadastro de dispensa  
- [ ] Bloqueio automático de atribuições  

---

## 🧪 Controle de Evolução

> Cada item marcado representa uma funcionalidade implementada e versionada no projeto.

### 📌 Versão 0.1.0
- [ ] Estrutura inicial do projeto

### 📌 Versão 0.2.0
- [ ] CRUD de operadores

### 📌 Versão 0.3.0
- [ ] Cadastro de notas fiscais

### 📌 Versão 0.4.0
- [ ] Sistema de atribuição de operadores

### 📌 Versão 0.5.0
- [ ] Controle de status das notas

### 📌 Versão 0.6.0
- [ ] Regras de validação

### 📌 Versão 0.7.0
- [ ] Reatribuição automática

### 📌 Versão 0.8.0
- [ ] Controle de indisponibilidade

### 📌 Versão 0.9.0
- [ ] Dashboard do ADM

### 📌 Versão 1.0.0
- [ ] Sistema completo funcional

---

## 🛠️ Tecnologias

- [ ] Backend: Node.js e Typescript
- [ ] Frontend: React
- [ ] Banco de Dados: Postgres
- [ ] ORM:(não definida ainda)
- [ ] Autenticação:(não definida ainda)

---

## 📌 Estratégia de Versionamento

Este projeto segue versionamento semântico:

MAJOR.MINOR.PATCH

Exemplo:

- 0.1.0 → estrutura inicial
- 0.2.0 → nova funcionalidade
- 0.2.1 → correção de bug

---

## 📈 Objetivo Profissional

Este projeto foi desenvolvido com foco em:

- Evolução incremental
- Boas práticas de versionamento
- Organização de regras de negócio
- Simulação de sistema real corporativo

---

## 📄 Licença

MIT