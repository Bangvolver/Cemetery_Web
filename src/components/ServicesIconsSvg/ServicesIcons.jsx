// eslint-disable-next-line no-unused-vars
import React from 'react';

const SvgIcons = {
  organization: (
    <svg viewBox="0 0 24 24" fill="rgb(161, 98, 7)" height="100px" width="100px">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M15 3a1 1 0 011 1v4a1 1 0 01-1 1h-2v2h4a1 1 0 011 1v3h2a1 1 0 011 1v4a1 1 0 01-1 1h-6a1 1 0 01-1-1v-4a1 1 0 011-1h2v-2H8v2h2a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1h2v-3a1 1 0 011-1h4V9H9a1 1 0 01-1-1V4a1 1 0 011-1h6zM9 17H5v2h4v-2zm10 0h-4v2h4v-2zM14 5h-4v2h4V5z" />
    </svg>
  ),
  ceremony: (
    <svg viewBox="0 0 24 24" fill="rgb(161, 98, 7)" height="100px" width="100px">
      <path d="M21.447 14.105L18 12.382V12a1 1 0 00-.485-.857L13 8.434V6h2V4h-2V2h-2v2H9v2h2v2.434l-4.515 2.709A1 1 0 006 12v.382l-3.447 1.724A.998.998 0 002 15v6a1 1 0 001 1h18a1 1 0 001-1v-6c0-.379-.214-.725-.553-.895zM4 15.618l2-1V20H4v-4.382zM12 15a2 2 0 00-2 2v3H8v-7.434l4-2.4 4 2.4V20h-2v-3a2 2 0 00-2-2zm8 5h-2v-5.382l2 1V20z" />
    </svg>
  ),
  cloudStorage: (
    <svg viewBox="0 0 1000 1000" fill="rgb(161, 98, 7)" height="100px" width="100px">
      <path d="M760 356c66.667 0 123.333 22.667 170 68s70 100.667 70 166-23.333 120.667-70 166-103.333 68-170 68H182c-49.333 0-92-17.333-128-52S0 696 0 648c0-49.333 17.667-91.333 53-126s78.333-52 129-52c1.333 0 4.667.333 10 1s8.667 1 10 1c-1.333-8-2-20.667-2-38 0-72 26-133.333 78-184s114.667-76 188-76c60 0 113.333 17.333 160 52s78 79.333 94 134c18.667-2.667 32-4 40-4" />
    </svg>
  )   
};

// eslint-disable-next-line react/prop-types
const ServicesIcons = ({ type }) => {
  return SvgIcons[type] || <svg ></svg>;
};

export default ServicesIcons;
