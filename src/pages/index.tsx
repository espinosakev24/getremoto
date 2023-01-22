import { JobCard, Navbar, SearchInput } from "components";
import { techJobs } from "./jobsList";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import Hero from "components/Hero";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ""
);

export default function Home() {
  const [openings, setOpenings] = useState<any>([]);

  const getOpenings = () =>
    supabase
      .from("openings")
      .select("*")
      .then(({ data }) => {
        setOpenings(data || []);
      });

  useEffect(() => {
    getOpenings();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mx-80 mt-12">
        <div className="flex flex-col gap-4">
          {openings.map((job: any) => (
            <JobCard key={job.id} name={job.title} {...job}></JobCard>
          ))}
        </div>
      </div>
    </div>
  );
}
