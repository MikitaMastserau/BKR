import { Header } from "../Header";
import { Main } from "../Main";
import { About } from "../About";
import { Feat } from "../Feat";
import { Banner } from "../Banner";
import { Prices } from "../Prices";
import { Process } from "../Process";
import { Recipes } from "../Recipes";
import { Workers } from "../Workers";
import { Reviews } from "../Reviews";

export const HomeLayout = () => {
   return (
      <>
         <Header />
         <Main />
         <About />
         <Feat />
         <Banner />
         <Prices />
         <Process />
         <Recipes />
         <Workers />
         <Reviews />
      </>
   )
};