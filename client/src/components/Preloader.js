import React from 'react';

const Preloader = () => {
	return (
		<div className="site-preloader">
			<div className="preloader-wrapper active">
				<div className="spinner-layer spinner-color">
					<div className="circle-clipper left">
						<div className="circle" />
					</div>
					<div className="gap-patch">
						<div className="circle" />
					</div>
					<div className="circle-clipper right">
						<div className="circle" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preloader;
