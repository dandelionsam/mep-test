import React from 'react';
import './Card.scss';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card(props: CardProps) {
  const { icon, title, description } = props;

  return (
    <div className="card-wrapper">
      <a className="card" href="">
        <img src={icon} className="w-10 h-10" />
        <div className="ml-4 sm:ml-0">
          <h3 className="sm:my-4 mb-4 text-red-500 underline underline-offset-4 text-lg">
            <span>{title}</span>
          </h3>
          <div className="text-sm">{description}</div>
        </div>
      </a>
    </div>
  );
}
