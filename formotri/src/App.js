import React, { useState } from 'react';
import './App.css';
import NombreResultado from './Form_Components/NombreResultado';
import OrigenResultados from './Form_Components/OrigenResultados';
import DifusionResultados from './Form_Components/DifusionResultados';
import RecursosFondos from './Form_Components/RecursosFondos';
import RelacionAutores from './Form_Components/RelacionAutores';
import FormSideNavBar from './Form_Components/FormSideNavBar';
import TerminosCondicionesI from './Form_Components/TerminosCondicionesI';

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
    authorsFromESPOL: '',
    contactAuthorName: '',
    contactAuthorSignature: '',
    contactAuthorRole: '',
    contactAuthorUnit: '',
    contactAuthorID: '',
    contactAuthorNationality: '',
    contactAuthorEmail: '',
    contactAuthorPhone: '',
    contactAuthorContributionType: '',
    contactAuthorContributionPercentage: '',
    contactAuthorIPAgreement: '',
    contactAuthorIPAgreementFile: null,
    otherAuthors: [],
    firstAuthorName: '',
    firstAuthorSignature: '',
    firstAuthorEntity: '',
    firstAuthorRole: '',
    firstAuthorID: '',
    firstAuthorNationality: '',
    firstAuthorEmail: '',
    firstAuthorPhone: '',
    firstAuthorContributionType: '',
    firstAuthorContributionPercentage: '',
    firstAuthorIPAgreement: '',
    firstAuthorIPAgreementFile: null,
    otherExternalAuthors: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleAuthorChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedAuthors = [...prevData.otherAuthors];
      updatedAuthors[index] = { ...updatedAuthors[index], [name]: value };
      return { ...prevData, otherAuthors: updatedAuthors };
    });
  };

  const handleAuthorFileChange = (e, index) => {
    const { name, files } = e.target;
    setFormData((prevData) => {
      const updatedAuthors = [...prevData.otherAuthors];
      updatedAuthors[index] = { ...updatedAuthors[index], [name]: files[0] };
      return { ...prevData, otherAuthors: updatedAuthors };
    });
  };



  const handleExternalAuthorChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedExternalAuthors = [...prevData.otherExternalAuthors];
      updatedExternalAuthors[index] = { ...updatedExternalAuthors[index], [name]: value };
      return { ...prevData, otherExternalAuthors: updatedExternalAuthors };
    });
  };

  const handleExternalAuthorFileChange = (e, index) => {
    const { name, files } = e.target;
    setFormData((prevData) => {
      const updatedExternalAuthors = [...prevData.otherExternalAuthors];
      updatedExternalAuthors[index] = { ...updatedExternalAuthors[index], [name]: files[0] };
      return { ...prevData, otherExternalAuthors: updatedExternalAuthors };
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
  };


  return (
    <div className="App">
      <header className="bg-[#243165] min-h-15 items-center justify-center text-white font-bold text-lg">
        <h1>OFICINA DE TRANSFERENCIA DE RESULTADOS DE INVESTIGACIÓN</h1>
        <h2>OTRI</h2>
      </header>
  
        {step === 1 && (
          <TerminosCondicionesI formData={formData} handleChange={handleChange} handleNext={handleNext}/>
        )}

        {step > 1 && (
          <>
          <div className='flex flex-row'>
          <FormSideNavBar step={step} setStep={setStep}/>

            <form onSubmit={handleSubmit} className="App-form relative right-52">
              {step === 2 && (
                <NombreResultado formData={formData} handleChange={handleChange} handleExit={handleExit}/>
              )}
              {step === 3 && (
                <OrigenResultados formData={formData} handleChange={handleChange}/>
              )}
              {step === 4 && (
                <DifusionResultados formData={formData} handleChange={handleChange} handleFileChange={handleFileChange}/>
              )}
              {step === 5 && (
                <RecursosFondos formData={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange}/>
              )}
              {step === 6 && (
                <RelacionAutores formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} handleAuthorChange={handleAuthorChange} handleExternalAuthorChange={handleExternalAuthorChange} handleAuthorFileChange={handleAuthorFileChange} handleExternalAuthorFileChange={handleExternalAuthorFileChange} setFormData={setFormData}/>
              )}


              <div className="">
                {step > 2 && (
                  <button type="button" onClick={handleBack} className="bg-espolBlue2 text-white border-none text-center text-md m-5 px-5 py-2 rounded-xl font-bold">
                    Atrás
                  </button>
                )}
                {step < 15 && (
                  <button type="button" onClick={handleNext} className="bg-espolBlue2 text-white border-none text-center text-md m-5 px-5 py-2 rounded-xl font-bold">
                    Siguiente
                  </button>
                )}
                {step === 15 && (
                  <button type="submit" className="bg-espolBlue2 text-white border-none text-center text-md m-5 px-5 py-2 rounded-xl font-bold">
                    Guardar y Enviar
                  </button>
                )}
               {/**  <button type="button" onClick={handleSavePartial} className="save-partial-button">
                  Guardar Parcial
                </button>*/}
              </div>
            </form>
            </div>
          </>
        )}
      
    </div>
  );
}

export default App;
