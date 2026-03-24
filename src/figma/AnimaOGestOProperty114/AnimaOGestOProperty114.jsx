import "./AnimaOGestOProperty114.css";

export const AnimaOGestOProperty114 = ({
  property1 = "1",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "anima-o-gest-o-property-114 " + className + " " + variantsClassName
      }
    >
      <div className="content">
        <div className="content2">
          <div className="header-contrato">
            <div className="content3">
              <img className="team-dashboard" src="team-dashboard0.svg" />
              <div className="label">Equipes </div>
            </div>
            <img className="icon-container" src="icon-container0.svg" />
          </div>
        </div>
        <div className="content2">
          <div className="header-contrato">
            <div className="content3">
              <img className="calendar-month" src="calendar-month0.svg" />
              <div className="label">Tarefas da semana </div>
            </div>
            <img className="icon-container2" src="icon-container1.svg" />
          </div>
        </div>
        <div className="content2">
          <div className="header-contrato">
            <div className="content3">
              <img className="assignment" src="assignment0.svg" />
              <div className="label">Documentos </div>
            </div>
            <img className="icon-container3" src="icon-container2.svg" />
          </div>
        </div>
      </div>
      <div className="tag">
        <img className="mouse-figma" src="mouse-figma0.svg" />
        <div className="you">
          <div className="label2">Orbit </div>
        </div>
      </div>
    </div>
  );
};
