import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card"; // Reusable Card Component
import { Grid, Button } from "@mui/material";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true); // Initially collapsed (only the first row visible)

  useEffect(() => {
    // Fetch data from the API
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(endpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, [endpoint]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const visibleAlbums = collapsed ? albums.slice(0, 7) : albums;

  return (
    <div className={styles.section}>
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
      <Grid container spacing={2} className={styles.grid}>
        {visibleAlbums.map((album) => (
          <Grid item xs={6} sm={4} md={2} lg={1.7} key={album.id}>
            <Card
              image={album.image}
              albumName={album.title}
              follows={`${album.follows} Follows`}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Section;





















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "../Card/Card"; // Import reusable Card component
// import styles from "./Section.module.css";

// const Section = ({ title, endpoint }) => {
//   const [albums, setAlbums] = useState([]);
//   const [collapsed, setCollapsed] = useState(true); // Initially collapsed (only first row visible)

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchAlbums = async () => {
//       try {
//         const response = await axios.get(endpoint);
//         setAlbums(response.data);
//       } catch (error) {
//         console.error("Error fetching albums:", error);
//       }
//     };

//     fetchAlbums();
//   }, [endpoint]);

//   // Helper to divide albums into rows of a specific size
//   const chunkAlbums = (arr, size) => {
//     const chunks = [];
//     for (let i = 0; i < arr.length; i += size) {
//       chunks.push(arr.slice(i, i + size));
//     }
//     return chunks;
//   };

//   const rows = chunkAlbums(albums, 7);

//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h2 className={styles.title}>{title}</h2>
//         <button
//           className={styles.collapseButton}
//           onClick={() => setCollapsed(!collapsed)}
//         >
//           {collapsed ? "Show All" : "Collapse"}
//         </button>
//       </div>

//       <div className={styles.grid}>
//         {/* Render the first row of cards */}
//         <div className={styles.row}>
//           {rows[0]?.map((album) => (
//             <Card
//               key={album.id}
//               image={album.image}
//               albumName={album.title}
//               follows={`${album.follows}`}
//             />
//           ))}
//         </div>

//         {/* Render additional rows if not collapsed */}
//         {!collapsed &&
//           rows.slice(1).map((row, index) => (
//             <div key={index} className={styles.row}>
//               {row.map((album) => (
//                 <Card
//                   key={album.id}
//                   image={album.image}
//                   albumName={album.title}
//                   follows={`${album.follows}`}
//                 />
//               ))}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Section;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Card from "../Card/Card"; // Import reusable Card component
// // import styles from "./Section.module.css";

// // const Section = ({ title, endpoint }) => {
// //   const [albums, setAlbums] = useState([]);
// //   const [collapsed, setCollapsed] = useState(false);

// //   useEffect(() => {
// //     // Fetch data from the API
// //     const fetchAlbums = async () => {
// //       try {
// //         const response = await axios.get(endpoint);
// //         setAlbums(response.data);
// //       } catch (error) {
// //         console.error("Error fetching albums:", error);
// //       }
// //     };

// //     fetchAlbums();
// //   }, [endpoint]);

// //   return (
// //     <div className={styles.section}>
// //       <div className={styles.header}>
// //         <h2 className={styles.title}>{title}</h2>
// //         <button
// //           className={styles.collapseButton}
// //           onClick={() => setCollapsed(!collapsed)}
// //         >
// //           {collapsed ? "Show All" : "Collapse"}
// //         </button>
// //       </div>
// //       {!collapsed && (
// //         <div className={styles.grid}>
// //           {albums.map((album) => (
// //             <Card
// //               key={album.id}
// //               image={album.image}
// //               albumName={album.title}
// //               follows={`${album.follows}`}
// //             />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Section;
