class Video {
    addVideo(element, title, date, user, link) {

      let articleEl = document.createElement('article');

      // articleEl.classList.add('mb-4')

      articleEl.innerHTML = `
        <header class="mb-4">
        <h1 class="fw-bolder mb-1">${title}</h1>
        <div class="text-muted fst-italic mb-2">Posted on ${date} by ${user}</div>
        </header>
        <figure>
          <div class="iframe-container">
            <iframe src=${link} allowfullscreen></iframe>
          </div>
        </figure>
        `

      element.appendChild(articleEl);

    }
}

export { Video }

// need to add date, user
// video_id | title | date | user | link 