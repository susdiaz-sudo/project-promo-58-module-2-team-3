'use strict';

console.log('>> Ready :)');

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

       // QUERY FILL
const inputName = document.querySelector('.js_input_name');
const inputRace = document.querySelector('.js_input_race');
const inputGender = document.querySelector('.js_input_gender');
const inputImage = document.querySelector('.js_input_image');
const inputClass = document.querySelector('.js_input_class');
const inputAge = document.querySelector('.js_input_age');
const inputAffiliation = document.querySelector('.js_input_affiliation');

       // QUERY PREVIEW
const namePreview = document.querySelector('.js_name_preview');
const imagePreview = document.querySelector('.js_image_preview');
const racePreview = document.querySelector('.js_race_preview');
const genderPreview = document.querySelector('.js_gender_preview');
const classPreview = document.querySelector('.js_class_preview');
const agePreview = document.querySelector('.js_age_preview');
const affiliationPreview = document.querySelector('.js_affiliation_preview');

// FUNCIONES

inputName.addEventListener('input', (ev) => {
    const name = inputName.value;
    console.log('has escrito', name, 'en el form');
    namePreview.innerHTML = name;
})

inputAge.addEventListener('input', (ev) => {
    const age = inputAge.value;
    console.log('has escrito', age, 'en el form');
    agePreview.innerHTML = age;
})

// EVENTOS

// CÓDIGO QUE SE LANZA CUANDO CARGA LA PÁGINA


