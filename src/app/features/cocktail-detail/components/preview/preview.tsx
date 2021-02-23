import React from "react";
import { CocktailEnum } from "../../../models/cocktail";
import { ReactComponent as WhiskeySourImg } from "../../../../../assets/icons/drink/wiskey-sour.svg";
import cn from "classnames";
import "./preview.scss";

export interface PreviewProps {
  type: CocktailEnum;
  className?: string;
}

function getCocktailImageById(id: CocktailEnum): React.FunctionComponent {
  switch (id) {
    case CocktailEnum.WHISKEY_SOUR:
      return WhiskeySourImg;
    default:
      return WhiskeySourImg;
  }
}

function Preview(props: PreviewProps) {
  const CocktailImage = getCocktailImageById(props.type);
  return (
    <div className={cn(props.className, "preview")}>
      <CocktailImage />
    </div>
  );
}

export const PreviewComponent = React.memo(Preview);
