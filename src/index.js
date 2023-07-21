import './index.scss';
async function getData (){
    const request = await fetch("/data/steamData-after2019.json")
    const respone = await request.json();
    const array =Object.values(respone);
    const newObj = array.reduce((obj,item)=>Object.assign(obj,{[item.name]: item}),{})
    // console.log("string",respone["1313"]);
    console.log("string",newObj["Second Sight"]);
    console.log("string",newObj["Second Sight"].price);
}


getData();