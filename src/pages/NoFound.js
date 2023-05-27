import React from 'react';
import '../styles/commons.css';
import '../styles/notFound.css';

const NoFound = () => (
  <div id="notFound" className="d-flex flex-column">
    <h1 className="notFoundMesagge text-center">SÓLO EN CASO DE QUE ALGÚN GATO LOCO, ALGÚN DÍA, ENCUENTRE ESTA NOTA.</h1>
    <p className="notFoundMesagge text-center">
      ¡OJALÁ QUE NUNCA OCURRA!
    </p>
    <br />

    <p className="text-justify">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No tengo claro por dónde comenzar…
    </p>
    <br />

    <p className="text-justify">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resultaría sobremanera
      sencillo hacerlo respondiendo a la manida duda
      existencial ¿quién soy? Si tan sólo lo supiera, pero incluso de ello he
      comenzado a dudar estando aquí… Resultaría igual de sencillo hacerlo
      respondiendo a la pregunta tan recurrente en el ámbito teatral ¿en dónde
      estoy? Si tan sólo poseyera dicha información, pero ni mapa, ni brújula,
      ni sistema de posicionamiento han sido capaces de brindar datos útiles…
      Pareciera, por disparatado que suene, que he dejado de existir o, cuando
      menos, que alcancé la frontera entre lo existente y lo inexistente; de
      otro modo no encuentro explicación a este blanco infinito devorándolo todo.
    </p>
    <br />

    <p className="text-justify">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡NaH te creas, sólo has encontrado el
      infausto error 404 de esta nave de
      los gatos locos! Desconozco qué estabas buscando, pero aquí no está… Quizá
      giraste a la derecha cuando debías hacerlo a la izquierda, quizá giraste
      a la izquierda cuando debías hacerlo a la derecha, o quizá seguiste de largo
      cuando no debías hacerlo. Sea como sea, lamento informarte que, en alguna
      de las encrucijadas, erraste el camino; por aquí ni los estepicursores pasan.
    </p>
    <br />

    <p className="text-end">
      Desanda tus pasos y no olvides
      cerrar la puerta al salir.
    </p>
    <br />

    <span className="text-center"> Atentamente:</span>
    <div>
      <p className="mx-auto" id="firma" />
    </div>

    <div>
      <p className="mx-auto" id="image" />
    </div>
  </div>
);

export default NoFound;
