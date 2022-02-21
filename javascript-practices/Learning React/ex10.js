var gangwon={
    reports:[
        "용평","평창","강촌","강릉","홍천"
    ],
    print: function(delay=1000){
        setInterval(()=>
        {
            console.log(this.reports.join(","));
        },delay);
    }
}



const lordify = ({firstname}) =>{
    console.log(`${firstname}`);
}

let name = {
    firstname:"권",
    lastname:"순모"
};

gangwon.print();
lordify(name);


