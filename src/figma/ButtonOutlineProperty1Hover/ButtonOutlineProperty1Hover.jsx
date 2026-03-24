import "./ButtonOutlineProperty1Hover.css";

export const ButtonOutlineProperty1Hover = ({
  property1 = "hover",
  text = "Fale com especialista",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "button-outline-property-1-hover " + className + " " + variantsClassName
      }
    >
      <div className="button">
        <div className="texto-bot-o">{text}</div>
      </div>
      <div className="icon-2">
        <img className="arrow-right2" src="arrow-right1.svg" />
      </div>
    </div>
  );
};
