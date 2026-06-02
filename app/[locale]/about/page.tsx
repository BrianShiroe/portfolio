import { TechTicker } from '@/components/TechTicker';
import { About } from '@/components/About';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <TechTicker />
      <About />
    </div>
  );
}
