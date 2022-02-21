const [firstAnimal] =["캥거루","월뱃","코알라"];

console.log(firstAnimal);

const skier ={
    name,
    sound,
    powderYell(){
        let yell = this.sound.toUpperCase();
        console.log(yell);
    },
    speed(mph){
        this.speed = mph;
        console.log('속력(mph):'+mph);
    }
}