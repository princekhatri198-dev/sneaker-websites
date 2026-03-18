let count = 0;

function increase(){
  count++;
  document.getElementById("count").innerText = count;
}

function decrease(){
  if(count > 0){
    count--;
    document.getElementById("count").innerText = count;
  }
}

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  link.addEventListener("click", () => {
    
    // remove active from all
    links.forEach(l => l.classList.remove("active"));
    
    // add to clicked one
    link.classList.add("active");
  });
});