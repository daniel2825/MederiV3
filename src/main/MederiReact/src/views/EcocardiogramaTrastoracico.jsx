import React from "react";
import css from "CssMederi/Estilos.css";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Eventos from 'components/Declaraciones/EcocardiogramaTrastoracicoVar.jsx'

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

class EcocardiogramaTrastoracico extends React.Component {


  constructor() {

    super();

    this.state = {
      SuperficieCorporal: 0,
      Peso: '',
      Talla: '',
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
      ParedAnteroLateral : 'Normal'

    }
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
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">ECOCARDIOGRAMA TRASTORACICO</h5>
                </CardHeader>
                <CardBody>
                  <Row>

                    <Col md="12">
                      <table className="separacion">
                        <thead>
                          <tr>
                          <td ><label>Equipo utilizado:</label> </td>    
                          <td ><label>Calidad ventana:</label></td> 
                          <td ><label>Aréa de realización:</label></td>
                          <td><label>Transductor: </label></td>
                         
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
                            <table className="separacion">
                             <thead>
                               <tr>
                               <td><label>Sonografista: </label></td>
                               <td><label>Especialista: </label></td>                       
                               <td><label>Ritmo cardiaco: </label></td>
                               </tr>
                             </thead>
                             
                              <tbody>
                              <tr>
                         
                          <td>
                           <select value={this.state.Sonografista} onChange={this.Sonografista}>
                             <option>Si</option>
                             <option>No</option>
                             </select>              
                          </td>
                            {
                              this.state.Sonografista == "Si" ? 
                              /* base de datos */
                              <td>
                              <select>
                              <option>Paula Coartas</option>
                              </select>
                              </td>
                              :null
                              
                            }
                            <td>
                       {/*Subir a la base de datos  */}
                           <select value={this.state.Especialista} onChange={this.Especialista}>
                             <option>Jaime Andres Torres</option>
                             <option>Jose Julian Carvajal</option>
                             <option>Santiago Herrera</option>
                             <option>Nubia Esperanza Carrero</option>           
                             <option>Laura Arcos</option>                      
                             </select>              
                          </td>
                          <td>

<select value={this.state.RitmoCar} onChange={this.RitmoCardiaco}>
<option>Sinusal</option>
<option>Marcapaso</option>
<option>Arritmico</option>
<option>Otros</option>
</select>

</td>


{this.state.RitmoCar == "Arritmico" ?

<td>

<select>
  <option>Fibrilación auricular</option>
  <option>Extrasistoles ventriculares</option>
  <option>Extrasistoles supra ventriculares</option>
</select>
</td>

: null } 

{ this.state.RitmoCar == "Otros" ?
<td>
  <Input placeholder="Otros" type="text"/>
</td>
: null}

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
                      <h5 className="title">Ventrículo izquierdo</h5>
                    </Col>

                  </Row>
                  <Row>
                    <Col md="5">
                      <div class="containerTooltip">
                                <Input placeholder="Masa de ventriculo izquierdo" type="text" />
                                <p class="hovTol1">Masa de ventriculo izquierdo</p>
                              </div>
                           

                    </Col>
                    </Row>
                    <Row>
                    <Col md="12">
                      <h5 className="title">Contractilidad</h5>
                    </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                      <table>
                        <thead>
                          <tr>
                            <td><label>Pared anterior:</label></td>
                            <td></td>
                            <td><label>Pared antero septal:</label></td>
                            <td></td>
                            <td><label>Pared infero septal:</label></td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                          <select onChange={this.ParedAnterior} value={this.state.ParedAnterior}>
                            <option>Normal</option>
                            <option>Aquinesia</option>
                            <option>Hipoquinesia</option>
                            <option>Disquinesia</option>
                            <option>No valorable</option>
                            <option>Otro</option>                           
                          </select>
                          
                          </td>
                          {
                            <td>
                            <Input placeholder={this.state.ParedAnterior} type="text"/>
                            </td>
                          }

                          <td>
                          <select onChange={this.ParedAnteroSeptal} value={this.state.ParedAnteroSeptal}>
                            <option>Normal</option>
                            <option>Aquinesia</option>
                            <option>Hipoquinesia</option>
                            <option>Disquinesia</option>
                            <option>No valorable</option>
                            <option>Otro</option>                           
                          </select>
                          </td>
                          {
                            <td>
                            <Input placeholder={this.state.ParedAnteroSeptal} type="text"/>
                            </td>
                          }
                          <td>
                          <select onChange={this.ParedInferoSeptal} value={this.state.ParedInferoSeptal}>
                            <option>Normal</option>
                            <option>Aquinesia</option>
                            <option>Hipoquinesia</option>
                            <option>Disquinesia</option>
                            <option>No valorable</option>
                            <option>Otro</option>                           
                          </select>
                          </td>
                          {
                            <td>
                            <Input placeholder={this.state.ParedInferoSeptal} type="text"/>
                            </td>
                          }  

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
                            <td><label>Pared inferior:</label></td>
                            <td></td>
                            <td><label>Pared infero lateral:</label></td>
                            <td></td>
                            <td><label>Pared antero lateral:</label></td>
                           </tr>
                         </thead>
                         <tbody>
                        <tr>
                          

                          <td>
                          <select onChange={this.ParedInferior} value={this.state.ParedInferior}>
                            <option>Normal</option>
                            <option>Aquinesia</option>
                            <option>Hipoquinesia</option>
                            <option>Disquinesia</option>
                            <option>No valorable</option>
                            <option>Otro</option>                           
                          </select>
                          </td>
                          {
                            <td>
                            <Input placeholder={this.state.ParedInferior} type="text"/>
                            </td>
                          }

<td>
                          <select onChange={this.ParedInferoLateral} value={this.state.ParedInferoLateral}>
                            <option>Normal</option>
                            <option>Aquinesia</option>
                            <option>Hipoquinesia</option>
                            <option>Disquinesia</option>
                            <option>No valorable</option>
                            <option>Otro</option>                           
                          </select>
                          </td>
                          {
                            <td>
                            <Input placeholder={this.state.ParedInferoLateral} type="text"/>
                            </td>
                          }


                          <td>
                          <select onChange={this.ParedAnteroLateral} value={this.state.ParedAnteroLateral}>
                            <option>Normal</option>
                            <option>Aquinesia</option>
                            <option>Hipoquinesia</option>
                            <option>Disquinesia</option>
                            <option>No valorable</option>
                            <option>Otro</option>                           
                          </select>
                          </td>
                          {
                            <td>
                            <Input placeholder={this.state.ParedAnteroLateral} type="text"/>
                            </td>
                          }
                          </tr>
                          </tbody>
                          </table>
                          </Col>
                          </Row>
                        
                  <Row>
                    <Col md="12">
                      <table>
                        <tr>
                      <td><label>Apex:</label><Input placeholder="Apex" type="text" value="No se logra adecuada valoración por esta técnica"/></td>
                      </tr>
                      </table>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                    <h5 className="title">Función diastolica</h5>
                    </Col>                    
                  </Row>

                  <Row>
                    <Col md="12">
                      <table>
                        <tr>
                          <td>
                          <div class="containerTooltip">
                               <Input placeholder="Onda E cm/seg" type="text" />
                               <p class="hovTol1">Onda E cm/seg</p>
                              </div>
                           
                           </td>
                          <td>

                          <div class="containerTooltip">
                              <Input placeholder="Onda A cm/seg" type="text" />
                               <p class="hovTol1">Onda A cm/seg</p>
                              </div>
                          </td>
                          <td>

                          <div class="containerTooltip">
                          <Input placeholder="Relación E/A" type="text" />
                               <p class="hovTol1">Relación E/A</p>
                              </div>
                          
                          </td>
                          <td>

                          <div class="containerTooltip">
                          <Input placeholder="Promedio relación E/E" type="text" />
                               <p class="hovTol1">Promedio relación E/E</p>
                              </div>
                          </td>
                        </tr>
                        </table>
                        </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                        <table>
                         <tbody>
                        <tr>
                          <td>
                            <select value={this.state.EfuncionDiastolica} onChange={this.EfuncionDiastolica}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          {
                            this.state.EfuncionDiastolica == "Normal" ? 
                            <td>
                             <Input placeholder="Normal" type="text" />
                            </td>
                            :null
                           }
                          {
                            this.state.EfuncionDiastolica == 'Anormal' ?
                            <td>
                              <select value={this.state.VDisfuncion} onChange={this.VDisfuncion}>
                                <option>Disfunción tipo I</option>
                                <option>Disfunción tipo II</option>
                                <option>Disfunción tipo III</option>
                                <option>Otros</option>
                              </select>
                            </td>
                            : null}

                          {
                            (this.state.VDisfuncion == "Disfunción tipo I" || this.state.VDisfuncion == 'Otros'
                            || this.state.VDisfuncion == "Disfunción tipo II" || this.state.VDisfuncion == "Disfunción tipo III")
                             && this.state.EfuncionDiastolica == 'Anormal' ?
                              <td>
                                <Input placeholder={this.state.VDisfuncion} type="text" />
                              </td>
                              : null
                          }
                          <td>

                          <div class="containerTooltip">
                          <Input placeholder="Strain longitudinal" type="text"/>
                               <p class="hovTol1">Strain longitudinal</p>
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
                      <Col md="6">
                        <table>
                          <thead>
                            <tr>
                              <td>CAMARAS</td>
                              <td>MEDIDAS</td>
                              <td>REFERENCIA</td>
                            </tr>

                          </thead>

                          <tbody>
                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Ventrículo derecho(Eje largo):</label>
                                </FormGroup>


                              </td>
                              <td>
                                <Input placeholder="MEDIDAS" value={this.state.valueVentriculoD} onChange={this.valueVentriculoD} onBlur={this.validacionValoresNA} type="number"/>

                              </td>

                              <td>

                                <FormGroup>
                                  <label>20-30mm</label>
                                </FormGroup>


                              </td>


                            </tr>
                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Septum interventricular en diástole:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>6-10 mm (H) </label>
                                  <br />
                                  <label>6-9 mm (M)s</label>
                                </FormGroup>


                              </td>

                            </tr>
                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Ventrículo izquiero en diástole:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>42-58 mm (H) </label>
                                  <br />
                                  <label>38-52 mm (M)s</label>
                                </FormGroup>


                              </td>

                            </tr>

                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Pared posterior</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>6-10 mm (H) </label>
                                  <br />
                                  <label>6-9 mm (M)s</label>
                                </FormGroup>


                              </td>

                            </tr>


                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Pared posterior:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>6-10 mm (H) </label>
                                  <br />
                                  <label>6-9 mm (M)s</label>
                                </FormGroup>


                              </td>

                            </tr>

                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Ventrículo izquierdo diámetro sistólico:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>25-40 mm (H) </label>
                                  <br />
                                  <label>22-35 mm (M)s</label>
                                </FormGroup>


                              </td>

                            </tr>

                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Auricula izquierda diámetro:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>30-40 mm (H) </label>
                                  <br />
                                  <label>27-78 mm (M)s</label>
                                </FormGroup>


                              </td>

                            </tr>


                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Raíz aortica (Senos de valsalva):</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>34(+-)-3 mm (H) </label>
                                  <br />
                                  <label>30(+-)-3 mm (M)s</label>
                                </FormGroup>


                              </td>

                            </tr>


                          </tbody>

                        </table>
                      </Col>
                      <Col md="6">

                        <table>
                          <thead>
                            <tr>
                              <td>CAVIDADES</td>
                              <td>MEDIDAS</td>
                              <td>REFERENCIA</td>
                            </tr>

                          </thead>


                          <tbody>

                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Apertura aortica:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>mm</label>
                                </FormGroup>


                              </td>

                            </tr>


                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Auricula izquierda área:</label>
                                </FormGroup>

                              </td>

                              <td>
                                <Input placeholder="MEDIDAS" type="text"/>
                              </td>

                              <td>

                                <FormGroup>
                                  <label>19 CM2</label>
                                </FormGroup>


                              </td>

                            </tr>


                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Volumen indexado de auricula izquierda:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>35-41 Leve</label>
                                  <br />
                                  <label>42-48 Moderado</label>
                                  <br />
                                  <label>>48 Severo</label>
                                </FormGroup>


                              </td>

                            </tr>


                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Volumen fin diástole VI:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>62-150 ml(H)</label>
                                  <br />
                                  <label>46-106 ml(M)</label>
                                </FormGroup>


                              </td>

                            </tr>


                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Volumen fin sístole VI:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>21-61 ml(H)</label>
                                  <br />
                                  <label>14-42 ml(M)</label>
                                </FormGroup>


                              </td>

                            </tr>

                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Fracción de eyección:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>52-72% (H)</label>
                                  <br />
                                  <label>54-74 (M)</label>
                                </FormGroup>


                              </td>

                            </tr>


                            <tr>
                              <td>

                                <FormGroup>
                                  <label>Auricula derecha área:</label>
                                </FormGroup>

                              </td>


                              <td>
                                <Input
                                  placeholder="MEDIDAS"
                                  type="text"
                                />

                              </td>

                              <td>

                                <FormGroup>
                                  <label>19 CM2</label>
                                </FormGroup>


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
                    <Col md="3">
                      <h5 className="title">Válvulas</h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12" md="6" lg="6">
                      <table>
                        <tr>
                        <td>
                          <label>Aórtica:</label>
                          </td>
                          <td>

                      <div class="containerTooltip">
                            <Input placeholder="V maxima" type="text" />
                                <p class="hovTol1">V maxima</p>
                              </div>
                          </td>
                          <td>
                          <div class="containerTooltip">
                          <Input placeholder="Gradiente pico" type="text" />
                                <p class="hovTol1">Gradiente pico</p>
                              </div>
                    
                          </td>
                          <td>
                          <div class="containerTooltip">
                          <Input placeholder="Gradiente medio" type="text" />
                                <p class="hovTol1">Gradiente medio</p>
                              </div>
                    
                          </td>
                        </tr>
                        
                      </table>
                    </Col>
                    <Col md="4">
                      <table>
                        <thead>
                          
                        </thead>
                        <tr>
                          <td>
                            <label>Protesis:</label>
                          </td>
                          <td>
                          <select value={this.state.ProtesisAortica} onChange={this.ProtesisAortica}>
                              <option>Si</option>
                              <option>No</option>
                            </select>  
                          </td>
                          {this.state.ProtesisAortica == "Si" ?
                          <td>
                            <select>
                              <option>Mecanica</option>
                              <option>Biologica</option>
                            </select>
                            </td>

                          : null

                          }
                          <td>
                            <label>Plastia:</label>
                          </td>
                          <td>
                            <select value={this.state.PlastiaProtesisAortica} onChange={this.PlastiaProtesisAortica} >
                              <option>Si</option>
                              <option>No</option>
                            </select>
                            
                          </td>
                          <td>
                            <label>Endocarditis:</label>
                          </td>
                          <td>
                            <select value={this.state.EndocarditisProtesisAortica} onChange={this.EndocarditisProtesisAortica}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          
                        </tr>
                      </table>

                      

                    </Col>

                  </Row>
                  <Row>
                    <Col md="12">
                    <tr>
                        <td>
                            <select value={this.state.ValvulaAorticaAnormal} onChange={this.ValvulaAorticaAnormal}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.ValvulaAorticaAnormal == "Normal" ?
                          <td>
                           <Input placeholder={this.state.ValvulaAorticaAnormal} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.ValvulaAorticaAnormal == "Anormal" ?

                              <td>
                                <select value={this.state.ValvulaAorticaIE} onChange={this.ValvulaAorticaIE}>
                                  <option>Insuficiencia</option>
                                  <option>Estenosis</option>
                                </select>
                              </td>

                              : null
                          }
                          {
                            this.state.ValvulaAorticaIE == "Insuficiencia" && this.state.ValvulaAorticaAnormal == "Anormal" ?
                              <td>
                                <select value={this.state.OtrosValvulaAorticaI} onChange={this.OtrosValvulaAorticaI}>
                                  <option>Leve</option>
                                  <option>Leve a moderada</option>
                                  <option>Moderada</option>
                                  <option>Moderada a severa</option>
                                  <option>Severa</option>
                                  <option>Otros</option>
                                </select>
                              </td>
                              : this.state.ValvulaAorticaIE == "Estenosis" && this.state.ValvulaAorticaAnormal == "Anormal" ?
                                <td>
                                  <select value={this.state.OtrosValvulaAorticaE} onChange={this.OtrosValvulaAorticaE}>
                                    <option>Leve</option>
                                    <option>Leve a moderada</option>
                                    <option>Moderada</option>
                                    <option>Moderada a severa</option>
                                    <option>Severa</option>
                                    <option>Otros</option>
                                  </select>
                                </td>
                                : null
                          }
                          {
                            (this.state.OtrosValvulaAorticaI == "Otros" || this.state.OtrosValvulaAorticaE == "Otros") && this.state.ValvulaAorticaAnormal == "Anormal" ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }
           
