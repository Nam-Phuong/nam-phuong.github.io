import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../content",
  
  title: "NAM★",
  description: "Artiste Bodypainting — Transformer la peau en toile.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Mes interventions', link: '/interventions' },
      { text: 'Agenda', link: '/agenda' },
      { text: 'Portfolio', link: '/portfolio' }
    ],

    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Mes interventions', link: '/interventions' },
          { text: 'Agenda & Événements', link: '/agenda' },
          { text: 'Portfolio', link: '/portfolio' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/nam_bodypainting' }
    ]
  }
})
