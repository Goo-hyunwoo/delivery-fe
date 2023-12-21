import React from "react";

interface Props {
  count: number;
}

export default function CountView({ count }: Props) {
  return <div>{`현재 숫자는 ${count}`}</div>;
}
