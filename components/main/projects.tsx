import Link from 'next/link';
import { ProjectCard } from "@/components/sub/project-card";
import { supabase } from '@/lib/supabase'; // Fetches the Supabase client

// Define the type for a single project to ensure type safety
interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
}

// This is the main component, now marked as 'async'
export const Projects = async () => {
  // Fetch all projects directly from the Supabase 'projects' table
  // and apply the Project[] type to the fetched data.
  const { data: projects, error } = await supabase
    .from('projects')
    .select('id, title, slug, image:cover_image_url') // Renames cover_image_url to image
    .returns<Project[]>(); // Tells Supabase the expected return type

  // DEBUG: Log the fetched projects to the server console
  console.log("Fetched projects from Supabase:", projects);

  // If there was an error fetching, log it and show a message or nothing
  if (error || !projects) {
    console.error("Failed to fetch projects:", error);
    return (
      <section id="projects" className="text-center py-20">
        <p className="text-red-400">Could not load projects.</p>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center gap-10 px-10">
        {/* Now mapping over the 'projects' data fetched from Supabase */}
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.slug}`}>
              <ProjectCard
                src={project.image} // This now correctly receives the cover_image_url
                title={project.title}
              />
          </Link>
        ))}
      </div>
    </section>
  );
};

