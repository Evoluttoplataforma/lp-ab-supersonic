import "./AnimaOOrbitProperty110.css";

export const AnimaOOrbitProperty110 = ({
  property1 = "1",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "anima-o-orbit-property-110 " + className + " " + variantsClassName
      }
    >
      <div className="content">
        <div className="content2">
          <div className="header-contrato">
            <div className="content3">
              <img className="arrow-split" src="arrow-split0.svg" />
              <div className="label">ORBIT </div>
            </div>
            <img className="icon-container" src="icon-container0.svg" />
          </div>
          <div className="content4">
            <div className="content5">
              <div className="content3">
                <div className="text">Processos organizados </div>
              </div>
            </div>
            <div className="content5">
              <div className="content3">
                <div className="status-text">Planejamentos estruturados </div>
              </div>
            </div>
            <div className="content5">
              <div className="content3">
                <div className="title">Tarefas automatizadas </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content2">
          <div className="content6">
            <img className="icon" src="icon0.svg" />
            <div className="name">2h economizadas no seu dia </div>
          </div>
        </div>
        <div className="content2">
          <div className="content6">
            <img className="icon2" src="icon1.svg" />
            <div className="name">30 falhas operacionais a menos </div>
          </div>
          <img className="confetti-3" src="confetti-30.png" />
        </div>
      </div>
      <div className="tag">
        <img className="mouse-figma" src="mouse-figma0.svg" />
        <div className="you">
          <div className="label2">Você </div>
        </div>
      </div>
    </div>
  );
};
