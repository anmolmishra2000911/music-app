import { useEffect, useState } from "react"
import SearchBox from "../components/SearchBox"
import Songs from "../components/Songs"
import getAllSongs, { Song } from "../utils/api-client"


const Home = () => {
const [songs, setsongs] = useState<Song[]>([]);
 const fetchSongs = async(singerName:string ='arijit singh')=>{
   setsongs (await getAllSongs(singerName)); //Rendering / Printing
   //console.log('All Songs are', songs);
  }
  // Hook -Components Load / Mount
  //useffect(callbackFn,[]); // Mounting Phase
  // - not monitor any state
  useEffect(()=>{
fetchSongs();
  } ,[]);
  return (
    <div className ="container">
        <SearchBox fn  = { fetchSongs}/>
        <hr/>
        <Songs allsongs = {songs}/>
      
    </div>
  )
}

export default Home
