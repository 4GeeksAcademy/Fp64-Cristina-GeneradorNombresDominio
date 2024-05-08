/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const pronombres = ["mi", "tu", "su"];
  const adjetivos = ["gran", "pequeño", "rápido", "lento"];
  const sustantivos = ["empresa", "negocio", "sitio", "web"];

  const combinaciones = [];

  for (const pronombre of pronombres) {
    for (const adjetivo of adjetivos) {
      for (const sustantivo of sustantivos) {
        const dominio = pronombre + adjetivo + sustantivo + ".com";
        combinaciones.push(dominio);
      }
    }
  }

  for (const dominio of combinaciones) {
    console.log(dominio);
  }
};