                         </tr>
                    </Col>
                  </Row>
                  <Row>
                    

                  <Col md="12">
                    <table>
                      <tr>
                  <td>THP:</td>
                          <td><Input placeholder="THP" type="text" /></td>
                        
                        </tr>
                      </table>

                    </Col>

                  </Row>

                  <Row>
                    <Col md="6">
                      <table>
                        <tr>
                          <td>
                            <label>Mitral:</label>
                          </td>
                          <td>

                      <div class="containerTooltip">
                          <Input placeholder="V maxima" type="text" />
                                <p class="hovTol1">V maxima</p>
                              </div>
                          </td>
                          <td>

                      <div class="containerTooltip">
                      <Input placeholder="Gradiente pico" type="text" />
                                <p class="hovTol1">Gradiente pico</p>
                              </div>
                          </td>
                          <td>

                      <div class="containerTooltip">
                      <Input placeholder="Gradiente medio" type="text" />
                                <p class="hovTol1">Gradiente medio</p>
                              </div>
                          </td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="4">
                      <table>
                        <tr>
                        <td>
                          <label>Protesis:</label>
                          </td>
                          <td>
                            <select value={this.state.ProtesisMitral} onChange={this.ProtesisMitral} >
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          {this.state.ProtesisMitral == "Si" ?
                          <td>
                            <select >
                              <option>Mecanica</option>
                              <option>Biologica</option>
                            </select>
                            </td>

                          : null

                          }

<td>
                            <label>Plastia:</label>
                          </td>
                          <td>
                            <select value={this.state.PlastiaProtesisMitral} onChange={this.PlastiaProtesisMitral}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          <td>
                            <label>Endocarditis:</label>
                          </td>
                          <td>
                            <select value={this.state.EndocarditisProtesisMitral} onChange={this.EndocarditisProtesisMitral}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                         
                         

