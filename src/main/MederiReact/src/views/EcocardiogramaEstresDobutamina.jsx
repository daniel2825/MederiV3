import React from "react";
import css from "CssMederi/Estilos.css";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Eventos from 'components/Declaraciones/EcocardiogramaTrastoracicoVar.jsx'
import 'assets/css/Estilos_Mederi/SelectPersonalizado.scss';
import SelectComponente from "components/SelectComponente/SelectComponente";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.jsx";

class EcocardiogramaEstresDobutamina extends React.Component {


  constructor() {

    super();

    this.state = {
      SuperficieCorporal: 0,
      Peso: '',
      Talla: '',
      SintomasPretest:'No manifiesta sintomas cardiovasculares.',
      SintomasRecuperacion:'No manifiesta sintomas cardiovasculares.',
      RitmoCar: 'SINUSAL',
      FrecuenciaCar: '',
      Comprobador : '',
      ParedAnterior: 'Normal',
      EfuncionDiastolica: 'Normal',
      VDisfuncion: 'Disfunción tipo I',
      Protesis: '',
      ValvulaAorticaAnormal: 'Normal',
      ValvulaAorticaIE: 'Insuficiencia',
      OtrosValvulaAorticaI: 'Leve',
      OtrosValvulaAorticaE: 'Leve',
      ValvulaMitralAnormal: 'Normal',
      ValvulaMitralIE: 'Insuficiencia',
      OtrosValvulaMitralI: 'Leve',
      OtrosValvulaMitralE: 'Leve',
      ValvulaTricuspideAnormal: 'Normal',
      ValvulaTricuspideIE: 'Insuficiencia',
      OtrosValvulaTricuspideI: 'Leve',
      OtrosValvulaTricuspideE: 'Leve',
      ValvulaPulmonarAnormal: 'Normal',
      ValvulaPulmonarIE: 'Insuficiencia',
      OtrosValvulaPulmonarI: 'Leve',
      OtrosValvulaPulmonarE: 'Leve',
      VentriculoIzquierdo: 'Normal',
      AuriculaIzquierda: 'Normal',
      AuriculaDerecha: 'Normal',
      SeptumInterauricular : 'Normal',
      SeptumInterventicular : 'Normal',
      Pericardio : 'Normal',
      VenaCavaInferior : 'Normal',
      A_aorta : 'Normal',
      A_pulmonar : 'Normal',
      ProtesisAortica : 'No',
      ProtesisTricuspide : 'No',
      ProtesisPulmonar : 'No',
      ProtesisMitral : 'No',
      PlastiaProtesisAortica : 'No',
      PlastiaProtesisTricuspide : 'No',
      PlastiaProtesisPulmonar : 'No',
      PlastiaProtesisMitral : 'No',
      EndocarditisProtesisAortica : 'No',
      EndocarditisProtesisTricuspide : 'No',
      EndocarditisProtesisPulmonar : 'No',
      EndocarditisProtesisMitral : 'No',
      valueVentriculoD : '',
      Especialista : '',
      Sonografista : 'No',
      Alteracion : 'Aquinesia',
      ParedAnteroSeptal : 'Normal',
      ParedInferoSeptal : 'Normal',
      ParedInferior : 'Normal',
      ParedInferoLateral : 'Normal',
      ParedAnteroLateral : 'Normal',
      Observaciones: ''

    }

     
    this.state.Observaciones = `
    
    <h5>CONCLUSIONES</h5>
    <ol>
    <li>Ecocardiograma estrés DOBUTAMINA NEGATIVO para determinar isquemia miocárdica (100% FCM).</li>
    <li>Respuesta presora normal.</li>
    <li>Respuesta cronotropica normal.</li>
    <li>No arritmias.</li>
    <li>Respuesta cronotropica normal</li>
    <li>Medicina interna - Cardiología - Ecocardiografia</li>
    </ol>
    `;


    this.SintomasPretest = this.SintomasPretest.bind(this);
    this.SintomasRecuperacion = this.SintomasRecuperacion.bind(this);        
    this.Observaciones = this.Observaciones.bind(this);
    this.Pesoevent = this.Pesoevent.bind(this);
    this.TallaEvent = this.TallaEvent.bind(this);
    this.RitmoCardiaco = this.RitmoCardiaco.bind(this);
    this.FrecuenciaCardiaca = this.FrecuenciaCardiaca.bind(this);
    this.ParedAnterior = this.ParedAnterior.bind(this);
    this.EfuncionDiastolica = this.EfuncionDiastolica.bind(this);
    this.VDisfuncion = this.VDisfuncion.bind(this);
    this.ValvulaAorticaAnormal = this.ValvulaAorticaAnormal.bind(this);
    this.ValvulaAorticaIE = this.ValvulaAorticaIE.bind(this);
    this.OtrosValvulaAorticaI = this.OtrosValvulaAorticaI.bind(this);
    this.OtrosValvulaAorticaE = this.OtrosValvulaAorticaE.bind(this);
    this.ValvulaMitralAnormal = this.ValvulaMitralAnormal.bind(this);
    this.ValvulaMitralIE = this.ValvulaMitralIE.bind(this);
    this.OtrosValvulaMitralI = this.OtrosValvulaMitralI.bind(this);
    this.OtrosValvulaMitralE = this.OtrosValvulaMitralE.bind(this);
    this.ValvulaTricuspideAnormal = this.ValvulaTricuspideAnormal.bind(this);
    this.ValvulaTricuspideIE = this.ValvulaTricuspideIE.bind(this);
    this.OtrosValvulaTricuspideI = this.OtrosValvulaTricuspideI.bind(this);
    this.OtrosValvulaTricuspideE = this.OtrosValvulaTricuspideE.bind(this);
    this.ValvulaPulmonarAnormal = this.ValvulaPulmonarAnormal.bind(this);
    this.ValvulaPulmonarIE = this.ValvulaPulmonarIE.bind(this);
    this.OtrosValvulaPulmonarI = this.OtrosValvulaPulmonarI.bind(this);
    this.OtrosValvulaPulmonarE = this.OtrosValvulaPulmonarE.bind(this);
    this.VentriculoIzquierdo = this.VentriculoIzquierdo.bind(this);
    this.AuriculaIzquierda = this.AuriculaIzquierda.bind(this);
    this.AuriculaDerecha = this.AuriculaDerecha.bind(this);
    this.SeptumInterauricular = this.SeptumInterauricular.bind(this);
    this.SeptumInterventicular = this.SeptumInterventicular.bind(this);
    this.Pericardio = this.Pericardio.bind(this);
    this.VenaCavaInferior = this.VenaCavaInferior.bind(this);
    this.A_aorta = this.A_aorta.bind(this);
    this.A_pulmonar = this.A_pulmonar.bind(this);
    this.ProtesisAortica = this.ProtesisAortica.bind(this);
    this.ProtesisTricuspide = this.ProtesisTricuspide.bind(this);
    this.ProtesisPulmonar = this.ProtesisPulmonar.bind(this);
    this.ProtesisMitral = this.ProtesisMitral.bind(this);
    this.valueVentriculoD = this.valueVentriculoD.bind(this);
    this.Sonografista = this.Sonografista.bind(this);
    this.Especialista = this.Especialista.bind(this);
    this.Alteracion = this.Alteracion.bind(this);
    this.PlastiaProtesisAortica = this.PlastiaProtesisAortica.bind(this);
    this.PlastiaProtesisTricuspide = this.PlastiaProtesisTricuspide.bind(this);
    this.PlastiaProtesisPulmonar = this.PlastiaProtesisPulmonar.bind(this);
    this.PlastiaProtesisMitral = this.PlastiaProtesisMitral.bind(this);
    this.EndocarditisProtesisAortica = this.EndocarditisProtesisAortica.bind(this);
    this.EndocarditisProtesisTricuspide = this.EndocarditisProtesisTricuspide.bind(this);
    this.EndocarditisProtesisPulmonar = this.EndocarditisProtesisPulmonar.bind(this);
    this.EndocarditisProtesisMitral = this.EndocarditisProtesisMitral.bind(this);
    this.ParedAnteroSeptal = this.ParedAnteroSeptal.bind(this);
    this.ParedInferoSeptal = this.ParedInferoSeptal.bind(this);
    this.ParedInferior = this.ParedInferior.bind(this);
    this.ParedInferoLateral = this.ParedInferoLateral.bind(this);
    this.ParedAnteroLateral = this.ParedAnteroLateral.bind(this);
    this.Comprobador = this.Comprobador.bind(this);
  }


