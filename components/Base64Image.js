
const Base64Image   = ({base64String}) =>{
    const binaryform = atob(base64String);
    const binarr = new Uint8Array(binaryform.length);
   
    for (let i = 0 ; i < binaryform.length  ; i++){
        binarr[i]  = binaryform.charCodeAt(i);
    }

    const blob = new Blob([binarr] , {type: 'image/jpeg'});

    const imageURL = URL.createObjectURL(blob);

    return <img src = {imageURL} alt="Base 64 image"/>
};

export default Base64Image;