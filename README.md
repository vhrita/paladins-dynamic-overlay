# Paladins Dynamic Overlay

<img src="https://media.licdn.com/dms/image/v2/D4D22AQHetoIoa4bvmg/feedshare-shrink_800/B4DZUFgJLlG8Ag-/0/1739554069931?e=1742428800&v=beta&t=id3d6sw3Kzcg-WeWRWFDYYwnZ9GMg1d8j0NQQ59JbnI" width="300">

## 🌍 Available Languages
- 🇬🇧 [English](README.md)
- 🇧🇷 [Português](README.pt-br.md)

## 📌 Table of Contents
- [About the Project](#-about-the-project)
- [Repository Structure](#-repository-structure)
- [Running the `legacy` Project](#-running-the-legacy-project)
  - [Setting Up Credentials](#-1-setting-up-credentials)
  - [Running a Local Server](#-2-running-a-local-server)
  - [Accessing HTML Files](#-3-accessing-html-files)
- [License](#-license)

## 🏆 About the Project
The **Paladins Dynamic Overlay** was originally created in **2018** as a private personal project to enhance the streaming experience for the game *Paladins*. At the time, I had little professional programming experience, and this project served as a great learning opportunity.

### 🎮 The End of a Game, the Beginning of a New Project

Recently, Hi-Rez Studios announced that **Paladins will be discontinued**. My journey with the game started in **2015**, during the **Closed Alpha**, and I spent over **2,000 hours playing**. This news brought a mix of nostalgia and reflection.

This project was born out of the need for a **dynamic overlay for live streams**, where HTML pages would automatically change based on the character being played. Initially, it was a **personal project**, but I always considered sharing it with the community.

Now, in **2025**, I have decided to open-source the code. However, to prevent sensitive information from being exposed due to the GitHub commit history, a **new repository** was created with all credentials removed.

🔗 For more details on this journey, check out [my LinkedIn post](https://www.linkedin.com/posts/vhrita_opensource-paladinsgame-softwaredevelopment-activity-7296218604386058241-rlwb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACg5VTkB1Lh9NbVAFdL9mWM1Otjk8Pz4TL0).

## 🚀 Repository Structure
The project is currently undergoing **refactoring**, and its structure is organized as follows:

- **`master`** → Contains the **refactored** version of the project, modernized with new technologies.
- **`refactor`** → Branch where the **refactoring development** happens before merging into `master`.
- **`legacy`** → Branch containing the **original 2018 version** of the project, serving as a **comparison showcase** between my past knowledge and current expertise.

---

## ⚙ Running the `legacy` Project
The **legacy** version of the Paladins Dynamic Overlay can be run locally. To do this, some configurations are required.

### 📌 1. Setting Up Credentials
The project relies on **hardcoded credentials** to interact with APIs. To run it correctly, you need to fill in the values in the following files:

- **`paladins.js`** → Replace `YOUR_PALADINS_API_KEY` and `devId` with your Paladins API credentials. [📂 File `paladins.js`](js/paladins.js)
- **`spotify.js`** → Fill in `YOUR_CLIENT_ENCODED` and `YOUR_SPOTIFY_AUTH_CODE` with your Spotify API credentials. [📂 File `spotify.js`](js/spotify.js)
- **`spotify_bot.js`** → Local script to monitor the currently playing song, if the associated server is running. [📂 File `spotify_bot.js`](js/spotify_bot.js)

### 📌 2. Running a Local Server
To properly display the HTML files, a simple local server can be used. The **Live Server** extension for VS Code provides a quick and easy solution.

#### **Using VS Code (`Live Server` extension)**
1. Install the `Live Server` extension in VS Code.
2. Right-click `index.html` and select `Open with Live Server`.
3. The project will automatically open in your browser.

### 📌 3. Accessing HTML Files
Once the local server is running, the files can be accessed at the following endpoints:

| Page | Local URL | Description |
|--------|----------|------------|
| **Main Overlay** | [127.0.0.1/index.html](http://127.0.0.1/index.html) | Main overlay interface displaying player and match information. |
| **Currently Playing Music** | [127.0.0.1/current_playing.html](http://127.0.0.1/current_playing.html) | Displays the currently playing song from Spotify. |
| **Be Right Back Screen** | [127.0.0.1/coming_soon.html](http://127.0.0.1/coming_soon.html) | A screen for Paladins streamers to use when they step away from the computer. |

---

## 📜 License
This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**. This means:

- You may **use, modify, and share** this project for **personal and non-commercial purposes**.
- Proper **attribution to the author is required**.
- Any modifications must be **clearly indicated**.
- **Commercial use is not allowed** without prior authorization from the author.

For more details, see the [LICENSE](LICENSE) file.

---

In the next section, we will detail the **refactoring process**, the improvements being implemented, and what to expect from the new version! 🚀

