# Paladins Dynamic Overlay

<img src="https://media.licdn.com/dms/image/v2/D4D22AQHetoIoa4bvmg/feedshare-shrink_800/B4DZUFgJLlG8Ag-/0/1739554069931?e=1742428800&v=beta&t=id3d6sw3Kzcg-WeWRWFDYYwnZ9GMg1d8j0NQQ59JbnI" width="300">

## 🌍 Idiomas Disponíveis
- 🇬🇧 [English](README.md)
- 🇧🇷 [Português](README.pt-br.md)

## 📌 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Executando o Novo Projeto](#-executando-o-novo-projeto)
- [Executando o Projeto `legacy`](#-executando-o-projeto-legacy)
- [Licença](#-licença)

## 🏆 Sobre o Projeto
O **Paladins Dynamic Overlay** foi originalmente criado em **2018** como um projeto pessoal para aprimorar a experiência de streaming do jogo *Paladins*. Agora, em **2025**, está sendo refatorado e disponibilizado como código aberto.

🔗 Para mais detalhes sobre essa jornada, confira [meu post no LinkedIn](https://www.linkedin.com/posts/vhrita_opensource-paladinsgame-softwaredevelopment-activity-7296218604386058241-rlwb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACg5VTkB1Lh9NbVAFdL9mWM1Otjk8Pz4TL0).

### 🚀 Recursos Atuais
✅ **Construído com Next.js**
✅ **WebcamOverlay com seleção manual de personagem**
✅ **Mudança dinâmica de cor da borda e imagem do personagem**
✅ **Componente `WebcamOverlay` redimensionável**

### 🔨 Próximas Funcionalidades (Ordem de Desenvolvimento)
1. 🛠 **Página de Edição de Componentes**
2. 🔗 **Links de exportação do overlay para integração com OBS**
3. 🏆 **Nome do streamer exibido junto à borda do WebcamOverlay**
4. 🎨 **Animações nas bordas do WebcamOverlay**
5. 🔥 **Efeitos animados em torno das imagens dos personagens**
6. 🖼️ **Presets de imagens dos personagens (incluindo GIFs)**
7. 🎭 **Componente de Faixa de Texto (exemplo: "Último Seguidor")**
8. 📄 **Criação de páginas completas onde múltiplos componentes podem ser combinados e exportados**
9. 🖱️ **Suporte a Drag and Drop para posicionamento da imagem**
10. 🔄 **Área Logada para atualização automática de personagem via API do Paladins**

### 💡 Possíveis Melhorias Futuras
- 🌐 **Overlays totalmente customizáveis com qualquer imagem e cores, não limitados ao tema do Paladins**

## 📂 Estrutura do Repositório
- **`master`** → Contém a **versão estável e refatorada**.
- **`refactor`** → Recursos em desenvolvimento antes de serem mesclados no `master`.
- **`legacy`** → A **versão original de 2018**, disponível para comparação.

## ⚙ Executando o Novo Projeto
### 📌 1. Configurando o Ambiente
1. Clone o repositório:
   ```sh
   git clone https://github.com/vhrita/paladins-dynamic-overlay.git
   cd paladins-dynamic-overlay
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```
4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## ⚙ Executando o Projeto `legacy`
### 📌 1. Acessando a Branch `legacy`
1. Clone o repositório, caso ainda não tenha feito:
   ```sh
   git clone https://github.com/vhrita/paladins-dynamic-overlay.git
   cd paladins-dynamic-overlay
   ```
2. Mude para a branch `legacy`:
   ```sh
   git checkout legacy
   ```

### 📌 2. Configurando Credenciais
- **`paladins.js`** → Substitua `YOUR_PALADINS_API_KEY` e `devId`.
- **`spotify.js`** → Preencha `YOUR_CLIENT_ENCODED` e `YOUR_SPOTIFY_AUTH_CODE`.

### 📌 3. Rodando um Servidor Local
- **Usando Live Server no VS Code**:
  1. Instale a extensão `Live Server` no VS Code.
  2. Clique com o botão direito no `index.html` e selecione **Open with Live Server**.
  3. O projeto será aberto automaticamente no navegador.

### 📌 4. Acessando os Arquivos HTML
| Página | URL Local | Descrição |
|--------|----------|------------|
| **Overlay Principal** | [127.0.0.1/index.html](http://127.0.0.1/index.html) | Interface principal do overlay. |
| **Música Atual** | [127.0.0.1/current_playing.html](http://127.0.0.1/current_playing.html) | Exibe a música em reprodução no Spotify. |
| **Tela de "Volto Logo"** | [127.0.0.1/coming_soon.html](http://127.0.0.1/coming_soon.html) | Tela para streamers utilizarem ao se ausentarem. |

## 📜 Licença
Este projeto é licenciado sob a **Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)**. Isso significa que:

✅ **Você pode**:
- Usar, modificar e compartilhar este projeto para **fins pessoais e não comerciais**.
- Modificar o código conforme necessário, desde que **credite o autor original**.

❌ **Você não pode**:
- Usar este projeto **para fins comerciais** sem permissão explícita.
- Alegar propriedade sobre o projeto original.
- Distribuir versões modificadas sem indicar que houve alterações.

Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---
Agora você está pronto, **aproveite!** 🚀
