// Bài 136 137: Bài tập Active Modal phần 1 2
// Cách 1: làm bên file HTML
// Cách 2: dùng insertAdjacentHTML
/* const template = `<div class="modal">
<div class="modal-content">
<div class="modal-close">
<i class="fa fa-times modal-icon"></i>
  </div>
  <div class="modal-desc">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In obcaecati
    atque ipsam amet consectetur, optio sint accusamus ducimus temporibus
    quibusdam officia sunt porro ad perspiciatis maiores earum natus.
    Blanditiis, doloremque.
  </div>
  <div class="modal-action">
    <button class="modal-submit">Confirm</button>
    <button class="modal-cancel">Cancel</button>
    </div>
    </div>
    </div>`; */

// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

// Cách 3: những kiến thức đã học
const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
document.body.insertAdjacentElement("afterbegin", modal);
const modalClose = document.createElement("div");
modalClose.classList.add("modal-close");
const modalIcon = document.createElement("i");
modalIcon.className = "fa fa-times modal-icon";
modalContent.appendChild(modalClose);
modalClose.appendChild(modalIcon);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In obcaecatiatque ipsam amet consectetur, optio sintaccusamus ducimus temporibusquibusdam officia sunt porro ad perspiciatis maiores earum natus.Blanditiis, doloremque";
modalContent.appendChild(modalDesc);
const modalAction = document.createElement("div");
modalAction.classList.add("modal-action");
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalSubmit.textContent = "Confirm";
const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalCancel.textContent = "Cancel";
modalAction.appendChild(modalSubmit);
modalAction.appendChild(modalCancel);
modalContent.appendChild(modalAction);

const modalWrapper = document.querySelector(".modal");
if (modalWrapper) {
  setTimeout(function () {
    // modal.classList.toggle("is-show");
    modal.classList.add("is-show");
  }, 3000);
}
