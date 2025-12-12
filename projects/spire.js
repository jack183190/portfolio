const spire = new Project();
spire.name = "Spire";
spire.description =
  "Spire is a rasterization-based voxel renderer written in Vulkan which can render 23+ million voxels in real time developed for my Honours project: " +
  "\"An analysis and implementation of voxel rendering optimisations for the rasterization pipeline\" ";
spire.date = "September 2025 - Present";
spire.badges = ["university-assignment", "solo-project"];
spire.media = [
  "https://youtu.be/EPPyP-r3ePc"
];
spire.github = "github.com/underscore95/spire";
spire.itch = "";
spire.discord = "";
spire.libs = "C++, Vulkan, vulkan-memory-allocator, glslang, ImGui";
spire.longDesc = "Over the last month I have implemented a variety of optimisations such as indirect drawing, binary greeding meshing, and vertex compression."
  + "Currently Spire can render the same 32x32 Minecraft chunks about 3x faster than Minecraft, however Spire lags behind in terms of memory usage. In addition," +
  " Minecraft is much more complciated than Spire and has transparent voxels, vfx, particles, entities, so the comparison is unfair.";
spire.homepageProject = true;
spire.url = "spire.html";

renderProject(spire);
