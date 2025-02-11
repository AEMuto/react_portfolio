type DividerProps = {
  height?: number;
  width?: number;
  'aria-hidden'?: boolean;
  color?: string;
  direction?: "horizontal" | "vertical";
};

const Divider = ({
  height = 30,
  width = 2,
  'aria-hidden': ariaHidden = true,
  color = "var(--txt--transparent)",
  direction = "horizontal",
}: DividerProps) => {
  return (
    <span
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: color,
        display: "inline-block",
        margin: direction === "horizontal" ? "0 0.1rem" : "0.1rem 0",
      }}
      aria-hidden={ariaHidden}
    />
  );
};

export default Divider;