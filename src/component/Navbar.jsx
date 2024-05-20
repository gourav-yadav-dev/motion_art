import React from 'react'
// import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../component/Navbar.css'
function Navbar() {
    return (
        <>
            <div className="navbar h-14 bg-[#262626] flex justify-between" >
                <div >
                    <a href="#" className='flex  mt-1 bg-[#262626]'>
                        <img src='public/logo_image.png' alt="none picture" className='text-white h-11 bg-contain' />
                        <h1 className="text-white leading-10  s-2 text-2xl" >enato</h1>
                        <h1 className="text-green-200 leading-10 text-2xl" >market</h1>
                    </a>
                </div>
                <div>
                    <button className='bg-[#82b440] px-5 py-2 text-white rounded 2xl mt-2 mr-4 '>Buy now</button>
                </div>
            </div>
            <section className="logo_purchasebtn_container">
                <div className='logo_container'>
                    <a href='#'><img src="public/MotionArtEffect-logo.png" /></a>
                </div>
                <div className="purchase_button_container">
                    <button className='purchase_btn'>Purchase Now</button>
                </div>
            </section>
            <section className="transform_website">
                <div className='trasform_website_part1'>
                    <h1 className='trasform_website_part1_colorfull '>Transfrom your Website</h1>
                    <h2 className="transform_website_part1-noncolorfull">With Motion Art  Effect</h2>
                </div>
                <div className='trasfrom_website_part2'>
                    <div className='transfrom_website_part2_div1'>
                        <p>Attract Your Vistior Attention With Colorful</p>
                        <span>Motion Art Effect</span>
                    </div>
                    <div className='transfrom_website_part2_div2'>

                        <p>  Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
                        </p>

                    </div>

                </div>


            </section>
            <section className='trusted_user_rating_container'>
                <div className="trusted_user_heading">
                    <p>Trusted by thousand of users  around the world</p></div>
                <div className='rating_container flex justify-evenly mt-12'>
                    <div className='rating_container1 flex' >
                        <div>
                            <img src="public/logo_image.png" />
                        </div>
                        <div className='star_container mt-3'>
                            <span className='star_rating'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <p className="star_review">
                                4.5 Score,9 Review
                            </p>
                        </div>
                    </div>
                    <div className='rating_container2 flex '>
                        <div>
                            <img src="public/c2_image.png" />
                        </div>
                        <div className='star_container mt-2'>
                            <span className='star_rating'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <p className="star_review">
                                4.5 Score,9 Review
                            </p>
                        </div>
                    </div>
                    <div className='rating_container3 flex '>
                        <div>
                            <img src="public/w_image.png" />
                        </div>
                        <div className='star_container  mt-3'>
                            <span className='star_rating'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </span>
                            <p className="star_review">
                                4.5 Score,9 Review
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            <section className='maginc_wand_container flex'>
                <div className='maginc_wand_container_subcontainer1'>
                    <div className="maginc_wind_container_part1_1">
                        <p className='text-white'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
                    </div>
                    <div className="maginc_wind_container_part1_2">
                        <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                    </div>
                    <div className="maginc_wind_container_part1_3">
                        <button className='text-white'>Purchase From Envato <span className="right_arrow"><FontAwesomeIcon icon={faArrowRight} /></span></button>
                    </div>
                </div>
                <div className='maginc_wind_container_part1_4'>
                    <img src="public/magic_wind.png" />
                </div>
            </section>
            <section className="apply_on_section_container">
                <div className="apply_on_section_container_div1">
                    <h1 className="text-white">Apply On Any Section Or Enable For Whole Page
                    </h1>
                </div>
                <div className="apply_on_section_container_div2 flex mt-16 justify-center ">
                    <div className="apply_on_section_container_div2_subpart1">
                        <h1 className='text-white'>Apply On Section</h1>
                        <p className='text-white'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                        <img src="public/section_image.png" />
                    </div>
                    
                        <div className="apply_on_section_container_div2_subpart1 mt-16 ml-14">
                            <h1 className='text-white'>Apply On Section</h1>
                            <p className='text-white'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                            <img src="public/section_image.png" />
                        </div>
                    
                </div>

            </section>
        </>
    )
}
export default Navbar
{/* <span className="right_arrow"><FontAwesomeIcon icon={faArrowRight}/></span> */ }