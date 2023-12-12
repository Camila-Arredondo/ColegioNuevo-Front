import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admision } from "./Pages/Admision/admision";
import { Alumno } from "./Pages/Alumnos/alumno";
import { Docente } from "./Pages/Docente/docente";
import { Inspectoria } from "./Pages/Inspectoria/inspectoria";
import { Login } from "./Pages/Login/login";
import { Sostenedor } from "./Pages/Sostenedor/sostenedor";
import { Recaudacion } from "./Pages/Recaudacion/recaudacion";
import { LoginDocente } from "./Pages/Login/loginDocente";
import { LoginSelectAdmin } from "./Pages/Login/loginSelectAdmin";
import { LoginAlumno } from "./Pages/Login/loginAlumno";
import { LoginAdmision } from "./Pages/Login/loginAdmision";
import { LoginRecaudacion } from "./Pages/Login/loginRecaudacion";
import { LoginInspectoria } from "./Pages/Login/loginInspectoria";
import { LoginSostenedor } from "./Pages/Login/loginSostenedor";

export function Rutas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/logindocente" element={<LoginDocente />}></Route>          
          <Route path="/loginselectadmin" element={<LoginSelectAdmin />}></Route>
          <Route path="/loginalumno" element={<LoginAlumno />}></Route>
          <Route path="/loginadmision" element={<LoginAdmision />}></Route>
          <Route path="/loginrecaudacion" element={<LoginRecaudacion />}></Route>
          <Route path="/logininspectoria" element={<LoginInspectoria />}></Route>
          <Route path="/loginsostenedor" element={<LoginSostenedor />}></Route>


          <Route path="/alumno" element={<Alumno />}></Route>
          <Route path="/docente" element={<Docente />}></Route>
          <Route path="/admision" element={<Admision/>}></Route>
          <Route path="/inspectoria" element={<Inspectoria />}></Route>
          <Route path="/sostenedor" element={<Sostenedor />}></Route>
          <Route path="/recaudacion" element={<Recaudacion />}></Route>

          

        </Routes>
      </BrowserRouter>
    )};