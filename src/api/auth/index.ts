/* eslint-disable prettier/prettier */
import {APIClient, AuthAPIClient, AuthAPIClient2} from '../axios.config';

// AUTH RELATED END-POINTS

// Send-OTP
export const login = async (email: string, password: string) => {
  try {
    console.log(email, password);
    const response = await AuthAPIClient2.post('/login', {
      email: email,
      password: password,
    });
    console.log('api', response);
    return response;
  } catch (e: any) {
    console.log('api', e);
    return e;
  }
};

// Signup
export const signUp = async (email: string, password: string) => {
  try {
    const response = await AuthAPIClient2.post('/register', {
      email: email,
      password: password,
    });
    console.log('resss', response);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const newPodcast = async (
  name: string,
  description: string,
  category: string,
  bannerimage: File | Blob,
  recordingfile: File | Blob,
) => {
  console.log('data', name, description, category, bannerimage, recordingfile);
  try {
    const formData = new FormData();
    formData.append('name', 'Sample Name');
    formData.append('description', 'Sample Description');
    formData.append('category', 'Sample Category');
    formData.append('bannerimage', {
      uri: bannerimage, // Replace with your image file URI
      name: 'image.jpg',
      type: 'image/jpeg', // Ensure the type matches the file's MIME type
    });
    formData.append('recordingfile', {
      uri: recordingfile, // Replace with your audio file URI
      name: 'audio.mp3',
      type: 'audio/mpeg', // Ensure the type matches the file's MIME type
    });

    const response = await AuthAPIClient.post('/podcast/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getAllPodcast = async () => {
  try {
    const response = await AuthAPIClient.get('/podcast');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (category: string) => {
  try {
    const response = await AuthAPIClient.get(`/podcast/category/${category}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getRoom = async () => {
  try {
    const response = await AuthAPIClient.get('/room');
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async () => {
  try {
    const response = await AuthAPIClient2.get('/me');
    console.log('ress', response);
    return response;
    
  } catch (error) {
    console.log(error);
  }
};

export const addProfile = async (phone: string, name: string) => {
  try {
    const response = await AuthAPIClient2.put('/update', {
      phone: phone,
      name: name,
    });
    console.log('apii', response);
    return response;
  } catch (e: any) {
    console.log('api', e);
    return e;
  }
};
