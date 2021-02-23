import React from "react";

export interface SelectButtonProps {
  title: string;
  onClick: () => void;
}

function SelectButton(props: SelectButtonProps) {
  return <button onClick={props.onClick}>{props.title}</button>;
}

export const SelectButtonComponent = React.memo(SelectButton);
