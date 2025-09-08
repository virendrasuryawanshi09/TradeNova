import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Left image */}
        <div className="col-6 p-5">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* Right content */}
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>

          {/* Demo / Learn More links */}
          <div className="mb-3">
            <a href={tryDemo} className="btn btn-primary me-4">Try Demo</a>
            <a href={learnMore} className="btn btn-outline-secondary">Learn More</a>
          </div>

          {/* App store badges */}
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" className="me-4" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
