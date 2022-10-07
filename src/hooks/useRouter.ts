import { useContext } from "react";
import { PathContext } from "../store/path";

const useRouter = () => {
  const { path, setPath } = useContext(PathContext);

  const push = (nextPath: string) => {
    if (path === nextPath) return;
    setPath(nextPath);
    history.pushState({ data: nextPath }, "", nextPath);
  };
  return { push };
};

export default useRouter;
