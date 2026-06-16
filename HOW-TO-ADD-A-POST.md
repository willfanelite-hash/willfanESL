# How to Add a New Lesson

You only ever edit **one file: `posts.js`**. Never touch `index.html`.

## Steps

1. Put your picture in the `images` folder (e.g. `images/weather.jpg`). Photos (.jpg/.png) and drawings (.svg) both work.
2. Open `posts.js` in any text editor (Notepad works).
3. Copy an existing lesson block — everything from `{` to `},` — and paste it right after `const POSTS = [`.
4. Change these fields:
   - `id` — unique name, e.g. `"lesson-003"`
   - `date` — format `"2026-06-17"` (year-month-day)
   - `title` — the lesson title
   - `level` — e.g. `"Beginner"`, `"Intermediate"`
   - `image` — e.g. `"images/weather.jpg"`
   - `excerpt` — one short sentence shown on the home page
   - `content` — the lesson text, between the backticks `` ` ``
5. Save. Double-click `index.html` to check it. Newest dates appear first automatically.

## Writing the lesson content

Inside the backticks you can use:

```
## Big heading
### Small heading
**bold**   *italic*
- bullet point
> example sentence (shows in a blue box)
```

Leave a blank line between paragraphs.

## Where to get free pictures

- [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com) — free photos, no account needed. Download the image, rename it simply (e.g. `weather.jpg`), and drop it in `images/`.

## Publishing to GitHub Pages (when ready)

1. Create a free account at github.com and make a new **public** repository (e.g. `english-blog`).
2. Upload everything in this folder (`index.html`, `posts.js`, `HOW-TO-ADD-A-POST.md`, and the `images` folder) via "Add file → Upload files".
3. In the repo: **Settings → Pages → Source: Deploy from a branch → main → Save**.
4. After ~1 minute your site is live at `https://YOUR-USERNAME.github.io/english-blog/`.
5. To publish a new lesson later: edit `posts.js` on GitHub (pencil icon) or re-upload it, plus any new image. The site updates automatically.
