import React from "react";

type Props = {
  picture: string;
  prof: string;
};

const ProfBlock = ({ picture, prof }: Props) => {
  return (
    <a href="#" className="blockLink">
      <div className="blockLink__img">
        <img
          src={picture}
          alt={prof}
        />
      </div>

      <div className="blockLink__text">{prof}</div>
    </a>
  );
};

export default ProfBlock;
