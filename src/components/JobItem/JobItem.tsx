import React from 'react';

export const JobItem = ({ text, icon }: any) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      {icon} {text}
    </div>
  );
};
