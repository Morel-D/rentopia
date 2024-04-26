import { OutLinePrimaryButton} from "../../widget/button";
import logo2 from "../../../assets/icon/logo.png"

import Translate from "../../../assets/icon/Translate.png";
import UserImg from "../../../assets/icon/user.png";
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { colors } from "../../tools/colors";


const Header = ({setLanguage, translation, language}) => {

	const endpoint = window.location.pathname;
	const storedData = localStorage.getItem("userData");
	const userData = JSON.parse(storedData);

	  const handleFrench = () => {
		localStorage.setItem('lang', 'fr');
		setLanguage('fr');
	  };
	
	  const handleEnglish = () => {
		localStorage.setItem('lang', 'en');
		setLanguage('en');
	  };

	const handleLogout = () =>
	{
		localStorage.removeItem("userData");
	}



    return ( 
        <section class="ftco-section py-5" style={{backgroundColor: endpoint == "/services" ? `${colors.primaryColor}` : null }}>
			<div class="container">
				<nav class="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
					<div class="container-fluid">

						<a class="navbar-brand mx-2" href="/" style={{ "color": "#2B6777" }}>
							<div className="row">
								<div className="col text-end"> <img src={logo2} className="img-fluid logo-img" /> </div>
							</div>
						</a>
					
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>

						<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
								{/* <li>This is {userData.uID}</li> */}
								<li className={endpoint == "/properties" ? "nav-item links" : "nav-item"}><a href="/properties" className={endpoint == "/properties" ? "nav-link text-secondary text-center" : "nav-link text-dark text-center"}>{translation.title1}</a></li>
								<li className={endpoint == "/activity" || endpoint == "/add"  ? "nav-item links" : "nav-item"}><a href="/activity" className={endpoint == "/activity"  || endpoint == "/add"  ? "nav-link text-secondary text-center" : "nav-link text-dark text-center"}>{translation.title2}</a></li>
								<li className={endpoint == "/services" ? "nav-item links" : "nav-item"}><a href="/services" className={endpoint == "/services" ? "nav-link text-secondary text-center" : "nav-link text-dark text-center"}>{translation.title3}</a></li>
								<li className={endpoint == "/pricing" ? "nav-item links" : "nav-item"}><a href="/pricing" className={endpoint == "/pricing"? "nav-link text-secondary text-center" : "nav-link text-dark text-center"}>{translation.title4}</a></li>
								<li className={endpoint == "/structure" ? "nav-item links" : "nav-item"}><a href="/structure" className={endpoint == "/structure" ? "nav-link text-secondary text-center" : "nav-link text-dark text-center"}>{translation.title5}</a></li>


								
							</ul>
							<hr />
							<div className="row">
								<div className="col col-3">
									<div class="btn-group btn-drop mt-2">
										<a type="button" class="btn-drop dropdown-toggle text-highline" data-bs-toggle="dropdown">
											<img src={Translate} className="img-fluid logo-trans" /> <span className="">{language === "fr" ? "FR" : "EN"}</span>
										</a>

										<ul class="dropdown-menu mt-3">
											<li><a class="dropdown-item" href="#" onClick={handleFrench}>{translation.headerFr}</a></li>
											<li><a class="dropdown-item" href="#" onClick={handleEnglish}>{translation.headerEn}</a></li>
										</ul>
									</div>
								</div>

								<div className="col">
									<form class="" role="search">
										<div className="row mx-3">

											{!userData  ? (									  
											<a href="/signup"><OutLinePrimaryButton className="btn" >{translation.SignInTitle}</OutLinePrimaryButton>
										  </a>) : (<div class="btn-group btn-drop" >
											<div style={{ width: "50px", height: "50px", overflow: "hidden", borderRadius: "50%" }}>
												<a type="button" class="btn-drop  text-highline" data-bs-toggle="dropdown">
													<img src={userData.users.profile === null ? UserImg : userData.users.profile} className="img-fluid logo-trans" style={{height: "auto", width: "50px"}} />
												</a>
											

											<ul class="dropdown-menu mt-3">
												<li className="text-start"><a class="dropdown-item" href="#">{userData.users.userName}</a></li>
												<hr />
												{userData.users.accountRole === "owner" ? (<li><a class="dropdown-item" href="#">My Properties</a></li>) : <li><a class="dropdown-item" href="#">My Reservations</a></li>}
												<li><a class="dropdown-item" href="#">Setting</a></li>
												<hr />
												<li><a class="dropdown-item" href="/signup" onClick={handleLogout}>LogOut</a></li>
											</ul>
											</div>
										</div>
										
										)}
											
	
											
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
  		</section>
     );
}
 
export default Header;