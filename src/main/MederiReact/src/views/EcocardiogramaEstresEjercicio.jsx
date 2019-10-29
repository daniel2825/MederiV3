import React from "react";
import Select from 'react-select';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import SelectComponente from "components/SelectComponente/SelectComponente"
//importante https://www.quackit.com/html/html_editors/scratchpad/?example=/bootstrap/bootstrap_4/tutorial/bootstrap_4_popover_close_focus
// reactstrap components http://jsfiddle.net/kevinsbennett/mtct6/1/
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

class EcocardiogramaEstresEjercicio extends React.Component {

  constructor() {

    super();

    this.state = {
      SuperficieCorporal: 0,
      nombres: '',
      apellidos: '',
      identificacion: '',
      cama: '',
      Peso: '',
      Talla: '',
      RitmoCar: 'SINUSAL',
      FrecuenciaCar: '',
      Comprobador: '',
      indicacion: '',
      tensionarterial: '',
      saturacion: '',
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
    this.Observaciones = this.Observaciones.bind(this);

    this.nombres = this.nombres.bind(this);
    this.apellidos = this.apellidos.bind(this);
    this.identificacion = this.identificacion.bind(this);
    this.cama = this.cama.bind(this);
    this.Pesoevent = this.Pesoevent.bind(this);
    this.TallaEvent = this.TallaEvent.bind(this);
    this.RitmoCardiaco = this.RitmoCardiaco.bind(this);
    this.FrecuenciaCar = this.FrecuenciaCar.bind(this);
    this.Comprobador = this.Comprobador.bind(this);
    this.indicacion = this.indicacion.bind(this);
    this.tensionarterial = this.tensionarterial.bind(this);
    this.saturacion = this.saturacion.bind(this);
  }



  Observaciones(event) {
    this.setState({
      Observaciones: `

      <h5>CONCLUSIONES</h5>
      <ol>
      <li>Ecocardiograma estrés EJERCICIO MAXIMO NEGATIVO para determinar isquemia miocárdica (100% FCM).</li>
      <li>Respuesta presora normal.</li>
      <li>Respuesta cronotropica normal.</li>
      <li>No arritmias.</li>
      <li>Medicina interna - Cardiología - Ecocardiografia.</li>
      </ol>`
    });
  }

  nombres(event) {
    this.setState({
      nombres: event.target.value,
    });
  }
  apellidos(event) {
    this.setState({
      apellidos: event.target.value,
    });
  }
  identificacion(event) {
    this.setState({
      identificacion: event.target.value,
    });
  }
  cama(event) {
    this.setState({
      cama: event.target.value,
    });
  }

  tensionarterial(event) {
    this.setState({
      tensionarterial: event.target.value,
    });
  }

  saturacion(event) {
    this.setState({
      saturacion: event.target.value,
    });
  }

  indicacion(event) {
    this.setState({
      indicacion: event.target.value,
    });
  }

  Comprobador(event) {
    this.setState({
      Comprobador: event.target.value,
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

  FrecuenciaCar(event) {
    this.setState({
      FrecuenciaCar: event.target.value,
    });
  }


  options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  render() {
    return (
      <>
        {/*    <SelectComponente/>*/}
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="12">
              <Card>

                <CardHeader>
                  <h5 className="title">ECOCARDIOGRAMA ESTRÉS EJERCICIO</h5>
                </CardHeader>

                <CardBody>
                  <Form>

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
                    <Row>
                      <Col md="12">
                        <table>
                          <thead>
                            <tr>
                              <td>FASE</td>
                              <td>FC LPM</td>
                              <td>T.A. (mmHg)</td>
                              <td>DOBLE PRODUCTO</td>
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
                                  <Input placeholder="Basal F.C lpm" type="text" />
                                  <p class="hovTol1">Basal F.C lpm</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal T.A. (mmHg)" type="text" />
                                  <p class="hovTol1">Basal T.A. (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Basal doble producto" type="text" />
                                  <p class="hovTol1">Basal doble producto</p>
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
                                  <label>Etapa I:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa I F.C lpm" type="text" />
                                  <p class="hovTol1">Etapa I F.C lpm</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa I T.A. (mmHg)" type="text" />
                                  <p class="hovTol1">Etapa I T.A. (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa I doble producto" type="text" />
                                  <p class="hovTol1">Etapa I doble producto</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación Etapa I" type="text" />
                                  <p class="hovTol1">Observación Etapa I</p>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td>
                                  <label>Etapa II:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa II F.C lpm" type="text" />
                                  <p class="hovTol1">Etapa II F.C lpm</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa II T.A. (mmHg)" type="text" />
                                  <p class="hovTol1">Etapa II T.A. (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa II doble producto" type="text" />
                                  <p class="hovTol1">Etapa II doble producto</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación Etapa II" type="text" />
                                  <p class="hovTol1">Observación Etapa II</p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                  <label>Etapa III:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa III F.C lpm" type="text" />
                                  <p class="hovTol1">Etapa III F.C lpm</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa III T.A. (mmHg)" type="text" />
                                  <p class="hovTol1">Etapa III T.A. (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa III doble producto" type="text" />
                                  <p class="hovTol1">Etapa III doble producto</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación Etapa III" type="text" />
                                  <p class="hovTol1">Observación Etapa III</p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                  <label>Etapa IV:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa IV F.C lpm" type="text" />
                                  <p class="hovTol1">Etapa IV F.C lpm</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa IV T.A. (mmHg)" type="text" />
                                  <p class="hovTol1">Etapa IV T.A. (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa IV doble producto" type="text" />
                                  <p class="hovTol1">Etapa IV doble producto</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación Etapa IV" type="text" />
                                  <p class="hovTol1">Observación Etapa IV</p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                  <label>Etapa V:</label>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa V F.C lpm" type="text" />
                                  <p class="hovTol1">Etapa V F.C lpm</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa V T.A. (mmHg)" type="text" />
                                  <p class="hovTol1">Etapa V T.A. (mmHg)</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Etapa V doble producto" type="text" />
                                  <p class="hovTol1">Etapa V doble producto</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Observación Etapa V" type="text" />
                                  <p class="hovTol1">Observación Etapa V</p>
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
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Electrocardiograma estrés" type="text" />
                                  <p class="hovTol1">Electrocardiograma estrés</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Ecocardiograma estrés" type="text" />
                                  <p class="hovTol1">Ecocardiograma estrés</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>                    
                    
                      </Col>
                    </Row>
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
                                  <Input placeholder="Electrocardiograma estrés" type="text" />
                                  <p class="hovTol1">Electrocardiograma estrés</p>
                                </div>
                              </td>
                              <td>
                                <div class="containerTooltip">
                                  <Input placeholder="Ecocardiograma estrés" type="text" />
                                  <p class="hovTol1">Ecocardiograma estrés</p>
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
                                      
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>



        </div>
      </>
    );
  }
}

export default EcocardiogramaEstresEjercicio;
