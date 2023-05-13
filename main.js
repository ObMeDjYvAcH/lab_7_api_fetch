function displayText() {



   let inputElement = document.getElementById("test_one");
   let inputValue = inputElement.value;


   async function getResponse(){
      let response = await fetch('https://restcountries.com/v3.1/name/deutschland');
      let content = await response.json();
      let key;
      
      for (key in content){
         
         let valueCapit = content[key].capital;
         let valueRegion = content[key].region;
         
         if(inputValue === valueCapit[0]){
            console.log("Your data - " + valueCapit);
         }else if(inputValue === valueRegion){
            console.log("Your data - " + valueRegion);
         }else{
            console.log("wrong data");
         }
      }
      
      }
      getResponse();
}













