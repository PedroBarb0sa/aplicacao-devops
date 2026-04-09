# Aplicação DevOps - Avaliação N1

## 📋 Descrição

Esta é uma aplicação Node.js com Express.js desenvolvida como parte da avaliação N1 da disciplina **Ferramentas de Implantação Contínua - DevOps**. O projeto demonstra o uso correto do Git e GitHub com divisão de tarefas em branches específicas, seguindo as melhores práticas de versionamento de código.

## 👥 Integrantes do Grupo

- **Pedro Barbosa**
- **Leandro Nivaldo**

## 🎯 Objetivos

- Criar uma aplicação Node.js com Express.js
- Implementar endpoints REST simples
- Demonstrar o uso correto do Git com branches
- Praticar trabalho colaborativo através de pull requests e merges
- Documentar adequadamente a aplicação

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| Node.js | 22.13.0 | Runtime JavaScript |
| Express.js | 5.2.1 | Framework web minimalista |
| npm | Incluído | Gerenciador de pacotes |

## 📁 Estrutura do Projeto

```
aplicacao-devops/
├── src/
│   ├── app.js              # Arquivo principal da aplicação
│   └── views/
│       └── index.html      # Página HTML de boas-vindas
├── package.json            # Configuração do projeto
├── package-lock.json       # Lock file do npm
└── README.md              # Este arquivo
```

## 🚀 Como Usar

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/<seu-usuario>/aplicacao-devops.git
cd aplicacao-devops
npm install
```

### 2. Executar a Aplicação

Para iniciar o servidor:

```bash
npm start
```

O servidor será iniciado em `http://localhost:3000`

### 3. Acessar os Endpoints

#### Endpoint Raiz
```
GET http://localhost:3000/
```
Retorna a página HTML com interface de boas-vindas.

#### Endpoint de Integrantes
```
GET http://localhost:3000/integrantes
```
Retorna um JSON com a lista de integrantes do grupo:

```json
{
  "integrantes": [
    { "nome": "Pedro Barbosa" },
    { "nome": "Leandro Nivaldo" }
  ]
}
```

## 🌳 Fluxo de Trabalho com Git

O projeto foi desenvolvido seguindo o fluxo de trabalho com branches específicas:

### Branches Utilizadas

1. **main** - Branch principal, contém o código estável
2. **criar-projeto-express** - Criação inicial do projeto Node.js
3. **pagina-index-html** - Desenvolvimento da página HTML
4. **servindo-pagina-index** - Implementação do endpoint `/`
5. **endpoint-integrantes** - Implementação do endpoint `/integrantes`
6. **documentacao** - Criação e atualização do README

### Fluxo Recomendado

```bash
# 1. Clonar o repositório
git clone https://github.com/<seu-usuario>/aplicacao-devops.git
cd aplicacao-devops

# 2. Criar uma nova branch para sua tarefa
git checkout -b <nome-da-branch>

# 3. Fazer as alterações necessárias
# ... editar arquivos ...

# 4. Adicionar e fazer commit
git add .
git commit -m "Descrição clara da alteração"

# 5. Fazer push para a branch
git push origin <nome-da-branch>

# 6. Criar um Pull Request no GitHub
# 7. Revisar e fazer merge na main
# 8. Voltar para main
git checkout main
git pull origin main
```

## ✅ Checklist de Desenvolvimento

- [x] Repositório público criado no GitHub
- [x] Projeto Node.js inicializado com npm
- [x] Express.js instalado e configurado
- [x] Pasta `src/views` criada
- [x] Arquivo `index.html` criado com saudação de boas-vindas
- [x] Endpoint `GET /` implementado
- [x] Endpoint `GET /integrantes` implementado retornando JSON
- [x] README.md documentado
- [x] Branches criadas para cada tarefa
- [x] Merges realizados na branch main
- [x] Histórico do Git mostrando trabalho em paralelo

## 📝 Notas Importantes

### Sobre os Commits

- Todos os commits devem ser realizados no repositório após a data final de entrega
- Commits posteriores à data limite **não serão considerados**
- A correção será feita utilizando a ferramenta **Activity** do GitHub

### Sobre as Branches

- Cada parte do trabalho deve ser feita em uma branch específica
- Ao finalizar, fazer merge na branch main
- **Importante**: Não remover as branches após o merge (elas serão usadas para avaliação)

### Sobre o Merge

- Antes de fazer merge, testar bem a aplicação
- Evitar bugs e problemas de integração
- Usar a ferramenta de Pull Request do GitHub para revisar as mudanças

## 🔍 Testando a Aplicação

1. Inicie o servidor com `npm start`
2. Abra o navegador e acesse `http://localhost:3000`
3. Clique em "Ver Integrantes" para testar o endpoint `/integrantes`
4. Verifique se os nomes aparecem corretamente

## 📚 Referências

- [Documentação do Express.js](https://expressjs.com/)
- [Documentação do Node.js](https://nodejs.org/docs/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

## 📄 Licença

Divisão de Tarefas - Grupo N1:
Pedro Barbosa: Responsável pela inicialização do projeto Node.js/Express e execução dos comandos Git de controle de versão (branches e merges).
Leandro Nivaldo: Desenvolveu a estrutura da página index.html e a estilização visual do projeto.
Ambos: Colaboraram na implementação dos endpoints do servidor e na elaboração da documentação detalhada no README.md.


 
ISC

---

**Desenvolvido para a avaliação N1 de Ferramentas de Implantação Contínua - DevOps**
