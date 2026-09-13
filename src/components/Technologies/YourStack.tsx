import { FaTimes } from "react-icons/fa";
import type { TechnologyType } from "../../Type";

interface YourStackProps {
  selectedTechnologies: TechnologyType[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

          <p className="mt-1 text-sm text-slate-500">
            {selectedTechnologies.length}{" "}
            {selectedTechnologies.length === 1 ? "Technology" : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-sm font-semibold text-pink-500 hover:text-pink-700"
          >
            Remove All
          </button>
        )}
      </div>

      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-slate-200 p-6 text-center">
          <p className="text-sm leading-6 text-slate-500">
            Your stack is empty. Add technologies from the list to build your
            development stack.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-slate-50">
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-7 w-7 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-slate-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-slate-500">{technology.category}</p>
              </div>

              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-red-50 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
