const myInfo = {
    name: 'Carlos Guardado',
    address: '1142 Riverside',
    city: 'Sugar Hill',
    state: 'Georgia',
    zip: '30518'
}



function printContact(info){
    console.log(info.name);
    console.log(info.address);
    console.log(info.city, info.state, info.zip);
}

printContact(myInfo);