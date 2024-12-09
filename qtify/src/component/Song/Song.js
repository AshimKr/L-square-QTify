import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel"; // Re-usable Carousel component
import styles from "../Song/Song.module.css"; //
import Card from "../Card/Card";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    // Fetch songs data
    const fetchSongs = async () => {
      try {
        const songsResponse = await axios.get(
          "https://qtify-backend-labs.crio.do/songs"
        );
        setSongs(songsResponse.data);
      } catch (error) {
        console.error("Error fetching songs data:", error);
      }
    };

    // Fetch genres data
    const fetchGenres = async () => {
      try {
        const genresResponse = await axios.get(
          "https://qtify-backend-labs.crio.do/genres"
        );
        setGenres([{key: 'All', label: 'All'}, ...genresResponse.data.data]);
      } catch (error) {
        console.error("Error fetching genres data:", error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  // Filter songs based on selected genre
  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const renderCard = (filteredSongs) => (
    <Card
      key={filteredSongs.id}
      image={filteredSongs.image}
      albumName={filteredSongs.title}
      follows={filteredSongs.likes}
    />
  );


  return (
    <div className={styles.songsSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Songs</h2>
        <Tabs
          value={selectedGenre}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          className={styles.tabs}
        >
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              value={genre.key}
              label={genre.label}
              className={`${styles.tab} ${
                selectedGenre === genre ? styles.activeTab : ""
              }`}
            />
          ))}
        </Tabs>
      </div>
      <Carousel
        data={filteredSongs}
        renderItem={renderCard}
        slidesPerViewConfig={{
          mobile: 2,
          tablet: 5,
          desktop: 7,
        }}
      />
    </div>
  );
};

export default SongsSection;
