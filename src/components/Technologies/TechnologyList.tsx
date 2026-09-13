import type { TechnologyType } from "../../Type";
import TechnologyCard from "./TechnologyCard";

interface TechnologyListProps {
  technologies: TechnologyType[];
  selectedTechnologies: TechnologyType[];
  onAddToStack: (technology: TechnologyType) => void;
}

export default function TechnologyList({
  technologies,
  selectedTechnologies,
  onAddToStack,
}: TechnologyListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {technologies.map((technology) => {
        const isSelected = selectedTechnologies.some(
          (item) => item.id === technology.id,
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isSelected={isSelected}
            onAddToStack={onAddToStack}
          />
        );
      })}
    </div>
  );
}
