import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Actions provides the repository name. Project Pages need that path.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const owner = process.env.GITHUB_REPOSITORY_OWNER
const isUserSite = repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`
const base = repository ? (isUserSite ? '/' : `/${repository}/`) : './'

export default defineConfig({ plugins: [vue()], base })