                        </tr>
                      </table>

                    </Col>

                  </Row>
                  <Row>
                    <Col md="12">
                    <table>
                      <tr>
                    <td>
                            <select value={this.state.ValvulaMitralAnormal} onChange={this.ValvulaMitralAnormal}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>

                          { this.state.ValvulaMitralAnormal == "Normal" ?
                          <td>
                           <Input placeholder={this.state.ValvulaMitralAnormal} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.ValvulaMitralAnormal == "Anormal" ?

                              <td>
                                <select value={this.state.ValvulaMitralIE} onChange={this.ValvulaMitralIE}>
                                  <option>Insuficiencia</option>
                                  <option>Estenosis</option>
                                </select>
                              </td>

                              : null
                          }
                          {
                            this.state.ValvulaMitralIE == "Insuficiencia" && this.state.ValvulaMitralAnormal == "Anormal" ?
                              <td>
                                <select value={this.state.OtrosValvulaMitralI} onChange={this.OtrosValvulaMitralI}>
                                  <option>Leve</option>
                                  <option>Leve a moderada</option>
                                  <option>Moderada</option>
                                  <option>Moderada a severa</option>
                                  <option>Severa</option>
                                  <option>THP</option>
                                  <option>Otros</option>
                                </select>
                              </td>
                              : this.state.ValvulaMitralIE == "Estenosis" && this.state.ValvulaMitralAnormal == "Anormal" ?
                                <td>
                                  <select value={this.state.OtrosValvulaMitralE} onChange={this.OtrosValvulaMitralE}>
                                    <option>Leve</option>
                                    <option>Leve a moderada</option>
                                    <option>Moderada</option>
                                    <option>Moderada a severa</option>
                                    <option>Severa</option>
                                    <option>Otros</option>
                                  </select>
                                </td>
                                : null
                          }
                          {
                            (this.state.OtrosValvulaMitralI == "Otros" || this.state.OtrosValvulaMitralE == "Otros") && this.state.ValvulaMitralAnormal == "Anormal" ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }
                        </tr>
                     </table>
                    
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <table>
                        <tr>
                          <td>
                            <label>Tricuspide:</label>
                          </td>
                          <td>
                          
