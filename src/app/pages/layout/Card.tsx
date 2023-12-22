import React from "react";
import { Card as AntCard } from "antd";

const { Meta } = AntCard;

interface Props {
  title: string;
  description: string;
  image_url: string;
  image_alt: string;
}

export default function Card({
  title,
  description,
  image_url,
  image_alt,
}: Props) {
  return (
    <AntCard cover={<img alt="example" src={image_url} />}>
      <Meta title={title} description={description} />
    </AntCard>
  );
}
