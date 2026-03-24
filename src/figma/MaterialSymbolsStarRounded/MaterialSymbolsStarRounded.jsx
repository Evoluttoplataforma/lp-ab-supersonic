import "./MaterialSymbolsStarRounded.css";

export const MaterialSymbolsStarRounded = ({ className, ...props }) => {
  return (
    <img
      className={"material-symbols-star-rounded " + className}
      src="material-symbols-star-rounded.svg"
    />
  );
};
