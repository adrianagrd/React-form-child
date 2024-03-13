export const FilterButton = ({ hasChildren, setHasChildren }) => {
  const handlerButton = () => {
    setHasChildren(hasChildren ? false : true);
  };

  const label = hasChildren ? "No" : " Yes";

  return <button onClick={handlerButton}>{label}</button>;
};
