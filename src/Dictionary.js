import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState("");

  function handleDictiResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictiResponse);

    //documentation: https://www.pexels.com/api/documentation/?language=javascript#photos-search
    let apiKey = "563492ad6f91700001000001ed9059ae279e4afdac0a5c2a86ffe3af";
    let header = { Authorization: `Basic ${apiKey}` };
    let photoApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(photoApiUrl, { headers: header }).then(handlePhotoResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              placeholder="Enter a word here"
              type="search"
              onChange={handleKeywordChange}
              autoFocus={true}
            ></input>
            <div className="hint">
              Suggested words: sunset, yoga, photography
            </div>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
