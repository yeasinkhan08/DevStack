import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner/Banner";
import Navber from "./components/Navber/Navber";
import Technologies from "./components/Technologies/Technologies";
import type { TechnologyType } from "./Type";
import Footer from "./components//Footer/Fotter";

const technologiesPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to load technologies");
  }

  return res.json();
};

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyType[]
  >([]);

  return (
    <>
      <Navber />

      <main>
        <Banner />

        <Suspense
          fallback={
            <div className="flex min-h-60 items-center justify-center">
              <p className="text-lg font-medium text-slate-500">Loading...</p>
            </div>
          }
        >
          <Technologies
            technologiesPromise={technologiesPromise()}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </Suspense>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
