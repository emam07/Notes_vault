# 🗂️ Browser Notes Vault

A minimalistic yet powerful **browser-based note-taking app** built with **Next.js 14**, **Tailwind CSS**, and **ShadCN UI**, featuring full CRUD, instant sync to localStorage, and a sleek dark/light mode toggle. Designed with performance, scalability, and modern UI/UX principles in mind.

## 🚀 Features

- 📝 Create, update, and delete notes in a responsive UI.
- 💾 Data is persisted in **localStorage** — no backend required.
- 🎨 Built with **ShadCN** components and **Tailwind CSS** utility classes.
- 🌙 Toggle between **Dark/Light** themes using `next-themes`.
- 🔗 Automatically **linkifies URLs** pasted into notes using `linkify-react`.
- ⚡ Optimized for speed with **Client Components**, **lazy loading**, and **animation transitions**.
- 🧠 Type safety with **PropTypes** (JS-friendly alternative to TS interfaces).
- 🔧 Built with clean code principles, modular structure, and reusability in mind.

## 🖥️ Demo

Coming soon...

<!-- You can host this with Vercel or Netlify and add a link -->

## 🧱 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/docs)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [ShadCN/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Persistence**: `localStorage` (no backend needed)
- **Animation**: `framer-motion`
- **URL parsing**: `linkify-react`, `linkifyjs`

## 📦 Folder Structure

```bash
notes-vault/
├── app/               # App Router pages and layouts
│   └── page.js        # Main page with layout
├── components/        # Reusable UI and app components
│   ├── header.js
│   ├── empty-state.js
│   ├── note-view.js
│   ├── note-editor.js
│   └── ui/            # ShadCN components (Card, Button, etc.)
├── lib/               # Utility functions, types
│   ├── storage.js     # localStorage handlers
│   └── types.js       # PropTypes definitions
├── styles/
│   └── globals.css    # Tailwind & theme styles
├── public/
├── README.md
└── package.json
```
# 1. Clone the repo
git clone https://github.com/your-username/notes-vault.git
cd notes-vault

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open in browser
https://notes-vault-s42m.vercel.app/
