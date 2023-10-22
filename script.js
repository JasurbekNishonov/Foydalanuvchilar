let userId=1;
const array ={
    1:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    2:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    3:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    4:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    5:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    6:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    7:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    8:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    9:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    10:{
        user: userId++,
        name: let=prompt("Enter your name", `Name`),
        age: let=+prompt("Message",`${Math.round(Math.random()*(20-50)+50)}`,"Enter your age"),
    },
    
}
for (const key in array) {
    console.log(`User Id: ${array[key].user}`)
    if(array[key].name==0){
        console.log(`User Name: Name`)
    }else{
        console.log(`User Name: ${array[key].name}`)
    };
    if(array[key].age==0){
        console.log(`User Age: ${Math.round(Math.random()*(20-50)+50)}`)
    }else{
        console.log(`User Age: ${array[key].age}`)
    } 
}
