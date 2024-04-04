import React from 'react'
import logo from "../images/ex_logo.jpg"

function home() {
    return (
		<>
		<section className="sec_1"> 
			<div className="header_height sec_bg d-flex align-items-center">
				<div className="container">
					<div className="col-12 col-md-9 col-lg-6 py-5">
						<h1 className="hdrcolor">Your One Stop for Disc Golf!</h1>
						<p className="text-gray lead">Our website offers a wide range of services for every Disc Golfer.</p>
					</div>
				</div>
			</div>
		</section>


        <section className="sec_2"> 
					<div className="col-12 col-md-9 col-lg-6 text-center py-3">
						<img className="image-fluid py-3" alt="brand" width="40%" src={logo} />
					</div>
		</section>
		</>
	);
};


export default home