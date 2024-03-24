const counters = document.querySelectorAll(".num");
      const speed = 59;

      counters.forEach((counter) => {
        const updateCount = () => {
          const target = parseInt(counter.getAttribute("data-target"));
          const count = parseInt(counter.innerText);
          const increment = Math.trunc(target / speed);

          if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 40);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });