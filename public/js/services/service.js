function todoService($http) {
    return {

        getAll() {
            return $http.get('/api/todos')
        },

        create(data) {
            return $http.post('/api/todos', {
                name: data.name,
                number: data.number
            })
        },

        getOne(id) {
            return $http.get('/api/todos/' + id)
        },

        update(id, data) {
            return $http.put('/api/todos/' + id, {
                name: data.name,
                number: data.number
            })
        },

        delete(id) {
            return $http.delete('/api/todos/' + id)
        }
    }
}
