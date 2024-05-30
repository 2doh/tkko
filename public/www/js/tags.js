window.addEventListener("load", function () {
  const dataUrl = "./apis/tag.json";
  fetch(dataUrl).then((response) => {
    const result = response.json();
    console.log(result);
    return result;
  })
  .then((result)=>{
    let allTag=""
    for(let i=0; i<result.length; i++){
        const item = 
    }
  })
  .catch(error){
    console.log(error);
  }
});
