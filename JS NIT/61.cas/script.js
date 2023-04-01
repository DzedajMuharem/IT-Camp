console.log('konekted');
const getVideos = () => {
  fetch('https://services.brid.tv/services/get/latest/26456/0/1/25/0.json')
    .then(res => res.json())
    .then(response => {
      const videos = response.Video;
      localStorage.setItem('videos', JSON.stringify(videos));
      const playerId = response.Player.id;
    });
};
getVideos();

const secondVideo = localStorage.getItem('videos');
console.log(JSON.parse(secondVideo));
jsonVideos = JSON.parse(secondVideo);
const secondVideoImg = jsonVideos[1].image;
console.log(secondVideoImg);

const image = document.querySelector('#img');
// image.src = secondVideoImg;
image.setAttribute('src', secondVideoImg);
