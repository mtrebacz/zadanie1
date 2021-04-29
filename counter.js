let count = 0;

const wartosc = document.querySelector("#wartosc");
const przyciski = document.querySelectorAll(".button");

przyciski.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("zmniejsz")) {   /* zmniejszanie/zwiększanie licznika */
      count--;
    } else if (styles.contains("zwieksz")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {    /* zmiana koloru wyswietlanej liczby */ 
      wartosc.style.color = "green";
    }
    if (count < 0) {
      wartosc.style.color = "red";
    }
    if (count === 0) {
      wartosc.style.color = "black";
    }
    wartosc.textContent = count;
  });
});