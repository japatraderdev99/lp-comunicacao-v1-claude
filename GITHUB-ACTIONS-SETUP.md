# GitHub Actions Auto-Deployment Setup

## ✅ O Que Já Está Configurado

Os workflows do GitHub Actions já foram criados e enviados para o repositório:

- **`firebase-hosting-merge.yml`**: Faz deploy automático para produção quando você faz push na branch `main`
- **`firebase-hosting-pull-request.yml`**: Cria preview deployments quando você abre Pull Requests

## 🔑 Passo Final: Adicionar Firebase Service Account ao GitHub

Para que os workflows funcionem, você precisa adicionar a chave do Firebase Service Account como secret no GitHub:

### 1. Gerar Firebase Service Account Key

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Selecione o projeto `lp-comunicacao-lider-v1`
3. Vá em **⚙️ Configurações do Projeto** → **Contas de Serviço**
4. Clique em **Gerar nova chave privada**
5. Salve o arquivo JSON que será baixado (mantenha-o seguro!)

### 2. Adicionar Secret no GitHub

1. Acesse: https://github.com/japatraderdev99/lp-comunicacao-v1-claude/settings/secrets/actions
2. Clique em **New repository secret**
3. Preencha:
   - **Name**: `FIREBASE_SERVICE_ACCOUNT_LP_COMUNICACAO_LIDER_V1`
   - **Value**: Cole o conteúdo completo do arquivo JSON gerado no passo anterior
4. Clique em **Add secret**

### 3. Verificar Funcionamento

Após adicionar o secret:

1. Vá para https://github.com/japatraderdev99/lp-comunicacao-v1-claude/actions
2. Você verá o workflow sendo executado automaticamente
3. Aguarde alguns minutos até aparecer o ✅ verde
4. Seu site estará disponível no Firebase Hosting!

## 🚀 Como Usar Após Configurado

### Deploy para Produção
```bash
git add .
git commit -m "feat: Nova funcionalidade"
git push origin main
```
→ Deploy automático acontece em ~2 minutos

### Preview de Pull Request
```bash
git checkout -b feature/nova-secao
# faça suas alterações...
git add .
git commit -m "feat: Adiciona nova seção"
git push origin feature/nova-secao
```
Depois crie um Pull Request no GitHub e você receberá uma URL de preview!

## 📊 Monitorar Deployments

- **Actions Tab**: https://github.com/japatraderdev99/lp-comunicacao-v1-claude/actions
- **Firebase Console**: https://console.firebase.google.com/project/lp-comunicacao-lider-v1/hosting

## 🆘 Troubleshooting

### ❌ Erro "Error: secrets.FIREBASE_SERVICE_ACCOUNT_LP_COMUNICACAO_LIDER_V1 not found"
**Solução**: Você ainda não adicionou o secret. Siga os passos da seção 2 acima.

### ❌ Erro "Error: HTTP Error: 403, Permission denied"
**Solução**: A Service Account não tem permissões. No Firebase Console:
1. Vá em **⚙️ Configurações do Projeto** → **Usuários e permissões**
2. Certifique-se que a Service Account tem role de **Firebase Hosting Admin**

### ❌ Workflow não está rodando
**Solução**: Verifique se:
1. Os arquivos estão em `.github/workflows/` (com ponto no início)
2. Você fez push para a branch `main`
3. O repositório não está em modo privado sem GitHub Actions habilitado

## 📝 Notas Importantes

- O secret é criptografado e nunca aparece nos logs
- Cada push na `main` cria um deploy em produção
- PRs criam URLs temporárias de preview que expiram em 7 dias
- Você pode ver os logs detalhados de cada deploy na aba Actions do GitHub
