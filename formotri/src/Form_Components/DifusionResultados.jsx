
import { Input, Radio, RadioGroup, Select, Textarea } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function DifusionResultados(props){
    const handleChange = (e) => {
        props.handleChange(e);
        setSelected()
    }

    const handleFileChange = (e) => {
        props.handleFileChange(e);
    }

    const rbOptions = [
      {name: 'Si'},
      {name: 'No'}
    ]

    let [selected, setSelected] = useState (rbOptions[0])

    return(
        <>
        <div className="">
          <div className='flex flex-col'>
          <label htmlFor="diffusion" className='text-lg m-2 text-left'>¿Ha hecho algún tipo de difusión del resultado del proyecto?</label>

          <RadioGroup value={selected} onChange={setSelected} className='flex flex-row gap-x-6 m-2' aria-label="Server size">
            {rbOptions.map((rbOptions) => (
                <Radio key={rbOptions.name} value={rbOptions}  >
                  <div className='flex flex-row gap-x-1'>
                    <p className="font-semibold text-black">{rbOptions.name}</p>
                    <CheckCircleIcon className="size-6 fill-tabGray opacity-100 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
            ))}
          </RadioGroup>

          {/** <Select
            className='m-1 rounded-lg border-espolBlue border-2 w-full size-10 bg-white'
            id="diffusion"
            name="diffusion"
            value={props.formData.diffusion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>*/}
          </div>
          {props.formData.diffusion === 'Sí' && (
            <>
              <div className="flex flex-col">
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
              <div className="flex flex-col">
                <label htmlFor="diffusionDate" className='text-lg m-2 text-left'>Fecha de difusión:</label>
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
              <div className="flex flex-col">
                <label htmlFor="diffusionContent" className='text-lg m-2 text-left'>Contenido de la difusión:</label>
                <Textarea
                  id="diffusionContent"
                  name="diffusionContent"
                  value={props.formData.diffusionContent}
                  onChange={handleChange}
                  required
                ></Textarea>
              </div>
              <div className="flex flex-col">
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
        <div className="flex flex-col">
          <label htmlFor="labLogFuture" className='text-lg m-2 text-left'>¿Alguno de los autores/inventores realizará difusión de este resultado en los próximos 3 meses?</label>
          <p></p>
          <RadioGroup value={selected} onChange={setSelected} className='flex flex-row gap-x-6 m-2' aria-label="Server size">
            {rbOptions.map((rbOptions) => (
                <Radio key={rbOptions.name} value={rbOptions}  >
                  <div className='flex flex-row gap-x-1'>
                    <p className="font-semibold text-black">{rbOptions.name}</p>
                    <CheckCircleIcon className="size-6 fill-tabGray opacity-100 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
            ))}
          </RadioGroup>
          {/** <Select
            id="labLogFuture"
            name="labLogFuture"
            value={props.formData.labLogFuture}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>*/}
        </div>
        <div className="flex flex-col">
          <label htmlFor="labLogStarted" className='text-lg m-2 text-left'>¿Ha iniciado ya el proceso de difusión?</label>
          <p></p>
          <RadioGroup value={selected} onChange={setSelected} className='flex flex-row gap-x-6 m-2' aria-label="Server size">
            {rbOptions.map((rbOptions) => (
                <Radio key={rbOptions.name} value={rbOptions}  >
                  <div className='flex flex-row gap-x-1'>
                    <p className="font-semibold text-black">{rbOptions.name}</p>
                    <CheckCircleIcon className="size-6 fill-tabGray opacity-100 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
            ))}
          </RadioGroup>
          {/** <Select
            id="labLogStarted"
            name="labLogStarted"
            value={props.formData.labLogStarted}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>*/}
        </div>
        <div className="flex flex-col">
          <p></p>
          <label htmlFor="estado" className='text-lg m-2 text-left'>Observaciones</label>
          <Textarea
            className='m-1 rounded-lg border-tabGray border-2 w-full resize-none'
            id="estado"
            name="estado"
            value={props.formData.estado}
            onChange={handleChange}
            maxLength={100}
            placeholder="Ingrese las observaciones"
          ></Textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="labLog1" className='text-lg m-2 text-left'>¿Tiene conocimiento de que exista algún otro grupo (perteneciente o no a la ESPOL) que esté desarrollando líneas muy próximas a este resultado del proyecto?</label>
          <p></p>
          <RadioGroup value={selected} onChange={setSelected} className='flex flex-row gap-x-6 m-2' aria-label="Server size">
            {rbOptions.map((rbOptions) => (
                <Radio key={rbOptions.name} value={rbOptions}  >
                  <div className='flex flex-row gap-x-1'>
                    <p className="font-semibold text-black">{rbOptions.name}</p>
                    <CheckCircleIcon className="size-6 fill-tabGray opacity-100 transition group-data-[checked]:opacity-100" />
                  </div>
                </Radio>
            ))}
          </RadioGroup>
          {/** <Select
            id="labLog1"
            name="labLog1"
            value={props.formData.labLog1}
            onChange={handleChange}
            required
          >
            <option value="id¿¿">Seleccione una opción</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </Select>*/}
        </div>
        <div className="flex flex-col">
          <p></p>
          <label htmlFor="estado" className='text-lg m-2 text-left'>Observaciones</label>
          <Textarea
            className='m-1 rounded-lg border-tabGray border-2 w-full resize-none'
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