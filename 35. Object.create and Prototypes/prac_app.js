var Person = {
    firstname : '',
    lastname: '',
    greet : function() {
        console.log(this.firstname + ' ' + this.lastname);
    }
}

var bae = Object.create(Person);
bae.firstname = 'hwisun';
bae.lastname = 'bae';

var bo = Object.create(Person);
bo.firstname = 'bowen';
bo.lastname = 'yan';

bae.greet();
bo.greet();