import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import RegistroPaciente from "views/RegistroPaciente.jsx";
import EcoTrastoracico from "views/EcocardiogramaTrastoracico.jsx";
import ECOTRANSESOFAGICO from "views/ECOCARDIOGRAM_TRANSESOFAGICO.jsx";
import Pba_Esfuerzo from "views/PBA_Esfuerzo";
import EcocardiogramaEstresDobutamina from "views/EcocardiogramaEstresDobutamina"
import Electrocardiograma from "views/Electrocardiograma";
import EcocardiogramaEstresEjercicio from "views/EcocardiogramaEstresEjercicio";
import PruebaElectricaPerfusion from "views/PruebaElectricaPerfusion";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "REGISTO PACIENTE",
    icon: "design_app",
    component: RegistroPaciente,
    layout: "/admin",
    nombreCompleto:"REGISTO PACIENTE"
  },
  {
    path: "/EcoTrastoracico",
    name: 'ECOTT' /*ECOCARDIOGRAMA TRANSTORACICO'*/,
    icon: "design_app",
    component: EcoTrastoracico,
    layout: "/admin",
    nombreCompleto:"ECOCARDIOGRAMA TRANSTORACICO"
 
  },
  {
    path: "/ECOTRANSESOFAGICO",
    name: "ECOTE" /*ECOCARDIOGRAMA TRANSESOFAGICO"*/,
    icon: "design_app",
    component: ECOTRANSESOFAGICO,
    layout: "/admin",
    nombreCompleto:"ECOCARDIOGRAMA TRANSESOFAGICO"
 
  },
  {
    path: "/Pba_Esfuerzo",
    name: "PBA",
    icon: "design_app",
    component: Pba_Esfuerzo,
    layout: "/admin",
    nombreCompleto:"PRUEBA DE ESFUERZO"
 
  },
  {
    path: "/EcocardiogramaEstresDobutamina",
    name: "ECOED",
    icon: "design_app",
    component:  EcocardiogramaEstresDobutamina,
    layout: "/admin",
    nombreCompleto:"ECOCARDIOGRAMA ESTRÉS DOBUTAMINA "
 
  },
  {
    path: "/Electrocardiograma",
    name: "Electrocardiograma",
    icon: "design_app",
    component:  Electrocardiograma,
    layout: "/admin",
    nombreCompleto:"Electrocardiograma"
 
  },
  {
    path: "/EcocardiogramaEstresEjercicio",
    name: "ECOEE",
    icon: "design_app",
    component:  EcocardiogramaEstresEjercicio,
    layout: "/admin",
    nombreCompleto:"Ecocardiograma estrés ejercicio"
 
  },
  {
    path: "/PruebaElectricaPerfusion",
    name: "PRUEBA-EPMD",
    icon: "design_app",
    component:  PruebaElectricaPerfusion,
    layout: "/admin",
    nombreCompleto:"PRUEBA ELECTRICA PERFUSIÓN MIOCÁRDICA DIPIRIDAMOL"
 
  }

];
export default dashRoutes;
