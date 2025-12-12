const chimp = new Project();
chimp.name = "Chimp";
chimp.description = "Chimp is a 3D game engine with networking, lighting & shadow support, music & positional sound effects, editor, ECS supporting serialisation, and ref-counted resource management.";
chimp.date = "Sept 2024 - June 2025";
chimp.badges = ["personal-project", "university-assignment", "solo-project"];
chimp.media = [
    "chimp_gif.gif",
    "chimp.png",
    "chimp_editor.png",
    "https://www.youtube.com/watch?v=aHkK3QgLgjg"
];
chimp.github = "https://github.com/underscore95/chimp";
chimp.libs = "C++, OpenGL, ENet, OpenAL, Flecs, GLFW, assimp, ImGui";
chimp.longDesc = "Chimp is a project originally started as a university assignment where I implemented OpenGL rendering, entity component system, resource management, audio, and networking.<br><br>Later I continued development "
    + "as a passion project where I added a graphical editor for developers to interact with entities and components as well as dynamic lighting using Blinn-Phong model and shadow maps " +
    " for all light types.<br><br>I made Blaboon in Chimp, a 2.5D multiplayer tower defense game based on Ninja Kiwi's Bloons TD Battles.";

chimp.homepageProject = true;
chimp.url = "chimp.html"

renderProject(chimp);
