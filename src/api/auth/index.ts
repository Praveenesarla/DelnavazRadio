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
export const signUp = async (name: string, email: string, password: string) => {
  console.log('data', name, email, password);
  try {
    const response = await AuthAPIClient2.post('/register', {
      name: name,
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
