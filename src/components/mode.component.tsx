import { TendPoint } from "../store/slices/word.slice";
import ModeIcon from "../hooks/modeIconchooser";

const Mode = () => {
  return (
    <div>
      <ModeIcon mode="ml" />
      <ModeIcon mode="sl" />
      <ModeIcon mode="rel_nry" />
      <ModeIcon mode="rel_trg" />
    </div>
  );
};
export default Mode;
