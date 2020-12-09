Barba.Pjax.start();

var FadeTransition = Barba.BaseTransition.extend({
  start: function () {
    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(
      this.fadeIn.bind(this)
    );
  },
  fadeOut: function () {
    this.oldContainer;
  },

  fadeIn: function () {
    this.newContainer.classList.add("slide-in");
    const that = this;
    this.newContainer.addEventListener("animationend", function () {
      that.newContainer.classList.remove("slide-in");
      that.done();
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
            if (originalSrc === "syncalyst.png") {
              imgText.insertAdjacentHTML(
                "afterbegin",
                "<h3>Syncalyst</h3><p>A meeting assistant with voice recognition and connectivity to project management tools</p><p><i class='pr-1 dev-size devicon-rails-plain colored'></i><i class='dev-size pr-1 devicon-postgresql-plain colored'></i><i class='pr-1 dev-size devicon-heroku-plain colored'></i><i class='pr-1 dev-size devicon-javascript-plain colored'></i><i class='dev-size devicon-trello-plain colored'></i></p><div class='project-link pb-2'><a class='pr-4' href='https://www.syncalyst.com' target='_blank'>See the Site</a><a class='pl-4' href='https://github.com/tomonorman/syncalyst' target='_blank'>See the Code</a></div>"
              );
            } else if (originalSrc === "syncabuddy.png") {
              imgText.insertAdjacentHTML(
                "afterbegin",
                "<h3>Syncabuddy</h3><p>A marketplace allowing users to join sports events taking place near them</p><p><i class='pr-1 dev-size devicon-rails-plain colored'></i><i class='dev-size pr-1 devicon-postgresql-plain colored'></i><i class='pr-1 dev-size devicon-heroku-plain colored'></i><i class='dev-size devicon-javascript-plain colored'></i></p><div class='project-link pb-2'><a class='pr-4' href='https://syncabuddy.herokuapp.com/' target='_blank'>See the Site</a><a class='pl-4' href='https://github.com/tomonorman/Syncabuddy' target='_blank'>See the Code</a></div>"
              );
            } else if (originalSrc === "tomococktail.png") {
              imgText.insertAdjacentHTML(
                "afterbegin",
                "<h3>Tomo's Cocktails</h3><p>A cocktail recipe organizer</p><p><i class='pr-1 dev-size devicon-rails-plain colored'></i><i class='dev-size pr-1 devicon-postgresql-plain colored'></i><i class='pr-1 dev-size devicon-heroku-plain colored'></i><i class='dev-size devicon-javascript-plain colored'></i></p><div class='project-link pb-2'><a class='pr-4' href='https://tomos-cocktails.herokuapp.com/' target='_blank'>See the Site</a><a class='pl-4' href='https://github.com/tomonorman/rails-mister-cocktail' target='_blank'>See the Code</a></div>"
              );
            } else if (originalSrc === "portfolio.png") {
              imgText.insertAdjacentHTML(
                "afterbegin",
                "<h3>This Website!</h3><p><i class='pr-1 dev-size devicon-html5-plain colored'></i><i class='pr-1 dev-size devicon-css3-plain colored'></i><i class='pr-1 dev-size devicon-javascript-plain colored'></i><i class=' dev-size devicon-bootstrap-plain colored'></i></p><div class='project-link pb-2'><a href='https://github.com/tomonorman/portfolio' target='_blank'>See the Code</a></div>"
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
    });
  },
});
/**
 * Next step, you have to tell Barba to use the new Transition
 */
Barba.Pjax.getTransition = function () {
  return FadeTransition;
};
