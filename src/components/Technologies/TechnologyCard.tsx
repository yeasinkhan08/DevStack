import type { TechnologyType } from "../../Type";
import { FaStar } from "react-icons/fa";

export interface TechnologyCardProps {
  technology: TechnologyType;
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className=" rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-blue-300">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="rounded-md bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-md bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
          {technology.difficulty}
        </span>

        <div className="flex items-center gap-1">
          <FaStar className="text-xs text-yellow-400" />

          <span className="text-sm font-medium text-slate-600">
            {technology.rating}
          </span>
        </div>
      </div>

      <button className="mt-5 w-full rounded-md bg-slate-950 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  );
}
