import { JobCard } from 'components';
import { techJobs } from './jobsList';

export default function Home() {
  return (
    // No estoy muteado :( yo me salgo y vuelvo a entrar
    <div className="mx-52">
      <h2 className="text-3xl font-extrabold text-center my-10">
        ¡Get Remote!
      </h2>

      <div className="flex flex-col gap-4">
        {techJobs.map((job: any) => (
          <JobCard {...job}></JobCard>
        ))}
      </div>
    </div>
  );
}
