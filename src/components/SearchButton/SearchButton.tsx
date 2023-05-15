import React from 'react';
import './SearchButton.scss';

interface SearchButtonProps {
  text: string;
}

export default function SearchButton(props: SearchButtonProps) {
  const { text } = props;

  return <button className="search-button">{text}</button>;
}
