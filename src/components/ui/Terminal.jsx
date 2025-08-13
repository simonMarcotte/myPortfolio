import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';
import VirtualFileSystem from '../FileSystem';
import projects from '../data/projects.json';
import terminalData from '../data/terminal.json';

const Terminal = ({ className, ...props }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [completionSuggestions, setCompletionSuggestions] = useState([]);
  const [currentPromptDir, setCurrentPromptDir] = useState('portfolio');
  const [fs] = useState(() => {
    const fileSystem = new VirtualFileSystem();
    fileSystem.populateFromData(projects);
    return fileSystem;
  });
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Initialize with welcome message in history
  useEffect(() => {
    const welcome = terminalData.terminal.welcome;
    setHistory([{
      command: '',
      directory: 'portfolio',
      output: [
        welcome.title,
        '',
        welcome.subtitle,
        welcome.tips,
        '',
        welcome.instructions,
        ''
      ],
      isWelcome: true
    }]);
  }, []);

  const commands = {
    help: () => {
      const helpData = terminalData.terminal.commands.help;
      const output = [`system:${helpData.title}`, 'separator:'];
      
      // Add all command sections
      helpData.sections.forEach(section => {
        output.push(`filename:${section.category}`);
        output.push(...section.commands.map(cmd => `content:  ${cmd}`));
        output.push('separator:');
      });
      
      output.push('filename:Tips:');
      output.push(...helpData.tips.map(tip => `content:${tip}`));
      output.push('separator:');
      output.push(`system:${helpData.suggestion}`);
      
      return output;
    },

    ls: (args) => {
      const detailed = args.includes('-l') || args.includes('--long');
      // Filter out flags to get the path argument
      const pathArgs = args.filter(arg => !arg.startsWith('-'));
      const path = pathArgs.length > 0 ? pathArgs[0] : '.';
      
      const result = fs.listDirectory(path, detailed);
      
      if (!result.success) {
        return [`system:${result.error}`];
      }
      
      // Add type info for styling
      return result.items.map(item => {
        if (detailed) {
          // For detailed view, check if it's a directory
          if (item.includes('total ')) {
            return `system:${item}`;
          }
          return item.endsWith('/') ? `directory:${item}` : `file:${item}`;
        } else {
          // For simple view, directories end with /
          return item.endsWith('/') ? `directory:${item}` : `file:${item}`;
        }
      });
    },

    cd: (args) => {
      const path = args.length === 0 ? '.' : args[0];
      const result = fs.changeDirectory(path);
      
      if (!result.success) {
        return [result.error];
      }
      
      return [`system:Changed to ${result.path}`];
    },

    pwd: () => [`system:${fs.getCurrentPath()}`],

    cat: (args) => {
      if (args.length === 0) {
        return ['system:cat: missing file operand'];
      }

      const result = fs.readFile(args[0]);
      
      if (!result.success) {
        return [`system:${result.error}`];
      }
      
      // Mark file content for proper styling
      return result.content.map(line => `content:${line}`);
    },

    grep: (args) => {
      if (args.length < 1) {
        return ['system:grep: usage: grep <pattern> [file]'];
      }

      const pattern = args[0];
      const filePath = args.length > 1 ? args[1] : '.';
      const result = fs.grep(pattern, filePath);
      
      if (!result.success) {
        return [`system:${result.error}`];
      }
      
      // Convert structured output to simple strings for now, but preserve type info
      return result.matches.map(match => {
        if (typeof match === 'object' && match.type) {
          // Add a prefix to indicate the type for styling
          return `${match.type}:${match.content}`;
        }
        return match;
      });
    },

    find: (args) => {
      if (args.length === 0) {
        return ['system:find: missing search pattern'];
      }

      const pattern = args[0];
      const startPath = args.length > 1 ? args[1] : '.';
      const result = fs.find(pattern, startPath);
      
      if (!result.success) {
        return [`system:${result.error}`];
      }
      
      // Mark find results as file paths
      return result.results.map(item => `file:${item}`);
    },

    about: () => {
      const aboutData = terminalData.terminal.commands.about_quick;
      return [
        `filename:${aboutData.title}`,
        'separator:',
        `content:${aboutData.description}`,
        'separator:',
        ...aboutData.suggestions.map(suggestion => `system:${suggestion}`)
      ];
    },

    contact: () => {
      const contactData = terminalData.terminal.commands.contact_quick;
      return [
        `filename:${contactData.title}`,
        `system:${contactData.suggestion}`
      ];
    },

    resume: () => {
      // Trigger download
      const link = document.createElement('a');
      link.href = '/assets/resume.pdf';
      link.download = 'Simon_Marcotte_Resume.pdf';
      link.click();
      
      return [`system:${terminalData.terminal.commands.resume_download}`];
    },

    whoami: () => [`content:${terminalData.terminal.commands.whoami}`],

    date: () => [`system:${new Date().toString()}`],

    echo: (args) => [`content:${args.join(' ')}`],

    clear: () => {
      setHistory([]);
      setCompletionSuggestions([]);
      return null;
    },

    restart: () => {
      setHistory([{
        command: '',
        directory: 'portfolio',
        output: [
          'Welcome to Simon Marcotte\'s Portfolio Terminal v2.0',
          '',
          'Type "help" to get started, or try exploring the file system:',
          '💡 Try: "ls", "cd projects", "cat about.txt", "find gpu"',
          '',
          'Use "clear" to clear output, "restart" to reset session',
          ''
        ],
        isWelcome: true
      }]);
      setCommandHistory([]);
      setCompletionSuggestions([]);
      setCurrentPromptDir('portfolio');
      fs.changeDirectory('/home/simon/portfolio');
      return null;
    },

    // Common aliases
    ll: (args) => commands.ls(['-l', ...args]),
    la: (args) => commands.ls(['-l', ...args]),

    // Easter eggs
    forkbomb: () => {
      const forkbombData = terminalData.terminal.easter_eggs.forkbomb;
      return [
        ...forkbombData.message.map(line => `system:${line}`)
      ];
    },

    // Detect common fork bomb patterns
    ':(){ :|:& };:': () => commands.forkbomb(),
    ':(){:|:&};:': () => commands.forkbomb(),
    
    sudo: (args) => {
      if (args.join(' ').includes('rm -rf')) {
        return terminalData.terminal.easter_eggs.sudo_rm.responses.map(line => `system:${line}`);
      }
      return [`system:${terminalData.terminal.easter_eggs.sudo_default}`];
    },

    vim: () => terminalData.terminal.easter_eggs.vim.map(line => `system:${line}`),

    exit: () => [`system:${terminalData.terminal.easter_eggs.exit}`],

    lol: () => {
      return terminalData.terminal.easter_eggs.lol.map(line => `content:${line}`);
    }
  };

  const executeCommand = (cmdInput) => {
    const [command, ...args] = cmdInput.trim().toLowerCase().split(' ');
    
    if (commands[command]) {
      return commands[command](args);
    } else if (cmdInput.trim() === '') {
      return [];
    } else {
      return [
        `system:Command '${command}' not found.`,
        `system:Type "help" to see available commands.`
      ];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const output = executeCommand(input);
    
    if (output === null && input.trim().toLowerCase() === 'clear') {
      setInput('');
      setCompletionSuggestions([]);
      return;
    }
    
    if (output === null && input.trim().toLowerCase() === 'restart') {
      setInput('');
      setCompletionSuggestions([]);
      return;
    }

    const newEntry = {
      command: input,
      output: output,
      directory: currentPromptDir,
      timestamp: new Date().toLocaleTimeString()
    };

    setHistory(prev => [...prev, newEntry]);
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);
    setInput('');
    
    setCurrentPromptDir(fs.getCurrentDirName());
  };

  // Helper function for filename/directory completion
  const getFileCompletions = (partial) => {
    const result = fs.listDirectory('.');
    if (!result.success) return [];
    
    return result.items
      .filter(item => {
        const cleanItem = item.replace(/\/$/, '');
        return cleanItem.toLowerCase().startsWith(partial.toLowerCase());
      })
      .sort();
  };

  // Helper function for command completion
  const getCommandCompletions = (partial) => {
    const availableCommands = Object.keys(commands);
    return availableCommands
      .filter(cmd => cmd.startsWith(partial.toLowerCase()))
      .sort();
  };

  const handleKeyDown = (e) => {
    if (e.key !== 'Tab') {
      setCompletionSuggestions([]);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      
      const parts = input.trim().split(' ');
      const command = parts[0]?.toLowerCase();
      
      if (parts.length === 1 && !input.endsWith(' ')) {
        const matches = getCommandCompletions(input);
        if (matches.length === 1) {
          setInput(matches[0] + ' ');
          setCompletionSuggestions([]);
        } else if (matches.length > 1) {
          setCompletionSuggestions(['Available commands:', ...matches.map(match => `  ${match}`)]);
        }
      }
      else if (['cat', 'grep', 'cd', 'ls', 'find'].includes(command)) {
        const lastArg = input.endsWith(' ') ? '' : (parts[parts.length - 1] || '');
        let matches = getFileCompletions(lastArg);
        
        if (command === 'cd') {
          matches = matches.filter(item => item.endsWith('/'));
        }
        
        if (lastArg === '') {
          let allItems = getFileCompletions('');
          if (command === 'cd') {
            allItems = allItems.filter(item => item.endsWith('/'));
          }
          const typeLabel = command === 'cd' ? 'directories' : 'files';
          setCompletionSuggestions([`Available ${typeLabel}:`, ...allItems.map(match => `  ${match}`)]);
        }
        else if (matches.length === 1) {
          const newParts = input.endsWith(' ') ? [...parts, ''] : [...parts];
          let completedItem = matches[0];
          
          if (['cat', 'grep'].includes(command) && completedItem.endsWith('/')) {
            completedItem = completedItem.slice(0, -1);
          }
          
          if (input.endsWith(' ')) {
            setInput(input + completedItem);
          } else {
            newParts[newParts.length - 1] = completedItem;
            setInput(newParts.join(' '));
          }
          setCompletionSuggestions([]);
        } else if (matches.length > 1) {
          const typeLabel = command === 'cd' ? 'directories' : 'files';
          setCompletionSuggestions([`Available ${typeLabel}:`, ...matches.map(match => `  ${match}`)]);
        } else {
          const typeLabel = command === 'cd' ? 'directories' : 'files';
          setCompletionSuggestions([`No ${typeLabel} found matching "${lastArg}"`]);
        }
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);


  return (
    <div 
      className={cn(
        "bg-gray-200 dark:bg-zinc-900 rounded-2xl shadow-lg shadow-gray-300 dark:shadow-gray-500 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Terminal Header */}
      <div className="bg-gray-300 dark:bg-zinc-900 px-4 py-3 flex items-center gap-2 border-b border-gray-300 dark:border-zinc-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-600 dark:text-gray-300 text-sm ml-4 font-mono">
          simon@portfolio:{fs.getCurrentDirName()}
        </span>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="bg-black p-4 h-96 overflow-y-auto text-green-400 font-mono text-sm cursor-text hover:ring-2 hover:ring-green-400/30 transition-all"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Command History */}
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {!entry.isWelcome && (
              <div className="flex items-center">
                <span className="text-green-300">simon@portfolio:{entry.directory}$ </span>
                <span className="text-white ml-1">{entry.command}</span>
              </div>
            )}
            {entry.output.map((line, lineIndex) => {
              // Handle structured output types for different styling
              let content = line;
              let styleClass = 'text-green-400'; // default

              // Check if this is a structured output line
              if (typeof line === 'string' && line.includes(':') && 
                  (line.startsWith('filename:') || line.startsWith('content:') || 
                   line.startsWith('system:') || line.startsWith('separator:') ||
                   line.startsWith('directory:') || line.startsWith('file:'))) {
                const [type, ...contentParts] = line.split(':');
                content = contentParts.join(':');
                
                switch(type) {
                  case 'filename':
                    styleClass = 'text-blue-400 font-semibold';
                    break;
                  case 'content':
                    styleClass = 'text-gray-300';
                    break;
                  case 'system':
                    styleClass = 'text-yellow-400';
                    break;
                  case 'directory':
                    styleClass = 'text-blue-400';
                    break;
                  case 'file':
                    styleClass = 'text-gray-300';
                    break;
                  case 'separator':
                    content = '\u00A0'; // non-breaking space for empty lines
                    break;
                  default:
                    styleClass = 'text-green-400';
                }
              } else {
                // Handle welcome message styling
                if (entry.isWelcome) {
                  styleClass = lineIndex === 0 ? 'text-green-300' : 
                               line.includes('💡') ? 'text-yellow-400' : 
                               line.includes('Use "clear"') ? 'text-blue-400 text-xs' : 'text-gray-400';
                }
              }

              return (
                <div key={lineIndex} className={styleClass}>
                  {content === '' ? '\u00A0' : content}
                </div>
              );
            })}
          </div>
        ))}

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-300">simon@portfolio:{currentPromptDir}$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setCompletionSuggestions([]);
            }}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-white ml-1 flex-1 font-mono"
            placeholder=""
            autoComplete="off"
          />
        </form>

        {/* Tab Completion Suggestions */}
        {completionSuggestions.length > 0 && (
          <div className="mt-1">
            {completionSuggestions.map((suggestion, index) => (
              <div key={index} className="text-green-400 text-xs">
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
