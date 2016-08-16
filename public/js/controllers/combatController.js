function combatController($scope, combatService, todoService){
 // debugger;
    $scope.win="";
    $scope.pok1=[];
    $scope.pok2=[];
    $scope.date=new Date(),'yyyy-MM-dd HH:mm:ss Z';

    $scope.create = function(){
        combatService.create({win:$scope.pok1, date:$scope.date, pok1:$scope.pok1, pok2:$scope.pok2})
        .then(function(){
            $scope.getAll();
        })
    }

    $scope.getAll = function(){
        combatService.getAll()
        .then(function(res){
            $scope.combats=res.data;
        })

    }

    $scope.update = function(id,data){
        combatService.update(id, {win:data.win, date:data.date, pok1:$scope.pok1, pok2:$scope.pok2})
        .then(function(res){
            $scope.getAll();
        })
    }

    $scope.delete = function(x){
        combatService.delete(x)
        .then(function(){
            $scope.getAll();
        })
    }

    $scope.getAlltodos = function(){
        todoService.getAll()
        .then(function(res){
            $scope.todos=res.data;
        })
    }
    $scope.getAll();
    $scope.getAlltodos();
}
