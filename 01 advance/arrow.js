// const sayHello = function (name){
//     return"Hey there, " + name +" !"
// }

// console.log(sayHello('Sammy'));


const sayHello = (name) => `hey there ${name} !`


console.log(sayHello('sammy'));


const todos = [{
    title: 'Buy bread',
    isDone: true,
},{
    title: 'Go to gym',
    isDone: true,
},{
    title: 'Record youtube video',
    isDone: false,
}]


const thingsDone = todos.filter((todo) =>  todo.isDone === true)


// console.log(thingsDone);

const camera = {
    price: 600,
    weight: 2000,
    myDes: () => {
        return `This cannon camera is of $(this.price)$`
    }

}


console.log(camera.myDes());

//This is only for redux people 
// const func = () => ({key: 'value'});
