import "./ButtonOutlineProperty1Small.css";

export const ButtonOutlineProperty1Small = ({
  property1 = "small",
  text = "Fale com especialista",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "button-outline-property-1-small " + className + " " + variantsClassName
      }
    >
      <div className="icon-1">
        <img className="arrow-right" src="arrow-right0.svg" />
      </div>
      <div className="button">
        <div className="texto-bot-o">{text}</div>
      </div>
    </div>
  );
};
