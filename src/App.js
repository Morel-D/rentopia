import Footer from "./components/views/modules/footer";
import Header from "./components/views/modules/header";
import About from "./components/views/pages/about";
import Home from "./components/views/pages/home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./components/views/pages/signup";
import { Fragment, useState } from "react";
import Properties from "./components/views/pages/Properties";
import Activity from "./components/views/pages/activity";
import Rent from "./components/views/pages/rent";
import NotFound from "./components/widget/notFound";
import Services from "./components/views/pages/services";
import Pricing from "./components/views/pages/pricing";
import Structure from "./components/views/pages/structure";
import Auth from "./components/views/pages/auth";
import Choose from "./components/views/pages/choose";
import en from '../src/components/tools/lang/en.json';
import fr from '../src/components/tools/lang/fr.json';

function App() {

  // Lnaguage tranalation.................................
	const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
	const translation = language === 'en' ? en : fr;


  // auth route ..........................
  const [page, setPage] = useState(1);
  const [subPage, setSubPPage] = useState(1);


  const routetoSignIn = () =>
  {
      // e.preventDefault();
      setPage(2);
      setSubPPage(1);
  }
  

  const routeToLogin = (e) =>
  {
      e.preventDefault();
      setPage(2);
      setSubPPage(2);
  }



  const endpoint = window.location.pathname;
  console.log("The endpoint is "+ endpoint);

  return (
    <BrowserRouter>
    {endpoint === "/signup" || endpoint === "/choose" || endpoint === "/" || endpoint === "/about" || endpoint === "/properties" || endpoint === "/activity" || endpoint === "/add" || endpoint === "/services" || endpoint === "/pricing" || endpoint === "/structure" ? (
      <Fragment>
      <div className="App">
          <div className={endpoint === "/signup" || endpoint === "/choose" ? "d-none" : "header"}> <Header setLanguage= {setLanguage} translation={translation} language={language} /> </div>

            <div className="body">
                <Routes>
                  <Route path="/" element={<Home translation={translation} />}/>
                  <Route path="/about" element={<About />} />
                  <Route path= "/properties" element={<Properties />} />
                  <Route path ="/activity" element={<Activity />} />
                  <Route path="/add" element={<Rent />} />
                  <Route path="/services" element={<Services translation={translation} />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/structure" element={<Structure />} />
                </Routes>
            </div>

            <div className={endpoint === "/signup" || endpoint === "/choose" ? "d-none" : "footer"}> <Footer /> </div>

            <Routes>
              <Route path="/signup" element={<Auth page={page} subPage={subPage} routeToLogin={routeToLogin} routetoSignIn={routetoSignIn} />}/>
              {/* <Route path="/choose" element={<Choose />}/> */}
            </Routes>
      </div>

      </Fragment>
    ) : (
      <div>
        <NotFound />
      </div>
    )}

    </BrowserRouter>
  );
}

export default App;
