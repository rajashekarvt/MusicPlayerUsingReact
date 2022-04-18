import {useState,useEffect} from 'react'
import Player from './components/Player';


function App() {
  const [songs]=useState([
    {
      title:"Stay Alive",
      artist:"BTS",
      img_src:"./images/bts img.jpg",
      src:"./Songs/BTS Jungkook Stay Alive (Prod. SUGA of BTS) (CHAKHO OST).mp3",  
    },
    {
      title:"BYE",
      artist:"JADEN SMITH",
      img_src:"./images/jaden smith img.jpg",
      src:"./Songs/BYE.mp3",
    },
    { 
      title:"Speak For Yourself",
      artist:"JUNGLEMAN",
      img_src:"./images/extra.jpg",
      src:"./Songs/Speak For Yourself (Feat. Jungleman).mp3",
    },
    {
      title:"I CANT STOP ME",
      artist:"TWICE",
      img_src:"./images/twice img.jpg",
      src:"./Songs/TWICE I CAN T STOP ME M V.mp3",
    }
  ])

  const [currentSongIndex,setCurrentSongIndex]=useState(0);
  const[nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1>songs.length-1){
        return 0;
      }else{
        return currentSongIndex+1;
      }
    })
  },[currentSongIndex])

  return (
    <div className="App">
        <Player currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
        />
    </div>
  );
}

export default App;
