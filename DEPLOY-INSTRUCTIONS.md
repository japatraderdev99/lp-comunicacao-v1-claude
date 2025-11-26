# 🚀 Instruções de Deploy - Firebase

## ✅ Git já está configurado e feito push!

- **Repositório:** https://github.com/japatraderdev99/lp-comunicacao-v1-claude.git
- **Branch:** main
- **Commit:** feat: Landing Page Dark Luxury - COMUNICAÇÃO: O Discurso do Líder

---

## 🔥 Como fazer o Deploy no Firebase

### 1. Login no Firebase

Abra o Terminal e execute:

```bash
cd /Users/gabrielcasarin/Documents/lp-comunicacao-discurso-do-lider-v1
firebase login
```

**IMPORTANTE:** Use o email **f5estrategia@gmail.com** quando solicitado.

### 2. Verificar configuração do projeto

```bash
firebase projects:list
```

Confirme que o projeto **lp-comunicacao-lider-v1** está listado.

Se não estiver, você precisará:
1. Criar o projeto no [Firebase Console](https://console.firebase.google.com)
2. Nome do projeto: **lp-comunicacao-lider-v1**
3. Habilitar Firebase Hosting

### 3. Deploy

```bash
firebase deploy --only hosting
```

---

## 📋 Configuração já criada:

### firebase.json
- ✅ Public directory: `.` (root)
- ✅ Ignorando arquivos desnecessários
- ✅ Rewrites para SPA
- ✅ Headers de cache otimizados
- ✅ Clean URLs habilitado

### .firebaserc
- ✅ Projeto default: **lp-comunicacao-lider-v1**

---

## 🌐 Após o Deploy

A LP estará disponível em:
```
https://lp-comunicacao-lider-v1.web.app
```

Ou no domínio personalizado:
```
https://lp-comunicacao-lider-v1.firebaseapp.com
```

---

## 🔄 Próximos Deploys

Após fazer alterações:

```bash
git add .
git commit -m "Sua mensagem de commit"
git push origin main
firebase deploy --only hosting
```

---

## 🆘 Troubleshooting

### Erro: "Project not found"
Crie o projeto no Firebase Console primeiro.

### Erro: "Not authenticated"
```bash
firebase logout
firebase login
```

### Erro: "Hosting not configured"
No Firebase Console:
1. Vá em Hosting
2. Clique em "Get Started"
3. Complete o wizard

---

## 📦 Arquivos da LP

### HTML/CSS/JS
- ✅ index.html (Hero + todas seções)
- ✅ styles.css (Dark Luxury design system)
- ✅ script.js (Animações e interações)

### Assets
- ✅ modulo1-fundacao-hotmart.jpg
- ✅ modulo2-preparacao-hotmart.jpg
- ✅ modulo3-apresentacao-hotmart.jpg
- ✅ modulo4-dominando-hotmart.jpg
- ✅ modulo5-engajamento-hotmart.jpg
- ✅ banner-do-produto1920x640.jpg

### Docs
- ✅ README.md (Documentação completa)

---

## 🎯 Checklist Pré-Deploy

Antes de fazer deploy, confirme:

- [ ] VSL video ID está configurado no HTML (linha 69)
- [ ] URL de checkout está configurada (linha 79 e 385)
- [ ] Preços estão corretos (se houver alteração)
- [ ] Todas as imagens estão no diretório
- [ ] Testou localmente: `python3 -m http.server 8000`

---

## 💎 Features da LP

- Hero Section com design senior
- 5 Módulos com thumbs visuais
- VSL com animação pulse
- CTAs com shimmer effect
- Stats section refinada
- Totalmente responsivo
- Dark Luxury theme
- Micro-interações premium

---

**Qualquer dúvida, consulte o README.md completo!**

🤖 Generated with Claude Code
