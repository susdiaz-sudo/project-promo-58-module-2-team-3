"use strict";

console.log(">> Ready :)");

import "./partials/get-avatar";

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

const arrow_design = document.querySelector(".arrow_design");
const arrow_fill = document.querySelector(".arrow_fill");
const arrow_share = document.querySelector(".arrow_share");

// DESING
const previewCard = document.querySelector(".js_container_preview");

const inputPapiro = document.querySelector(".js_inputPapiro");
const inputPiedra = document.querySelector(".js_inputPiedra");
const inputMadera = document.querySelector(".js_inputMadera");

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
const resetBtn = document.querySelector(".js_reset_btn");
const containerPreview = document.querySelector(".js_container_preview");
const previewUrl = document.querySelector(".js_preview_url");

// QUERY SHARE
const cardCreateButton = document.querySelector(".js_card_create_button");
const shareLink = document.querySelector(".js_shareLink");
const shareSuccessBox = document.querySelector(".js_shareSuccessBox");
const shareFailBox = document.querySelector(".js_shareFailBox");
const shareNav = document.querySelector(".js_shareNav");

// FUNCIONES
function resetDesignForm() {
  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="background"]'
  );
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
}

/* ----    desing    ---- */
inputPapiro.addEventListener("change", () => {
  previewCard.classList.remove("bg-piedra");
  previewCard.classList.remove("bg-madera");
  previewCard.classList.add("bg-papiro");
});

inputPiedra.addEventListener("change", () => {
  previewCard.classList.remove("bg-papiro");
  previewCard.classList.remove("bg-madera");
  previewCard.classList.add("bg-piedra");
});

inputMadera.addEventListener("change", () => {
  previewCard.classList.remove("bg-papiro");
  previewCard.classList.remove("bg-piedra");
  previewCard.classList.add("bg-madera");
});

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
  arrow_design.classList.add("rotate_arrow");
  arrow_fill.classList.remove("rotate_arrow");
  arrow_share.classList.remove("rotate_arrow");
});
titleFill.addEventListener("click", (ev) => {
  //fillSection.classList.toggle('hidden');
  designSection.classList.add("hidden");
  shareSection.classList.add("hidden");
  fillSection.classList.remove("hidden");
  arrow_fill.classList.add("rotate_arrow");
  arrow_design.classList.remove("rotate_arrow");
  arrow_share.classList.remove("rotate_arrow");
});
titleShare.addEventListener("click", (ev) => {
  //shareSection.classList.toggle('hidden');
  designSection.classList.add("hidden");
  fillSection.classList.add("hidden");
  shareSection.classList.remove("hidden");
  arrow_share.classList.add("rotate_arrow");
  arrow_design.classList.remove("rotate_arrow");
  arrow_fill.classList.remove("rotate_arrow");
});

cardCreateButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  let designValue = "";

  if (inputPapiro.checked) {
    designValue = inputPapiro.value;
  } else if (inputPiedra.checked) {
    designValue = inputPiedra.value;
  } else {
    designValue = inputMadera.value;
  }

  const cardToSend = {
    field1: 1,
    field2: designValue,
    field3: inputName.value,
    field4: inputRace.value,
    field5: inputGender.value,
    field6: inputClass.value,
    field7: inputAge.value,
    field8: inputAffiliation.value,
    photo: inputImage.files[0]
  };

  console.log(cardToSend);

if (checkFieldsToSend(cardToSend)) {
  fetch("https://dev.adalab.es/api/info/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardToSend),
  })
    .then((res) => res.json)
    .then((dataResponse) => {
      console.log(dataResponse);
      if (dataResponse.success === true) {
        shareSuccessBox.classList.remove("hidden");
        shareNav.classList.remove("hidden");
        shareLink.innerHTML = `https://dev.adalab.es/api/info/${dataResponse.infoID}`;
        shareLink.href = `https://dev.adalab.es/api/info/${dataResponse.infoID}`;
      } else {
        shareFailBox.classList.remove("hidden");
      }
    });
  }
});

function checkFieldsToSend(cardToSend){
  let allFieldsCorrect = true;

  for(const field in cardToSend) {
    console.log(cardToSend[field]);
    if(cardToSend[field] === null || cardToSend[field] === ""){
      shareFailBox.classList.remove("hidden");
      allFieldsCorrect = false;    
    }
  };

  return allFieldsCorrect;
}


resetBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  inputName.value = "";
  inputAge.value = "";
  inputRace.value = "";
  inputGender.value = "";
  inputClass.value = "";
  inputAffiliation.value = "";
  inputPiedra.value = "";
  inputMadera.value = "";
  inputPapiro.value = "";
  previewCard.classList.remove("bg-piedra", "bg-madera", "bg-papiro");
  namePreview.innerHTML = "Nombre del personaje";
  agePreview.innerHTML = "";
  racePreview.innerHTML = "";
  genderPreview.innerHTML = "";
  classPreview.innerHTML = "";
  affiliationPreview.innerHTML = "";
  resetDesignForm();
  imagePreview.style.backgroundImage = "none";
});

// CÓDIGO QUE SE LANZA CUANDO CARGA LA PÁGINA
