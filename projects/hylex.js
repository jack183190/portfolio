const hylex = new Project();
hylex.name = "HylexMC";
hylex.description =
  "HylexMC is a Minecraft server with over 1000 concurrent players which uses server-side mods to add overhaul the game experience without requiring players to download mods.";
hylex.date = "July 2025 - Present";
hylex.badges = ["work"];
hylex.media = [
  "https://youtu.be/vjTXgKLNWoU",
  "https://youtu.be/bh06_B5zbOE",
  "https://www.youtube.com/watch?v=YTZCR2Zswjo"
];
hylex.github = "";
hylex.itch = "";
hylex.discord = "https://discord.com/invite/hylexmc";
hylex.libs = "Java, PaperMC";
hylex.longDesc = "The majority of my work at Hylex is refactoring buggy legacy code with limited, incorrect, or no documentation, updating dependencies, and fixing bugs. " +
  "<br><br>All my code was written with performance in mind as it had to handle hundreds of players interacting with systems at the same time, with hundreds of thousands of players' data stored.<br><br>" +
  "I also programmed a challenges system where players can complete challenges (quests) and obtain rewards. Challenge goals and rewards can be configured"
  + " using YAML. <img src=\"hylex_challenges.png\"></img><br>"+
  "Additionally I worked on an item durability system and sell wand which can automatically sell all the items in a container.";
hylex.homepageProject = true;
hylex.url = "hylex.html"

renderProject(hylex);
