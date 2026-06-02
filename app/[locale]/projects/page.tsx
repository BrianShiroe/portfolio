import { TopProjects } from '@/components/TopProjects';
import { AllProjects } from '@/components/AllProjects';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <TopProjects />
      <AllProjects />
    </div>
  );
}
