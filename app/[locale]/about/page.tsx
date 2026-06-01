import { TechTicker } from '@/components/home/TechTicker';
import { About } from '@/components/home/About';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <TechTicker />
      <About />
    </div>
  );
}
