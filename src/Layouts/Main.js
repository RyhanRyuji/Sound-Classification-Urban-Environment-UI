import React, { useState } from 'react';
import { sendAudioData } from '../Services/PredictAPI';
import './Main.css'
import PredictButton from '../Components/PredictButton';
import CloseButton from '../Components/CloseButton';
import PredictionOutput from '../Components/PredictionOutput';
import LikeDislikeButton from '../Components/LikeDislikeButtons';
import airConditionerImage from '../Assets/air_conditioner.png';
import carHornImage from '../Assets/car_horn.png';
import childrenPlayingImage from '../Assets/children_playing.png';
import dogBarkImage from '../Assets/dogBarking.png';
import drillingImage from '../Assets/drilling.png';
import engineIdlingImage from '../Assets/engine_idling.png';
import gunShotImage from '../Assets/gun_shot.png';
import jackhammerImage from '../Assets/jackhammer.png';
import metroImage from '../Assets/metro.png';
import sirenImage from '../Assets/siren.png';
import streetMusicImage from '../Assets/street_music.png';
function Main() {
    const [response, setResponse] = useState(null);
    const [audioFile, setAudioFile] = useState(null);
    const [fileInputKey, setFileInputKey] = useState(Date.now());

    const imageMap = {
      'air_conditioner': airConditionerImage,
      'car_horn': carHornImage,
      'children_playing': childrenPlayingImage,
      'dog_bark': dogBarkImage,
      'drilling': drillingImage,
      'engine_idling': engineIdlingImage,
      'gun_shot': gunShotImage,
      'jackhammer': jackhammerImage,
      'metro': metroImage,
      'siren': sirenImage,
      'street_music': streetMusicImage,
    };
    
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setAudioFile(selectedFile);
      };

    const handleRemoveClick = () => {
        setAudioFile(null);
        setFileInputKey(Date.now());
        setResponse(null);
      };
      
  
    const handleButtonClick = async () => {
      if (audioFile) {
      const responseData = await sendAudioData(audioFile);
      console.log(responseData.filename);
      setResponse(responseData);
      }
    };
    return (
        <div className='wrap-main'>    
           <div>  
             <input className='audio-upload'  key={fileInputKey} type="file" accept=".mp3,.wav" multiple={false} onChange={handleFileChange} required />  
         
            {audioFile && (
            <CloseButton onClick={handleRemoveClick} />  
            )}
            <PredictButton onClick={handleButtonClick} disabled={!audioFile}/>
          </div> 
          {response && (
          <>
          {/*<PredictionOutput imageSrc={`../Assets/${response.image}`} prediction={response.result} />
            */} 
          <PredictionOutput imageSrc={imageMap[response.result]}  prediction={response.result} />
          <div>
          <LikeDislikeButton audioFile={response.filename}/>
          </div>
          </>
          )}
          
        </div>
      );
    }
    
    export default Main;