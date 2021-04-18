import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="135" cy="135" r="121" />
      <rect x="0" y="271" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="307" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="421" rx="6" ry="6" width="90" height="30" />
      <rect x="129" y="408" rx="20" ry="20" width="149" height="50" />
    </ContentLoader>
  );
}

export default LoadingBlock;
