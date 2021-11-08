class Video {
    addVideo(element, title, link) {

        let videoContainerEl = document.createElement('div');
        videoContainerEl.classList.add('video-container');
        videoContainerEl.innerHTML = `
        <h4 class="video-title">${title}</h4>
        <iframe src=${link} allowfullscreen></iframe>
      `
      element.appendChild(videoContainerEl);

    }
}

export { Video }