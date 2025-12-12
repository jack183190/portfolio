const marmotaMeadow = new Project();
marmotaMeadow.name = "Marmota Meadow";
marmotaMeadow.description = "A 3D farming sim first-person shooter. Defend your farm against undead groundhogs whilst selling your produce to repay your debt in time.";
marmotaMeadow.date = "Jan 2025 - May 2025";
marmotaMeadow.badges = ["university-assignment", "group-project"];
marmotaMeadow.media = [
  "https://www.youtube.com/watch?v=IXTrOw9T8dg",
  "https://www.youtube.com/watch?v=yHH3yI8zBmo",
  "marmota_meadow.png",
  "marmota_meadow1.png",
  "marmota_meadow2.png"
];
marmotaMeadow.github = "https://github.com/OverheatStudios/MarmotaMeadow";
marmotaMeadow.itch = "https://overheat-studios.itch.io/marmota-meadow";
marmotaMeadow.libs = "C#, C++, Unity";
marmotaMeadow.discord = "";
marmotaMeadow.longDesc = "Marmota Meadow is an FPS farming simulator developed using Unity in a team of 7 (1 producer, 1 designer, 2 programmers, 2 artists) in 3 months as a university project. " +
  "I programmed the enemy spawning, guns, tilling minigame, UI, and the save system.<br><br>In addition, I acted as the lead programmer and wrote the "
  + "<a href=\"https://docs.google.com/document/d/1FaVYZs17U-sBi7r-KSaNL5WfgXVVLKB6NPgRcVgVeSE/edit?tab=t.0\">Technical Design Document</a>, delegated tasks to the"
  + " other programmer, worked closely with the UI artist, " +
  " managed our Git repository including resolving merge conflicts and supporting team members unfamiliar with Git, and conducted external playtests to find design issues and bugs.";

document.getElementById("projects-container").appendChild(renderProject(marmotaMeadow));
