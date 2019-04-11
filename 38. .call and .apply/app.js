var obj = {
    name: 'johne doe',
    greet: function(param) {
        console.log(`hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name : 'jane doe'});
obj.greet.apply({name : 'jane doe'}); 
//you can pass array in apply