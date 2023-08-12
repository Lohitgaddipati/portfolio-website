import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Ball2, Footer } from './components';


const app = () => {
return (
<BrowserRouter>
<div className="relative z-0 bg-primary ">
<div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar />
<Hero />
</div>
<About />
<Experience />
<Ball2 />
<Works /> 
</div>
<div className = "relative z-0">
<Contact />
<StarsCanvas />
<Footer />
</div>
</BrowserRouter>
)
}
export default app
