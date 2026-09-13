import { Suspense } from "react";
import Banner from "./components/Banner/Banner";
import Navber from "./components/Navber/Navber";
import Technologies from "./components/Technologies/Technologies";
import type { TechnologyType } from "./Type";

const technologiesPromise = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyType[]
  >([]);
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Navber />
        <Banner />
        <Technologies
          technologiesPromise={technologiesPromise()}
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        ></Technologies>
      </Suspense>
    </>
  );
}

export default App;
