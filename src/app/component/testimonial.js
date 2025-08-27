

import React from "react";


export const Testimonial = ()=>{
    return(
        <div className="testimonial">
            <div className="test-container">
                <div className="title">
                    <h4>Testimonial</h4>
                    <h2>Our Clients Say </h2>
                </div>
                <div className="testimonial-card">
                    <div className="test-card">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s ...
                        </p>
                        <div className="author">
                            <img src="/images/imgres"></img>
                            <div className="author-info">
                                <div className="author-header">
                                    <h4>Admin Account</h4>
                                    <span className="time">11 July 2020</span>
                                </div>
                                <div className="rating">
                                    {/* ★★★★<span class="last-star">★</span> */}
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="test-card">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s ...
                        </p>
                        <div className="author">
                            <img src="/images/imgres"></img>
                            <div className="author-info">
                                <div className="author-header">
                                    <h4>Admin Account</h4>
                                    <span className="time">11 July 2020</span>
                                </div>
                                <div className="rating">
                                    {/* ★★★★<span class="last-star">★</span> */}
                                </div>

                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="button-nav">
                        <button className="btn-next"></button>
                        <button className="btn-cent">Load More</button>
                        <button className="btn-prev"></button>
                    </div>
            </div>
        </div>
    )
}