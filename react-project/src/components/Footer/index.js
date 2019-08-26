import React from 'react';

const Footer = ({
  scrollTo,
}) => {
	return (
		<div className="container">
			<div className="row d-flex flex-d-row mb-30 mt-30">
				<div className="column xl-6 d-flex justify-content-start">
          <span className="text-sub__normal">Copyright 2018 Space Savvy</span>
        </div>
				<div className="column xl-6 d-flex justify-content-end">
					<a href="#" title="Back to top" className="text-link__normal" onClick={scrollTo}>Back to top</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
