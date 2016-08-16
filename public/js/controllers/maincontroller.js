function mainController($scope, todoService){
    $scope.nom="";
    $scope.vie="";
    $scope.date="";
    $scope.cat=[Feu, Eau, Roche];
    $scope.pc="";
    $scope.exp="";

    $scope.create = function(){
        todoService.create({name:$scope.nom, vie:$scope.vie, date:$scope.date, cat:$scope.cat, pc:$scope.pc, exp:$scope.exp})
        .then(function(){
            $scope.getAll();
        })
    }

    $scope.getAll = function(){
        todoService.getAll()
        .then(function(res){
            $scope.todos=res.data;
        })

    }

    $scope.update = function(id,data){
        todoService.update(id, {name:data.nom, vie:data.vie, date:data.date, cat:data.cat, pc:data.pc, exp:data.exp})
        .then(function(res){
            $scope.getAll();
        })
    }

    $scope.delete = function(x){
        todoService.delete(x)
        .then(function(){
            $scope.getAll();
        })
    }

    $scope.getAll();

}
