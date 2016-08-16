function todoService($http) {
    return {

        getAll() {
            return $http.get('/api/todos')
        },

        create(data) {
            return $http.post('/api/todos', {
                nom: data.nom,
                vie: data.vie,
                date: data.date,
                cat: data.cat,
                pc: data.pc,
                exp: data.exp
            })
        },

        getOne(id) {
            return $http.get('/api/todos/' + id)
        },

        update(id, data) {
            return $http.put('/api/todos/' + id, {
                nom: data.nom,
                vie: data.vie,
                date: data.date,
                cat: data.cat,
                pc: data.pc,
                exp: data.exp
            })
        },

        delete(id) {
            return $http.delete('/api/todos/' + id)
        }
    }
}
function combatService($http) {
    return {

        getAll() {
            return $http.get('/api/combats')
        },

        create(data) {
            return $http.post('/api/combats', {
                win: data.win,
                pok1: data.pok1,
                pok2: data.pok2,
                date: data.date
            })
        },

        getOne(id) {
            return $http.get('/api/combats/' + id)
        },

        update(id, data) {
            return $http.put('/api/combats/' + id, {
                win: data.win,
                pok1: data.pok1,
                pok2: data.pok2,
                date: data.date
            })
        },

        delete(id) {
            return $http.delete('/api/combats/' + id)
        }
    }
}
