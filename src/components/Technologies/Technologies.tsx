import type { TechnologyType } from "../../Type";
import { use } from "react";
import TechnologyCard from "./TechnologyCard";

export interface TechnologiesProps {
  technologiesPromise: Promise<TechnologyType[]>;
}

export default function Technologies({
  technologiesPromise,
}: TechnologiesProps) {
  const technologies = use(technologiesPromise);
  console.log(technologies);

  return (
    <>
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Explore <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-500 md:text-base">
            Choose the technologies you need for your next project.
          </p>
        </div>
        <div className=" container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            ></TechnologyCard>
          ))}
        </div>
      </div>
    </>
  );
}
