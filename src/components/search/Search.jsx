// import useState
import { useState } from "react";

// import asyncPaginate lybrary from react
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../search/Api.js";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  // method to fetch the data. inpuzValue retrieve the value typed in UI Search box.
  const loadOptions = async (inputValue) => {
    try {
      //fetch the data
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            //parameters needed to load the weather app
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode} `,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  };
  // (SearchData) = retrieve data that will be entered in <AsyncPaginate> component.
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600} // time between requests.
      value={search}
      onChange={handleOnChange}
      // additional property to load async fetch.
      loadOptions={loadOptions}
    />
  );
};

export default Search;
