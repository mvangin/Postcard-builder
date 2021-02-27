import { projectFirestore } from '../firebase/config';

const RemoveImage = (collection, data) => {
      projectFirestore.collection(collection).doc(data).delete().then(() => {
          console.log("successfully deleted");
      }).catch((error) => {
          console.log("error removing documnet: ", error)
      })
}
  
  
  export default RemoveImage;