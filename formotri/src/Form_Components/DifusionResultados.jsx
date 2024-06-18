
import { Input, Select, Textarea } from '@headlessui/react'

export default function DifusionResultados(props){
    const handleChange = (e) => {
        props.handleChange(e);
    }

    const handleFileChange = (e) => {
        props.handleFileChange(e);
    }

    return(
        <>
        <div className="form-group">
          <div>
            <p style={{ color: 'blue' }}>Difusión del resultado del proyecto</p>
          </div>
          <label htmlFor="diffusion">¿Ha hecho algún tipo de difusión del resultado del proyecto?</label>
          <p></p>
          <Select
            id="diffusion"
            name="diffusion"
            value={props.formData.diffusion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>
          {props.formData.diffusion === 'Sí' && (
            <>
              <div className="form-group">
                <p></p>
                <label htmlFor="diffusionMedium">Medio de difusión:</label>
                <p></p>
                <input
                  type="text"
                  id="diffusionMedium"
                  name="diffusionMedium"
                  value={props.formData.diffusionMedium}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="diffusionDate">Fecha de difusión:</label>
                <p></p>
                <Input
                  type="date"
                  id="diffusionDate"
                  name="diffusionDate"
                  value={props.formData.diffusionDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="diffusionContent">Contenido de la difusión:</label>
                <Textarea
                  id="diffusionContent"
                  name="diffusionContent"
                  value={props.formData.diffusionContent}
                  onChange={handleChange}
                  required
                ></Textarea>
              </div>
              <div className="form-group">
                <label htmlFor="diffusionImages">Adjuntar imágenes o documentos:</label>
                <Input
                  type="file"
                  id="diffusionImages"
                  name="diffusionImages"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              {props.formData.diffusionImages.length > 0 && (
                <div className="image-preview">
                  {props.formData.diffusionImages.map((file, index) => (
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
          <label htmlFor="labLogFuture">¿Alguno de los autores/inventores realizará difusión de este resultado en los próximos 3 meses?</label>
          <p></p>
          <Select
            id="labLogFuture"
            name="labLogFuture"
            value={props.formData.labLogFuture}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>
        </div>
        <div className="form-group">
          <label htmlFor="labLogStarted">¿Ha iniciado ya el proceso de difusión?</label>
          <p></p>
          <Select
            id="labLogStarted"
            name="labLogStarted"
            value={props.formData.labLogStarted}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>
        </div>
        <div className="form-group">
          <p></p>
          <label htmlFor="estado">Observaciones</label>
          <Textarea
            id="estado"
            name="estado"
            value={props.formData.estado}
            onChange={handleChange}
            maxLength={100}
            placeholder="Ingrese las observaciones"
          ></Textarea>
        </div>
        <div className="form-group">
          <label htmlFor="labLog1">¿Tiene conocimiento de que exista algún otro grupo (perteneciente o no a la ESPOL) que esté desarrollando líneas muy próximas a este resultado del proyecto?</label>
          <p></p>
          <Select
            id="labLog1"
            name="labLog1"
            value={props.formData.labLog1}
            onChange={handleChange}
            required
          >
            <option value="id¿¿">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>
        </div>
        <div className="form-group">
          <p></p>
          <label htmlFor="estado">Observaciones</label>
          <Textarea
            id="estado"
            name="estado"
            value={props.formData.estado}
            onChange={handleChange}
            maxLength={100}
            placeholder="Ingrese las observaciones"
          ></Textarea>
        </div>

      </>
    );
}