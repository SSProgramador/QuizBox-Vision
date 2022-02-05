

function Respuesta(props) {
    
    const {tipo, valoresCorrectos, valoresIncorrectos, onAction} = props;
   
    let respuestas = valoresIncorrectos.concat(valoresCorrectos);

    if (tipo === 'multiple'){
        return (
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                        {respuestas.map((item, index) => {
                            return (
                                <div key={index} className="column">
                                    <input type="radio" className="btn-check" name="opcion" id={index}  key={item} value={item} onChange={onAction}/>
                                    <label className="btn btn-outline-primary" htmlFor={index}>{item}</label>
                                </div>
                        
                            );
                        })}
                    </div>
                </div>

            </div>


        );
    }
    
    if (tipo === 'boolean' ){
        return (
            <div>
                Boolean
            </div>
        );
    }

}

export default Respuesta;