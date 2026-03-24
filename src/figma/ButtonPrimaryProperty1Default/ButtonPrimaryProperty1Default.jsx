import "./ButtonPrimaryProperty1Default.css";

export const ButtonPrimaryProperty1Default = ({
  property1 = "default",
  text = "Texto Botão",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "button-primary-property-1-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="button-primary">
        <img className="arrow-right" src="arrow-right0.svg" />
      </div>
      <div className="button-primary2">
        <div className="texto-bot-o">{text} </div>
      </div>
      <div className="button-primary3">
        <img className="arrow-right2" src="arrow-right1.svg" />
      </div>
    </div>
  );
};
