import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return ( 
        <div className="container">
            <div className="row align-items-center">
                
                {/* Text content on the left */}
                <div className="col-6 p-5">
                    <h1>{productName}</h1>
                    <p className="text-muted">{productDescription}</p>

                    <div className="mb-3">
                        <a href={learnMore} className="btn btn-outline-secondary">
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Image on the right */}
                <div className="col-6 p-5">
                    <img src={imageURL} alt={productName} className="img-fluid" />
                </div>

            </div>
        </div>
    );
}

export default RightSection;
