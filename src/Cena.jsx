import React from 'react'



function Cena({nombre,precio,color,setTotal}) {

  // importa imagen desde una url 
    const ruta="http://www.html6.es/img/rey_";
    const imagen =`${ruta}${nombre.toLowerCase()}.png`;


    const comprar =(elemento)=>{
      setTotal((e)=>e+precio);
      elemento.target.parentNode.parentNode.style.display="none";
    }





  return (
    <div className="rey" style={{backgroundColor:color}}>
        <h1>{nombre}</h1>
       <img src={imagen} alt=''/>
     


        <div className='titulo'>Precio:</div>
        <div className='precio'>{precio} € </div>

            <div>
                <button className='btn-comprar' onClick={comprar}> Comprar</button>
            </div>
    </div>
  )
}

export default Cena