const peaks =["대청봉","중청봉","소청봉"];
const canyons =["천불동계곡","가야동계곡"];
const sum=[...peaks,...canyons];

console.log(sum.join(','));


function direction(...args){
    let [start,...remaining]=args;
    let [finish,...stops]=remaining.reverse();

    console.log(start);
    console.log(remaining.join(','));
    console.log(finish);
    console.log(stops.join(','));
}


direction("양파","토마토","당근","양배추");