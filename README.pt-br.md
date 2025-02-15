# Paladins Dynamic Overlay

## 🌍 Available Languages
- 🇬🇧 [English](README.md)
- 🇧🇷 [Português](README.pt-br.md)

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Rodando o Projeto `legacy`](#-rodando-o-projeto-legacy)
  - [Configuração de Credenciais](#-1-configuração-de-credenciais)
  - [Rodando em um Servidor Local](#-2-rodando-em-um-servidor-local)
  - [Acessando os Arquivos HTML](#-3-acessando-os-arquivos-html)
- [Licença](#-licença)

## 🏆 Sobre o Projeto
O **Paladins Dynamic Overlay** foi criado em **2018** como um projeto pessoal privado para aprimorar a experiência de transmissão do jogo *Paladins*. Na época, eu tinha pouca experiência com programação profissionalmente, e este projeto foi uma excelente oportunidade de aprendizado. 

### 🎮 O triste fim de um jogo, o recomeço de um projeto

Recentemente, a Hi-Rez Studios anunciou que **Paladins será descontinuado**. Minha jornada com o jogo começou em **2015**, ainda no **Closed Alpha**, e foram mais de **2.000 horas de jogo**. Diante dessa notícia, fui tomado por um misto de nostalgia e reflexão. 

Esse projeto nasceu da necessidade de ter um **overlay dinâmico para transmissões ao vivo**, onde as páginas HTML mudavam automaticamente com base no personagem jogado. Inicialmente, era um **projeto pessoal**, mas sempre tive a ideia de compartilhá-lo com a comunidade.

Agora, em **2025**, decidi abrir o código publicamente, mas para evitar que informações sensíveis fossem expostas devido ao histórico de commits no GitHub, um **novo repositório** foi criado com todas as credenciais removidas. 

🔗 Para mais detalhes sobre essa trajetória, confira [o post no LinkedIn](https://www.linkedin.com/posts/vhrita_opensource-paladinsgame-softwaredevelopment-activity-7296218604386058241-rlwb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACg5VTkB1Lh9NbVAFdL9mWM1Otjk8Pz4TL0) onde explico melhor minha evolução.

## 🚀 Estrutura do Repositório
O projeto está em **fase de refatoração**, e sua estrutura no repositório segue o seguinte formato:

- **`master`** → Contém a versão **refatorada** do projeto, que está sendo modernizada com tecnologias mais recentes.
- **`refactor`** → Branch onde o **desenvolvimento da refatoração** acontece antes de ser mesclado na `master`.
- **`legacy`** → Branch que contém a versão **antiga e original** do projeto, funcionando como uma **vitrine** de comparação entre meu conhecimento de 2018 e minha experiência atual.

---

## ⚙ Rodando o Projeto `legacy`
A versão **legada** do Paladins Dynamic Overlay pode ser executada localmente. Para isso, algumas configurações são necessárias.

### 📌 1. Configuração de Credenciais
O projeto depende de algumas credenciais **hardcoded** para interagir com as APIs. Para rodar corretamente, você precisa preencher os valores nos seguintes arquivos:

- **`paladins.js`** → Substitua `YOUR_PALADINS_API_KEY` e `devId` com suas credenciais da API do Paladins. [📂 Arquivo `paladins.js`](js/paladins.js)
- **`spotify.js`** → Preencha `YOUR_CLIENT_ENCODED` e `YOUR_SPOTIFY_AUTH_CODE` com suas credenciais da API do Spotify. [📂 Arquivo `spotify.js`](js/spotify.js)
- **`spotify_bot.js`** → O script local para monitorar a música tocando, caso esteja rodando o servidor associado. [📂 Arquivo `spotify_bot.js`](js/spotify_bot.js)

### 📌 2. Rodando em um Servidor Local
Para visualizar os arquivos HTML corretamente, um servidor local simples pode ser usado. Você pode utilizar o **Live Server** do VS Code, que oferece uma solução rápida e prática.

#### **Usando VS Code (`Live Server` extension)**
1. Instale a extensão `Live Server` no VS Code.
2. Clique com o botão direito em `index.html` e selecione `Open with Live Server`.
3. O projeto abrirá automaticamente no navegador.

### 📌 3. Acessando os Arquivos HTML
Após rodar o servidor local, os arquivos podem ser acessados nos seguintes endpoints:

| Página | URL Local | Descrição |
|--------|----------|------------|
| **Overlay Principal** | [127.0.0.1/index.html](http://127.0.0.1/index.html) | Interface principal do overlay com informações da partida e do jogador. |
| **Música Atual** | [127.0.0.1/current_playing.html](http://127.0.0.1/current_playing.html) | Mostra a música atualmente tocando no Spotify. |
| **Tela de Volto Logo** | [127.0.0.1/coming_soon.html](http://127.0.0.1/coming_soon.html) | Tela que os streamers de Paladins podem utilizar quando saem da frente do computador. |

---

## 🎥 GIF DO PROJETO FUNCIONANDO
![Overlay em ação](overlay_gif.gif)

---

## 📜 Licença
Este projeto está licenciado sob a **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**. Isso significa que:

- Você pode **usar, modificar e compartilhar** este projeto para fins **pessoais e não comerciais**.
- É obrigatório fornecer a devida **atribuição ao autor**.
- Qualquer modificação deve ser **claramente indicada**.
- O uso **comercial não é permitido** sem autorização prévia do autor.

Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

Na próxima seção, explicaremos em detalhes a **refatoração do projeto**, as melhorias que estão sendo implementadas e o que esperar da nova versão! 🚀

