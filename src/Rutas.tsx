import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Admision } from "./Pages/Admision/admision";
import { Alumno } from "./Pages/Alumnos/alumno.page";
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
import { FormularioNuevoAlumno } from "./Pages/Admision/nuevoAlumnoFormulario";
import { MainComponents } from "./Components/main.components";
import { FormularioNuevoDocente } from "./Pages/Admision/nuevoDocenteFormulario";
import { Calendario } from "./Components/calendario.components";
import FichaDocente from "./Pages/Admision/fichaDocente";
import FichaAlumno from "./Pages/Admision/fichaAlumno";
import { AllDocentesAdmision } from "./Pages/Admision/verDocentesAdmision";
import { AllAlumnosAdmision } from "./Pages/Admision/verAlumnosAdmision";
import { AllDocentesSostenedor } from "./Pages/Sostenedor/verDocentesSostenedor";
import { AllAlumnosSostenedor } from "./Pages/Sostenedor/verAlumnosSostenedor";
import { Cursos } from "./Pages/Sostenedor/cursos";
import { Asignaturas } from "./Pages/Sostenedor/asignaturas";
import { Mensualidades } from "./Pages/Recaudacion/mensualidades";
import MensualidadesAlumno from "./Pages/Recaudacion/mensualidadesAlumno";
import { Matriculas } from "./Pages/Recaudacion/matriculas";
import MatriculaAlumno from "./Pages/Recaudacion/matriculaAlumno";
import { AllRetiroAlumno } from "./Pages/Inspectoria/retiroAlumno";
import { DatosRetiro } from "./Pages/Inspectoria/datosRetiro";
import { Urgencias } from "./Pages/Inspectoria/urgencias";
import { UrgenciasAlumno } from "./Pages/Inspectoria/urgenciasAlumno";
import { Atraso } from "./Pages/Inspectoria/atraso";
import { AtrasoAlumno } from "./Pages/Inspectoria/atrasoAlumno";

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
          <Route path="/admision/alumno/formulario/ingreso" element={<FormularioNuevoAlumno />}></Route>
          <Route path="/admision/docente/formulario/ingreso" element={<FormularioNuevoDocente />}></Route>
          <Route path="/admision/calendario" element={<Calendario />}></Route>
          <Route path="/admision/docentes" element={<AllDocentesAdmision />}></Route>
          <Route path="/admision/ficha/docente" element={<FichaDocente />}></Route>
          <Route path="/admision/alumnos" element={<AllAlumnosAdmision />}></Route>
          <Route path="/admision/ficha/alumno" element={<FichaAlumno />}></Route>


          <Route path="/inspectoria" element={<Inspectoria />}></Route>
          <Route path="/inspectoria/calendario" element={<Calendario />}></Route>
          <Route path="/inspectoria/retiroalumno" element={<AllRetiroAlumno />}></Route>
          <Route path="/inspectoria/retiroalumno/alumno" element={<DatosRetiro />}></Route>
          <Route path="/inspectoria/urgencias" element={<Urgencias />}></Route>
          <Route path="/inspectoria/urgencias/alumno" element={<UrgenciasAlumno />}></Route>
          <Route path="/inspectoria/atraso" element={<Atraso />}></Route>
          <Route path="/inspectoria/atraso/alumno" element={<AtrasoAlumno />}></Route>

          <Route path="/sostenedor" element={<Sostenedor />}></Route>
          <Route path="/sostenedor/docentes" element={<AllDocentesSostenedor />}></Route>
          <Route path="/sostenedor/ficha/docente" element={<FichaDocente />}></Route>
          <Route path="/sostenedor/alumnos" element={<AllAlumnosSostenedor />}></Route>
          <Route path="/sostenedor/ficha/alumno" element={<FichaAlumno />}></Route>
          <Route path="/sostenedor/calendario" element={<Calendario />}></Route>
          <Route path="/sostenedor/cursos" element={<Cursos />}></Route>
          <Route path="/sostenedor/asignaturas" element={<Asignaturas />}></Route>

          <Route path="/recaudacion" element={<Recaudacion />}></Route>
          <Route path="/recaudacion/calendario" element={<Calendario />}></Route>
          <Route path="/recaudacion/mensualidad/buscar" element={<Mensualidades />}></Route>
          <Route path="/recaudacion/mensualidad/alumno" element={<MensualidadesAlumno />}></Route>
          <Route path="/recaudacion/matricula/buscar" element={<Matriculas />}></Route>
          <Route path="/recaudacion/matricula/alumno" element={<MatriculaAlumno />}></Route>
          




          

        </Routes>
      </BrowserRouter>
    )};