  Observaciones(event) {
    this.setState({
      Observaciones: `

      <h5>CONCLUSIONES</h5>
      <ol>
      <li>Ecocardiograma estrés DOBUTAMINA NEGATIVO para determinar isquemia miocárdica (100% FCM).</li>
      <li>Respuesta presora normal.</li>
      <li>Respuesta cronotropica normal.</li>
      <li>No arritmias.</li>
      <li>Respuesta cronotropica normal</li>
      <li>Medicina interna - Cardiología - Ecocardiografia</li>
      </ol>`
    });
  }

  SintomasPretest(event){
    this.setState({
      SintomasPretest : event.target.value,
    });
  }

  SintomasRecuperacion(event){
    this.setState({
      SintomasRecuperacion : event.target.value,
    });
  }


  Comprobador(event){
    this.setState({
      Comprobador : event.target.value,
    });
  }

  ParedAnteroLateral(event){
    this.setState({
      ParedAnteroLateral : event.target.value,
    });
  }

  ParedInferoLateral(event){
    this.setState({
      ParedInferoLateral : event.target.value,
    });
  }

  ParedInferior(event){
    this.setState({
      ParedInferior : event.target.value,
    });
  }

  ParedInferoSeptal(event){
    this.setState({
      ParedInferoSeptal : event.target.value,
    });
  }

ParedAnteroSeptal(event){
  this.setState({
    ParedAnteroSeptal : event.target.value,
  });
}

PlastiaProtesisAortica(event){
  this.setState({
    PlastiaProtesisAortica : event.target.value,
  });
}

PlastiaProtesisTricuspide(event){
  this.setState({
    PlastiaProtesisTricuspide : event.target.value,
  });
}

PlastiaProtesisPulmonar(event){
  this.setState({
    PlastiaProtesisPulmonar : event.target.value,
  });
}


PlastiaProtesisMitral(event){
  this.setState({
    PlastiaProtesisMitral : event.target.value,
  });
}


EndocarditisProtesisAortica(event){
  this.setState({
    EndocarditisProtesisAortica : event.target.value,
  });
}


EndocarditisProtesisTricuspide(event){
  this.setState({
    EndocarditisProtesisTricuspide : event.target.value,
  });
}


EndocarditisProtesisPulmonar(event){
  this.setState({
    EndocarditisProtesisPulmonar : event.target.value,
  });
}


EndocarditisProtesisMitral(event){
  this.setState({
    EndocarditisProtesisMitral : event.target.value,
  });
}


