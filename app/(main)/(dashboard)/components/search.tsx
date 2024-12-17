import React from "react";

type Props = {};

function Search({}: Props) {
  return (
    <div>
      <input
        className="border border-gray-100 p-1 rounded-md"
        placeholder="search..."
      />
    </div>
  );
}

export default Search;
