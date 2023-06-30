import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const sendAudioData = async (audioFile) => {
  const formData = new FormData();
  formData.append('audioFile', audioFile);
  try {
    const response = await axios.post(`${API_URL}/process-audio`, formData, {
      //const response = await Promise(`${API_URL}/process-audio`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    //const { result } = response.data;
    // Use the result and image data in your React application
    //console.log('Result:', result);
  
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
// send like and dislike response
async function sendFeedback(audioFile, feedback, reason) {
  try {
    const response = await axios.post(`${API_URL}/feedback`, {audio_file: audioFile, feedback, reason:reason });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { sendFeedback };