import React from 'react';
import Section from './common/Section';
import Terminal from './ui/Terminal';
import InlineCode from './ui/InlineCode';
import { BiTerminal } from 'react-icons/bi';

const TerminalSection = () => {

  return (
    <div name="terminal">
      <Section 
        title="Interactive Terminal" 
        subtitle={
          <p className="font-light text-gray-400 mb-10 text-sm md:text-base">
            For all the linux fanatics! Try out some commands like{' '}
            <InlineCode>help</InlineCode>,{' '}
            <InlineCode>ls</InlineCode>,{' '}
            <InlineCode>cd</InlineCode>,{' '}
            <InlineCode>cat</InlineCode>,{' '}
            <InlineCode>grep</InlineCode> or{' '}
            <InlineCode>find</InlineCode>.{' '}
            Use Tab for auto-complete and arrow keys for history.
          </p>
        }
        icon={<BiTerminal />}
      >
        <div className="w-full">
          <Terminal className="w-full max-w-4xl mx-auto" />
        </div>
      </Section>
    </div>
  );
};

export default TerminalSection;
