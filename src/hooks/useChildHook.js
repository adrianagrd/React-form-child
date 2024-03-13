import { useState } from "react";

export const useChildHook = () => {
  const [hasChildren, setHasChildren] = useState(false);

  return { hasChildren, setHasChildren };
};
