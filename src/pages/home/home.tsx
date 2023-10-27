import { Cursos } from "./components/cursos/cursos";
import { Intro } from "./components/intro/intro";
import { SobreNos } from "./components/sobre-nos/sobre-nos";

export const Home = () => {
  return (
    <>
      <Intro />
      <SobreNos isAbsolute={false} />
      <Cursos />
    </>
  );
};
