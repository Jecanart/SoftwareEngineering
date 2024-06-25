import { Input, Select, Textarea } from '@headlessui/react'

export default function OrigenResultados(props){
    const handleChange = (e) => {
        props.handleChange(e);
    }

    return(
        <>
        <div className="flex flex-col">
          <label htmlFor="projectName" className='text-lg m-2 text-left'>Nombre del Proyecto</label>
          <Input
            className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 '
            type="text"
            id="projectName"
            name="projectName"
            value={props.formData.projectName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectName" className='text-lg m-2 text-left'>Nombre del director del Proyecto</label>
          <Input
            className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 '
            type="text"
            id="projectDirector"
            name="projectDirector"
            value={props.formData.projectDirector}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectCode" className='text-lg m-2 text-left'>Código del proyecto 
            <span className="text-gray-500 text-sm"> (En caso de no tener, escribir N/A)</span>
          </label>
          <Input
            className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 '
            type="text"
            id="projectCode"
            name="projectCode"
            value={props.formData.projectCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="labLog" className='text-lg m-2 text-left'>Cuenta con bitácora de laboratorio?</label>
          <p></p>
          <Select
            className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 bg-white'
            id="labLog"
            name="labLog"
            value={props.formData.labLog}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="projectRelation" className='text-lg m-2 text-left'>Relación del resultado del proyecto:</label>
          <Select
            className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 bg-white'
            id="projectRelation"
            name="projectRelation"
            value={props.formData.projectRelation}
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
          </Select>
        </div>
        {props.formData.projectRelation.includes('investigacion') && (
          <div className="flex flex-col">
            <label htmlFor="researchType" className='text-lg m-2 text-left'>Tipo de investigación:</label>
            <p></p>
            <Select
              className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 bg-white'
              id="researchType"
              name="researchType"
              value={props.formData.researchType}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="I+D_basica">I+D básica</option>
              <option value="I+D_aplicada">I+D aplicada</option>
              <option value="Desarrollo_experimental">Desarrollo experimental</option>
            </Select>
          </div>
        )}
        <div className="flex flex-col">
          <div className='flex flex-col'>
            <label htmlFor="otherRelation" className='text-lg m-2 mb-0 text-left' >En caso que la relación del resultado del proyecto sea otro, especifique.  </label>
            <span className="text-gray-500 text-sm text-left ml-2 mb-2">Caso contrario, indique que no aplica (escriba N/A)</span>
          </div>
          <Input
            className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 '
            type="text"
            id="otherRelation"
            name="otherRelation"
            value={props.formData.otherRelation}
            onChange={handleChange}
            required
          />
        </div>
        {props.formData.projectRelation.includes('proyecto_investigacion') && (
          <div className="flex flex-col">
            <label htmlFor="decanatoPlatform" className='text-lg m-2 mb-0 text-left'>Su proyecto está registrado en la plataforma de decanato de investigación?</label>
            <Select
              className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 bg-white'
              id="decanatoPlatform"
              name="decanatoPlatform"
              value={props.formData.decanatoPlatform}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </Select>
            {props.formData.decanatoPlatform === 'Sí' && (
              <div className="">
                <label htmlFor="estado" className='text-lg m-2 mb-0 text-left'>Estado:</label>
                <Textarea
                  className='m-1 rounded-lg border-tabGray border-2 w-full resize-none'
                  id="estado"
                  name="estado"
                  value={props.formData.estado}
                  onChange={handleChange}
                  maxLength={100}
                  placeholder="Ingrese el estado..."
                  required
                ></Textarea>
              </div>
            )}
          </div>
        )}
      </>
    );
}