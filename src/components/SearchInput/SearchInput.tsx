import React from 'react';
import './SearchInput.scss';

export default function SearchInput() {
  return (
    <div className="search-input-wrapper">
      <div className="absolute text-red-500">Cerca nelle vicinanze</div>
      <input className="relative" type="text" placeholder="Cerca qui" />
    </div>
  );
}
