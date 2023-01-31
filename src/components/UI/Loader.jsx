import classes from "./Loader.module.css";
const Loader = () => {
  const styles = {
    fill: "transparent",
    stroke: "#B809C3",
    strokeWidth: "7px",
    strokeLinecap: "round",
    filter: "url(#shadow)",
  };
  return (
    <div className={classes.div}>
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              floodColor="#fc6767"
            />
          </filter>
        </defs>
        <circle
          className={classes.spinner}
          style={styles}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </div>
  );
};

export default Loader;