  Alteracion(event){
    this.setState({
    Alteracion : event.target.value,
    });
  }

  Especialista(event){
    this.setState({
      Especialista : event.target.value,     
    });
  }

  Sonografista(event){
    this.setState({
      Sonografista : event.target.value,     
    }); 
  }

  validacionValoresNA(event){
  
    if(event.target.value > 30 || event.target.value < 20){
      alert("Es anormal");
     }
    
  }

  valueVentriculoD(event){ 
    this.setState({
      valueVentriculoD : Number(event.target.value),     
    });
  }
  
  ProtesisMitral(event){
    this.setState({
      ProtesisMitral : event.target.value,
    });
  }

  ProtesisTricuspide(event){
    this.setState({
      ProtesisTricuspide: event.target.value,
    });
  }
  ProtesisPulmonar(event){
    this.setState({
      ProtesisPulmonar: event.target.value,
    });
    
  }

  ProtesisAortica(event){
    this.setState({
      ProtesisAortica: event.target.value,
    });
  }

  A_pulmonar(event) {
    this.setState({
      A_pulmonar: event.target.value,

    });
  }

  A_aorta(event) {
    this.setState({
      A_aorta: event.target.value,

    });
  }

  VenaCavaInferior(event) {
    this.setState({
      VenaCavaInferior: event.target.value,

    });
  }

  Pericardio(event) {
    this.setState({
      Pericardio: event.target.value,

    });
  }

  SeptumInterventicular(event) {
    this.setState({
      SeptumInterventicular: event.target.value,

    });
  }


  SeptumInterauricular(event) {
    this.setState({
      SeptumInterauricular: event.target.value,

    });
  }

  AuriculaDerecha(event) {
    this.setState({
      AuriculaDerecha: event.target.value,

    });
  }


  AuriculaIzquierda(event) {
    this.setState({
      AuriculaIzquierda: event.target.value,

    });
  }

  Pesoevent(event) {
    this.setState({
      Peso: Number(event.target.value),

    });
  }

  TallaEvent(event) {
    this.setState({
      Talla: Number(event.target.value),
    });
  }


