function Respuesta(props) {
    const {tipo, valoresCorrectos, valoresIncorrectos} = props;
    let respuestas = valoresIncorrectos.concat(valoresCorrectos);

    if (tipo === 'multiple'){
        return (
            <div className="row">
                {respuestas.map((item, index) => {
                    return (
                        <div key={index} className="column">
                            <input type="radio" name="opcion" value={item}/>
                            <label>{item}</label>
                        </div>
                    );
                })}
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