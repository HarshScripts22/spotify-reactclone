import React from "react";
import ArtistCard from "./ArtistCard";
import Tag from "./Tag";

const Artist = () => {
  return (
    <div className="w-full mb-4 space-y-4">
      {/* Tag */}
      <Tag title={"Popular Artist"} link={"/"} />
      {/* Artist list */}
      <div className="w-full flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="inline-flex space-x-4">
          {/* Artist card */}
          <ArtistCard
            artistImg={
              "https://wallpapers.com/images/featured-full/arijit-singh-q307hnimzo1z26ct.jpg"
            }
            artistName={"Arijit Singh"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={"https://wallpapercave.com/wp/wp8047695.jpg"}
            artistName={"KK"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://media.gettyimages.com/id/2150517138/photo/vancouver-british-columbia-diljit-dosanjh-kicks-off-his-dil-luminati-tour-at-bc-place-on.jpg?s=612x612&w=0&k=20&c=rG9Uap6B8G6FVu9vvcmnLElGOPwHvQ9IQ2pv4n8-ONg="
            }
            artistName={"Diljit Dosanjh"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://e0.pxfuel.com/wallpapers/332/156/desktop-wallpaper-shreya-ghoshal.jpg"
            }
            artistName={"Shreya Ghoshal"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://www.baltana.com/files/wallpapers-27/Punjabi-Singer-Karan-Aujla-Background-Wallpaper-86687.jpg"
            }
            artistName={"Karan Aujla"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://imgs.search.brave.com/3Hi6kVY8wnCr-zXBFlZN7TYBDeYNb39VlZ_q0iEWhUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3VsdHVyZWNyb3Nz/cm9hZHMuY2EvcG9z/dHMveW8teW8taG9u/ZXktc2luZ2gtdW52/ZWlscy1uZXctbG9v/ay1mb3ItZnJvbS1t/aWxsaW9uYWlyZS1m/b3ItYWxidW0tZ2xv/cnkvaW1hZ2VzL2Fi/YzUyMzA3LTExYWMt/NGI2ZS1hNzMxLTE0/YWJlODVkYmY5N19o/dTI4NjFkMTU0ZGE3/N2M4NjBjODBkZGZk/ZWE0N2QxZGI3XzE5/MjAyN184MDB4MF9y/ZXNpemVfcTUwX2gy/X2xhbmN6b3Mud2Vi/cA"
            }
            artistName={"Yo Yo Honey Singh"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://lastfm.freetls.fastly.net/i/u/770x0/4e09824ea68a182be4f16c3812f2a1b3.jpg#4e09824ea68a182be4f16c3812f2a1b3"
            }
            artistName={"Shilpa Rao"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://blogger.googleusercontent.com/img/a/AVvXsEgmBX_0kXQx53H71bEA0RGZWIB-uwWt_cekLWlxrRL-qOAAPyMDImEPj93WaCnEVc2iHpyeVlQOjrD7WAn4j-NWETxkGObbRZ6LFCN027WUyBSp3ADepl3mvRwM19LSmh5lBHLg1o9gBPd_uc51MPIGyj7pmFbVmXD4gvDvZPqBjYFz10XoKU5aVSxA=w512-h640"
            }
            artistName={"AP Dhillon"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://e1.pxfuel.com/desktop-wallpaper/339/819/desktop-wallpaper-mohit-chauhan-amazed-at-ar-rahman-s-understanding-of-music-mohit-chauhan.jpg"
            }
            artistName={"Mohit Chauhan"}
            artistTag={"Artist"}
          />
          <ArtistCard
            artistImg={
              "https://imgs.search.brave.com/t9jbe1WuepBWAUcT5v31uXj6BrqzJelUkvv3sbkyn4E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RkLzI2/L2JlL2RkMjZiZWQ4/NGQ2M2ZkZWYzODIy/MmE5ZWJlMmNkM2Vl/LmpwZw"
            }
            artistName={"Anuv Jain"}
            artistTag={"Artist"}
          />
        </div>
      </div>
    </div>
  );
};

export default Artist;