  RitmoCardiaco(event) {
    this.setState({
      RitmoCar: event.target.value,
    });
  }

  FrecuenciaCardiaca(event) {
    this.setState({
      FrecuenciaCar: event.target.value,
    });
  }


  ParedAnterior(event) {
    this.setState({
      ParedAnterior: event.target.value,
    });
  }


  EfuncionDiastolica(event) {
    this.setState({
      EfuncionDiastolica: event.target.value,
    });
  }

  VDisfuncion(event) {
    this.setState({
      VDisfuncion: event.target.value,
    });
  }

  ValvulaAorticaAnormal(event) {
    this.setState({
      ValvulaAorticaAnormal: event.target.value,
    })
  }

  ValvulaAorticaIE(event) {
    this.setState({
      ValvulaAorticaIE: event.target.value,
      OtrosValvulaAorticaI: 'Leve',
      OtrosValvulaAorticaE: 'Leve'

    })
  }

  OtrosValvulaAorticaI(event) {
    this.setState({
      OtrosValvulaAorticaI: event.target.value,
    });
  }

  OtrosValvulaAorticaE(event) {
    this.setState({
      OtrosValvulaAorticaE: event.target.value,
    });
  }


  ValvulaMitralAnormal(event) {
    this.setState({
      ValvulaMitralAnormal: event.target.value,
    })
  }

  ValvulaMitralIE(event) {
    this.setState({
      ValvulaMitralIE: event.target.value,
      OtrosValvulaMitralI: 'Leve',
      OtrosValvulaMitralE: 'Leve'
    })
  }

  OtrosValvulaMitralI(event) {
    this.setState({
      OtrosValvulaMitralI: event.target.value,
    });
  }

  OtrosValvulaMitralE(event) {
    this.setState({
      OtrosValvulaMitralE: event.target.value,
    });
  }


  ValvulaPulmonarAnormal(event) {
    this.setState({
      ValvulaPulmonarAnormal: event.target.value,
    })
  }

  ValvulaPulmonarIE(event) {
    this.setState({
      ValvulaPulmonarIE: event.target.value,
      OtrosValvulaPulmonarI: 'Leve',
      OtrosValvulaPulmonarE: 'Leve'
    })
  }

  OtrosValvulaPulmonarI(event) {
    this.setState({
      OtrosValvulaPulmonarI: event.target.value,
    });
  }

  OtrosValvulaPulmonarE(event) {
    this.setState({
      OtrosValvulaPulmonarE: event.target.value,
    });
  }



  ValvulaTricuspideAnormal(event) {
    this.setState({
      ValvulaTricuspideAnormal: event.target.value,
    })
  }

  ValvulaTricuspideIE(event) {
    this.setState({
      ValvulaTricuspideIE: event.target.value,
      OtrosValvulaTricuspideI: 'Leve',
      OtrosValvulaTricuspideE: 'Leve'
    })
  }

  OtrosValvulaTricuspideI(event) {
    this.setState({
      OtrosValvulaTricuspideI: event.target.value,
    });
  }

  OtrosValvulaTricuspideE(event) {
    this.setState({
      OtrosValvulaTricuspideE: event.target.value,
    });
  }

  VentriculoIzquierdo(event) {
    this.setState({
      VentriculoIzquierdo: event.target.value,
    });
  }


