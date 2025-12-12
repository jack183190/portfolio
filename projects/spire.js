const hysummit = new Project();
hysummit.name = "Spire";
hysummit.description =
  "Spire is a rasterization-based voxel renderer written in Vulkan which can render 23+ million voxels in real time developed for my Honours project: " +
  "\"An analysis and implementation of voxel rendering optimisations for the rasterization pipeline\" ";
hysummit.date = "September 2025 - Present";
hysummit.badges = ["university-assignment", "solo-project"];
hysummit.media = [
  "https://youtu.be/EPPyP-r3ePc"
];
hysummit.github = "github.com/underscore95/spire";
hysummit.itch = "";
hysummit.discord = "";
hysummit.libs = "C++, Vulkan, vulkan-memory-allocator, glslang, ImGui";
hysummit.longDesc = "Over the last month I have implemented a variety of optimisations such as indirect drawing, binary greeding meshing, and vertex compression."
  + "Currently Spire can render the same 32x32 Minecraft chunks about 3x faster than Minecraft, however Spire lags behind in terms of memory usage. In addition," +
  " Minecraft is much more complciated than Spire and has transparent voxels, vfx, particles, entities, so the comparison is unfair.";

document.getElementById("projects-container").appendChild(renderProject(hysummit));
