import { TechTicker } from '@/components/TechTicker';
import { Skills } from '@/components/Skills';
import { Services } from '@/components/Services';

export default function PlaygroundPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full">
      <TechTicker />
      <Skills />
      <Services />
    </div>
  );
}
