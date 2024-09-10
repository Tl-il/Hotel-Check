import axios from 'axios';

const fetchHotelData = async (id) => {
    const options = {
      method: 'GET',
      url: 'https://hotels-com-provider.p.rapidapi.com/v2/hotels/details',
      params: {
        domain: 'US',  // ייתכן שתצטרך לעדכן בהתאם לדומיין המתאים
        hotel_id: id,  // מזהה המלון המתקבל כפרמטר
        locale: 'en_US'  // ניתן לשנות את השפה בהתאם לצורך
      },
      headers: {
        'x-rapidapi-key': 'c54b3e88f4msh7f477ef6ea45dd9p142dbbjsn195bb079a813',  // וודא שהמפתח הזה פעיל
        'x-rapidapi-host': 'hotels-com-provider.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log('Response from API:', response.data); // הדפס את התשובה ל-API
      return response.data;
  } catch (error) {
      console.error('Error fetching hotel data:', error);
      return null;
  }
};


export default fetchHotelData;
