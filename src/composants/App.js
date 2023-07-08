import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { FormAuth } from "./FormAuth"
import { FormCreate } from "./FormCreate"
import { First } from "./Pages/First"


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormAuth />} />
        <Route path="create" element={<FormCreate />}/>
        <Route path="resultat" element={<First />} />
      </Routes>
    </BrowserRouter>
  );
}