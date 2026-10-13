Login Motion Lab — Week 06 assignment

Requirements: Node 24.12+ (24.x) or 22.18+ (22.x).
Install: npm ci
Develop: npm run dev
Build: npm run build
Preview the built site: npm run preview

The supplied Vue flow is preserved. src/storage.js completes browser data
persistence. src/motion.css adds focus, button, error, loading, panel, and
reduced-motion effects. src/design.css gives the demo its visual design.

Try it: Sign up with a demo name, email, and matching password fields. Then
sign in with the registered email and any 4+ made-up characters. Reload to
check the saved session, then sign out. Sign-out retains the demo account.

This is a front-end UI exercise, not real authentication. Only names and
emails are saved in localStorage; passwords are never stored or verified.
Use made-up credentials. Browser data belongs to the exact site origin.

GitHub Pages: Push this project to a public repository's main branch. In
Settings > Pages, set Source to GitHub Actions. The included workflow builds
and deploys dist automatically. After it succeeds, submit both the Pages URL
and repository URL. vite.config.js chooses the project path automatically in
GitHub Actions. Never open dist/index.html directly to test localStorage.
