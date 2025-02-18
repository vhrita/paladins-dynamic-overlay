# Paladins Dynamic Overlay

<img src="https://media.licdn.com/dms/image/v2/D4D22AQHetoIoa4bvmg/feedshare-shrink_800/B4DZUFgJLlG8Ag-/0/1739554069931?e=1742428800&v=beta&t=id3d6sw3Kzcg-WeWRWFDYYwnZ9GMg1d8j0NQQ59JbnI" width="300">

## 🌍 Available Languages
- 🇬🇧 [English](README.md)
- 🇧🇷 [Português](README.pt-br.md)

## 📌 Table of Contents
- [About the Project](#-about-the-project)
- [Repository Structure](#-repository-structure)
- [Running the New Project](#-running-the-new-project)
- [Running the `legacy` Project](#-running-the-legacy-project)
- [License](#-license)

## 🏆 About the Project
The **Paladins Dynamic Overlay** was originally created in **2018** as a private personal project to enhance the streaming experience for the game *Paladins*. Now, in **2025**, it is being refactored and open-sourced.

🔗 For more details on this journey, check out [my LinkedIn post](https://www.linkedin.com/posts/vhrita_opensource-paladinsgame-softwaredevelopment-activity-7296218604386058241-rlwb?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACg5VTkB1Lh9NbVAFdL9mWM1Otjk8Pz4TL0).

### 🚀 Current Features
✅ **Built with Next.js**
✅ **WebcamOverlay with manual character selection**
✅ **Dynamic border color and character image change**
✅ **Resizable `WebcamOverlay` component**

### 🔨 Upcoming Features (In Development Order)
1. 🛠 **Component Editing Page**
2. 🔗 **Exportable overlay links for OBS integration**
3. 🏆 **Streamer name displayed alongside the WebcamOverlay border**
4. 🎨 **Animated Borders for WebcamOverlay**
5. 🔥 **Animated effects around character images**
6. 🖼️ **Presets for character images (including GIFs)**
7. 🎭 **Text Banner Component (e.g., "Latest Follower")**
8. 📄 **Complete pages where multiple components can be combined and exported**
9. 🖱️ **Drag and Drop support for image positioning**
10. 🔄 **Logged-in Area for automatic character updates via Paladins API**

### 💡 Possible Future Enhancements
- 🌐 **Fully customizable overlays with any images and colors, beyond just Paladins themes**

## 📂 Repository Structure
- **`master`** → Contains the **stable refactored version**.
- **`refactor`** → Features in development before merging into `master`.
- **`legacy`** → The **original 2018 version**, available for comparison.

## ⚙ Running the New Project
### 📌 1. Setting Up the Environment
1. Clone the repository:
   ```sh
   git clone https://github.com/vhrita/paladins-dynamic-overlay.git
   cd paladins-dynamic-overlay
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Access it at:
   ```
   http://localhost:3000
   ```

## ⚙ Running the `legacy` Project
### 📌 1. Checkout the `legacy` Branch
1. Clone the repository if you haven't already:
   ```sh
   git clone https://github.com/vhrita/paladins-dynamic-overlay.git
   cd paladins-dynamic-overlay
   ```
2. Switch to the `legacy` branch:
   ```sh
   git checkout legacy
   ```

### 📌 2. Setting Up Credentials
- **`paladins.js`** → Replace `YOUR_PALADINS_API_KEY` and `devId`.
- **`spotify.js`** → Fill in `YOUR_CLIENT_ENCODED` and `YOUR_SPOTIFY_AUTH_CODE`.

### 📌 3. Running a Local Server
- **Using VS Code Live Server**:
  1. Install the `Live Server` extension in VS Code.
  2. Right-click `index.html` and select **Open with Live Server**.
  3. The project will automatically open in your browser.

### 📌 4. Accessing HTML Files
| Page | Local URL | Description |
|--------|----------|------------|
| **Main Overlay** | [127.0.0.1/index.html](http://127.0.0.1/index.html) | Main overlay interface. |
| **Currently Playing** | [127.0.0.1/current_playing.html](http://127.0.0.1/current_playing.html) | Displays Spotify song info. |
| **Be Right Back** | [127.0.0.1/coming_soon.html](http://127.0.0.1/coming_soon.html) | Streamer away screen. |

## 📜 License
This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)**. This means:

✅ **You can**:
- Use, modify, and share this project for **personal and non-commercial purposes**.
- Modify the code as needed, as long as you **credit the original author**.

❌ **You cannot**:
- Use this project **for commercial purposes** without explicit permission.
- Claim ownership of the original project.
- Distribute modified versions without indicating that changes were made.

For more details, see the [LICENSE](LICENSE) file.

---
Now you're ready, **enjoy!** 🚀
