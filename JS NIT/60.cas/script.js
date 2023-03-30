const lista = document.querySelector('.mainBody');
const brid = document.querySelector('.brid');
const slika = document.querySelector('.slika');
const title = document.querySelector('.title');
///////////////////
const getVideos = async () => {
  try {
    const response = await fetch(
      'https://services.brid.tv/services/get/latest/26456/0/1/25/0.json'
    );
    const data = await response.json();
    console.log(data);

    const playerId = data.Player.id;
    console.log(playerId);
    const videos = data.Video;
    console.log(videos);
    let time = function (vrijeme) {
      let sati;
      let minuti;
      let sekunde;
      if (vrijeme < 60) {
        return `00:00:${vrijeme < 10 ? `0${vrijeme}` : `${vrijeme}`}`;
      }
      if (vrijeme > 60 && vrijeme < 3600) {
        minuti = Math.floor(vrijeme / 60);
        sekunde = vrijeme - Math.floor(vrijeme / 60) * 60;
        return `00:${minuti < 10 ? `0${minuti}` : `${minuti}`}:${
          sekunde < 10 ? `0${sekunde}` : `${sekunde}`
        }`;
      } else {
        sati = Math.floor(vrijeme / 3600);
        minuti = Math.floor(vrijeme / 60) - Math.floor(vrijeme / 3600) * 3600;
        sekunde = vrijeme - Math.floor(vrijeme / 60) * 60;
        return `${sati < 10 ? `0${sati}` : `${sati}`}:${
          minuti < 10 ? `0${minuti}` : `${minuti}`
        }:${sekunde < 10 ? `0${sekunde}` : `${sekunde}`}`;
      }
    };

    videos.forEach(element => {
      lista.innerHTML += `<li>
    <div class="kartica">
      <img
      onclick="loadVideo(this)"
        class="slika"
        src=${element.thumbnail}
        alt=""
        id="${element.id}"
      />
      <div class="donjideo" >
       <p class="title"  onclick="loadVideo(this)" id="${element.id}">${
        element.name
      }</p>
          <p class="duration">${time(element.duration)}</p>
      </div>
    </div>
  </li>`;
    });
  } catch (err) {
    console.log(err.message);
  }
};
getVideos();

// let player = $bp('DIV_ID', {
//   id: '26456',
//   width: '640',
//   height: '480',
//   video: '',
// });

let player = null;

function loadVideo(element) {
  if (player) {
    player.stop();
  }
  player = $bp('DIV_ID', {
    id: '26456',
    width: '640',
    height: '480',
    video: `${element.id}`,
  });
  player.play();
}
