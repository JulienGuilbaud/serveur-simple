import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FormAuth } from "./FormAuth"
import { FormCreate } from "./FormCreate"
import { First } from "./Pages/First"
import { Erreur } from "./Pages/Erreur";
import { E404 } from "./Pages/E404";
import { Protection } from "./Protection/protection";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormAuth />} errorElement={<Erreur />} />
        <Route path="create" element={<FormCreate />} errorElement={<Erreur />} />


        <Route path="resultat" element={<Protection EstConnecte={false} >
          <First />
        </Protection>} errorElement={<Erreur />}>
        </Route>

        <Route path="/*" element={<E404 />} errorElement={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
}