                      <div class="containerTooltip">
                      <Input placeholder="V maxima" type="text" />     
                         <p class="hovTol1">V maxima</p>
                              </div>
                          </td>
                          <td>
                          <div class="containerTooltip">
                          <Input placeholder="Gradiente pico" type="text" />
                          <p class="hovTol1">Gradiente pico</p>  
                                 </div>
                  
                          </td>
                          <td>
                          <div class="containerTooltip">
                          <Input placeholder="Gradiente medio" type="text" />
                          <p class="hovTol1">Gradiente medio</p>  
                       
                                 </div>
                  
                          </td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="4">
                      <table>
                        <tr>
                          <td>
                            <label>Protesis:</label>
                            </td>
                            <td>
                            <select value={this.state.ProtesisTricuspide} onChange={this.ProtesisTricuspide}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          {this.state.ProtesisTricuspide == "Si" ?
                          <td>
                            <select >
                              <option>Mecanica</option>
                              <option>Biologica</option>
                            </select>
                            </td>

                          : null

                          }
                           <td>
                            <label>Plastia:</label>
                          </td>
                          <td>
                            <select value={this.state.PlastiaProtesisTricuspide} onChange={this.PlastiaProtesisTricuspide}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          <td>
                            <label>Endocarditis:</label>
                          </td>
                          <td>
                            <select value={this.state.EndocarditisProtesisTricuspide} onChange={this.EndocarditisProtesisTricuspide}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                         </tr>
                         </table>
                          </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                              <table>
                              <tr>
                            <td>
                            <select value={this.state.ValvulaTricuspideAnormal} onChange={this.ValvulaTricuspideAnormal}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>

