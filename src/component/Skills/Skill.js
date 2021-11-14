import React from "react";

const Skill = (items) => {
  let skillItem = items.skillItem;
  return (
    <>
      <div className="skill">
        <h3 className="title-2">{skillItem[0].type}</h3>
          <ul className="skillList flex">
            {skillItem.map((item) => {
              return <li class="skillItem">{item.name}</li>;
            })}
          </ul>
      </div>
    </>
  );
};

export default Skill;
