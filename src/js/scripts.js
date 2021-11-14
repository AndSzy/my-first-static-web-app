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
});


