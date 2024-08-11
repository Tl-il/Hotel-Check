import axios from 'axios';

const fetchHotelData = async (id) => {
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
      params: {
        hotel_id: id,
        locale: 'en-gb',
        image_quality: 'high',
      },
      headers: {
        'x-rapidapi-key': '26a3926c6emsh3fac17e666bc2e6p138527jsnc80012db20da',
        'x-rapidapi-host': 'booking-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
};

export default fetchHotelData;
