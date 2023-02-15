import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Chapters = () => {
  const chapters = useSelector((state) => state.chaptersData);
  const [search, setSearch] = useState('');

  const searchHandle = (e) => setSearch(e.target.value);

  let filtered = [];
  if (!search) {
    filtered = [...chapters];
  } else {
    filtered = [...chapters].filter(
      (data) => data.description.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }
  return (
    <div>
      <input value={search} id="search" className="first_color text_white lato" type="text" placeholder="   Search by Crypto Name" onChange={searchHandle} />
      {
        filtered.map((element) => (
          <div key={element.id}>{element.name}</div>
        ))
      }
    </div>
  );
};

export default Chapters;