                          { this.state.ValvulaTricuspideAnormal == "Normal" ?
                          <td>
                           <Input placeholder={this.state.ValvulaTricuspideAnormal} type="text" />        
                          </td>:null
                          }

                          {
                            this.state.ValvulaTricuspideAnormal == "Anormal" ?

                              <td>
                                <select value={this.state.ValvulaTricuspideIE} onChange={this.ValvulaTricuspideIE}>
                                  <option>Insuficiencia</option>
                                  <option>Estenosis</option>
                                </select>
                              </td>

                              :
                              
                              <td>
                      <div class="containerTooltip">
                       <Input placeholder="PSAP: MMHG" type="text" />
   <p class="hovTol1">PSAP: MMHG</p>
                    </div>
                    </td>
                          }
                          {
                            this.state.ValvulaTricuspideIE == "Insuficiencia" && this.state.ValvulaTricuspideAnormal == "Anormal" ?
                              <td>
                                <select value={this.state.OtrosValvulaTricuspideI} onChange={this.OtrosValvulaTricuspideI}>
                                  <option>Leve</option>
                                  <option>Leve a moderada</option>
                                  <option>Moderada</option>
                                  <option>Moderada a severa</option>
                                  <option>Severa</option>
                                  <option>THP</option>
                                  <option>Otros</option>
                                </select>
                              </td>
                              : this.state.ValvulaTricuspideIE == "Estenosis" && this.state.ValvulaTricuspideAnormal == "Anormal" ?
                                <td>
                                  <select value={this.state.OtrosValvulaTricuspideE} onChange={this.OtrosValvulaTricuspideE}>
                                    <option>Leve</option>
                                    <option>Leve a moderada</option>
                                    <option>Moderada</option>
                                    <option>Moderada a severa</option>
                                    <option>Severa</option>
                                    <option>Otros</option>
                                  </select>
                                </td>
                                : null
                          }
                          {
                            (this.state.OtrosValvulaTricuspideI == "Otros" || this.state.OtrosValvulaTricuspideE == "Otros") && this.state.ValvulaPulmonarAnormal == "Anormal" ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }


