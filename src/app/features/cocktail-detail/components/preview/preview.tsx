import React from "react";
import { CocktailEnum } from "../../../models/cocktail";
import { ReactComponent as WhiskeySourImg } from "../../../../../assets/icons/drink/wiskey-sour.svg";
import { ReactComponent as CubeLibreImg } from "../../../../../assets/icons/drink/cube-libre.svg";
import { ReactComponent as MojitoImg } from "../../../../../assets/icons/drink/mojito.svg";
import { ReactComponent as MojitoNonAlcImg } from "../../../../../assets/icons/drink/mohito-nonalc.svg";
import { ReactComponent as RomanHolidayImg } from "../../../../../assets/icons/drink/roman-holiday.svg";
import { ReactComponent as GimletImg } from "../../../../../assets/icons/drink/gimlet.svg";
import { ReactComponent as PinaColadaImg } from "../../../../../assets/icons/drink/pina-colada.svg";
import { ReactComponent as PinaColadaNonAlcImg } from "../../../../../assets/icons/drink/pina-colada-nonalc.svg";
import { ReactComponent as MilkyToddyImg } from "../../../../../assets/icons/drink/milky-toddy.svg";
import { ReactComponent as DaiquiriImg } from "../../../../../assets/icons/drink/daiquiri.svg";
import { ReactComponent as SexOnTheBeachImg } from "../../../../../assets/icons/drink/sex-on-the-beach.svg";
import { ReactComponent as SexOnTheBeachNonAlcImg } from "../../../../../assets/icons/drink/sex-on-the-beach-nonalc.svg";
import { ReactComponent as GinTonicImg } from "../../../../../assets/icons/drink/gin-tonic.svg";
import { ReactComponent as MilkyAlanImg } from "../../../../../assets/icons/drink/milky-alan.svg";
import { ReactComponent as PussyfruitImg } from "../../../../../assets/icons/drink/pussyfruit.svg";
import { ReactComponent as CucumberImg } from "../../../../../assets/icons/drink/cucumber.svg";
import { ReactComponent as LeoCocktailImg } from "../../../../../assets/icons/drink/leo-cocktail.svg";

import cn from "classnames";
import "./preview.scss";

export interface PreviewProps {
  type: CocktailEnum;
  className?: string;
}

function getCocktailImageById(id: CocktailEnum): React.FunctionComponent {
  switch (id) {
    case CocktailEnum.CUBE_LIBRE:
      return CubeLibreImg;
    case CocktailEnum.MOJITO:
      return MojitoImg;
    case CocktailEnum.MOJITO_AF:
      return MojitoNonAlcImg;
    case CocktailEnum.ROMAN_HOLIDAY:
      return RomanHolidayImg;
    case CocktailEnum.GIMLET:
      return GimletImg;
    case CocktailEnum.PINA_COLADA:
      return PinaColadaImg;
    case CocktailEnum.PINA_COLADA_AF:
      return PinaColadaNonAlcImg;
    case CocktailEnum.MILKY_TODDY:
      return MilkyToddyImg;
    case CocktailEnum.DAIQUIRI:
      return DaiquiriImg;
    case CocktailEnum.SEX_ON_THE_BEACH:
      return SexOnTheBeachImg;
    case CocktailEnum.SEX_ON_THE_BEACH_AF:
      return SexOnTheBeachNonAlcImg;
    case CocktailEnum.GIN_TONIC:
      return GinTonicImg;
    case CocktailEnum.MILKY_ALAN:
      return MilkyAlanImg;
    case CocktailEnum.PUSSYFRUIT:
      return PussyfruitImg;
    case CocktailEnum.CUCUMBER:
      return CucumberImg;
    case CocktailEnum.LEOS_COCKTAIL:
      return LeoCocktailImg;
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
