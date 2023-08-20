let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })

// .then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log("error is :",err);
// })
// console.log("i am happy");

//  async function getfacts(){
//     console.log("yha se API start hai");
//     try{
//         let res=await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);


//         let res2=await fetch(url);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }catch(err){
//         console.log("error is :",err)
//     }
//     console.log("bye bye jee");
    
// }
    
   let btn=document.querySelector("button");
   btn.addEventListener("click",async()=>{
//   console.log("button was clicked");
     let fact= await getFact();
    //  console.log(fact);
     let res=document.querySelector("#result");
     res.innerText=fact;
    //  res.style.color="black";
    //  res.style.backgroundColor="royalblue";
    res.classList.add("result");
   })

  async function getFact(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error is:",e);
        return "No fact found";
      }
  }