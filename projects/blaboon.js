const blaboon = new Project();
blaboon.name = "Blaboon";
blaboon.description = "A 2.5D multiplayer tower defense game inspired by Bloons TD Battles. Developed in my own game engine, <a href=\"chimp.html\">Chimp</a>.";
blaboon.date = "Sept 2024 - Dec 2024";
blaboon.badges = ["university-assignment", "solo-project"];
blaboon.media = [
  "blaboon2.gif",
  "https://www.youtube.com/watch?v=NDiz5kLaRjI",
  "blaboon1.gif"
];
blaboon.github = "https://github.com/underscore95/Blaboon";
blaboon.itch = "https://underscore95.itch.io/blaboon";
blaboon.libs = "C++, Chimp";
blaboon.discord = "";
blaboon.longDesc = "";

document.getElementById("projects-container").appendChild(renderProject(blaboon));
