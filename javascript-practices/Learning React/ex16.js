const schools={
    "Yorktown":10,
    "Washington":2,
    "Wakefield":5
};

const schoolsArray = Object.keys(schools).map(key=>({ name:key , wins:schools[key]}));


console.log(schoolsArray);