                        </tr>
                      </table>

                    </Col>

                  </Row>




                  <Row>
                    <Col md="6">
                      <table>
                        <tr>
                          <td>
                            <label>Pulmonar:</label>
                          </td>
                          <td>
                            
                      <div class="containerTooltip">
                             <Input placeholder="V maxima" type="text" />
                                <p class="hovTol1">V maxima</p>
                              </div>
                          </td>
                          <td>
                          <div class="containerTooltip">
                          <Input placeholder="Gradiente pico" type="text" />
                                <p class="hovTol1">Gradiente pico</p>
                              </div>
                      
                          </td>
                          <td>
                          <div class="containerTooltip">
                          <Input placeholder="Gradiente medio" type="text" />
                                <p class="hovTol1">Gradiente medio</p>
                              </div>
                      
                          </td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="4">
                      <table>
                        <tr>
                          
                        <td>
                            <label>Protesis:</label>
                            </td>
                            <td>
                            <select value={this.state.ProtesisPulmonar} onChange={this.ProtesisPulmonar}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          {this.state.ProtesisPulmonar == "Si" ?
                          <td>
                            <select >
                              <option>Mecanica</option>
                              <option>Biologica</option>
                            </select>
                            </td>

                          : null

                          }

<td>
                            <label>Plastia:</label>
                          </td>
                          <td>
                            <select value={this.state.PlastiaProtesisPulmonar} onChange={this.PlastiaProtesisProtesisPulmonar}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          <td>
                            <label>Endocarditis:</label>
                          </td>
                          <td>
                            <select value={this.state.EndocarditisProtesisPulmonar} onChange={this.EndocarditisProtesisPulmonar}>
                              <option>Si</option>
                              <option>No</option>
                            </select>
                          </td>
                          </tr>
                          </table>
                          </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                              <table>
                                <tr>
                          
                         
                          
