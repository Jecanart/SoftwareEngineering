import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    projectDirector: '',
    projectCode: '',
    projectDescription: '',
    projectNeeds: '',
    fundingRequired: '',
    agreementAccepted: false,
    labLog: '',
    projectRelation: '',
    researchType: '',
    otherRelation: '',
    decanatoPlatform: '',
    estado: '',
    diffusion: '',
    diffusionMedium: '',
    diffusionDate: '',
    diffusionContent: '',
    diffusionImages: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: Array.from(files),
    });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleExit = () => {
    setStep(1);
  };

  const handleSavePartial = () => {
    console.log('Saved partially:', formData);
    alert('Progreso guardado parcialmente.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ESCUELA SUPERIOR POLITÉCNICA DEL LITORAL</h1>
        <h2>OTRI</h2>

        {step === 1 && (
          <div>
            <p>Este formulario tiene como objetivo suministrar a la Oficina de Transferencia de Resultados de Investigación (OTRI) de la ESPOL, la información necesaria para llevar a cabo la gestión de la protección de la Propiedad Intelectual como resultado de proyectos académicos, y proyectos de gestión educativa y administrativa</p>
            <p></p>
            <p>Este documento contiene datos sensibles y propietarios cuya divulgación no autorizada podría tener consecuencias adversas. Por lo tanto, se solicita a todos los receptores y manipuladores que toda la información contenida en este documento sea tratada con confidencialidad.</p>
            <p></p>
            <p>Por favor, una vez completado y firmado el documento por todos los autores e inventores, remita el mismo al correo: <a href="mailto:otri@espol.edu.ec">otri@espol.edu.ec</a></p>
            <label>
              <input
                type="checkbox"
                name="agreementAccepted"
                checked={formData.agreementAccepted}
                onChange={handleChange}
              />
              Acepto los términos y condiciones
            </label>
            <div className="button-group">
              <button
                type="button"
                onClick={handleNext}
                disabled={!formData.agreementAccepted}
                className={`next-button ${formData.agreementAccepted ? '' : 'disabled-button'}`}
              >
                Empezar Formulario
              </button>
            </div>
          </div>
        )}

        {step > 1 && (
          <>
            <nav className="nav-steps">
              <button
                className={`nav-button ${step === 2 ? 'active' : ''}`}
                onClick={() => setStep(2)}
              >
                A
              </button>
              <span className="nav-space"></span>
              <button
                className={`nav-button ${step === 3 ? 'active' : ''}`}
                onClick={() => setStep(3)}
              >
                B
              </button>
              <span className="nav-space"></span>
              <button
                className={`nav-button ${step === 4 ? 'active' : ''}`}
                onClick={() => setStep(4)}
              >
                C
              </button>
              <span className="nav-space"></span>
              <button
                className={`nav-button ${step === 5 ? 'active' : ''}`}
                onClick={() => setStep(5)}
              >
                D
              </button>
            </nav>

            <form onSubmit={handleSubmit} className="App-form">
              {step === 2 && (
                <div className="form-group">
                  <label htmlFor="name">Nombre del resultado del proyecto:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="button-group">
                    <button type="button" onClick={handleExit} className="exit-button">
                      Salir
                    </button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <>
                  <div className="form-group">
                    <div>
                      <p style={{ color: 'blue' }}>Origen del resultado del proyecto</p>
                    </div>
                    <label htmlFor="projectName">Nombre del Proyecto</label>
                    <input
                      type="text"
                      id="projectName"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="projectName">Nombre del director del Proyecto</label>
                    <input
                      type="text"
                      id="projectDirector"
                      name="projectDirector"
                      value={formData.projectDirector}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="projectCode">Código del proyecto </label>
                    <span className="small-text">(En caso de no tener, escribir N/A)</span>
                    <input
                      type="text"
                      id="projectCode"
                      name="projectCode"
                      value={formData.projectCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="labLog">Cuenta con bitácora de laboratorio?</label>
                    <p></p>
                    <select
                      id="labLog"
                      name="labLog"
                      value={formData.labLog}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="projectRelation">Relación del resultado del proyecto:</label>
                    <select
                      id="projectRelation"
                      name="projectRelation"
                      value={formData.projectRelation}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="proyecto_investigacion_publica">Proyecto de investigación con financiación pública</option>
                      <option value="proyecto_investigacion_privada">Proyecto de investigación con financiación privada</option>
                      <option value="programa_vinculacion">Programa de vinculación</option>
                      <option value="programa_docencia">Programa de docencia</option>
                      <option value="programa_docencia_grado">Proyecto de docencia (titulación de grado)</option>
                      <option value="programa_docencia_materias">Proyecto de docencia (materias)</option>
                      <option value="programa_docencia_postgrado">Proyecto de docencia (titulación de postgrado)</option>
                      <option value="programa_docencia_gestion">Proyecto de gestión educativa y administrativa</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  {formData.projectRelation.includes('investigacion') && (
                    <div className="form-group">
                      <label htmlFor="researchType">Tipo de investigación:</label>
                      <p></p>
                      <select
                        id="researchType"
                        name="researchType"
                        value={formData.researchType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="I+D_basica">I+D básica</option>
                        <option value="I+D_aplicada">I+D aplicada</option>
                        <option value="Desarrollo_experimental">Desarrollo experimental</option>
                      </select>
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="otherRelation">En caso que la relación del resultado del proyecto sea otro, especifique.  </label>
                    <span className="small-text">Caso contrario, indique que no aplica (escriba N/A)</span>
                    <input
                      type="text"
                      id="otherRelation"
                      name="otherRelation"
                      value={formData.otherRelation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {formData.projectRelation.includes('proyecto_investigacion') && (
                    <div className="form-group">
                      <label htmlFor="decanatoPlatform">Su proyecto está registrado en la plataforma de decanato de investigación?</label>
                      <p></p>
                      <select
                        id="decanatoPlatform"
                        name="decanatoPlatform"
                        value={formData.decanatoPlatform}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="Sí">Sí</option>
                        <option value="No">No</option>
                      </select>
                      {formData.decanatoPlatform === 'Sí' && (
                        <div className="form-group">
                          <p></p>
                          <label htmlFor="estado">Estado:</label>
                          <textarea
                            id="estado"
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                            maxLength={100}
                            placeholder="Ingrese el estado..."
                            required
                          ></textarea>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
              {step === 4 && (
                <>
                  <div className="form-group">
                    <label htmlFor="diffusion">¿Ha hecho algún tipo de difusión del resultado del proyecto?</label>
                    <p></p>
                    <select
                      id="diffusion"
                      name="diffusion"
                      value={formData.diffusion}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                    {formData.diffusion === 'Sí' && (
                      <>
                        <div className="form-group">
                          <p></p>
                          <label htmlFor="diffusionMedium">Medio de difusión:</label>
                          <p></p>
                          <input
                            type="text"
                            id="diffusionMedium"
                            name="diffusionMedium"
                            value={formData.diffusionMedium}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="diffusionDate">Fecha de difusión:</label>
                          <p></p>
                          <input
                            type="date"
                            id="diffusionDate"
                            name="diffusionDate"
                            value={formData.diffusionDate}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="diffusionContent">Contenido de la difusión:</label>
                          <textarea
                            id="diffusionContent"
                            name="diffusionContent"
                            value={formData.diffusionContent}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="diffusionImages">Adjuntar imágenes o documentos:</label>
                          <input
                            type="file"
                            id="diffusionImages"
                            name="diffusionImages"
                            multiple
                            onChange={handleFileChange}
                          />
                        </div>
                        {formData.diffusionImages.length > 0 && (
                          <div className="image-preview">
                            {formData.diffusionImages.map((file, index) => (
                              <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`preview ${index}`}
                                className="preview-image"
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="labLog">¿Alguno de los autores/inventores realizará difusión de este resultado en los próximos 3 meses?</label>
                    <p></p>
                    <select
                      id="labLog"
                      name="labLog"
                      value={formData.labLog}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="labLog">¿Ha iniciado ya el proceso de difusión?</label>
                    <p></p>
                    <select
                      id="labLog"
                      name="labLog"
                      value={formData.labLog}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p></p>
                    <label htmlFor="estado">Observaciones</label>
                    <textarea
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="Ingrese las observaciones"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="labLog">¿Tiene conocimiento de que exista algún otro grupo (perteneciente o no a la ESPOL) que esté desarrollando líneas muy próximas a este resultado del proyecto?</label>
                    <p></p>
                    <select
                      id="labLog"
                      name="labLog"
                      value={formData.labLog}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="Sí">Sí</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <p></p>
                    <label htmlFor="estado">Observaciones</label>
                    <textarea
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      maxLength={100}
                      placeholder="Ingrese las observaciones"
                    ></textarea>
                  </div>
                </>
              )}
              <div className="button-group">
                {step > 2 && (
                  <button type="button" onClick={handleBack} className="back-button">
                    Atrás
                  </button>
                )}
                {step < 5 && (
                  <button type="button" onClick={handleNext} className="next-button">
                    Siguiente
                  </button>
                )}
                {step === 5 && (
                  <button type="submit" className="submit-button">
                    Guardar y Enviar
                  </button>
                )}
                <button type="button" onClick={handleSavePartial} className="save-partial-button">
                  Guardar Parcial
                </button>
              </div>
            </form>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
