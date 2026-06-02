export type AppCategory = 'productivity';

export interface ProjectManifest {
  name: string;
  title: string;
  category: AppCategory;
  description: string;
  languages: string[];
  entrypoints: {
    html: string;
    css: string;
    javascript: string;
  };
}

export const projectManifest: ProjectManifest = {
  name: 'bento-link-hub',
  title: 'Bento Link Hub',
  category: 'productivity',
  description: 'A responsive, self-hosted link hub with bento cards, themes, and local analytics.',
  languages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'JSON', 'Markdown'],
  entrypoints: {
    html: 'index.html',
    css: 'assets/styles.css',
    javascript: 'assets/app.js'
  }
};
