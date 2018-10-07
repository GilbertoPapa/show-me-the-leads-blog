// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBUi05h6AW2ZjW0f2u1tGqrgUAg6yRLvLs",
  authDomain: "show-me-the-leads-blog-87279.firebaseapp.com",
  databaseURL: "https://show-me-the-leads-blog-87279.firebaseio.com",
  projectId: "show-me-the-leads-blog-87279",
  storageBucket: "show-me-the-leads-blog-87279.appspot.com",
  messagingSenderId: "185684396743"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

var planilha = "http://myliveonline.com.br/ROI.xlsx";

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  var nomeInput = document.getElementById('nome').value;
  var emailInput = document.getElementById('email').value;
  var empresaInput = document.getElementById('empresa').value;
  var currentDate = new Date().toString();
  var currentIp = getIp;

  // Save message
  saveMessage(nomeInput, emailInput, empresaInput, currentDate, currentIp);

  // Clear form
  document.getElementById('contactForm').reset();
  window.open(planilha,'Download');

}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nomeInput, emailInput, empresaInput, currentDate, currentIp) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nomeInput: nomeInput,
    emailInput: emailInput,
    empresaInput: empresaInput,
    currentDate: currentDate,
    currentIp: currentIp
  });
}

function dadosCadastrados() {
  confirm("Seus dados foram cadastrados !");
}
