(() => {
  const navbar = document.querySelector("nav");
  const nav_container = document.querySelector(".navbar");
  const nav_link = document.querySelectorAll(".nav_link");
  const nav = navbar.style;
  const brand = document.querySelector("#brand");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (Math.round(scroll).toString() > 50) {
      nav_link.forEach(n => {
        n.style.color = "gray";
      });
      nav.backgroundColor = "white";
      nav_container.style.padding = "5px 0px";
      nav_container.style.borderBottom = "black";
      brand.src = "/Circus_white.svg";
      nav.boxShadow = "0px 1px 25px rgb(56, 56, 56)";
    } else {
      nav_link.forEach(n => {
        n.style.color = "rgb(224, 224, 224)";
      });
      nav_container.style.padding = "30px";
      nav.backgroundColor = null;
      brand.src = "/Circus.svg";
      nav.boxShadow = null;
    }
  });


  //* \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\ // \\

  const gallery_container = document.querySelector(".gallery");
  const jumbo = document.querySelector(".jumbo");

  // ketika gallery_container di click
  gallery_container.addEventListener("click", e => {
    // lacak keberadaan mouse
    // jika yg di click adalah className= "thumb"
    if (e.target.className == "thumb") {
      // className= "jumbo" / img yg besar
      // src jumbo ganti dengan src className= "thumb"
      jumbo.src = e.target.src;
      // tambah animasi
      jumbo.classList.add("fade");
      // hilangkan fade karena jika tidak animasi hanya akan berjalan 1x
      setTimeout(() => {
        jumbo.classList.remove("fade");
      }, 1000);
    }
  });
})();
