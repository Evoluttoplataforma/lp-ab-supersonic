import "./LinksProperty1Default.css";

export const LinksProperty1Default = ({
  arrowLink = true,
  property1 = "default",
  text = "Nome link",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "links-property-1-default " + className + " " + variantsClassName
      }
    >
      <div className="text">{text} </div>
      {arrowLink && (
        <>
          <img className="arrow-drop-down" src="arrow-drop-down0.svg" />
        </>
      )}
    </div>
  );
};
