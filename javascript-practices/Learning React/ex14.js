const person={
    name:"아무개",
    canRead:false,
    canWrite:false
};

const selEducate = (p)=>{
    p.canRead=true;
    p.canWrite = true;
    return p;
}

console.log(person);
console.log(selEducate(person));
console.log(person);

//=========================================================
const person2={
    name:"아무개",
    canRead:false,
    canWrite:false
};

const selEducate2 = (p)=>({
    ...p,
    canRead:true,
    canWrite:true
});

console.log(person2);
console.log(selEducate2(person2));
console.log(person2);