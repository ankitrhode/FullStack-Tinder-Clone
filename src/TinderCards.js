import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url: "https://cdn.britannica.com/64/121664-004-73C27A0C/Steve-Jobs.jpg",
    },
    {
      name: "steve madden",
      url:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y3UTBX2UDM5HTOZ3EMFOOQL64E.jpg&w=1200",
    },
  ]);
  return (
    <div>
      <h1>Tinder Cards Here</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
