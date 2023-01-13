import { Tag } from 'components';
import React from 'react';

export const JobCard = ({ name, description, tags }: any) => {
  return (
    <div className="w-full border-2 border-gray-700 border-solid p-8 rounded-sm">
      <h2 className="font-bold text-lg">{name}</h2>
      <p className="mb-5">{description}</p>
      <div className="flex gap-3">
        {(tags || []).map((tag: string) => (
          <Tag title={tag} />
        ))}
      </div>
    </div>
  );
};
