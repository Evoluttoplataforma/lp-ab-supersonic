import "./AnimaOContrato2Property14.css";

export const AnimaOContrato2Property14 = ({
  property1 = "0",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "anima-o-contrato-2-property-14 " + className + " " + variantsClassName
      }
    >
      <div className="content">
        <div className="content2">
          <div className="header-contrato">
            <div className="content3">
              <img className="icon" src="icon0.svg" />
              <div className="label">Contrato </div>
            </div>
            <img className="icon-container" src="icon-container0.svg" />
          </div>
          <div className="content4">
            <div className="content5">
              <div className="content3">
                <div className="text">Contrante </div>
              </div>
              <div className="rounded-rectangle"></div>
            </div>
            <div className="content5">
              <div className="content3">
                <div className="status-text">Contratado </div>
              </div>
              <div className="rounded-rectangle2"></div>
            </div>
            <div className="content5">
              <div className="content3">
                <div className="title">Termos </div>
              </div>
              <div className="rounded-rectangle3"></div>
            </div>
          </div>
          <div className="content3">
            <img className="icon2" src="icon1.svg" />
            <div className="name">José Roberto da Silva </div>
          </div>
        </div>
        <div className="item">
          <div className="certification-item">
            <div className="icon3">
              <img className="verified-icon" src="verified-icon0.svg" />
              <div className="certification-name">PBQP-H </div>
            </div>
            <img className="icon-container2" src="icon-container1.svg" />
          </div>
          <div className="status-message">Certificação ativa! </div>
          <img
            className="_35875-confetti-on-transparent-background-1"
            src="_35875-confetti-on-transparent-background-10.png"
          />
        </div>
      </div>
      <div className="tag">
        <img className="mouse-figma" src="mouse-figma0.svg" />
        <div className="you">
          <div className="tag-text">Você </div>
        </div>
      </div>
    </div>
  );
};
