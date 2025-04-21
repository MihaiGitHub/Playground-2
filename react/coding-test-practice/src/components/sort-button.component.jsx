import React from "react";

const SortButton = ({ filteredUsers, setFilteredUsers }) => {
  const handleSort = () => {
    const sUsers = [...filteredUsers].sort((a, b) => {
      let compare = 0;

      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        compare = 1;
      } else {
        compare = -1;
      }

      return compare;
    });

    setFilteredUsers(sUsers);
  };

  return <button onClick={handleSort}>Sort</button>;
};

export default SortButton;
