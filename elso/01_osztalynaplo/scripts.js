let app = new Vue({
    el: 'main#app',
    data: {
        pageTitle: 'Osztálynapló',
        studentCollection: [
            {name: 'anna', gender: 'lány'},
            {name: 'béla', gender: 'fiú' },
            {name: 'tomi', gender: 'fiú'},
            {name: 'panka', gender: 'lány'},
            {name: 'zoli', gender: 'fiú'},
            {name: 'dóri', gender: 'lány'},
        ],
        newStudent: {
            name: '',
            gender: ''
        },
        style: {
            color: 'white',
            backgroundColor: 'gray'
        }
    },
    methods: {
        AddNewStudent() {
            if (!this.newStudent) {
                return;
            }
            this.studentCollection.push(this.newStudent);
            this.newStudent = {name: '', gender: ''};
        },
        GetColor(student) {
            let backgroundColor = student.gender == 'fiú' ? 'blue' : 'red';
            return {
                color: 'white',
                backgroundColor: backgroundColor
            };
        }
    }
});
