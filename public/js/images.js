var myWidget = cloudinary.createUploadWidget({
cloudName: 'dbxgwfodo', 
uploadPreset: 'of5kcle0',
folder: 't-party-photos'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
    console.log('Done! Here is the image info: ', result.info); 
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
}, false);