# jinhyunpark.com

Personal academic website of Jin Hyun Park, hosted on GitHub Pages.

Plain HTML/CSS, no build step.

- `index.html` — page content (edit this to update bio, news, publications, etc.)
- `style.css` — styles (light/dark via `prefers-color-scheme`)
- `photo.jpg` — profile photo (add your own, square ~600×600; a "JP" placeholder shows until then)
- `CNAME` — custom domain for GitHub Pages
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Deploy

1. Create a **public** repository named `7201krap.github.io` on GitHub.
2. Push this folder to its `main` branch.
3. Repo → Settings → Pages: Source = "Deploy from a branch", Branch = `main` / root.
4. Under "Custom domain" enter `jinhyunpark.com`, save, then tick "Enforce HTTPS" once the certificate is issued.

## DNS (at your domain registrar)

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | 7201krap.github.io     |

Remove any existing records pointing to Google Sites first.
