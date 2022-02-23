let schools =[
    {name:"Yorktown"},
    {name:"Stratford"},
    {name:"Washington & Lee"},
    {name:"Wakefield"}
];
const editName=(oldName,name,arr)=>arr.map((item) => item.name ===oldName ? {...item,name}:item);

const reuslt=editName("Yorktown","Panda",schools);

console.log(schools);
console.log(reuslt);