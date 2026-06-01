import { TopProjects } from '@/components/home/TopProjects';
import { AllProjects } from '@/components/home/AllProjects';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <TopProjects />
      <AllProjects />
    </div>
  );
}
