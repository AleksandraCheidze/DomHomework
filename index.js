  const formElement = document.getElementById("form");
  const listElement = document.getElementById("caseList");
  const clearBtnElement = document.getElementById("clear");
  const clearOneBtn = document.getElementById("clearOne");

  const lists = [];

  const clearList = function () {
    while (listElement.hasChildNodes()) {
      listElement.firstChild.remove();
    }
  };

  const clearOne = function () {
    if (listElement.hasChildNodes()) {
      listElement.lastChild.remove();
    }
  };

  function clearInput(event) {
    event.target.case.value = "";
    event.target["dead line "].value = "";
  }

  function changeStatus(event) {
    if (event.target.style.textDecoration === "line-through") {
      event.target.style.textDecoration = "none";
    } else {
      event.target.style.textDecoration = "line-through";
    }
  }

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const list = {
      case: event.target.case.value,
      date: event.target["dead line "].value,
    };
    lists.push(list);

    const liElement = document.createElement("li");
    liElement.textContent = `${list.case} ${list.date}📌`;
    liElement.onclick = changeStatus;
    listElement.append(liElement);
    clearInput(event);
  });

  clearBtnElement.addEventListener("click", clearList);
  clearOneBtn.addEventListener("click", clearOne);

