import React, { PropsWithChildren } from 'react';

interface BannerProps {
  // TODO type the entire link attrs with React.LinkHTMLAttributes
  url?: string;
}

export default function Banner(props: PropsWithChildren<BannerProps>) {
  const { children, url } = props;

  return (
    <div className="bg-zinc-700 text-white sm:py-4 py-2 sm:px-10 px-5">
      <a className="text-white text-sm sm:text-lg leading-4 break-words" href={url}>
        {children}
      </a>
    </div>
  );
}
