import React from 'react'

const Categorias = ({setCategoria}) => {
    const botones = (eve) =>{
        setCategoria(eve.target.value);
    }
    return (
            <div className="btn-categorias" class="navbar navbar-light justify-content-center"  >
                    <button class="b" className="btntec btn-primary text-bold m-3" value="technology" onClick={botones} >TECNOLOGÍA</button>
                    <button class="b" className="btnneg btn-primary text-bold m-3" value="business" onClick={botones}>NEGOCIOS</button>
                    <button class="b" className="btnent btn-primary text-bold m-3" value="entertainment" onClick={botones}>ENTRETENIMIENTO</button>
                    <button  class="b" className="btnge btn-primary text-bold m-3" value="general" onClick={botones}>GENERAL</button>
                    <button class="b"className="btnsa btn-primary text-bold m-3" value="health" onClick={botones}>SALUD</button>
                    <button class="b"className="btncs btn-primary text-bold m-3" value="science" onClick={botones}>CIENCIA</button>
                    <button class="b" className="btnde btn-primary text-bold m-3" value="sports" onClick={botones}>DEPORTES</button>
            </div>
    )
    
}
export default Categorias;