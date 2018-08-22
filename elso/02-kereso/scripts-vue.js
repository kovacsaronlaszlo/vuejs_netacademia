let app = new Vue({

    el: 'main#app',

    data: {
        nameFilter: '',
        list: []
    },

    created() {
        this.list = [
            'Get Out',
            'Dunkirk',
            'Lady Bird',
            'Blade Runner 2049',
            'A Ghost Story',
            'The Florida Project',
            'Phantom Thread',
            'Call Me By Your Name',
            'Raw',
            'The Shape of Water',
            'Okja',
            'Personal Shopper',
            'It Comes at Night',
            'Good Time',
            'Star Wars: The Last Jedi'
        ];
    },

    methods: {

        GetResults() {
            return this.list.filter(item => {
                // üresnél visszapattanunk
                if (this.nameFilter == '') {
                    return true;
                }

                // pozíció megállapítása
                let position = item
                    .toLowerCase()
                    .indexOf(this.nameFilter.toLowerCase());

                return position != -1;
            });
        }
    }
});