  render() {
    return (
      <>
      <SelectComponente/>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">ECOCARDIOGRAMA ESTRÉS DOBUTAMINA</h5>
                </CardHeader>
                <CardBody>
                  <Row>

                    <Col md="12">

       
                      <table >
                        <thead>
                          <tr>
                          <td ><label>Equipo utilizado:</label> </td>    
                          <td ><label>Calidad ventana:</label></td> 
                          <td></td>
                          <td ><label>Aréa de realización:</label></td>
                          <td><label>Transductor: </label></td>
                          <td></td>
                         
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td >
                          <div class="box">
                          <select>
                        <option>Epiq</option>
                        <option>Affiniti 70</option>
                        <option>Affiniti 50</option>
                      </select>
                      </div>
                          </td>
                          <td >

                      <select>
                        <option>Buena</option>
                        <option>Regular</option>
                        <option>Mala</option>
                      </select>
                          </td>
                          <td >
                          <div class="containerTooltip">
                                <Input placeholder="F.C Basal (Lpm)" type="text" />
                                <p class="hovTol1">F.C Basal (Lpm)</p>
                              </div>
                                 </td>
                    
                          <td >
                          <select>
                        <option>Laboratorio</option>
                        <option>Uci</option>
                        <option>Salas de Cx</option>
                        <option>Hemodinamia</option>
                      </select>
                          </td>
                          <td>
                          <select>
                        <option>S5-1</option>
                        <option>XS-2</option>
                        <option>S-4</option>
                        <option>X7-2t</option>
                      </select>
                 
                          </td>

                         
                          </tr>
                          </tbody>
                          </table>

                       </Col>
                       </Row>

                       <Row>

                       <Col md="12">

                        <table >
                          <tbody>
                          <tr>
                            <td>
                            <div class="containerTooltip">
                                <Input placeholder="F.C Basal (Lpm)" type="text" />
                                <p class="hovTol1">F.C Basal (Lpm)</p>
                              </div>
                         
                          </td>

                          <td >
                              <div class="containerTooltip">
                                <Input placeholder="Talla (cm)" type="text" />
                                <p class="hovTol1">Talla (cm)</p>
                              </div>
                          </td>
      <td >
      <div class="containerTooltip">
            <Input placeholder="Peso (Kg)" type="text" />
            <p class="hovTol1">Peso (Kg)</p>
          </div>
             </td>
              <td >
      <div class="containerTooltip">
            <Input placeholder="Presión arterial" type="text" />
            <p class="hovTol1">Presión arterial</p>
          </div>
             </td>
             <td >
      <div class="containerTooltip">
            <Input placeholder="Superficie corporal" type="text" />
            <p class="hovTol1">Superficie corporal</p>
          </div>
             </td>
      
      </tr>
      </tbody>
      </table>

                       </Col>
                        <Col md="6">
                        <table>
                        <tbody>
                        <tr>
                        <td >
      <div class="containerTooltip">
            <Input placeholder="F.C. 85%" type="text" />
            <p class="hovTol1">F.C. 85%</p>
          </div>
             </td>

             <td >
      <div class="containerTooltip">
            <Input placeholder="Ritmo cardiaco" type="text" />
            <p class="hovTol1">Ritmo cardiaco</p>
          </div>
             </td>

             <td >
      <div class="containerTooltip">
            <Input placeholder="F.C. Maxima 100%" type="text" />
            <p class="hovTol1">F.C. Maxima 100%</p>
          </div>
             </td>


             <td >
      <div class="containerTooltip">
            <Input placeholder="F.C. Alcanzada" type="text" />
            <p class="hovTol1">F.C. Alcanzada</p>
          </div>
             </td>

             </tr>
             </tbody>
             </table>
           
                        
                        </Col>
                        </Row>
                        
                </CardBody>
              </Card>
            </Col>

          </Row>
           
        
          <Row>

            <Col md="12">
              <Card>

                <CardBody>
                  <Form>

                    <Row>

                    <Col md="12">
                      <h5 className="title">Hallazgos de pretest</h5>
                    </Col>

                  </Row>
                  <Row>
                   <Col md="12">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div class="containerTooltip">
                                <Input placeholder="Electrocardiograma basal" type="text" />
                                <p class="hovTol1">Electrocardiograma basal</p>
                              </div>
                            </td>
                            <td>
                              <div class="containerTooltip">
                                <Input placeholder="Ritmo sin usual" type="text" />
                                <p class="hovTol1">Ritmo sin usual</p>
                              </div>
                            </td>
                            <td>
                              <div class="containerTooltip">
                                <Input placeholder="Ecocardiograma basal" type="text" />
                                <p class="hovTol1">Ecocardiograma basal</p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>

                 </Form>


                </CardBody>


                <CardBody>
                  <Form>

                    <Row>
                      <Col md="12">
                        <table>
                          <thead>
                            <tr>
                              <td>DOSIS</td>
                              <td>INFUSIÓN</td>
                              <td>F.C</td>
                              <td>TA</td>
                              <td>OBSERVACIÓN</td>
                            </tr>

                          </thead>

                          <tbody>
                          <tr>
                              <td>
                                  <label>Basal:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Infusión basal" type="text" />
                                  <p class="hovTol1">Infusión basal</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="F.c. basal" type="text" />
                                  <p class="hovTol1">F.c. basal</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="T.a basal" type="text" />
                                  <p class="hovTol1">T.a basal</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación basal" type="text" />
                                  <p class="hovTol1">Observación basal</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                  <label>10 mcg:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Infusión 10 mcg" type="text" />
                                  <p class="hovTol1">Infusión 10 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="F.c. 10 mcg" type="text" />
                                  <p class="hovTol1">F.c. 10 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="T.a 10 mcg" type="text" />
                                  <p class="hovTol1">T.a 10 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 10 mcg" type="text" />
                                  <p class="hovTol1">Observación 10 mcg</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                  <label>20 mcg:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Infusión 20 mcg" type="text" />
                                  <p class="hovTol1">Infusión 20 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="F.c. 20 mcg" type="text" />
                                  <p class="hovTol1">F.c. 20 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="T.a 20 mcg" type="text" />
                                  <p class="hovTol1">T.a 20 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 20 mcg" type="text" />
                                  <p class="hovTol1">Observación 20 mcg</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                  <label>30 mcg:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Infusión 30 mcg" type="text" />
                                  <p class="hovTol1">Infusión 30 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="F.c. 30 mcg" type="text" />
                                  <p class="hovTol1">F.c. 30 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="T.a 30 mcg" type="text" />
                                  <p class="hovTol1">T.a 30 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 30 mcg" type="text" />
                                  <p class="hovTol1">Observación 30 mcg</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                  <label>40 mcg:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Infusión 40 mcg" type="text" />
                                  <p class="hovTol1">Infusión 40 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="F.c. 40 mcg" type="text" />
                                  <p class="hovTol1">F.c. 40 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="T.a 40 mcg" type="text" />
                                  <p class="hovTol1">T.a 40 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 40 mcg" type="text" />
                                  <p class="hovTol1">Observación 40 mcg</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                  <label>50 mcg:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Infusión 50 mcg" type="text" />
                                  <p class="hovTol1">Infusión 50 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="F.c. 50 mcg" type="text" />
                                  <p class="hovTol1">F.c. 50 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="T.a 50 mcg" type="text" />
                                  <p class="hovTol1">T.a 50 mcg</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación 50 mcg" type="text" />
                                  <p class="hovTol1">Observación 50 mcg</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>

                        </table>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Sintomas" type="text" onChange={this.setState.SintomasPretest} value={this.state.SintomasPretest} />
                                  <p class="hovTol1">Sintomas</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <table>
                          <thead>
                            <tr>
                              <td><label>Electrocardiograma:</label></td>
                              <td><label>Ecocardiograma:</label></td>
                              <td><label>Ecocardiograma:</label></td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Estrés baja dosis" type="text" />
                                  <p class="hovTol1">Estrés baja dosis</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Estrés baja dosis" type="text" />
                                  <p class="hovTol1">Estrés baja dosis</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Estrés dosis máxima" type="text" />
                                  <p class="hovTol1">Estrés dosis máxima</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>

                  </Form>

                </CardBody>


                <CardBody>
                <Row>
                    <Col md="12">
                      <h5 className="title">Hallazgos en recuperación</h5>
                    </Col>
                  </Row>
                  <Row>
                  <Col md="12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Recuperación 1" type="text" />
                                  <p class="hovTol1">Recuperación 1</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Recuperación 3" type="text" />
                                  <p class="hovTol1">Recuperación 3</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Recuperación 5" type="text" />
                                  <p class="hovTol1">Recuperación 5</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                  </Row>
                  <Row>
                      <Col md="12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Sintomas" type="text" onChange={this.setState.SintomasRecuperacion} value={this.state.SintomasRecuperacion} />
                                  <p class="hovTol1">Sintomas</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Electrocargiograma recuperación" type="text" />
                                  <p class="hovTol1">Electrocargiograma recuperación</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Ecocargiograma recuperación" type="text" />
                                  <p class="hovTol1">Ecocargiograma recuperación</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  
                    <Row>
                      <Col md='12'>
                        <div className="App">
                          <CKEditor
                            editor={ClassicEditor}
                            data={this.state.Observaciones}
                            onInit={editor => {
                              // You can store the "editor" and use when it is needed.
                              console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              console.log({ event, editor, data });
                            }}
                            onBlur={editor => {
                              console.log('Blur.', editor);
                            }}
                            onFocus={editor => {
                              console.log('Focus.', editor);
                            }}
                          />
                        </div>
                      </Col>
                      </Row>  
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        </div>
        
      </>
    );
  }
}

export default EcocardiogramaEstresDobutamina;
