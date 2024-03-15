/* eslint-disable no-console */

const apiKey = 'h7Z5HRlTGbVnxG7UTAZ5QeLWfs07vglaQXQpUekR';

const fetchImageData = async () => {
  try {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    // console.log('Title:', data.title);
    // console.log('Date:', data.date);
    // console.log('Explanation:', data.explanation);
    // console.log('URL:', data.url);

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

//   fetchData()
//     .then(data => {
//       displayAPOD(data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
export default fetchImageData;