                          <td>
                            <select value={this.state.ValvulaPulmonarAnormal} onChange={this.ValvulaPulmonarAnormal}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>

                          { this.state.ValvulaPulmonarAnormal == "Normal" ?
                          <td>
                           <Input placeholder={this.state.ValvulaPulmonarAnormal} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.ValvulaPulmonarAnormal == "Anormal" ?

                              <td>
                                <select value={this.state.ValvulaPulmonarIE} onChange={this.ValvulaPulmonarIE}>
                                  <option>Insuficiencia</option>
                                  <option>Estenosis</option>
                                </select>
                              </td>

                              : null
                          }
                          {
                            this.state.ValvulaPulmonarIE == "Insuficiencia" && this.state.ValvulaPulmonarAnormal == "Anormal" ?
                              <td>
                                <select value={this.state.OtrosValvulaPulmonarI} onChange={this.OtrosValvulaPulmonarI}>
                                  <option>Leve</option>
                                  <option>Leve a moderada</option>
                                  <option>Moderada</option>
                                  <option>Moderada a severa</option>
                                  <option>Severa</option>
                                  <option>Otros</option>
                                </select>
                              </td>
                              : this.state.ValvulaPulmonarIE == "Estenosis" && this.state.ValvulaPulmonarAnormal == "Anormal" ?
                                <td>
                                  <select value={this.state.OtrosValvulaPulmonarE} onChange={this.OtrosValvulaPulmonarE}>
                                    <option>Leve</option>
                                    <option>Leve a moderada</option>
                                    <option>Moderada</option>
                                    <option>Moderada a severa</option>
                                    <option>Severa</option>
                                    <option>Otros</option>
                                  </select>
                                </td>
                                : null
                          }
                          {
                            (this.state.OtrosValvulaPulmonarI == "Otros" || this.state.OtrosValvulaPulmonarE == "Otros") && this.state.ValvulaPulmonarAnormal == "Anormal" ?
                              <td>
                                <Input placeholder="Otros" type="text" />
                              </td>
                              : null
                          }


                        </tr>
                      </table>

                    </Col>

                  </Row>

