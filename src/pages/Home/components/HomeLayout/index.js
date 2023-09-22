import { Header } from "../Header";
import { Main } from "../Main";
import { About } from "../About";
import { Feat } from "../Feat";
import { Banner } from "../Banner";

export const HomeLayout = () => {
   return (
      <>
         <Header />
         <Main />
         <About />
         <Feat />
         <Banner />
      </>
   )
};