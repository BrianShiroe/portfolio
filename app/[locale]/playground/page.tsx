import { TechTicker } from '@/components/home/TechTicker';
import { Skills } from '@/components/home/Skills';
import { Services } from '@/components/home/Services';

export default function PlaygroundPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <TechTicker />
      <Skills />
      <Services />
    </div>
  );
}
