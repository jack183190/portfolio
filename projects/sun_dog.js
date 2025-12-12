const sunDog = new Project();
sunDog.name = "Sun Dog";
sunDog.description = "Play as a dog desperate to quench their thirst over some cold beer... but dogs don't buy beer. Trade sunscreen with sunburnt people to get their clothing, disguise yourself and buy a beer... but dogs don't have money...";
sunDog.date = "June 2025 (1 week)"; 
sunDog.badges = ["gamejam", "personal-project", "group-project"];
sunDog.media = [
  "sundog1.gif",
  "sundog2.gif",
  "sundog3.gif"
];
sunDog.github = "https://github.com/underscore95/DogGame";
sunDog.itch = "https://innesmackenzieaitken.itch.io/sun-dog";
sunDog.discord = ""; 
sunDog.libs = "C#, Unity";
sunDog.longDesc = "Sun Dog is a 3D exploration game developed using Unity in 1 week in a team of 8 for <a href=\"https://itch.io/jam/summer-game-jam-jamboree-25\">" + 
"Hubworld Summer Game Jam Jamboree 25.</a><br><br>I was one of 3 programmers and worked on a system for the dog to equip clothing, animations, NPC fetch quests, VFX, and the main menu. ";

document.getElementById("projects-container").appendChild(renderProject(sunDog));
