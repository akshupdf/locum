import { Locume, LocumeLogo } from "../../reusable/Icons"
import logo from "../../assets/logo-footer.png"


export const Footer = () => {

    return (

        <div className="footer">
            <div className="footer1">


                <div className="foot1">
                    <div>
                        <h1>COMPANY</h1>
                        <ul>
                            {/* <li>Careers </li>
    <li>Customers Review</li> */}

                            <li onClick={() => (window.location.href = "/aboutus")}>About US</li>
                            <li onClick={() => (window.location.href = "/contactus")}>Contact US</li>
                            <li onClick={() => (window.location.href = "/privacy")}>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>


                        <h1>CONTACT US</h1>
                        <ul>
                            <li>Mobile No. : +91 9117569519 </li>
                            <li>Email Id : info@Locume.com</li>

                        </ul>
                    </div>
                </div>

                <div className="foot2">
                    <h1>CATEGORIES</h1>
                    <div className="ul-box">
                        <div>

                            <ul>
                                <li onClick={() => window.location.href = "/anesthesiology"}>Anesthesiology</li>
                                <li onClick={() => window.location.href = "/cardiology"}>Cardiology</li>
                                <li onClick={() => window.location.href = "/dermatology"}>Dermatology</li>
                                <li onClick={() => window.location.href = "/clinical-social-work"}>Clinical Social Work</li>
                                <li onClick={() => window.location.href = "/emergency-medicine"}>Emergency medicine</li>
                                <li onClick={() => window.location.href = "/endocrinology"}>Endocrinology</li>
                                <li onClick={() => window.location.href = "/gastroenterology"}>Gastroenterology</li>
                                <li onClick={() => window.location.href = "/hospital-medicine"}>Hospital medicine</li>
                                <li onClick={() => window.location.href = "/medical-oncology"}>Medical Oncology</li>
                                <li onClick={() => window.location.href = "/nephrology"}>Nephrology</li>
                                <li onClick={() => window.location.href = "/neurology"}>Neurology</li>
                                <li onClick={() => window.location.href = "/womens-health"}>Women's Health</li>
                                <li onClick={() => window.location.href = "/ophthalmology"}>Ophthalmology</li>
                            </ul>
                        </div>

                        <div >
                            <ul>
                                <li onClick={() => window.location.href = "/otolaryngology-ent"}>Otolaryngology/ENT</li>
                                <li onClick={() => window.location.href = "/primary-care"}>Primary care</li>
                                <li onClick={() => window.location.href = "/physiatry"}>Physiatry</li>
                                <li onClick={() => window.location.href = "/behavioral-health"}>Behavioral Health</li>
                                <li onClick={() => window.location.href = "/psychology"}>Psychology</li>
                                <li onClick={() => window.location.href = "/radiology"}>Radiology</li>
                                <li onClick={() => window.location.href = "/radiation-oncology"}>Radiation Oncology</li>
                                <li onClick={() => window.location.href = "/rheumatology"}>Rheumatology</li>
                                <li onClick={() => window.location.href = "/surgery"}>Surgery</li>
                                <li onClick={() => window.location.href = "/urology"}>Urology</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* <div className="" style={{ width: "300px" }}>
                    <h1>ABOUT</h1>
                    <ul>
                        <li onClick={() => (window.location.href = "/aboutus")}>About US</li>
                        <li onClick={() => (window.location.href = "/contactus")}>Contact US</li>
                    </ul>
                </div> */}
                <div className="foot4" >
                    <h1>LOCATION (INDIA)</h1>
                    <ul>
                        <li>Mumbai</li>
                        <li>Pune</li>
                        <li>Thane</li>
                        <li>Delhi</li>
                        <li>Bangalore</li>
                        <li>Nagpur</li>
                    </ul>

                </div>
            </div>
            <div className="footer2">
                <div className="foot1">

                    {/* <Locume /> */}
                    <img src={logo} alt="logo" onClick={() => window.location.href = '/'} />


                    <p>Terms & Conditions  </p>
                </div>

                <div className="foot2">

                    {/* <ul> 
            <li  onClick={() => window.location.href = '/aboutus'}>About Us</li>
            <li>Blogs</li>
            <li>Help</li>
        </ul> */}

                    {/* <p>Copyright © 2024, SOV Technolgies. All rights reserved.</p> */}

                </div>

                <div className="foot3">
                    <h1>Connect</h1>

                    <div className="svg-box">
                        <svg width="203" height="28" viewBox="0 0 203 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_664_1322" maskUnits="userSpaceOnUse" x="0" y="2" width="24" height="24">
                                <path d="M24 2H0V26H24V2Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_664_1322)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 26C18.6274 26 24 20.6274 24 14C24 7.37258 18.6274 2 12 2C5.37258 2 0 7.37258 0 14C0 20.6274 5.37258 26 12 26Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6667 20.9997H16.6531V15.867C16.6531 14.4597 16.1184 13.6733 15.0046 13.6733C13.7928 13.6733 13.1598 14.4917 13.1598 15.867V20.9997H10.2556V11.2219H13.1598V12.539C13.1598 12.539 14.033 10.9232 16.1079 10.9232C18.1819 10.9232 19.6667 12.1897 19.6667 14.809V20.9997ZM6.79084 9.94158C5.80161 9.94158 5 9.13368 5 8.1373C5 7.14091 5.80161 6.33301 6.79084 6.33301C7.78008 6.33301 8.58121 7.14091 8.58121 8.1373C8.58121 9.13368 7.78008 9.94158 6.79084 9.94158ZM5.29123 20.9997H8.31957V11.2219H5.29123V20.9997Z" fill="#28328C" />
                            </g>
                            <mask id="mask1_664_1322" maskUnits="userSpaceOnUse" x="88" y="2" width="24" height="24">
                                <path d="M112 2H88V26H112V2Z" fill="white" />
                            </mask>
                            <g mask="url(#mask1_664_1322)">
                                <path d="M98.02 25.88C92.32 24.86 88 19.94 88 14C88 7.4 93.4 2 100 2C106.6 2 112 7.4 112 14C112 19.94 107.68 24.86 101.98 25.88L101.32 25.34H98.68L98.02 25.88Z" fill="white" />
                                <path d="M104.68 17.3597L105.22 13.9997H102.04V11.6597C102.04 10.6997 102.4 9.97969 103.84 9.97969H105.4V6.91969C104.56 6.79969 103.6 6.67969 102.76 6.67969C100 6.67969 98.08 8.35969 98.08 11.3597V13.9997H95.0801V17.3597H98.08V25.8197C98.74 25.9397 99.4 25.9997 100.06 25.9997C100.72 25.9997 101.38 25.9397 102.04 25.8197V17.3597H104.68Z" fill="#28328C" />
                            </g>
                            <mask id="mask2_664_1322" maskUnits="userSpaceOnUse" x="132" y="2" width="24" height="24">
                                <path d="M155.472 2H132V26H155.472V2Z" fill="white" />
                            </mask>
                            <g mask="url(#mask2_664_1322)">
                                <path d="M145.969 12.1571L154.707 2H152.636L145.049 10.8193L138.989 2H132L141.164 15.3364L132 25.9877H134.071L142.083 16.6742L148.483 25.9877H155.472L145.969 12.1571ZM143.133 15.4538L142.204 14.1258L134.817 3.55881H137.997L143.959 12.0867L144.888 13.4147L152.637 24.4998H149.457L143.133 15.4538Z" fill="white" />
                            </g>
                            <path d="M56.0059 2.28223C51.071 2.28223 49.6277 2.28732 49.3472 2.31059C48.3344 2.39477 47.7043 2.55423 47.0177 2.89604C46.4886 3.15877 46.0713 3.46332 45.6595 3.89022C44.9095 4.66877 44.455 5.62659 44.2904 6.76513C44.2104 7.31786 44.1872 7.43059 44.1824 10.2539C44.1806 11.195 44.1824 12.4335 44.1824 14.0947C44.1824 19.0256 44.1879 20.4675 44.2115 20.7475C44.2934 21.7329 44.4479 22.3529 44.7752 23.0311C45.4006 24.3293 46.5952 25.3038 48.0024 25.6675C48.4897 25.7929 49.0279 25.862 49.7188 25.8947C50.0115 25.9075 52.9952 25.9165 55.9806 25.9165C58.966 25.9165 61.9515 25.9129 62.2369 25.8984C63.0369 25.8607 63.5015 25.7984 64.0151 25.6656C65.4315 25.3002 66.6042 24.3402 67.2424 23.0238C67.5633 22.362 67.726 21.7184 67.7997 20.7844C67.8157 20.5807 67.8224 17.334 67.8224 14.0916C67.8224 10.8488 67.8151 7.60804 67.7991 7.40441C67.7246 6.45532 67.5618 5.81713 67.2306 5.14259C66.9588 4.59041 66.6569 4.17804 66.2188 3.75641C65.4368 3.0095 64.4804 2.55495 63.3408 2.39059C62.7886 2.31077 62.6786 2.28714 59.8531 2.28223H56.0059Z" fill="url(#paint0_radial_664_1322)" />
                            <path d="M56.0059 2.28223C51.071 2.28223 49.6277 2.28732 49.3472 2.31059C48.3344 2.39477 47.7043 2.55423 47.0177 2.89604C46.4886 3.15877 46.0713 3.46332 45.6595 3.89022C44.9095 4.66877 44.455 5.62659 44.2904 6.76513C44.2104 7.31786 44.1872 7.43059 44.1824 10.2539C44.1806 11.195 44.1824 12.4335 44.1824 14.0947C44.1824 19.0256 44.1879 20.4675 44.2115 20.7475C44.2934 21.7329 44.4479 22.3529 44.7752 23.0311C45.4006 24.3293 46.5952 25.3038 48.0024 25.6675C48.4897 25.7929 49.0279 25.862 49.7188 25.8947C50.0115 25.9075 52.9952 25.9165 55.9806 25.9165C58.966 25.9165 61.9515 25.9129 62.2369 25.8984C63.0369 25.8607 63.5015 25.7984 64.0151 25.6656C65.4315 25.3002 66.6042 24.3402 67.2424 23.0238C67.5633 22.362 67.726 21.7184 67.7997 20.7844C67.8157 20.5807 67.8224 17.334 67.8224 14.0916C67.8224 10.8488 67.8151 7.60804 67.7991 7.40441C67.7246 6.45532 67.5618 5.81713 67.2306 5.14259C66.9588 4.59041 66.6569 4.17804 66.2188 3.75641C65.4368 3.0095 64.4804 2.55495 63.3408 2.39059C62.7886 2.31077 62.6786 2.28714 59.8531 2.28223H56.0059Z" fill="white" />
                            <path d="M56.0014 5.37305C53.6312 5.37305 53.3338 5.38341 52.4029 5.42578C51.4738 5.46832 50.8396 5.61541 50.2847 5.83123C49.7107 6.05414 49.2238 6.35232 48.7387 6.83759C48.2532 7.32269 47.9551 7.80959 47.7314 8.38341C47.5151 8.9385 47.3678 9.57287 47.326 10.5016C47.2843 11.4325 47.2734 11.7301 47.2734 14.1003C47.2734 16.4705 47.284 16.7671 47.3262 17.698C47.3689 18.627 47.516 19.2612 47.7316 19.8161C47.9547 20.3901 48.2529 20.877 48.7382 21.3621C49.2231 21.8476 49.71 22.1465 50.2836 22.3694C50.8389 22.5852 51.4732 22.7323 52.4021 22.7749C53.3331 22.8172 53.6303 22.8276 56.0003 22.8276C58.3707 22.8276 58.6672 22.8172 59.5981 22.7749C60.5272 22.7323 61.1621 22.5852 61.7174 22.3694C62.2912 22.1465 62.7774 21.8476 63.2623 21.3621C63.7478 20.877 64.0459 20.3901 64.2696 19.8163C64.4841 19.2612 64.6314 18.6269 64.675 17.6981C64.7168 16.7672 64.7278 16.4705 64.7278 14.1003C64.7278 11.7301 64.7168 11.4327 64.675 10.5018C64.6314 9.57269 64.4841 8.9385 64.2696 8.38359C64.0459 7.80959 63.7478 7.32269 63.2623 6.83759C62.7769 6.35214 62.2914 6.05396 61.7169 5.83123C61.1605 5.61541 60.5259 5.46832 59.5969 5.42578C58.666 5.38341 58.3696 5.37305 55.9987 5.37305H56.0014ZM55.2185 6.94578C55.4509 6.94541 55.7101 6.94578 56.0014 6.94578C58.3316 6.94578 58.6078 6.95414 59.528 6.99596C60.3789 7.03487 60.8407 7.17705 61.1483 7.2965C61.5556 7.45469 61.8459 7.64378 62.1512 7.94923C62.4567 8.25469 62.6458 8.54559 62.8043 8.95287C62.9238 9.26014 63.0661 9.72196 63.1049 10.5729C63.1467 11.4929 63.1558 11.7692 63.1558 14.0983C63.1558 16.4274 63.1467 16.7038 63.1049 17.6238C63.0659 18.4747 62.9238 18.9365 62.8043 19.2438C62.6461 19.6511 62.4567 19.9411 62.1512 20.2463C61.8458 20.5518 61.5558 20.7409 61.1483 20.899C60.841 21.019 60.3789 21.1609 59.528 21.1998C58.608 21.2416 58.3316 21.2507 56.0014 21.2507C53.6711 21.2507 53.3949 21.2416 52.4749 21.1998C51.624 21.1605 51.1621 21.0183 50.8543 20.8989C50.4471 20.7407 50.1562 20.5516 49.8507 20.2461C49.5452 19.9407 49.3562 19.6505 49.1976 19.2431C49.0782 18.9358 48.9358 18.474 48.8971 17.623C48.8552 16.703 48.8469 16.4267 48.8469 14.0961C48.8469 11.7656 48.8552 11.4907 48.8971 10.5707C48.936 9.71978 49.0782 9.25796 49.1976 8.95032C49.3558 8.54305 49.5452 8.25214 49.8507 7.94669C50.1562 7.64123 50.4471 7.45214 50.8543 7.29359C51.162 7.17359 51.624 7.03178 52.4749 6.99269C53.28 6.95632 53.592 6.94541 55.2185 6.94359V6.94578ZM60.6599 8.39487C60.0818 8.39487 59.6127 8.86341 59.6127 9.44178C59.6127 10.02 60.0818 10.489 60.6599 10.489C61.2381 10.489 61.7072 10.02 61.7072 9.44178C61.7072 8.86359 61.2381 8.39487 60.6599 8.39487ZM56.0014 9.6185C53.5263 9.6185 51.5196 11.6252 51.5196 14.1003C51.5196 16.5754 53.5263 18.5812 56.0014 18.5812C58.4765 18.5812 60.4825 16.5754 60.4825 14.1003C60.4825 11.6252 58.4765 9.6185 56.0014 9.6185ZM56.0014 11.1912C57.608 11.1912 58.9105 12.4936 58.9105 14.1003C58.9105 15.7069 57.608 17.0094 56.0014 17.0094C54.3947 17.0094 53.0923 15.7069 53.0923 14.1003C53.0923 12.4936 54.3947 11.1912 56.0014 11.1912Z" fill="#28328C" />
                            <mask id="mask3_664_1322" maskUnits="userSpaceOnUse" x="178" y="7" width="25" height="18">
                                <path d="M202.473 7.6001H178.473V24.3274H202.473V7.6001Z" fill="white" />
                            </mask>
                            <g mask="url(#mask3_664_1322)">
                                <path d="M201.726 10.1378C201.452 9.1153 200.648 8.31178 199.626 8.03808C197.775 7.5415 190.347 7.5415 190.347 7.5415C190.347 7.5415 182.92 7.5415 181.069 8.03808C180.046 8.31178 179.243 9.1153 178.969 10.1378C178.473 11.9892 178.473 15.8543 178.473 15.8543C178.473 15.8543 178.473 19.7194 178.969 21.5708C179.243 22.5933 180.046 23.3968 181.069 23.6704C182.92 24.167 190.347 24.167 190.347 24.167C190.347 24.167 197.775 24.167 199.626 23.6704C200.648 23.3968 201.452 22.5933 201.726 21.5708C202.222 19.7194 202.222 15.8543 202.222 15.8543C202.222 15.8543 202.22 11.9892 201.726 10.1378Z" fill="white" />
                                <path d="M187.971 19.4166L194.141 15.8546L187.971 12.2925V19.4166Z" fill="#28328C" />
                            </g>
                            <defs>
                                <radialGradient id="paint0_radial_664_1322" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.4612 27.7369) rotate(-90) scale(23.4234 21.7915)">
                                    <stop stop-color="#FFDD55" />
                                    <stop offset="0.1" stop-color="#FFDD55" />
                                    <stop offset="0.5" stop-color="#FF543E" />
                                    <stop offset="1" stop-color="#C837AB" />
                                </radialGradient>
                            </defs>
                        </svg>

                    </div>

                    <p>Copyright © 2024, SOV Technolgies. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}