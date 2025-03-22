const toggleBtn = document.getElementById("toggle-btn");
// console.log(toggleBtn);

toggleBtn.addEventListener("click", () => {
  let body = document.querySelector("body");
  let headerText = document.querySelector(".main-catch-heading");
  let spanText = document.querySelector("span");
  let toolsHeader = document.querySelector(".tools-heading-text");
  let anchorTags = document.querySelector(".anchor1");
  let anchorTagsTwo = document.querySelector(".anchor2");
  document.querySelector(".toggle-icon").style.backgroundColor = "grey";
  let toolsLogo = document.querySelector(".tools-logo-cont");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    headerText.classList.add("main-catch-heading-dark");
    spanText.classList.add("span-dark");
    toolsHeader.classList.add("tools-heading-text-dark");
    anchorTags.classList.add("anchor-dark");
    anchorTagsTwo.classList.add("anchor-dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    headerText.classList.remove("main-catch-heading-dark");
    spanText.classList.remove("span-dark");
    toolsHeader.classList.remove("tools-heading-text-dark");
    document.querySelector(".toggle-icon").style.backgroundColor = "black";
    anchorTags.classList.remove("anchor-dark");
    anchorTagsTwo.classList.remove("anchor-dark");
  }
});
