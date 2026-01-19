'use client';

import { ReactElement } from 'react';

type Props = {
  icons: ReactElement[];
  speed?: number;
};

export default function ClientsCarousel({
  icons,
  speed = 60,
}: Props) {
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="clients-carousel">
      <div
        className="clients-carousel__track"
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedIcons.map((icon, index) => (
          <div
            key={`client-logo-${index}`}
            className="clients-carousel__item"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