                  <Row>
                    <Col md="12">
                      <h5 className="title">Ventriculo derecho</h5>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <table>
                        <tr>
                          <td>
                            <select value={this.state.VentriculoIzquierdo} onChange={this.VentriculoIzquierdo}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.VentriculoIzquierdo == "Normal" ?
                          <td>
                           <Input placeholder={this.state.VentriculoIzquierdo} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.VentriculoIzquierdo == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }
                        
                          <td>

                          <div class="containerTooltip">
                          <Input placeholder="Tapse" type="text" />
                                <p class="hovTol1">Tapse</p>
                              </div>

                          </td>

                          <td>

                          <div class="containerTooltip">
                          <Input placeholder="Tisular del anillo" type="text" />
                                <p class="hovTol1">Tisular del anillo</p>
                              </div>
                          </td>

                          <td>

                      <div class="containerTooltip">
                      <Input placeholder="Cambio fraccional de area" type="text" />
                                <p class="hovTol1">Cambio fraccional de area</p>
                              </div>
                          </td>


                        </tr>
                      </table>
                    </Col>

                  </Row>
                      
                  <Row>
                    <Col sm="12" lg="6" md="12">
                      <table>
                        
                        <thead>
                          
                          <tr>
                            <td><label>Izquierda:</label></td>   
                            <td></td>
                            <td><label>Derecha:</label></td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <select className="TamSelect" value={this.state.AuriculaIzquierda} onChange={this.AuriculaIzquierda}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.AuriculaIzquierda == "Normal" ?
                          <td>
                           <Input placeholder={this.state.AuriculaIzquierda} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.AuriculaIzquierda == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }

                          <td>
                            <select className="TamSelect" value={this.state.AuriculaDerecha} onChange={this.AuriculaDerecha}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.AuriculaDerecha == "Normal" ?
                          <td>
                           <Input placeholder={this.state.AuriculaDerecha} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.AuriculaDerecha == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }
                          </tr>
                        </tbody>
                        </table>
                       </Col>
                        <Col sm="12" lg="6" md="12">
                        <table>
                        
                        <thead>
                          
                          <tr>
                            <td colspan="2"><label>Septum interauricular:</label></td>
                            <td colspan="2"><label>Septum interventicular:</label></td>

                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <select className="TamSelect" value={this.state.SeptumInterauricular} onChange={this.SeptumInterauricular}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.SeptumInterauricular == "Normal" ?
                          <td>
                           <Input placeholder={this.state.SeptumInterauricular} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.SeptumInterauricular == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }

                          <td>
                            <select className="TamSelect" value={this.state.SeptumInterventicular} onChange={this.SeptumInterventicular}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.SeptumInterventicular == "Normal" ?
                          <td>
                           <Input placeholder={this.state.SeptumInterventicular} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.SeptumInterventicular == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }
                        </tr>
                        </tbody>
                        </table>
                     
                        </Col>
                     
                       </Row>
                       
                       <Row>
                       <Col sm="12" lg="6" md="12">
                         <table>
                           <thead>
                             <tr>
                             <td><label>Pericardio:</label></td>
                                 <td></td>
                                 <td><label>Vena cava inferior:</label></td>
                             
                             </tr>
                           </thead>
                           <tbody>
                             <tr>


                          <td>
                            <select className="TamSelect" value={this.state.Pericardio} onChange={this.Pericardio}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.Pericardio == "Normal" ?
                          <td>
                           <Input placeholder={this.state.Pericardio} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.Pericardio == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }
                          <td>
                            <select className="TamSelect" value={this.state.VenaCavaInferior} onChange={this.VenaCavaInferior}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.VenaCavaInferior == "Normal" ?
                          <td>
                           <Input placeholder={this.state.VenaCavaInferior} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.VenaCavaInferior == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }
  
                                 </tr>
                               </tbody>
                             </table>

                         </Col> 
                         <Col sm="12" lg="6" md="12">

                         <table>
                           <thead>
                             <tr>
                                 <td><label>A. aorta:</label></td>
                                 <td></td>
                                 <td><label>A. pulmonar:</label></td>
                          
                             </tr>
                           </thead>
                           <tbody>
                             <tr>

                                 <td>
                            <select className="TamSelect" value={this.state.A_aorta} onChange={this.A_aorta}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>
                          { this.state.A_aorta == "Normal" ?
                          <td>
                           <Input placeholder={this.state.A_aorta} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.A_aorta == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }
                          <td>
                            <select className="TamSelect" value={this.state.A_pulmonar} onChange={this.A_pulmonar}>
                              <option>Normal</option>
                              <option>Anormal</option>
                            </select>
                          </td>

                          { this.state.A_pulmonar == "Normal" ?
                          <td>
                           <Input placeholder={this.state.A_pulmonar} type="text" />        
                          </td>:null
                          }
                          {
                            this.state.A_pulmonar == "Anormal" ?
                              <td>
                                <Input placeholder="Anormal" type="text" />
                              </td>
                              : null
                          }
                        
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
      data="
      
      <h5>CONCLUSIONES</h5>
      <ol>
      <li>TEXTOS PREFIJADOS SEGÚN LOS VALORES Y HALLAZGOS.</li>
     
      </ol>
      
      "
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

export default EcocardiogramaTrastoracico;
