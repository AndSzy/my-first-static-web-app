import { Video } from './modules/video.js';
import { convertDate } from './modules/functions.js';

const postsEl = document.getElementById('posts');

let newVideo = new Video;

fetch('https://lechia-api.azurewebsites.net/videos')
.then(response => response.json())
.then(videos => {

  videos.forEach((video) => {
      newVideo.addVideo(postsEl, video.title, convertDate(video.date), video.user_name, video.link);
  })

  const articleEl = document.querySelector('.scroll article')
  console.log(articleEl.offsetHeight);
  const scrollEl = document.querySelector('.scroll')
  const scrollTwitterEl = document.querySelector('.scroll-twitter')
  let scrollHeight = 2 * articleEl.offsetHeight;
  scrollEl.style.height = scrollHeight + 'px'
  scrollTwitterEl.style.height = scrollHeight + 'px'

});

// getting height of element


// assigning heigh to scroll


