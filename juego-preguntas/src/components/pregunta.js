import { useState } from 'react';
import Respuesta from './Respuesta';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery/dist/jquery.slim';
let preguntas = [
    {
        "category": "Science & Nature",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The &#039;Islets of Langerhans&#039; is found in which human organ?",
        "correct_answer": "Pancreas",
        "incorrect_answers": [
            "Kidney",
            "Liver",
            "Brain"
        ]
    },
    {
        "category": "Science & Nature",
        "type": "multiple",
        "difficulty": "medium",
        "question": "All the following metal elements are liquids at or near room temperature EXCEPT:",
        "correct_answer": "Beryllium",
        "incorrect_answers": [
            "Gallium",
            "Caesium",
            "Mercury"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which company did Bethesda purchase the Fallout Series from?",
        "correct_answer": "Interplay Entertainment ",
        "incorrect_answers": [
            "Capcom",
            "Blizzard Entertainment",
            "Nintendo"
        ]
    },
    {
        "category": "Geography",
        "type": "boolean",
        "difficulty": "medium",
        "question": "You could walk from Norway to North Korea while only passing through Russia.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "Science: Computers",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Time on Computers is measured via the EPOX System.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "easy",
        "question": "In Pok&eacute;mon Sun and Moon, a male Salandit can evolve to a Salazzle.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "History",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who was the first prime minister of Canada?",
        "correct_answer": "John Macdonald",
        "incorrect_answers": [
            "John Abbott",
            "Alexander Mackenzie",
            "Robert Borden"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What direction does the Statue of Liberty face?",
        "correct_answer": "Southeast",
        "incorrect_answers": [
            "Southwest",
            "Northwest",
            "Northeast"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In &quot;Call Of Duty: Zombies&quot;, completing which map&#039;s main easter egg will reward you with the achievement, &quot;Little Lost Girl&quot;?",
        "correct_answer": "Origins",
        "incorrect_answers": [
            "Revelations",
            "Moon",
            "Tranzit"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which of these Generation 1 Pokemon did NOT have an evolution in Generation 4?",
        "correct_answer": "Jynx",
        "incorrect_answers": [
            "Electabuzz",
            "Magmar",
            "Rhydon"
        ]
    }
];


function Pregunta(){
    const [opcionConfirmada, setOpcionConfirmada] = useState("");
    const [puntaje, setPuntaje] = useState(0);
    const [preguntaNumero, setNumeroPregunta] = useState(0);

    function handleAction(e) {
        console.log('Child did:', e.target.value);
        setOpcionConfirmada(e.target.value);
    }

    const confirmarRespuesta = () => {
        console.log('opcionConfirmada', opcionConfirmada);
        verificarRespuesta(opcionConfirmada)
    }

    const verificarRespuesta =  (opcionElegida) => {
        if (preguntas[preguntaNumero].correct_answer === opcionElegida){
            $("#rptaCorrecta").addClass('visible');
            setTimeout(() => {
                $("#rptaCorrecta").removeClass('visible'); 
                setNumeroPregunta(preguntaNumero + 1 );     

            }, 1500);
            setPuntaje(puntaje + 10);
        }else{
            $("#rptaInCorrecta").addClass('visible');
            setTimeout(() => {
                $("#rptaInCorrecta").removeClass('visible'); 
                setNumeroPregunta(preguntaNumero + 1 );     

            }, 1500);
        }
        
    }    

    
    return (
        <div>
            <div className="row">
                <div className="col"><b> Pregunto Nro {preguntaNumero + 1} / {preguntas.length}</b></div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="alert alert-info" role="alert">
                        {preguntas[preguntaNumero].question}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Respuesta tipo={preguntas[preguntaNumero].type} valoresCorrectos={preguntas[preguntaNumero].correct_answer} valoresIncorrectos={preguntas[preguntaNumero].incorrect_answers} onAction={handleAction}></Respuesta>    
                </div>            
            </div>        
            
            <div className="alert alert-success hidden " id="rptaCorrecta" role="alert">
                Respuesta Correcta!!
            </div>

            <div className="alert alert-danger hidden " id="rptaInCorrecta" role="alert">
                Respuesta Incorrecta :(
            </div>

            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-success" onClick={confirmarRespuesta}>Confirmar Respuesta</button>
                </div>
            </div>                
            
        </div>
    )
}

export default Pregunta;