// /src/components/common/Section.jsx
import React from 'react';

const Section = ({ icon, title, subtitle, children }) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-start py-12 px-5">
      {/* Container that matches the width of your other sections */}
      <div className="mx-auto w-full max-w-4xl px-4">
        <h3 className="py-3 text-3xl lg:text-5xl flex items-center">
          {icon}
          <span className="ml-3">{title}</span>
        </h3>
        {typeof subtitle === 'string' ? (
          <p className="max-w-xl font-light text-gray-400 mb-10 text-sm md:text-base">
            {subtitle}
          </p>
        ) : (
          subtitle
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
