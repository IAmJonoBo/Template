import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Template Docs',
      description: 'Comprehensive documentation for the multipurpose template repository',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/IAmJonoBo/Template',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/getting-started/introduction/' },
            { label: 'Quick Start', link: '/getting-started/quick-start/' },
            { label: 'Installation', link: '/getting-started/installation/' },
          ],
        },
        {
          label: 'Tutorials',
          autogenerate: { directory: 'tutorials' },
        },
        {
          label: 'How-To Guides',
          autogenerate: { directory: 'how-to' },
        },
        {
          label: 'Reference',
          items: [
            { label: 'Tech Stack', link: '/reference/tech-stack/' },
            { label: 'Toolchain', link: '/reference/toolchain/' },
            { label: 'Conventions', link: '/reference/conventions/' },
            { label: 'API Reference', link: '/reference/api/' },
            {
              label: 'ADRs',
              autogenerate: { directory: 'reference/adr' },
            },
          ],
        },
        {
          label: 'Explanation',
          items: [
            { label: 'Architecture', link: '/explanation/architecture/' },
            { label: 'Design Decisions', link: '/explanation/design-decisions/' },
            { label: 'Versioning Strategy', link: '/explanation/versioning/' },
          ],
        },
        {
          label: 'Contributing',
          items: [
            { label: 'How to Contribute', link: '/contributing/how-to-contribute/' },
            { label: 'Development Setup', link: '/contributing/development-setup/' },
            { label: 'Testing Guide', link: '/contributing/testing/' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
      components: {
        // Override default components if needed
      },
      editLink: {
        baseUrl: 'https://github.com/IAmJonoBo/Template/edit/main/docs/',
      },
      lastUpdated: true,
    }),
  ],
});
