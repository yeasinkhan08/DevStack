import { use, useState } from "react";
import type { TechnologyType } from "../../Type";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
  technologiesPromise: Promise<TechnologyType[]>;
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
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);
  };

  const handleRemove = (id: number) => {
    const remainingTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id,
    );

    setSelectedTechnologies(remainingTechnologies);
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section id="technologies" className="px-5 py-12">
      <div className="mx-auto max-w-[1250px]">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Explore Technologies
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Choose the technologies you want to add to your development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3">
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
