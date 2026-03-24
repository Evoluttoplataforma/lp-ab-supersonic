import "./Header.css";
import { LinksProperty1Default } from "../LinksProperty1Default/LinksProperty1Default.jsx";
import { ButtonOutlineProperty1Hover } from "../ButtonOutlineProperty1Hover/ButtonOutlineProperty1Hover.jsx";

export const Header = ({
  component = <ButtonOutlineProperty1Hover property1="hover" />,
  text = "undefined",
  className,
  ...props
}) => {
  return (
    <div className={"header " + className}>
      <div className="frame-2">
        <img className="vector" src="vector0.svg" />
        <img className="vector-1" src="vector-10.svg" />
        <div className="links">
          <LinksProperty1Default
            arrowLink={false}
            text="Sobre a Certificação"
            className="links-instance"
          ></LinksProperty1Default>
          <LinksProperty1Default
            arrowLink={false}
            text="Como Funciona"
            className="links-instance"
          ></LinksProperty1Default>
          <LinksProperty1Default
            arrowLink={false}
            text="Benefícios"
            className="links-instance"
          ></LinksProperty1Default>
          <LinksProperty1Default
            arrowLink={false}
            text="Depoimentos"
            className="links-instance"
          ></LinksProperty1Default>
          <LinksProperty1Default
            arrowLink={false}
            text="FAQ"
            className="links-instance"
          ></LinksProperty1Default>
        </div>
      </div>
      <div className="cta">{component}</div>
    </div>
  );
};
