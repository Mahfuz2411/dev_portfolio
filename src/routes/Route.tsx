import App from "@/App";
import { createHashRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Achievements from "@/pages/Achievements";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import CpJourney from "@/pages/CpJourney";
import Education from "@/pages/Education";



const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "achievements",
                element: <Achievements />
            },
            {
                path: "gallery",
                element: <Gallery />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "cp-journey",
                element: <CpJourney />
            },
            {
                path: "education",
                element: <Education />
            }

        ]
    }
]);


export default router;