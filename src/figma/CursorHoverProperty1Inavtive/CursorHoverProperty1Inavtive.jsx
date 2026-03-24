import "./CursorHoverProperty1Inavtive.css";

export const CursorHoverProperty1Inavtive = ({
  property1 = "inavtive",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "cursor-hover-property-1-inavtive " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="ellipse-185"></div>
      <div className="ellipse-186"></div>
    </div>
  );
};
