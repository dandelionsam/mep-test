'use client';

import React, { PropsWithChildren } from 'react';
import './MenuButton.scss';

interface MenuButtonProps {}

export default function MenuButton(props: PropsWithChildren<MenuButtonProps>) {
  const { children } = props;

  const menuLayoutOpen = () => {
    console.log('%c%s', 'color: #aa00ff', 'menuLayoutOpen');
  };

  const menuLayoutClose = () => {
    console.log('%c%s', 'color: #00a3cc', 'menuLayoutClose');
  };

  return (
    <button className="menu-button" onMouseEnter={() => menuLayoutOpen()} onMouseLeave={() => menuLayoutClose()}>
      {children}
    </button>
  );
}
