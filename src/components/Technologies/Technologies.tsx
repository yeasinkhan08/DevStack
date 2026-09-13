import { use, useState } from "react";
import type { TechnologyType } from "../../Type";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface TechnologiesProps {
  technologiesPromise: Promise<TechnologyType[]>;
  selectedTechnologies: TechnologyType[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<TechnologyType[]>
  >;
}

export default function Technologies({
  technologiesPromise,
}: TechnologiesProps) {
  const technologies = use(technologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyType[]
  >([]);

  const handleAddToStack = (technology: TechnologyType) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: number) => {
    const technology = selectedTechnologies.find((item) => item.id === id);

    const remainingTechnologies = selectedTechnologies.filter(
      (item) => item.id !== id,
    );

    setSelectedTechnologies(remainingTechnologies);

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section id="technologies" className="px-5 py-12">
      <div className="mx-auto max-w-[1250px]">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Explore <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Choose the technologies you want to add to your development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-3">
            {technologies.map((technology) => {
              const isSelected = selectedTechnologies.some(
                (item) => item.id === technology.id,
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={isSelected}
                  onAddToStack={handleAddToStack}
                />
              );
            })}
          </div>

          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}
