import { useEffect, useState } from "react";
import { MainWrapper } from "./corpo-docente-page.styles";
import { CorpoDocente } from "@/entities/corpo-docente";

export const CorpoDocentePage = () => {
  const [listaProfessores, setListaProfessores] = useState<CorpoDocente[]>([]);

  const URL = "https://infoeste-back-end-fm89.vercel.app/";

  useEffect(() => {
    fetch(URL, {
      method: 'GET'
    }).then((response) => response.json()).then((value:{corpoDocente:CorpoDocente[]}))
  }, []);

  return <MainWrapper></MainWrapper>;
};
