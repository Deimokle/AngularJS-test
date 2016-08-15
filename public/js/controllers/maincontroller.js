function mainController($scope, todoService){
    $scope.name="";
    $scope.number="";
    $scope.tab=[];

    $scope.create = function(){
        todoService.create({name:$scope.name, number:$scope.number})
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
        todoService.update(id, {name:data.name, number:data.number})
        .then(function(res){
            $scope.getAll();
        })
    }
    $scope.getAll();

}
