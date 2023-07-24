import React from "react";
import "../estilos/Acordion.css"

function Acordion(props) {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h5>{props.nombre1} de {props.empresa1}</h5>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img
              className="img"
              src={require(`../imagenes/${props.img1}`)}
              alt="Inmagen"
            />
            <p>{props.info1}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h5>{props.nombre2} de {props.empresa2}</h5>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img
              className="img"
              src={require(`../imagenes/${props.img2}`)}
              alt="Inmagen"
            />
            <p>{props.info2}</p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h5>{props.nombre3} de {props.empresa3}</h5>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <img
              className="img"
              src={require(`../imagenes/${props.img3}`)}
              alt="Inmagen"
            />
            <p>{props.info3}</p>
          </div>
        </div>
      </div>
      <br/>
    </div>

  );
}

export default Acordion;
