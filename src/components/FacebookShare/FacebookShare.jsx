import React from 'react';

const FacebookShare = () => (
  <div>
    <iframe
      src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=large&mobile_iframe=true&appId=1732251593570250&width=106&height=28"
      width="106"
      height="28"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
      title="facebook share button"
    />
  </div>
);

export default FacebookShare;
