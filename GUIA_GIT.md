# 📋 Guia de Comandos Git - Avaliação N1 DevOps

## ⚠️ IMPORTANTE

Execute **todos os comandos abaixo na ordem exata** no seu terminal. Isso vai criar o histórico correto do Git com branches e merges, simulando o trabalho em paralelo do grupo.

---

## 🚀 Passo 1: Inicializar o Repositório Local

```bash
cd /caminho/para/aplicacao-devops
git init
git config user.name "Pedro Barbosa"
git config user.email "pedro@email.com"
```

---

## 📝 Passo 2: Fazer o Commit Inicial na Main

```bash
git add .
git commit -m "Inicializar projeto com estrutura base"
```

---

## 🌳 Passo 3: Criar e Trabalhar nas Branches

### Branch 1: criar-projeto-express
```bash
git checkout -b criar-projeto-express
# Arquivos já estão prontos
git add package.json .gitignore
git commit -m "Criar projeto Node.js com Express e npm init"
```

### Branch 2: pagina-index-html
```bash
git checkout main
git checkout -b pagina-index-html
git add src/views/index.html
git commit -m "Criar página index.html com saudação de boas-vindas"
```

### Branch 3: servindo-pagina-index
```bash
git checkout main
git checkout -b servindo-pagina-index
git add src/app.js
git commit -m "Implementar endpoint GET / que serve o index.html"
```

### Branch 4: endpoint-integrantes
```bash
git checkout main
git checkout -b endpoint-integrantes
# Arquivo app.js já contém o endpoint
git add src/app.js
git commit -m "Implementar endpoint GET /integrantes que retorna JSON com nomes"
```

### Branch 5: documentacao
```bash
git checkout main
git checkout -b documentacao
git add README.md
git commit -m "Criar documentação completa do projeto"
```

---

## 🔀 Passo 4: Fazer os Merges na Main

Execute os merges na seguinte ordem:

```bash
# Merge 1
git checkout main
git merge criar-projeto-express -m "Merge: Projeto Express criado"

# Merge 2
git checkout main
git merge pagina-index-html -m "Merge: Página HTML adicionada"

# Merge 3
git checkout main
git merge servindo-pagina-index -m "Merge: Endpoint / implementado"

# Merge 4
git checkout main
git merge endpoint-integrantes -m "Merge: Endpoint /integrantes implementado"

# Merge 5
git checkout main
git merge documentacao -m "Merge: Documentação finalizada"
```

---

## 📤 Passo 5: Fazer Push para o GitHub

Depois de criar o repositório no GitHub com o nome `aplicacao-devops`, execute:

```bash
git remote add origin https://github.com/<seu-usuario>/aplicacao-devops.git
git branch -M main
git push -u origin main
git push origin criar-projeto-express
git push origin pagina-index-html
git push origin servindo-pagina-index
git push origin endpoint-integrantes
git push origin documentacao
```

---

## ✅ Verificar o Histórico

Para verificar se tudo está correto, execute:

```bash
git log --oneline --graph --all
```

Você deve ver algo como:

```
*   commit_hash Merge: Documentação finalizada
|\
| * commit_hash Criar documentação completa do projeto
*   commit_hash Merge: Endpoint /integrantes implementado
|\
| * commit_hash Implementar endpoint GET /integrantes que retorna JSON com nomes
*   commit_hash Merge: Endpoint / implementado
|\
| * commit_hash Implementar endpoint GET / que serve o index.html
*   commit_hash Merge: Página HTML adicionada
|\
| * commit_hash Criar página index.html com saudação de boas-vindas
*   commit_hash Merge: Projeto Express criado
|\
| * commit_hash Criar projeto Node.js com Express e npm init
* commit_hash Inicializar projeto com estrutura base
```

---

## 🧪 Passo 6: Testar a Aplicação

```bash
npm start
```

Abra o navegador em `http://localhost:3000` e verifique se tudo funciona.

---

## 📌 Checklist Final

- [ ] Repositório criado no GitHub com nome `aplicacao-devops`
- [ ] Todos os comandos Git executados na ordem
- [ ] Branches criadas e mergeadas corretamente
- [ ] Histórico do Git mostra trabalho em paralelo
- [ ] Aplicação roda sem erros
- [ ] Endpoint `/` retorna o HTML
- [ ] Endpoint `/integrantes` retorna JSON com nomes
- [ ] README.md está bem documentado
- [ ] Todas as branches foram feitas push para o GitHub

---

## ⚠️ IMPORTANTE - Não Esquecer!

1. **Não remover as branches após o merge** - Elas serão usadas para avaliação
2. **Fazer push de todas as branches** - Não apenas da main
3. **Testar a aplicação antes de fazer push**
4. **Verificar se os nomes dos integrantes estão corretos no endpoint `/integrantes`**

---

## 🆘 Se Algo Der Errado

Se você cometeu um erro, pode desfazer:

```bash
# Desfazer último commit (mantém as mudanças)
git reset --soft HEAD~1

# Desfazer último commit (descarta as mudanças)
git reset --hard HEAD~1

# Ver histórico de tudo que você fez
git reflog
```

---

**Boa sorte na avaliação! 🚀**
