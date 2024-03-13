import { useEffect } from "react";
import { FilterButton, CustomImage } from "./components";
import { useChildHook } from "./hooks";

const App = () => {
  const { hasChildren, setHasChildren } = useChildHook();

  const mounted = hasChildren ? "Unmounted" : "Mounted";

  useEffect(() => {
    return () => console.log("hasChildren:", mounted);
  });

  return (
    <div>
      <h2>¿You want a scare?</h2>
      <FilterButton hasChildren={hasChildren} setHasChildren={setHasChildren} />
      <CustomImage hasChildren={hasChildren} />
    </div>
  );
};

export default App;
