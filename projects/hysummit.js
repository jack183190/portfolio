const hysummit = new Project();
hysummit.name = "Hysummit";
hysummit.description =
  "Hysummit is a Minecraft server which uses server-side mods to add overhaul the game experience without requiring players to download mods.";
hysummit.date = "Aug 2023 - Mar 2024";
hysummit.badges = ["personal-project", "group-project"];
hysummit.media = [
  "https://www.youtube.com/watch?v=lgwZ4i8DjHw"
];
hysummit.github = ""; 
hysummit.itch = "";  
hysummit.discord = "https://discord.gg/VdYhwSUmKv"; 
hysummit.libs = "Java, Redis, SQLite, JUnit, PaperMC, Nexo";
hysummit.longDesc = "I created a server-side Minecraft mod that implements a multi-server dungeon instancing system using Redis pub/sub "+
"for communication between servers and SQLite for persistence, with a lobby and party system enabling players to form private "+
"or public groups and launch new dungeon instances on remote servers once minimum party size was met.<br<br>"
+ "<br><br>I also worked on an item skin system, crates, RPG style classes, and item titles (similar to reforges from Terraria)."
+ "<br><br>I worked in a team of approximately 10 in a Kanban workflow, all my pull requests were reviewed by another programmer, I conducted code reviews, and wrote unit tests using JUnit"
+ " which our CI/CD pipeline automatically ran."

document.getElementById("projects-container").appendChild(renderProject(hysummit));
