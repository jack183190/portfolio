const spellSlinger = new Project();
spellSlinger.name = "Spellslinger";
spellSlinger.description = "Break into the skeleton wizard's castle and use your combination of magical attacks and pistol to defeat them and their ghosts to reclaim your stolen magical orb!";
spellSlinger.date = "March 2026 (48 hours)";
spellSlinger.badges = ["gamejam", "personal-project", "group-project"];
spellSlinger.media = [
  "https://youtu.be/4y94K3Th9zg",
  "spellslinger1.png",
  "spellslinger2.png",
  "spellslinger3.png"
];
spellSlinger.thumbnail = "spellslinger1.png.png";
spellSlinger.github = "https://github.com/underscore95/Spellslinger";
spellSlinger.itch = "https://mali298.itch.io/spellslinger";
spellSlinger.discord = "";
spellSlinger.libs = "C#, Unity";
spellSlinger.longDesc = "Spellslinger is a 3D first person shooter game developed using Unity in 48 hours in a team of 3 for <a href=\"https://itch.io/jam/climax-game-jam-2026\">" +
  "Climax Game Jam 2026</a><br><br>I was the only programmer and worked closely with a character artist and environment artist to implement gameplay mechanics, animations, UI, and pre-rendered multidirectional sprites."
  + "<br>I am most proud of my prerendered sprites system, it takes in screenshots of a 3D model at different rotations and renders a billboard that faces the camera with the correct rotation.<br>"
  + "A sprite atlas can also be used to display several animations instead of a static frame.";
spellSlinger.url = "spellslinger.html";

renderProject(spellSlinger);
