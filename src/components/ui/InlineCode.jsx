import React from 'react';
import { cn } from '../lib/utils';

const InlineCode = ({ children, className, ...props }) => {
  return (
    <code 
      className={cn(
        "bg-gray-200 dark:bg-zinc-900 px-2 py-1 rounded text-green-600 dark:text-green-400 text-xs font-mono",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
};

export default InlineCode;
