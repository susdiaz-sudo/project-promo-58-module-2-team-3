"use strict";

console.log(">> Ready :)");

//-Cosas:
//--Cambiar la tarjeta cuando la usuaria escribe en los <input>
//--Cambiar la tarjeta cuando la usuaria hace click en una paleta
//--Abre/cierra secciones cuando la usuaria hace click en las flechitas
//--Borrar el form y la tarjeta cuando la usuaria hace click en Reset
//--Cambiar la tarjeta cuando la usuaria hace click en añadir imagen
//--Cuando la usuaria hace click en comparte ->
//-----Envia los datos del form al servidor
//-----Mostramos el enlace/botón

// QUERY-SELECTOR

//--Hidden--
const titleDesign = document.querySelector(".js_titleDesign");
const designSection = document.querySelector(".js_designSection");

const titleFill = document.querySelector(".js_titleFill");
const fillSection = document.querySelector(".js_fillSection");

const titleShare = document.querySelector(".js_titleShare");
const shareSection = document.querySelector(".js_shareSection");

// QUERY FILL
const inputName = document.querySelector(".js_input_name");
const inputRace = document.querySelector(".js_input_race");
const inputGender = document.querySelector(".js_input_gender");
const inputImage = document.querySelector(".js_input_image");
const inputClass = document.querySelector(".js_input_class");
const inputAge = document.querySelector(".js_input_age");
const inputAffiliation = document.querySelector(".js_input_affiliation");

// QUERY PREVIEW
const namePreview = document.querySelector(".js_name_preview");
const imagePreview = document.querySelector(".js_image_preview");
const racePreview = document.querySelector(".js_race_preview");
const genderPreview = document.querySelector(".js_gender_preview");
const classPreview = document.querySelector(".js_class_preview");
const agePreview = document.querySelector(".js_age_preview");
const affiliationPreview = document.querySelector(".js_affiliation_preview");
const resetBtn = document.querySelector("js_reset_btn");
const containerPreview = document.querySelector("js_container_preview");
const previewUrl = document.querySelector("js_preview_url");

// FUNCIONES

inputName.addEventListener("input", (ev) => {
  const name = inputName.value;
  namePreview.innerHTML = name;
});

inputAge.addEventListener("input", (ev) => {
  const age = inputAge.value;
  agePreview.innerHTML = age;
});
inputRace.addEventListener("input", (ev) => {
  const race = inputRace.value;
  racePreview.innerHTML = race;
});
inputGender.addEventListener("input", (ev) => {
  const gender = inputGender.value;
  genderPreview.innerHTML = gender;
});
inputClass.addEventListener("input", (ev) => {
  const fillClass = inputClass.value;
  classPreview.innerHTML = fillClass;
});
inputAffiliation.addEventListener("input", (ev) => {
  const affiliation = inputAffiliation.value;
  affiliationPreview.innerHTML = affiliation;
});

// EVENTOS

//--Hidden--
titleDesign.addEventListener("click", (ev) => {
  //designSection.classList.toggle('hidden');
  fillSection.classList.add("hidden");
  shareSection.classList.add("hidden");
  designSection.classList.remove("hidden");
});
titleFill.addEventListener("click", (ev) => {
  //fillSection.classList.toggle('hidden');
  designSection.classList.add("hidden");
  shareSection.classList.add("hidden");
  fillSection.classList.remove("hidden");
});
titleShare.addEventListener("click", (ev) => {
  //shareSection.classList.toggle('hidden');
  designSection.classList.add("hidden");
  fillSection.classList.add("hidden");
  shareSection.classList.remove("hidden");
});

// CÓDIGO QUE SE LANZA CUANDO CARGA LA PÁGINA
