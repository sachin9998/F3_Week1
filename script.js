let form = document.querySelector(".form");
let todocount = 0;
let startcount = 0;
let finishcount = 0;
let xcount = 0;
let ycount = 0;
let zcount = 0;
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");
form.addEventListener("submit", onsubmit);
let count = 0;
function onsubmit(event) {
  event.preventDefault();

  let name = document.querySelector(".text").value;
  let duedate = document.querySelector(".duedate").value;
  let priority = document.querySelector("#priority").value;
  let status = document.querySelector("#status").value;

  let div = document.createElement("div");
  div.classList.add("one");
  div.innerHTML = `<div class="input">
      <input type="checkbox" class="s" onclick="ischeck(this)">
      <h1 class="h1 ">${name}</h1>
      </div>
      <p class="w">${duedate}</p>
      <P class="w">${priority}</p>
      <div class="b">
      <button onclick="isdelete(this)">Delete</button>
      <button onclick="isedit(this)">Edit</button>
  </div>`;
  let x = document.querySelector(".x");
  let y = document.querySelector(".y");
  let z = document.querySelector(".z");
  let xx = document.querySelector(".xx");
  let yy = document.querySelector(".yy");
  let zz = document.querySelector(".zz");
  if (name) {
    if (status === "Inprogress") {
      startcount++;
      y.innerText = startcount;
      if (priority === "High") {
        ycount++;
        yy.innerHTML = `${ycount} of ${startcount}`;
      }
      box3.appendChild(div);
    } else if (status === "Done") {
      finishcount++;
      if (priority === "High") {
        zcount++;
        zz.innerHTML = `${zcount} of ${finishcount}`;
      }

      z.innerText = finishcount;
      box4.appendChild(div);
    } else {
      todocount++;
      if (priority === "High") {
        xcount++;
        xx.innerHTML = `${xcount} of ${todocount}`;
      }

      x.innerText = todocount;

      box2.appendChild(div);
    }
  }

  form.reset();
}
function ischeck(event) {
  let curr = event;
  let c = event.parentElement;
  let h1 = c.querySelector(".h1");

  h1.classList.toggle("s");
}
function isdelete(event) {
  let curr = event.parentElement.parentElement;

  curr.remove();
}

function isedit(event) {
  let c = event;

  c.innerHTML = "save";
  let curr = event.parentElement.parentElement;
  let h1 = curr.querySelector("h1");
  h1.contentEditable = true;
  c.addEventListener("click", () => {
    if (c.innerHTML == "save") {
      h1.contentEditable = false;
      c.innerHTML = "Edit";
    }
  });
}

let search = document.querySelector(".search");

serach.addEventListener("input", () => {
  let h1 = document.querySelector(".h1");

  if (h1.innerHTML.indexOf(search.value) > -1) {
    h1.style.display = "block";
  } else {
    h1.style.display = "none";
  }
});
