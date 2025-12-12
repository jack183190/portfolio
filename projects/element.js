const elementOddysey = new Project();
elementOddysey.name = "Element Oddysey";
elementOddysey.description =
  "Element Oddysey is a 2.5D local co-op survivors-like game built for the PS5 using Abertay University's proprietary Skateboard engine.";
elementOddysey.date = "Feb 2024 - May 2024";
elementOddysey.badges = ["university-assignment", "solo-project"];

elementOddysey.media = [
  "element_oddysey1.gif",
  "element_oddysey2.gif",
  "https://www.youtube.com/watch?v=k8oT39oFdPc"
];

elementOddysey.github = "https://github.com/underscore95/ElementOddysey/tree/main";
elementOddysey.itch = "";
elementOddysey.discord = "";
elementOddysey.libs = "C++, Skateboard (Proprietary PS5 Framework), entt, ImGui";
elementOddysey.longDesc = "The game features an entity component system, 2D animations, controller input with haptic feedback, a shop, 3 enemy types, 4 magic elements, and player stats.";

document.getElementById("projects-container").appendChild(renderProject(elementOddysey));
