import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card"; // Reusable Card Component
import { Grid, Button, Collapse } from "@mui/material";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]); // Full API response
  const [collapsed, setCollapsed] = useState(true); // Collapse state

  useEffect(() => {
    // Fetch data from the API
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(endpoint);
        // Ensure we always display exactly what the API sends
        setAlbums(response.data || []);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [endpoint]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const renderCard = (album) => (
    <Card
      key={album.id}
      image={album.image}
      albumName={album.title}
      follows={`${album.follows} Follows`}
    />
  );

  return (
    <div className={styles.section}>
      {/* Section Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Button
          variant="text"
          className={styles.toggleButton}
          onClick={toggleCollapse}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </div>


      {/* Collapsed View (First Row Only) */}
      {collapsed && (
        <Carousel
        data={albums}
        renderItem={renderCard}
        slidesPerViewConfig={{
          mobile: 2,
          tablet: 5,
          desktop: 7,
        }}
      />
      )}

      {/* Expanded View (All Rows) */}
      <Collapse in={!collapsed} timeout="auto">
        <Grid container spacing={2} className={styles.grid}>
          {albums.map((album) => (
            <Grid item xs={6} sm={4} md={2} lg={1.7} key={album.id}>
              <Card
                image={album.image}
                albumName={album.title}
                follows={`${album.follows} Follows`}
              />
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </div>
  );
};

export default Section;
