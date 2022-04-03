// Collapsible
const coll = window.document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    const content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const getTime = () => {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;

  return time;
};

// Gets the first message
const firstBotMessage = () => {
  let firstMessage = "Qual de nossas modalidades gostaria de pesquisar?";
  window.document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  window.document.getElementById("userInput").scrollIntoView(false);
};

firstBotMessage();

// Retrieves the response
const getHardResponse = (userText) => {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  window.document.getElementById("chat-bar-bottom").scrollIntoView(true);
};

// Gets the text from the input box and processes it
const getResponse = () => {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "Não sei por onde começar...";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  window.document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
};

// Handles sending text via buttom clicks
const buttonSendText = (sampleText) => {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#yextInput").val("");
  $("#chatbox").append(userHtml);
  window.document.getElementById("chat-bar-bottom").scrollIntoView(true);

  //   Uncomment this if you want the bot to respond to this buttonSendText event
  setTimeout(() => {
    getHardResponse(sampleText);
  }, 1000);
};

const sendButton = () => {
  getResponse();
};
const heartButton = () => {
  buttonSendText("Adorei!");
};

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
