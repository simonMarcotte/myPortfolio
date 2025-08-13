

import terminalData from './data/terminal.json';
import aboutData from './data/about.json';
import techData from './data/tech.json';
import educationData from './data/education.json';
import careerData from './data/career.json';

class FileSystemNode {
  constructor(name, type = 'file', content = null, parent = null) {
    this.name = name;
    this.type = type; // 'file' or 'directory'
    this.content = content || (type === 'directory' ? new Map() : []);
    this.parent = parent;
    this.size = this.calculateSize();
    this.permissions = type === 'directory' ? 'drwxr-xr-x' : '-rw-r--r--';
    this.owner = 'simon';
    this.group = 'simon';
    this.modified = new Date('2024-08-12');
    this.inode = Math.floor(Math.random() * 100000); // Simulate inode number
  }

  calculateSize() {
    if (this.type === 'directory') {
      return '4.0K';
    }
    if (Array.isArray(this.content)) {
      const bytes = this.content.join('\n').length;
      if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)}M`;
      if (bytes > 1024) return `${(bytes / 1024).toFixed(1)}K`;
      return `${bytes}B`;
    }
    return '1.0K';
  }

  addChild(node) {
    if (this.type !== 'directory') {
      throw new Error('Cannot add child to non-directory');
    }
    node.parent = this;
    this.content.set(node.name, node);
    return node;
  }

  getChild(name) {
    if (this.type !== 'directory') return null;
    return this.content.get(name) || null;
  }

  listChildren() {
    if (this.type !== 'directory') return [];
    return Array.from(this.content.values());
  }

  getPath() {
    if (!this.parent) return this.name;
    return this.parent.getPath() + '/' + this.name;
  }

  find(pattern, results = []) {
    if (this.name.toLowerCase().includes(pattern.toLowerCase())) {
      results.push(this.getPath());
    }
    
    if (this.type === 'directory') {
      for (const child of this.content.values()) {
        child.find(pattern, results);
      }
    }
    
    return results;
  }
}

class VirtualFileSystem {
  constructor() {
    this.root = new FileSystemNode('', 'directory');
    this.currentDir = null;
    this.initializeFileSystem();
  }

  initializeFileSystem() {
    // Create directory structure
    const home = this.root.addChild(new FileSystemNode('home', 'directory'));
    const simon = home.addChild(new FileSystemNode('simon', 'directory'));
    const portfolio = simon.addChild(new FileSystemNode('portfolio', 'directory'));
    
    this.currentDir = portfolio;

    // Build about.txt from about.json data
    const aboutContent = [
      aboutData.title,
      '',
      aboutData.degree,
      '',
      ...aboutData.descriptions
    ];
    portfolio.addChild(new FileSystemNode('about.txt', 'file', aboutContent));

    // Build contact.txt from about.json social data
    const contactFile = terminalData.terminal.files['contact.txt'];
    const emailSocial = aboutData.social.find(s => s.icon === 'IoIosMail');
    const githubSocial = aboutData.social.find(s => s.icon === 'FaGithub');
    const linkedinSocial = aboutData.social.find(s => s.icon === 'FaLinkedin');
    
    portfolio.addChild(new FileSystemNode('contact.txt', 'file', [
      contactFile.header,
      contactFile.separator,
      '',
      `Email: ${emailSocial ? emailSocial.href.replace('mailto:', '') : 'simonmrctt@gmail.com'}`,
      `GitHub: ${githubSocial ? githubSocial.href : 'https://github.com/simonMarcotte'}`,
      `LinkedIn: ${linkedinSocial ? linkedinSocial.href : 'https://linkedin.com/in/simoncmarcotte'}`,
      '',
      contactFile.message,
      '',
      `Resume: ${aboutData.resume.href} (or use 'resume' command to download)`
    ]));

    portfolio.addChild(new FileSystemNode('resume.pdf', 'file', terminalData.terminal.files['resume.pdf'].content));

    // Create subdirectories
    const projectsDir = portfolio.addChild(new FileSystemNode('projects', 'directory'));
    const experienceDir = portfolio.addChild(new FileSystemNode('experience', 'directory'));
    const educationDir = portfolio.addChild(new FileSystemNode('education', 'directory'));
    const skillsDir = portfolio.addChild(new FileSystemNode('skills', 'directory'));

    // Build technologies.txt from tech.json data
    const techContent = [];
    techData.forEach(tech => {
      techContent.push(`${tech.title}: ${tech.detail}`);
    });
    skillsDir.addChild(new FileSystemNode('technologies.txt', 'file', techContent));

    // Add education file to education directory
    educationData.education.forEach(edu => {
      const filename = `${edu.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}.txt`;
      const content = [
        `${edu.name}`,
        `${edu.title}`,
        `Location: ${edu.location}`,
        `Duration: ${edu.start} - ${edu.end}`,
        '',
        ...edu.description.map(desc => `• ${desc}`)
      ];
      educationDir.addChild(new FileSystemNode(filename, 'file', content));
    });

    return { projectsDir, experienceDir, educationDir };
  }

  populateFromData(projects) {
    const { projectsDir, experienceDir, educationDir } = this.initializeFileSystem();

    // Populate individual project files from projects.json
    projects.forEach(project => {
      const filename = `${project.title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}.md`;
      const content = [
        `# ${project.title}`,
        '',
        project.description,
        '',
        'Technologies:',
        ...project.tags.map(tag => `• ${tag}`),
        '',
        'Links:',
        ...project.links.map(link => `• ${link.name}: ${link.url}`)
      ];
      projectsDir.addChild(new FileSystemNode(filename, 'file', content));
    });

    // Populate individual experience files from career.json
    careerData.career.forEach(job => {
      const filename = `${job.name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')}.txt`;
      const content = [
        `${job.title} @ ${job.name}`,
        `Duration: ${job.start} - ${job.end}`,
        `Location: ${job.location}`,
        '',
        ...job.description.map(desc => `• ${desc}`),
        '',
        'Links:',
        ...job.links.map(link => `• ${link.name}: ${link.href}`)
      ];
      experienceDir.addChild(new FileSystemNode(filename, 'file', content));
    });
  }

  resolvePath(path) {
    // Handle empty path or just '.' - return current directory
    if (!path || path === '.') return this.currentDir;
    
    // Handle root path
    if (path === '/') return this.root;
    
    // Handle absolute paths
    if (path.startsWith('/')) {
      let current = this.root;
      const parts = path.split('/').filter(p => p && p !== '.');
      
      for (const part of parts) {
        if (part === '..') {
          current = current.parent || current;
        } else {
          current = current.getChild(part);
          if (!current) return null;
        }
      }
      return current;
    }
    
    // Handle relative paths
    let current = this.currentDir;
    const parts = path.split('/').filter(p => p && p !== '.');
    
    for (const part of parts) {
      if (part === '..') {
        current = current.parent || current;
      } else {
        current = current.getChild(part);
        if (!current) return null;
      }
    }
    
    return current;
  }

  changeDirectory(path = '.') {
    const target = this.resolvePath(path);
    if (!target) return { success: false, error: `cd: ${path}: No such file or directory` };
    if (target.type !== 'directory') return { success: false, error: `cd: ${path}: Not a directory` };
    
    this.currentDir = target;
    return { success: true, path: target.getPath() };
  }

  listDirectory(path = '.', detailed = false) {
    const dir = this.resolvePath(path);
    if (!dir) return { success: false, error: `ls: ${path}: No such file or directory` };
    if (dir.type !== 'directory') return { success: false, error: `ls: ${path}: Not a directory` };

    const children = dir.listChildren();
    
    if (detailed) {
      const items = children.map(child => {
        const size = child.size.padStart(6);
        const date = child.modified.toISOString().split('T')[0];
        const indicator = child.type === 'directory' ? '/' : '';
        return `${child.permissions}  ${child.owner}  ${size}  ${date}  ${child.name}${indicator}`;
      });
      return { success: true, items: [`total ${children.length}`, ...items] };
    } else {
      const items = children.map(child => 
        child.type === 'directory' ? `${child.name}/` : child.name
      );
      return { success: true, items };
    }
  }

  readFile(path = '.') {
    const file = this.resolvePath(path);
    if (!file) return { success: false, error: `cat: ${path}: No such file or directory` };
    if (file.type === 'directory') return { success: false, error: `cat: ${path}: Is a directory` };
    
    return { success: true, content: file.content };
  }

  grep(pattern, filePath = '.') {
    const target = this.resolvePath(filePath);
    if (!target) return { success: false, error: `grep: ${filePath}: No such file or directory` };
    
    // If it's a file, search within that file
    if (target.type === 'file') {
      const matches = target.content.filter(line => 
        line.toLowerCase().includes(pattern.toLowerCase())
      );
      
      if (matches.length === 0) {
        return { success: true, matches: [{ type: 'system', content: `No matches found for "${pattern}" in ${filePath}` }] };
      }
      
      return { success: true, matches: matches.map(match => ({ type: 'content', content: match })) };
    }
    
    // If it's a directory, search recursively through all files
    if (target.type === 'directory') {
      const allMatches = [];
      this.grepRecursive(pattern, target, allMatches);
      
      if (allMatches.length === 0) {
        return { success: true, matches: [{ type: 'system', content: `No matches found for "${pattern}" in directory ${filePath}` }] };
      }
      
      return { success: true, matches: allMatches };
    }
  }

  grepRecursive(pattern, dir, matches) {
    const children = dir.listChildren();
    
    for (const child of children) {
      if (child.type === 'file') {
        const fileMatches = child.content.filter(line => 
          line.toLowerCase().includes(pattern.toLowerCase())
        );
        
        if (fileMatches.length > 0) {
          matches.push({ type: 'filename', content: `${child.getPath()}:` });
          fileMatches.forEach(match => {
            matches.push({ type: 'content', content: `  ${match}` });
          });
          matches.push({ type: 'separator', content: '' }); // Empty line for separation
        }
      } else if (child.type === 'directory') {
        this.grepRecursive(pattern, child, matches);
      }
    }
  }

  find(pattern, startPath = '.') {
    const startDir = this.resolvePath(startPath);
    if (!startDir) return { success: false, error: `find: ${startPath}: No such file or directory` };
    
    const results = startDir.find(pattern);
    
    if (results.length === 0) {
      return { success: true, results: [`No files found matching "${pattern}"`] };
    }
    
    return { success: true, results };
  }

  getCurrentPath() {
    return this.currentDir.getPath().replace(/^\//, '/') || '/';
  }

  getCurrentDirName() {
    return this.currentDir.name || 'root';
  }
}

export default VirtualFileSystem;
