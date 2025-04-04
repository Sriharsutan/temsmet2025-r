import Nav from "./components/Navbar/Nav";
import Carousel from "./components/Carousel/Carousel";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ListView from "./components/ListView";
import { conferenceTracks, registrationFees, deligates, registrationNotes } from './assets/dataItems.js';
import Footer from "./components/Footer.jsx";
import OrgCommittee from "./components/OrgCommitte.jsx";
import Venue from "./components/Venue.jsx";
import SubmissionGuidelines from "./components/SubmissionGuidelines.jsx";
import TableView from "./components/TableView.jsx";
import PreNav from "./components/PreNav.jsx";
import KeynoteSpeakers from "./components/KeynoteSpeakers.jsx";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { useState } from "react";
import TouristDestinations from "./components/TouristDestinations.jsx";
import SectionList from "./components/SectionLIst.jsx";
import ExploreDelhi from "./components/ExploreDelhi.jsx";
import Sponsorship from "./components/Sponsorship";
import Registration from "./pages/Registration.jsx";

/**
 * Main application component that sets up routing for different pages using HashRouter.
 *
 * @component
 * @returns {JSX.Element} The main App component rendering routed pages.
 */
function App() {
  const [showContact, setShowContact] = useState(false);
   const [active, setActive] = useState(0);
  /**
   * Router object defining routes and their respective components using HashRouter.
   */
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <>
          {/* <ScrollToTop elementId="home" /> */}
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          <Carousel />
          <Home />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: "/call-for-papers",
      element: (
        <>
          <ScrollToTop elementId="Call For Papers" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <div id="cfp-link">
            <ListView
              title="Call For Papers"
              data={conferenceTracks}
            // classes="flex flex-col flex-wrap w-full justify-around md:flex-row md:pl-10"
            />
          </div>

          <Footer />
        </>
      ),
    },
    {
      path: "/org-committee",
      element: (
        <>
          <ScrollToTop elementId="org-committe" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <div id="committee-link">
            <OrgCommittee />
          </div>

          <Footer />
        </>
      ),
    },
    {
      path: "/keynote-speakers",
      element: (
        <>
          <ScrollToTop elementId="keynote-speakers" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          <Carousel />
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <div id="ks-link">
            <KeynoteSpeakers />
          </div>

          <Footer />
        </>
      ),
    },
    {
      path: "/venue&directions",
      element: (
        <>
          <ScrollToTop elementId="venue-and-dates" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          <Carousel />
          <div id="venue-link">
            <Venue />
          </div>

          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: "/submission-guidelines",
      element: (
        <>
          <ScrollToTop elementId="submission-guidelines" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          {/* <Nav onNavClick={handleScrollToSection} /> */}
          <Carousel />
          <div id="sg-list">
            <SubmissionGuidelines />
          </div>
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: "/sponsorhip-invitation",
      element: (
        <>
          <ScrollToTop elementId="sponsorship-invitation" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          {/* <Nav onNavClick={handleScrollToSection} /> */}
          <Carousel />
          <div id="sg-list">
            <Sponsorship/>
          </div>
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: "/explore-delhi",
      element: (
        <>
          <ScrollToTop elementId="explore-delhi" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          <Carousel />
          <div id="explore-delhi">
            <ExploreDelhi />
          </div>
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: "/tourist-destinations",
      element: (
        <>
          <ScrollToTop elementId="tourist-destinations" />
          <PreNav />
          <Nav setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}/>
          <Carousel />
          <div id="t-dest">
            <TouristDestinations />
          </div>
          <Contact setShowContact={setShowContact} showContact={showContact} />
          <Footer />
        </>
      ),
    },
    {
      path: "/registration",
      element: (
        <>
          <Registration setShowContact={setShowContact} linkActive={active} setLinkActive = {setActive}></Registration>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
