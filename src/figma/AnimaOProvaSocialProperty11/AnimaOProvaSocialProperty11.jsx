import "./AnimaOProvaSocialProperty11.css";

export const AnimaOProvaSocialProperty11 = ({
  property1 = "1",
  text = "Em 3 anos conquistamos PBQP-H , ISO 9001 e em torno de 400% de aumento de vendas, desde que os programas começaram a rodar... ",
  text2 = "Já sou cliente Templum alguns anos, e na última empresa em que conduzi a implementação do SGQ, fomos certificados na ISO 9001 e PBQP-H em apenas 3 meses,",
  text3 = "Iniciamos nosso Projeto de implantação PBQP-H e ISO 9001 em abril de 2022 e com a ajuda da nossa consultora, estamos nos preparando para auditoria interna, com 74% do processo implantado.",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "anima-o-prova-social-property-11 " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="prova-3">
        <div className="content">
          <img className="lucas-noiola-1" src="lucas-noiola-10.png" />
          <div className="user-information">
            <div className="label">Douglas Soares </div>
            <div className="text">PROJETTI Construtora e Incorporadora </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="content2">
            <div className="content3">
              <div className="content4">
                <div className="text2">{text2} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prova-2">
        <div className="content">
          <img className="lucas-noiola-12" src="lucas-noiola-11.png" />
          <div className="user-information">
            <div className="label">Raquel de Castro </div>
            <div className="text">HL Engenharia </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="content2">
            <div className="content3">
              <div className="content4">
                <div className="text2">{text3} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prova-1">
        <div className="content5">
          <img className="lucas-noiola-1" src="lucas-noiola-12.png" />
          <div className="user-information">
            <div className="label">Jaqueline Polleto </div>
            <div className="text">Empresária, Polleto Engenharia </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="content2">
            <div className="content3">
              <div className="content4">
                <div className="text2">{text} </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tag">
          <img className="mouse-figma" src="mouse-figma0.svg" />
          <div className="you">
            <div className="user-name">Jaqueline </div>
          </div>
        </div>
      </div>
    </div>
  );
};
