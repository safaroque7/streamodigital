function myFunction(x) {
  if (x.matches) { // If media query matches

    window.addEventListener('scroll', () => {
      const scorlled = window.scrollY;

      if (scorlled > 500) {


        const counters = document.querySelectorAll(".num");
        const speed = 59;

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const count = parseInt(counter.innerText);
            const increment = Math.trunc(target / speed);

            if (count < target) {
              counter.innerText = count + increment;
              setTimeout(updateCount, 150);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
        console.log(scorlled);

      }
    });

  } else {
    window.addEventListener('scroll', () => {
      const scorlled = window.scrollY;

      if (scorlled > 2118) {


        const counters = document.querySelectorAll(".num");
        const speed = 59;

        counters.forEach((counter) => {
          const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const count = parseInt(counter.innerText);
            const increment = Math.trunc(target / speed);

            if (count < target) {
              counter.innerText = count + increment;
              setTimeout(updateCount, 150);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });


      }
    });
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 767px)");

myFunction(x);