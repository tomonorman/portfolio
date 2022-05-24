const modal = document.querySelector(".portfolio-modal");
const previews = document.querySelectorAll(".img-container img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

if (previews) {
  previews.forEach((preview) => {
    preview.addEventListener("click", () => {
      modal.classList.add("open");
      original.classList.add("open");
      // Dynamic change of text and image
      const originalSrc = preview.getAttribute("data-original");
      original.src = `../img/${originalSrc}`;
      if (originalSrc === "dreamfactory-guide.png") {
        imgText.insertAdjacentHTML(
          "afterbegin",
          "<h3>DreamFactory Guide</h3><p>Documentation for the DreamFactory Platform</p><p><i class='pr-1 dev-size devicon-hugo-plain colored'></i></p><div class='project-link pb-2'><a class='pr-4' href='https://guide.dreamfactory.com' target='_blank'>See the Site</a><a class='pl-4' href='https://github.com/dreamfactorysoftware/dreamfactory-book-v2' target='_blank'>See the Code</a></div>"
        );
      } else if (originalSrc === "dfsetup.png") {
        imgText.insertAdjacentHTML(
          "afterbegin",
          "<h3>DreamFactory Installer</h3><p>Install DreamFactory easily on Ubuntu, Fedora, RHEL, and Debian</p><p><i class='pr-1 dev-size devicon-bash-plain'></i></p><div class='project-link pb-2'><a class='pr-4' href='https://github.com/dreamfactorysoftware/dreamfactory/blob/master/installers/dfsetup.run' target='_blank'>Download!</a><a class='pl-4' href='https://github.com/dreamfactorysoftware/dreamfactory/tree/master/installers/source' target='_blank'>See the Code</a></div>"
        );
      } else if (originalSrc === "dreamfactory.png") {
        imgText.insertAdjacentHTML(
          "afterbegin",
          "<h3>DreamFactory</h3><p>Instantly generate REST APIs</p><p><i class='pr-1 dev-size devicon-php-plain colored'></i><i class='pr-1 dev-size devicon-laravel-plain-wordmark colored'></i><i class='pr-1 dev-size devicon-angularjs-plain colored'></i><i class='pr-1 dev-size devicon-nginx-original colored'></i><i class='pr-1 dev-size devicon-mysql-plain colored'></i><i class='pr-1 dev-size devicon-composer-line'></i></p><div class='project-link pb-2'><a class='pr-4' href='https://www.dreamfactory.com/' target='_blank'>Homepage</a><a class='pl-4' href='https://github.com/dreamfactorysoftware/dreamfactory' target='_blank'>See the Code</a></div>"
        );
      } else if (originalSrc === "portfolio.png") {
        imgText.insertAdjacentHTML(
          "afterbegin",
          "<h3>This Website!</h3><p><i class='pr-1 dev-size devicon-html5-plain colored'></i><i class='pr-1 dev-size devicon-css3-plain colored'></i><i class='pr-1 dev-size devicon-javascript-plain colored'></i><i class=' dev-size devicon-bootstrap-plain colored'></i></p><div class='project-link pb-2'><a href='https://github.com/tomonorman/portfolio' target='_blank'>See the Code</a></div>"
        );
      } else if (originalSrc === "historyboys.png") {
        imgText.insertAdjacentHTML(
          "afterbegin",
          "<h3>History Boys Japan</h3><p>Homepage for the Japanese stage production of The History Boys</p><p><i class='pr-1 dev-size devicon-hugo-plain colored'></i></p><div class='project-link pb-2'><a class='pr-4' href='https://www.historyboysjapan.com' target='_blank'>See the Site</a><a class='pl-4' href='https://github.com/tomonorman/historyboys' target='_blank'>See the Code</a></div>"
        );
      }
    });
  });
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target.classList.contains("portfolio-modal")) {
      modal.classList.remove("open");
      original.classList.remove("open");
      imgText.innerHTML = "";
    }
  });
}
