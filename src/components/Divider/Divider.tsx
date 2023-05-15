import React from 'react';
import './Divider.scss';

interface DividerProps {
  variant?: 'normal' | 'tall';
}

export default function Divider(props: DividerProps) {
  const { variant = 'normal' } = props;

  const clsx = variant === 'tall' ? 'divider--tall' : 'divider--normal';
  return <div className={`divider ${clsx}`}></div>;
}
