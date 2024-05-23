window.addEventListener ("load", function (){
  const dataUrl = "./apis/cardslide.json"

  fetch(dataUrl)
  .then((response)=>{
    const data = response.json()
    return data;
  })
  .then((result)=>{
    let slideTags = "";

    for (let i = 0; i < result.length; i++) {
      
    }
    
  })
  .catch((error)=>{
    console.log(error)
  })
})