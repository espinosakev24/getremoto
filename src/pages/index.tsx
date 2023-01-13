import { JobCard } from 'components';
import { techJobs } from './jobsList';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ''
);

export default function Home() {
  const [openings, setOpenings] = useState<any>([]);

  const getOpenings = () =>
    supabase
      .from('openings')
      .select('*')
      .then(({ data }) => {
        setOpenings(data || []);
      });

  useEffect(() => {
    getOpenings();
  }, []);

  return (
    <div className="mx-52">
      <h2 className="text-3xl font-extrabold text-center my-10">
        ¡Get Remote!
      </h2>

      <div className="flex flex-col gap-4">
        {openings.map((job: any) => (
          <JobCard name={job.title} {...job}></JobCard>
        ))}
      </div>
    </div>
  );
}
