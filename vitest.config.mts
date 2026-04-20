import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      include: ['src/components/**/*.spec.js', 'src/stores/**/*.spec.js'],
      coverage: {
        reporter: ['json-summary', 'json'],
        reportOnFailure: true,
      },
    },
  })
)
