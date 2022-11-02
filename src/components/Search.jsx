import React, { useState } from 'react'

function Search(props) {

  const [searchInput, setSearchInput] = useState("")
  const handleChange = (event) => {
    setSearchInput(event.target.value)

    props.filterComida(event.target.value)

  }

  return (
    <div>
      <h5>Search</h5>
      <input type="text" name="search" value={searchInput} onChange={handleChange} />
    </div>
  )
}

export default Search