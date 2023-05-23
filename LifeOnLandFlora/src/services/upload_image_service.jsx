import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadImage = async (imageFile, dispatch) => {
  const storage = getStorage();
  console.log(imageFile.name)
  const storageRef = ref(storage, `images/${imageFile.name}`);

  dispatch({
    type: "SET_LOADING",
    payload: true
  })

  try {
    // Upload image to Firebase Storage
    await uploadBytes(storageRef, imageFile);

    // Get download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRef);
    dispatch({
      type: "SET_LOADING",
      payload: false
    })
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    dispatch({
      type: "SET_LOADING",
      payload: false
    })
    return null
  }
};


export default { uploadImage }