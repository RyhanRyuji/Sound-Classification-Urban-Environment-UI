import { useState } from "react";
//import { sendLike, sendDislike } from '../Services/PredictAPI'
import { sendFeedback } from '../Services/PredictAPI'
import './style.css'

function LikeDislikeButton({ audioFile }) {
  const [showDislikeInput, setShowDislikeInput] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [dislikeReason, setDislikeReason] = useState("");
  
  const options = [
    { value: "air_conditioner", label: "air_conditioner" },
    { value: "car_horn", label: "car_horn" },
    { value: "children_playing", label: "children_playing" },
    { value: "dog_bark", label: "dog_bark" },
    { value: "drilling", label: "drilling" },
    { value: "engine_idling", label: "engine_idling" },
    { value: "gun_shot", label: "gun_shot" },
    { value: "jackhammer", label: "jackhammer" },
    { value: "siren", label: "siren" },
    { value: "street_music", label: "street_music" },
    { value: "metro", label: "metro" },
  ];

//handle click like
  const handleLikeClick = async () => {
    try{
    setShowContent(false);
    //const data = await sendLike();
    console.log(audioFile);
    const data = await sendFeedback(audioFile,'like','OK');
    console.log(data);  
    } catch (error) {
        console.error(error);
      }
  };

  const handleDislikeClick = () => {
    setShowDislikeInput(true);
  };

  const handleDislikeSubmit = async (event) => {
    try{
    event.preventDefault();
    setShowDislikeInput(false);
    //console.log(dislikeReason);
    const data = await sendFeedback(audioFile,'dislike',dislikeReason ); 
    console.log(data); 
    setShowContent(false);
    } catch (error) {
    console.error(error);
    }

  };

  const handleDislikeInputChange = (selectedOption) => {
    const { value } = selectedOption.target;
    setDislikeReason(value);
  };


  return (
    <div>
      {showContent && (
        <div>
          <button className="like-btn" onClick={handleLikeClick}>Like</button>
          <button className="dislike-btn" onClick={handleDislikeClick}>Dislike</button>
          {showDislikeInput && (
            <form onSubmit={handleDislikeSubmit}>
              <label>
                Reason for dislike:
              </label>
              <div>
              <select className="my-select" value={dislikeReason} onChange={handleDislikeInputChange}>
                <option value="" disabled >Select a reason</option>
                {options.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              </div>
              <button className="submit-btn" type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
      {!showContent && (
        <div>
          <p>Thank you for your feedback!</p>
        </div>
      )}
    </div>
  );
}
export default LikeDislikeButton;