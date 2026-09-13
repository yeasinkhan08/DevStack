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
    <div className="sticky top-24 h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-500">
          {selectedTechnologies.length}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-500">Your selected technologies</p>

      {/* Empty state */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 rounded-lg bg-slate-50 p-5 text-center">
          <p className="text-sm text-slate-500">No technologies added yet.</p>

          <p className="mt-1 text-xs text-slate-400">
            Add technologies from the list.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 max-h-[500px] space-y-3 overflow-y-auto">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 p-3"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />

                  <span className="truncate text-sm font-medium text-slate-700">
                    {technology.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="shrink-0 text-xs font-medium text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-md border border-red-200 py-2 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}
