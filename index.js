const directoryInput = document.getElementById("file-selector");
const videoChooser = document.getElementById("video-chooser-div");
const videoPlayer = document.getElementById("video-player-div");
const video = document.getElementById("video");

directoryInput.addEventListener("change", (event) => {
  videoChooser.innerHTML = "";

  for (const file of event.target.files) {

    if (file.name.endsWith(".mp4")) {
      let videoContentDiv = document.createElement("div");
      videoContentDiv.className = "video-content";

      let videoName = file.name;
      let videoNameTag = document.createElement("p");
      videoNameTag.className = "video-name";
      videoNameTag.textContent = videoName;

      videoNameTag.dataset.src = URL.createObjectURL(file);

      videoNameTag.addEventListener('click', event => {
        video.src = event.currentTarget.dataset.src;
        video.play()
      })

      videoContentDiv.appendChild(videoNameTag);
      videoChooser.appendChild(videoContentDiv);

    }
  }
}, false);