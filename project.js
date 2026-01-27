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
    this.discord = "";
    this.github = "";
    this.itch = "";
    this.libs = "";
    this.longDesc = "";
    this.url = "";
    this.homepageProject = false;
    this.thumbnail = "";
  }
}

registerBadge("personal-project", "PERSONAL PROJECT", "#1E90FF");
registerBadge("university-assignment", "UNIVERSITY ASSIGNMENT", "#32CD32");
registerBadge("solo-project", "SOLO PROJECT", "red");
registerBadge("group-project", "GROUP PROJECT", "pink");
registerBadge("gamejam", "GAME JAM", "yellow");
registerBadge("work", "WORK PROJECT", "green");

function renderThumbnail(project) {
  if (!project.media || project.media.length === 0) return null;

  const imgPath = project.thumbnail;
  if (!imgPath) {
    console.error("No thumbnail image for project: " + project.name);
    return;
  }

  const fullPath = "https://raw.githubusercontent.com/jack183190/portfolio/refs/heads/main/assets/" + imgPath;

  const tile = document.createElement("div");
  tile.className = "project-tile";

  const link = document.createElement("a");
  link.href = "/portfolio/projects/" + project.url;
  link.style.display = "flex";
  link.style.flexDirection = "column";
  link.style.alignItems = "center";
  link.style.textAlign = "center";

  const img = document.createElement("img");
  img.src = fullPath;
  img.alt = project.name;
  img.style.width = "100%";
  img.style.borderRadius = "6px";

  const label = document.createElement("p");
  label.textContent = project.name;
  label.style.margin = "8px 0 0 0";

  link.appendChild(img);
  link.appendChild(label);
  tile.appendChild(link);

  document.getElementById("other-projects").appendChild(tile);
}

