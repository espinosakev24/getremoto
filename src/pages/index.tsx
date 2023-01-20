import { JobCard, Navbar, SearchInput } from 'components';
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
    <div>
      <Navbar />

      <div className="mx-80 mt-12">
        <div className="mb-12 flex flex-col gap-2 items-center">
          <h2 className="text-3xl font-extrabold text-center">¡Get Remote!</h2>
          <div style={{ width: '400px' }}>
            <SearchInput />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {openings.map((job: any) => (
            <JobCard name={job.title} {...job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
}
