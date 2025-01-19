let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let title = document.getElementById("title-input");
let writingArea = document.getElementById("text-input");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
let post = document.getElementById("post_button");

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

//Initial Settings
const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  fontSizeRef.value = 3;
};

// main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});

advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});


//Highlight clicked button i.e. adds active className in the button's class list.
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if(needsRemoval) {
        highlighterRemover(className);
        button.classList.add("active");
      } 
      else {
        button.classList.toggle("active");
      }
    });
  });
};


const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = initializer();

post.addEventListener("click",() => {
  const obj = {};
  obj.title = title.textContent;
  obj.para = writingArea.textContent;
  if(localStorage.getItem("posts") == null) {
    localStorage.setItem("posts",JSON.stringify([obj]));
  }
  else {
    let posts = JSON.parse(localStorage.getItem("posts"));
    posts.push(obj);
    localStorage.setItem("posts",JSON.stringify(posts));
  }
  window.location.reload();
})

if(localStorage.getItem("edit_title")) {
  title.textContent = localStorage.getItem("edit_title");
  localStorage.removeItem("edit_title");
}
if(localStorage.getItem("edit_para")) {
  writingArea.textContent = localStorage.getItem("edit_para");
  localStorage.removeItem("edit_para");
}

document.getElementById('nav_close').addEventListener('click',() => {
  document.getElementById('side_nav').style.visibility = 'hidden';
});
document.getElementById('nav_button').addEventListener('click',() => {
  document.getElementById('side_nav').style.visibility = 'visible';
  document.getElementById('side_nav').style.display = 'flex';
});
