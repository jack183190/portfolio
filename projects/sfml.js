const sfml = new Project();
sfml.name = "SFML MMORPG";
sfml.description = "An MMORPG demo developed in SFML as a university project. ";
sfml.date = "September 2025 - October 2025";
sfml.badges = ["university-assignment"];
sfml.media = [
  "https://youtu.be/UuO-Jjx4HfY"
];
sfml.thumbnail = "sfml_thumb.png";
sfml.github = "";
sfml.itch = "";
sfml.discord = "";
sfml.libs = "C++, SFML, entt";
sfml.longDesc = "The world is split into different areas, and each server handles a single area of the world. A ServerManager program " +
  "is used to handle sending players between different servers, communicating with the database and managing player data ownership.<br><br>" +
  "For sending packets between the server and client, I'm relying on simply serialising structs using sf::Packet from SFML. Events are used to receive packets," +
  " a class can register itself as a listener for packet types X Y and Z, and then a lambda will be executed when any of those packet types are received.<br><br>"
  + "I have a system built on top of this to have a server authorative synchronised ECS for entity management, and a lot of data such as entity " +
  "positions and healths are sent using the ECS to reduce the number of packet types a game developer would need to create and manage. I have a" +
  " reflection system setup for networked components so that the ECS knows how to replicate them and what protocol to use (TCP / UDP). " +
  " The only code required to create a new networked component is REGISTER_NETWORKED_COMPONENT(MyComponent, TCP); and overloading sf::Packet >>" +
  " and << operators for serialisation.";
sfml.url = "sfml.html";

renderProject(sfml);
