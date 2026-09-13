import { use } from "react";
import { toast } from "react-toastify";
import type { TechnologyType } from "../../Type";
import TechnologyList from "./TechnologyList";
import YourStack from "./YourStack";

export interface TechnologiesProps {
  technologiesPromise: Promise<TechnologyType[]>;
  selectedTechnologies: TechnologyType[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<TechnologyType[]>
  >;
}

export default function Technologies({
  technologiesPromise,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  const handleAddToStack = (technology: TechnologyType) => {
    const alreadyExists = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((previous) => [...previous, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (id: number) => {
    const technology = selectedTechnologies.find((item) => item.id === id);

    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id),
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-[1250px]">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Explore <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Choose the technologies you need for your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_320px]">
          <TechnologyList
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAddToStack={handleAddToStack}
          />

          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}
