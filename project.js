const BadgeRegistry = new Map();

function registerBadge(id, text, color) {
  BadgeRegistry.set(id, { text, color });
}

class Project {
  constructor() {
    this.name = "";
    this.description = "";
    this.badges = [];
    this.date = "";
    this.media = [];
  }
}

registerBadge("personal-project", "PERSONAL PROJECT", "#1E90FF");
registerBadge("university-assignment", "UNIVERSITY ASSIGNMENT", "#32CD32");
registerBadge("solo-project", "SOLO PROJECT", "red");
registerBadge("gamejam", "GAME JAM", "yellow");


function renderProject(project) {
  const container = document.createElement("div");
  container.className = "project";

  const titleRow = document.createElement("div");
  titleRow.className = "title-row";

  const title = document.createElement("h1");
  title.textContent = project.name;

  const badgeContainer = document.createElement("div");
  badgeContainer.className = "badge-container";

  if (project.date) {
    const dateSpan = document.createElement("span");
    dateSpan.className = "badge date-badge";
    dateSpan.textContent = project.date;
    badgeContainer.appendChild(dateSpan);
  }

  project.badges.forEach(id => {
    const badgeInfo = BadgeRegistry.get(id);
    if (!badgeInfo) return;

    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = badgeInfo.text;
    span.style.borderColor = badgeInfo.color;
    span.style.color = badgeInfo.color;

    badgeContainer.appendChild(span);
  });

  titleRow.appendChild(title);
  titleRow.appendChild(badgeContainer);
  container.appendChild(titleRow);

  const textRow = document.createElement("div");
  textRow.className = "row";

  const textDiv = document.createElement("div");
  textDiv.className = "text";

  const descP = document.createElement("p");
  descP.textContent = project.description;

  textDiv.appendChild(descP);
  textRow.appendChild(textDiv);
  container.appendChild(textRow);

  // Media rendering
  project.media.forEach(src => {
    const mediaRow = document.createElement("div");
    mediaRow.className = "row";

    const mediaDiv = document.createElement("div");
    mediaDiv.className = "media";

    if (src.includes("youtube.com") || src.includes("youtu.be")) {
      let videoId = null;
      if (src.includes("youtube.com")) {
        const url = new URL(src);
        videoId = url.searchParams.get("v");
      } else if (src.includes("youtu.be")) {
        videoId = src.split("/").pop();
      }
      if (videoId) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.style.width = "100%";
        iframe.style.aspectRatio = "16/9";
        iframe.style.objectFit = "cover";
        mediaDiv.appendChild(iframe);
      }
    } else {
      const img = document.createElement("img");
      img.src = `../assets/${src}`;
      img.style.width = "100%";
      img.style.aspectRatio = "16/9";
      img.style.objectFit = "cover";
      mediaDiv.appendChild(img);
    }

    mediaRow.appendChild(mediaDiv);
    container.appendChild(mediaRow);
  });

  return container;
}

// create home button
function addHomeButton(parentElement) {
  parentElement.style.position = parentElement.style.position || 'relative';

  const btn = document.createElement('a');
  btn.href = "../index.html";
  btn.style.position = "fixed";
  btn.style.top = "0";
  btn.style.left = "0";
  btn.style.width = "64px";
  btn.style.height = "64px";
  btn.style.margin = "32px";
  btn.style.display = "flex";
  btn.style.alignItems = "center";
  btn.style.justifyContent = "center";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  btn.style.background = "url('../assets/home-svgrepo-com.svg') no-repeat center center";
  btn.style.backgroundSize = "contain";

  parentElement.appendChild(btn);

  // Adjust size and margin on small screens
  function updateButtonForScreen() {
    if (window.innerWidth <= 600) { // small screens
      btn.style.width = "40px";
      btn.style.height = "40px";
      btn.style.margin = "16px";
    } else { // default size
      btn.style.width = "64px";
      btn.style.height = "64px";
      btn.style.margin = "32px";
    }
  }

  updateButtonForScreen();
  window.addEventListener("resize", updateButtonForScreen);
}
