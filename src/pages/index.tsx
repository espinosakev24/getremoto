import { JobCard, Navbar, SearchInput } from "components";
import { createClient } from "@supabase/supabase-js";
import Hero from "components/Hero";
import { GetServerSideProps } from "next";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_KEY || ""
);

export default function Home({ openings }) {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = (await supabase.from("openings").select("*")) as any;

  return {
    props: {
      openings: data,
    },
  };
};
