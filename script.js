/* =================================
   THETHRIFTSPACE WEBSITE
   ================================= */


/* WHATSAPP NUMBER */

const WHATSAPP_NUMBER = "03131119910";


/* FILTER SYSTEM */

const filterButtons = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    /* Remove active class */

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });


    /* Add active class */

    button.classList.add("active");


    /* Get selected category */

    const selectedCategory =
      button.getAttribute("data-filter");


    /* Show / hide products */

    products.forEach(product => {

      const productCategory =
        product.getAttribute("data-category");


      if (
        selectedCategory === "all" ||
        selectedCategory === productCategory
      ) {

        product.style.display = "block";

      } else {

        product.style.display = "none";

      }

    });

  });

});


/* =================================
   WHATSAPP BUY NOW
   ================================= */

const buyButtons =
  document.querySelectorAll(".buy-btn");

const toast =
  document.getElementById("toast");


buyButtons.forEach(button => {

  button.addEventListener("click", () => {

    /* Product name */

    const productName =
      button.getAttribute("data-product");


    /* WhatsApp message */

    const message =
      `Hi Thethriftspace! I want to order: ${productName}`;


    /* WhatsApp URL */

    const whatsappURL =
      `https://wa.me/${03131119910}?text=${encodeURIComponent(message)}`;


    /* Toast */

    toast.textContent =
      "Opening WhatsApp ✦";

    toast.classList.add("show");


    setTimeout(() => {

      toast.classList.remove("show");

    }, 1800);


    /* Open WhatsApp */

    window.open(
      whatsappURL,
      "_blank"
    );

  });

});


/* =================================
   SCROLL ANIMATION
   ================================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

        }

      });

    },
    {
      threshold: 0.1
    }
  );


products.forEach(product => {

  observer.observe(product);

});