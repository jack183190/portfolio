const spire = new Project();
spire.name = "Spire";
spire.description =
  "Spire is a rasterization-based voxel renderer written in Vulkan which can render 23+ million voxels in real time developed for my Honours project: " +
  "\"An analysis and implementation of voxel rendering optimisations for the rasterization pipeline\" ";
spire.date = "July 2025 - Present";
spire.badges = ["university-assignment", "solo-project"];
spire.media = [
  "ao_screenshot.png", "big_world.png", "https://www.youtube.com/watch?v=_pSY46rmhEM", "https://youtu.be/EPPyP-r3ePc"
];
spire.github = "https://github.com/underscore95/spire";
spire.itch = "";
spire.discord = "";
spire.libs = "C++, Vulkan, vulkan-memory-allocator, glslang, ImGui";
spire.longDesc = "Over the last year I have implemented a variety of optimisations such as indirect drawing, binary greeding meshing, and vertex compression. "
  + "Currently Spire can render the same 512x384x512 voxel area about 5x faster than Minecraft, with 7x less VRAM."
  + "<br><br>The world is split into chunks of 64x64x64 voxels. A mesh is generated from each chunk, this has to happen whenever a voxel is "
  + " modified in the chunk or on the border of a neigbhouring chunk. All the chunks are drawn at once using an indirect draw call.<br><br>"
  + "Only the surface faces of voxels need to be rendered, this is done by checking if the voxel adjacent to a face is present, if it is "
  + "then don't add the face to the vertex buffer.<br><br>"
  + "Binary greedy meshing is used to further optimise generated meshes, it merges adjacent faces into a single face, reducing the number of vertices "
  + "that need to be stored. The drawback of this approach is that voxel types can no longer be stored in the vertex. I've solved this by "
  + "building a custom data structure when I generate the mesh mapping each quad to a 2D array of all voxel data contained within the quad. "
  + "<br><br>For more information about the Vulkan abstractions, see: <a href=\"https://github.com/underscore95/Spire/blob/main/Documentation/SPIRE.md\">SPIRE.md</a>"
  + "<br>For more information about the voxel rendering, see: <a href=\"https://github.com/underscore95/Spire/blob/main/Documentation/VOXELS.md\">VOXELS.md</a>"
  + "<br><br>I also created a YouTube video explaining my greedy meshing implementation along with my custom data structure for voxel data storage:"
  + "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Z3atq5uAmOY?si=eNfqEHgIlm3Bl8uX\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" "
  + "referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
spire.homepageProject = true;
spire.url = "spire.html";

renderProject(spire);
