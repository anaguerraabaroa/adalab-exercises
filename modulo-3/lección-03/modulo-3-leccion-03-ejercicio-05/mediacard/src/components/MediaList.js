import React from "react";
import MediaCard from "./MediaCard";
import avatar from "../images/avatar.jpg";

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-users">
        <h1>Users media info:</h1>
        <ul className="section-users_mediaInfo">
          <li className="App">
            <MediaCard
              name="Ana Guerra"
              image={avatar}
              date="Domingo 1 de noviembre de 2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
             occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim id est laborum."
              likes="20"
            />
          </li>
          <li className="App">
            <MediaCard
              name="Arantza Guerra"
              image={avatar}
              date="Domingo 1 de noviembre de 2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
             occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim id est laborum."
              likes="20"
            />
          </li>
          <li className="App">
            <MediaCard
              name="Mónica Guerra"
              image={avatar}
              date="Domingo 1 de noviembre de 2020"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
             commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
             occaecat cupidatat non proident, sunt in culpa qui officia deserunt
             mollit anim id est laborum."
              likes="20"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
