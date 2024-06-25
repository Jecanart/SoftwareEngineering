
export default function TerminosCondicionesI(props){

    const handleChange = (e) => {
        props.handleChange(e);
    }

    const handleNext = (e) => {
        props.handleNext(e);
    }

    return(
        <div className="relative top-36 ">
            <p className="text-center text-lg px-80 mb-10">Este formulario tiene como objetivo suministrar a la Oficina de Transferencia de Resultados de Investigación (OTRI) de la ESPOL, la información necesaria para llevar a cabo la gestión de la protección de la Propiedad Intelectual como resultado de proyectos académicos, y proyectos de gestión educativa y administrativa
             
             Este documento contiene datos sensibles y propietarios cuya divulgación no autorizada podría tener consecuencias adversas. Por lo tanto, se solicita a todos los receptores y manipuladores que toda la información contenida en este documento sea tratada con confidencialidad.
              
             Por favor, una vez completado y firmado el documento por todos los autores e inventores, remita el mismo al correo: <a href="mailto:otri@espol.edu.ec">otri@espol.edu.ec</a>
            </p>
            <label className="text-lg">
              <input 
                className="mb-5 mr-2"
                type="checkbox"
                name="agreementAccepted"
                checked={props.formData.agreementAccepted}
                onChange={handleChange}
              />
              Acepto los términos y condiciones
            </label>
            <div className="button-group">
              <button
                type="button"
                onClick={handleNext}
                disabled={!props.formData.agreementAccepted}
                className={`bg-espolBlue2 text-white border-none text-center text-md m-5 px-5 py-2 rounded-xl font-bold ${props.formData.agreementAccepted ? '' : 'disabled-button'}`}
              >
                Empezar Formulario
              </button>
            </div>
        </div>
    );
}