import "./SpinnerText3Property11.css";

export const SpinnerText3Property11 = ({
  property1 = "1",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "spinner-text-3-property-11 " + className + " " + variantsClassName
      }
    >
      <div className="vector"></div>
      <div className="group-51018">
        <div className="group-51017">
          <div className="vector2"></div>
        </div>
        <img className="vector3" src="vector2.svg" />
      </div>
      <img className="vector4" src="vector3.svg" />
    </div>
  );
};
