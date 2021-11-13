class Video {
    addVideo(element, title, link) {

      let articleEl = document.createElement('article');

      articleEl.innerHTML = `
        <header class="mb-4">
        <h1 class="fw-bolder mb-1">${title}</h1>
        <div class="text-muted fst-italic mb-2">Posted on November 11, 2021 by Kiki</div>
        </header>
        <figure class="mb-4">
          <div class="iframe-container">
            <iframe src=${link} allowfullscreen></iframe>
          </div>
        </figure>
        `

      element.appendChild(articleEl);

    }
}

export { Video }