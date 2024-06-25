import { Input, Button } from '@headlessui/react'

export default function NombreResultado(props){
    const handleChange = (e) => {
        props.handleChange(e);
        console.log(props.formData.name)
    }
    const handleExit = () => {
        props.handleExit();
    }

    return(
        <div className="">
          <div className='flex flex-col'>
            <label htmlFor="name" className='text-lg m-2 text-left'>Nombre del resultado del proyecto:</label>
            <Input
              className='m-1 rounded-lg border-[#243165] border-2 w-full size-10 '
              type="text"
              id="name"
              name="name"
              value={props.formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-3">
            <Button type="button" onClick={handleExit} className="exit-button">
              Salir
            </Button>
          </div>
      </div>
    );
}