import { useState } from "react";

export default function FormSideNavBar(props){
    const setStep = (n) => {
        props.setStep(n);
    }
    
    return(
        <aside class="ml-[-100%] z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[30%] xl:w-[25%] 2xl:w-[20%] overflow-y-scroll">
    <div className="text-justify">
        <div class="-mx-6 px-6 py-4 border-b">
            <span className="text-gray-700 text-xl py-3" > Formulario de comunicación de resultados </span>
        </div>
        <ul class="space-y-2 tracking-wide mt-8">
        <li>
                <a href="#"
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===2 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}                          
                onClick={() => setStep(2)}
                          >
                    <span class="-mr-1 font-medium">NOMBRE DEL RESULTADO DEL PROYECTO </span>
                </a>
            </li>
            <li>
                <a href="#"
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===3 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}                          
                onClick={() => setStep(3)}
                          >
                    <span class="-mr-1 font-medium">ORIGEN DEL RESULTADO DE PROYECTO </span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===4 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(4)}
                >
                   <span class="">DIFUSIÓN DEL RESULTADO DE PROYECTO </span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===5 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(5)}
                >                    
                    <span class="">RECURSOS DE FONDOS</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===6 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(6)}
                >   
                    <span class="">RELACIÓN DE AUTORES/INVENTORES Y DECLARACIÓN DE PARTICIPACIONES</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===7 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(7)}
                >   
                    <span class="">DESCRIPCIÓN DEL RESULTADO DEL PROYECTO</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===8 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(8)}
                >   
                    <span class="">PROPIEDAD INTELECTUAL</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===9 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(9)}
                >
                    <span class="">MATERIALES</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===10 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(10)}
                >                      
                   <span class="">SOFTWARE/CÓDIGO FUENTE</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===11 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(11)}
                >                      
                   <span class="">INFORMACIÓN DE MERCADO</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===12 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(12)}
                >                      
                   <span class="">INFORMACIÓN PARA POSIBLE EXPLOTACIÓN DE RESULTADOS DE PROYECTOS </span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===13 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(13)}
                >                      
                   <span class="">DESARROLLO FUTURO EN EL PROYECTO</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===14 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(14)}
                >                      
                   <span class="">SOLICITUD DE PROTECCIÓN DE PROPIEDAD INTELECTUAL</span>
                </a>
            </li>
            <li>
                <a href="#" 
                class={`px-4 py-3 flex items-center space-x-4 group ${props.step===15 ? 'rounded-lg text-white bg-[#006EC8]' : 'rounded-md text-gray-700 '}`}
                onClick={() => setStep(15)}
                >                      
                   <span class="">DECLARACIÓN EXPRESA</span>
                </a>
            </li>
        </ul>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-700 group">
            <svg class="h-6 w-6 text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  
            <path d="M20 12h-13l3 -3m0 6l-3 -3" /></svg>
            <span class="">Regresar</span>
        </button>
    </div>
</aside>
    );
}