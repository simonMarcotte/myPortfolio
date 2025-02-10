// src/components/ui/Icon.jsx
import React, { lazy, Suspense } from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const fallback = (
  <div style={{ background: "#ddd", width: 24, height: 24 }} />
);

const Icon = ({ name, ...props }) => {
  const LucideIcon = lazy(dynamicIconImports[name]);
  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
