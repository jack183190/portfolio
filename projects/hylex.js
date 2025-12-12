const hysummit = new Project();
hysummit.name = "HylexMC";
hysummit.description =
  "HylexMC is a Minecraft server with over 1000 concurrent players which uses server-side mods to add overhaul the game experience without requiring players to download mods.";
hysummit.date = "July 2025 - Present";
hysummit.badges = ["work"];
hysummit.media = [
  "https://youtu.be/vjTXgKLNWoU",
  "https://youtu.be/bh06_B5zbOE",
  "https://www.youtube.com/watch?v=YTZCR2Zswjo"
];
hysummit.github = "";
hysummit.itch = "";
hysummit.discord = "https://discord.com/invite/hylexmc";
hysummit.libs = "Java, PaperMC";
hysummit.longDesc = "The majority of my work at Hylex is refactoring buggy legacy code with limited, incorrect, or no documentation, updating dependencies, and fixing bugs. " +
  "<br><br>All my code was written with performance in mind as it had to handle hundreds of players interacting with systems at the same time, with hundreds of thousands of players' data stored.<br><br>" +
  "I also programmed a challenges system where players can complete challenges (quests) and obtain rewards. Challenge goals and rewards can be configured"
  + " using YAML. Additionally I worked on an item durability system and sell wand which can automatically sell all the items in a container.";

document.getElementById("projects-container").appendChild(renderProject(hysummit));
