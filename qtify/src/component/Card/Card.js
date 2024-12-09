import React from "react";
import PropTypes from "prop-types";
import styles from "../Card/Card.module.css";
import { Chip } from "@mui/material";

const Card = ({ image, follows, albumName }) => {
  return (
    <>
      <div className={styles.card}>
        {/* Album Image */}
        <div className={styles.imageContainer}>
          <img src={image} alt={albumName} className={styles.albumImage} />
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <Chip
            label={`${follows} Follows`}
            className={styles.chip}
            size="small"
          />
        </div>
        <div className={styles.albumName}>
            {albumName}
        </div>
      </div>
    </>
  );
};

// Define prop types for the component
Card.propTypes = {
  image: PropTypes.string.isRequired,
  follows: PropTypes.number.isRequired,
  albumName: PropTypes.string.isRequired, 
};

export default Card;
