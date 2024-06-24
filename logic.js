//! Selectors
const ptn_input = document.querySelector(".ptn_input");
const input_text = document.querySelector(".input_text");
const ul_items = document.querySelector(".row_list");
console.log(ul_items);

//!AddEventListner
ptn_input.addEventListener("click", AddTasks);

//!functions
function AddTasks(e) {
  e.preventDefault();

  if (input_text.value === "") {
    alert("pleass add task in input");
  } else {
    //creat LI
    let toDo_items = document.createElement("li");
    toDo_items.classList.add("li_item");
    //creat div
    let compleat_task = document.createElement("div");
    compleat_task.classList.add("task_name");

    // add input value to div

    compleat_task.innerText = input_text.value;
    // creat button
    let btn_check = document.createElement("button");

    //!logic ptn-check
    btn_check.addEventListener("click", () => {
      toDo_items.classList.add("compleated");
    });
    //!

    btn_check.classList.add("check_ptn");
    btn_check.innerHTML = `
            <i class="fa-solid fa-check"></i>
        `;
    // creat trash button
    let trash_button = document.createElement("button");

    //!logic trash_ptn
    trash_button.addEventListener("click", () => {
      toDo_items.remove();
    });

    //!

    trash_button.classList.add("trash_ptn");
    trash_button.innerHTML = `
            <i class="fa-solid fa-trash"></i>
        `;

    let again_button = document.createElement("button");
    //!logic trash_ptn
    again_button.addEventListener("click", () => {
      toDo_items.classList.remove("compleated");
    });

    //!
    again_button.classList.add("AgainTask");
    again_button.innerHTML = `
           <i class="fa-solid fa-reply"></i>
        `;

    // add buton and div in li
    toDo_items.appendChild(compleat_task);
    toDo_items.appendChild(btn_check);
    toDo_items.appendChild(trash_button);
    toDo_items.appendChild(again_button);

    // add li to ul
    ul_items.appendChild(toDo_items);

    // remove inpute value
    input_text.value = "";
  }
}
