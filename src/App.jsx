import React from "react";
import { Playlist } from "../../react-test-project/src/components/Playlist";
import { SearchBar } from "../../react-test-project/src/components/SearchBar";
import { SearchResults } from "../../react-test-project/src/components/SearchResults";

export const App = () => {
  return (
    <div>
      <SearchBar />
      <button>Search</button>
      <SearchResults />
      <Playlist />
      <button>Save to Spotify</button>
    </div>
  );
};
