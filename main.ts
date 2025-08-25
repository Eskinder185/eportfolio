interface Project {
  /**
   * Human‑readable title of the project
   */
  title: string;
  /**
   * Short description of what the project does or why it exists
   */
  description: string;
  /**
   * Stack or technologies used, represented as simple tags
   */
  tags: string[];
  /**
   * URL to the repository or live demo
   */
  url: string;
}

/**
 * List of portfolio projects. Feel free to add more projects or update
 * existing ones. These objects will be rendered into the DOM by
 * {@link renderProjects}.
 */
const projects: Project[] = [
  {
    title: 'JohnnyCloud',
    description:
      'An intelligent file processing pipeline built on AWS. When a user uploads files to an S3 bucket, JohnnyCloud triggers Lambda functions to process the files, store results, and send notifications via SNS. It makes heavy use of IAM roles, CloudWatch logs and metrics to ensure observability and security.',
    tags: ['AWS', 'Lambda', 'S3', 'SNS', 'Serverless'],
    url: 'https://github.com/your-github/johnnycloud'
  },
 {
    title: 'Neon Meme Machine',
    description:
      'A meme generator app built with React and JavaScript. It integrates with third-party APIs for meme templates and allows users to add custom text, download, and share their memes. Deployed using Netlify for quick access and sharing.',
    tags: ['React', 'JavaScript', 'API', 'Netlify'],
    url: 'https://github.com/eskinder185/neon-meme-machine'
  },
  {
    title: 'Trivia Clash',
    description:
      'A Jeopardy-style trivia game built with React and Node.js. Features include score tracking, timers for questions, answer validation, and player stats. Designed as an interactive game that can be expanded with new categories and questions.',
    tags: ['React', 'Node.js', 'JavaScript', 'Game'],
    url: 'https://github.com/eskinder185/trivia-clash'
  }
];
/**
 * Skills list. Modify this array to match your actual skillset. These
 * strings will be displayed as badges in the Skills section.
 */
const skills: string[] = [
  'TypeScript',
  'JavaScript',
  'Python',
  'AWS',
  'Serverless',
  'Infrastructure as Code (Terraform)',
  'Docker',
  'Kubernetes',
  'Git',
  'CI/CD',
  'Linux'
];

/**
 * Render all projects into the projects container. Each project is
 * displayed as a card with title, description, tags and a link to
 * the repository or demo.
 */
function renderProjects(): void {
  const container = document.getElementById('projects-container');
  if (!container) return;
  // Clear any existing content
  container.innerHTML = '';
  projects.forEach((project) => {
    // Create card element
    const card = document.createElement('div');
    card.className = 'card';

    // Project title
    const heading = document.createElement('h3');
    heading.textContent = project.title;
    card.appendChild(heading);

    // Description
    const desc = document.createElement('p');
    desc.textContent = project.description;
    card.appendChild(desc);

    // Tags list
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'tags';
    project.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagsDiv.appendChild(span);
    });
    card.appendChild(tagsDiv);

    // Link
    const link = document.createElement('a');
    link.className = 'project-link';
    link.href = project.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'View project';
    card.appendChild(link);

    container.appendChild(card);
  });
}

/**
 * Render the skills list as badges in the skills section.
 */
function renderSkills(): void {
  const list = document.getElementById('skills-list');
  if (!list) return;
  // Clear any existing items
  list.innerHTML = '';
  skills.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    list.appendChild(li);
  });
}

// When the DOM is fully loaded, populate the projects and skills
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
});