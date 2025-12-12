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
spire.longDesc = "Over the last month I have implemented a variety of optimisations such as indirect drawing, binary greeding meshing, and vertex compression. "
  + "Currently Spire can render the same 32x32 Minecraft chunks about 3x faster than Minecraft, however Spire lags behind in terms of memory usage. In addition," +
  " Minecraft is much more complciated than Spire and has transparent voxels, vfx, particles, entities, so the comparison is unfair."
  + "<br><br>The world is split into chunks of 64x64x64 voxels. A mesh is generated from each chunk, this has to happen whenever a voxel is "
  + " modified in the chunk or on the border of a neigbhouring chunk. All the chunks are drawn at once using an indirect draw call.<br><br>"
  + "Only the surface faces of voxels need to be rendered, this is done by checking if the voxel adjacent to a face is present, if it is "
  + "then don't add the face to the vertex buffer.<br><br>"
  + "Greedy meshing is used to further optimise generated meshes, it merges adjacent faces into a single face, reducing the number of vertices "
  + "that need to be stored. The drawback of this approach is that voxel types can no longer be stored in the vertex. I've solved this by "
  + "building a hash map when I generate the mesh mapping each voxel position to its voxel type and sending it to the GPU. "
  + "The voxel position can be calculated by flooring the fragment position."
spire.homepageProject = true;
spire.url = "spire.html";

renderProject(spire);
