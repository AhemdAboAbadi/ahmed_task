import CircularProgress from "@material-ui/core/CircularProgress";
import "./style.css";

export default function Spinner() {
  return (
    <div className="root">
      <CircularProgress size={100} />
    </div>
  );
}
