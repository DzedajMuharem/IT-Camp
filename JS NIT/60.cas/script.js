const getVideos = async () => {
  const lista = document.querySelector('.mainBody');
  ///////////////////

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
        class="slika"
        src=${element.thumbnail}
        alt=""
      />
      <div class="donjideo">
       
        <div class="tekst">
          <p class="prvitekst">${element.name}</p>
          <p class="ime">${time(element.duration)}</p>
        </div>
      </div>
    </div>
  </li>`;
  });
};
getVideos();
