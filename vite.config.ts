import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

function adminServerPlugin(): Plugin {
  return {
    name: 'admin-server',
    configureServer(server) {
      server.middlewares.use('/api/admin/save', (req, res) => {
        if (req.method !== 'POST') return;
        let body = '';
        req.on('data', chunk => { body += chunk });
        req.on('end', () => {
          try {
            const { file, data, exportName } = JSON.parse(body);
            const filepath = path.resolve(__dirname, './src/data', file + '.ts');
            let content = fs.readFileSync(filepath, 'utf-8');
            // Safely capture the correct array and inject new data.
            // Matching block starting with `export const EXPORTNAME` and matching everything until the final closing `]` and semicolon
            const regex = new RegExp(`(export const \\b${exportName}\\b[\\s\\S]*?= )\\[[\\s\\S]*?\\];?([\\r\\n\\s]*)$`, 'm');
            const newContent = content.replace(regex, `$1${JSON.stringify(data, null, 2)};$2`);

            // Only write if valid
            if (newContent !== content && newContent.includes(`export const ${exportName}`)) {
               fs.writeFileSync(filepath, newContent, 'utf-8');
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch(e: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), adminServerPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Code splitting configuration
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  // Handle client-side routing in dev
  server: {
    port: 5173,
    strictPort: false,
  },
  // Handle client-side routing in preview
  preview: {
    port: 4173,
  },
})