function renderProject(project) {
  if (project.url == "") console.error(project.name + " missing url");

  const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname == "/portfolio/";

  if (isHomePage && !project.homepageProject) {
    renderThumbnail(project);
    return;
  }

  const container = document.createElement("div");
  container.className = "project";

  if (isHomePage) {
    container.appendChild(document.createElement("p"));
    container.appendChild(document.createElement("hr"));
    container.appendChild(document.createElement("br"));
  }

  const titleRow = document.createElement("div");
  titleRow.className = "title-row";

  const title = document.createElement("h1");
  title.style.color = "#f5c401";
  if (isHomePage)
    title.innerHTML = "<a href=\"projects/" + project.url + "\">" + project.name + "</a>";
  else title.textContent = project.name;

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

  if (isHomePage == true) {
    const descP = document.createElement("p");
    descP.innerHTML = "<span>" + project.description + "</span>";
    textDiv.appendChild(descP);
  }

  const libsP = document.createElement("p");
  libsP.innerHTML = "<span style='color:#f5c401'>Languages & Libraries:</span><span> " + project.libs + "</span>";
  textDiv.appendChild(libsP);

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.alignItems = "center";
  buttonContainer.style.gap = "10px";
  buttonContainer.style.marginTop = "12px";
  buttonContainer.style.marginBottom = "0";


  if (!isHomePage) {
    const label = document.createElement("span");
    label.style.color = "#f5c401";

    label.textContent = "More Info:";
    buttonContainer.appendChild(label);

    function createIconButton(url, imgSrc, altText) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.style.display = "inline-block";
      link.style.width = "32px";
      link.style.height = "32px";
      link.style.borderRadius = "4px";
      link.style.overflow = "hidden";

      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = altText;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";

      link.appendChild(img);
      return link;
    }

    if (project.discord) {
      buttonContainer.appendChild(createIconButton(project.discord, "https://raw.githubusercontent.com/jack183190/portfolio/refs/heads/main/assets/discord.svg", "Discord"));
    }
    if (project.github) {
      buttonContainer.appendChild(createIconButton(project.github, "https://raw.githubusercontent.com/jack183190/portfolio/refs/heads/main/assets/github.svg", "GitHub"));
    }
    if (project.itch) {
      buttonContainer.appendChild(createIconButton(project.itch, "https://raw.githubusercontent.com/jack183190/portfolio/refs/heads/main/assets/itch.svg", "Itch.io"));
    }

    if (buttonContainer.childElementCount > 1) {
      textDiv.appendChild(buttonContainer);
    }
  }

  textRow.appendChild(textDiv);
  container.appendChild(textRow);

  if (project.media.length > 0) {
    const mediaContainer = document.createElement("div");
    mediaContainer.className = "media-container";

    const mainMediaDiv = document.createElement("div");
    mainMediaDiv.className = "main-media";

    function createMainMediaElement(src, autoplay) {
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
          if (autoplay) iframe.src += "?autoplay=1";
          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "true");
          iframe.style.width = "100%";
          iframe.style.aspectRatio = "16/9";
          iframe.style.objectFit = "cover";
          return iframe;
        }
      } else {
        const img = document.createElement("img");
        img.src = `https://raw.githubusercontent.com/jack183190/portfolio/refs/heads/main/assets/${src}`;
        img.style.width = "100%";
        img.style.aspectRatio = "16/9";
        img.style.objectFit = "cover";
        return img;
      }
      return null;
    }

    let currentMain = createMainMediaElement(project.media[0], false);
    mainMediaDiv.appendChild(currentMain);
    mediaContainer.appendChild(mainMediaDiv);

    const thumbRow = document.createElement("div");
    thumbRow.className = "thumbnail-row";
    thumbRow.style.display = "flex";
    thumbRow.style.gap = "8px";
    thumbRow.style.marginTop = "8px";
    thumbRow.style.flexWrap = "wrap";

    if (project.media.length > 1) {
      project.media.forEach(src => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.width = "120px";
        wrapper.style.height = "68px";
        wrapper.style.flexShrink = "0";
        wrapper.style.cursor = "pointer";
        wrapper.style.borderRadius = "4px";
        wrapper.style.overflow = "hidden";

        const thumb = document.createElement("img");
        if (src.includes("youtube.com") || src.includes("youtu.be")) {
          let videoId = null;
          if (src.includes("youtube.com")) {
            const url = new URL(src);
            videoId = url.searchParams.get("v");
          } else if (src.includes("youtu.be")) {
            videoId = src.split("/").pop();
          }
          if (videoId) {
            thumb.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            const playIcon = document.createElement("div");
            playIcon.innerHTML = "▶";
            playIcon.style.position = "absolute";
            playIcon.style.top = "50%";
            playIcon.style.left = "50%";
            playIcon.style.transform = "translate(-50%, -50%)";
            playIcon.style.fontSize = "24px";
            playIcon.style.color = "white";
            playIcon.style.textShadow = "0 0 4px rgba(0,0,0,0.7)";
            wrapper.appendChild(playIcon);
          }
        } else {
          thumb.src = `https://raw.githubusercontent.com/jack183190/portfolio/refs/heads/main/assets/${src}`;
        }

        thumb.style.width = "100%";
        thumb.style.height = "100%";
        thumb.style.objectFit = "cover";
        wrapper.appendChild(thumb);

        wrapper.addEventListener("click", () => {
          mainMediaDiv.replaceChild(createMainMediaElement(src, true), currentMain);
          currentMain = mainMediaDiv.firstChild;
        });

        thumbRow.appendChild(wrapper);
      });
    }


    mediaContainer.appendChild(thumbRow);
    container.appendChild(mediaContainer);
  }

  if (isHomePage) {
    const moreInfoContainer = document.createElement("div");
    moreInfoContainer.style.display = "flex";
    moreInfoContainer.style.justifyContent = "center";
    moreInfoContainer.style.marginTop = "24px";

    const label = document.createElement("p");
    label.style.fontWeight = "bold";
    label.style.fontSize = "30px";
    label.style.textAlign = "center";
    label.innerHTML = "<a href=\"projects/" + project.url + "\">Click here for more information</a>";

    moreInfoContainer.appendChild(label);
    container.appendChild(moreInfoContainer);
  }

  if (project.longDesc && !isHomePage) {
    const longP = document.createElement("p");
    longP.innerHTML = project.longDesc;
    longP.style.marginTop = "20px";
    container.appendChild(longP);
  }

  document.getElementById("projects-container").appendChild(container);
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
