/* global app*/
app.controller('TareasPendientesController', 
    function($scope, $http, $log){
        $scope.tareasPendientes = [{fechaSolicitudStr: '28/02/2018'}];
    
    
    $scope.listOk = function(resp){
        $log.info("Pendientes:", resp);
        $scope.tareasPendientes = resp.data;
    };
    
    $http.get(app.API_URL_BASE+"tareas/pendientes")
        .then($scope.listOk);
});


app.controller('TareasFinalizadasController', function($scope, $http, $log){
     $scope.tareasFinalizadas = [{fechaSolicitudStr: '28/02/2018'}];
    
      
    $scope.listOk = function(resp){
        $log.info("Finalizadas:", resp);
        $scope.tareasFinalizadas = resp.data;
    };
    
    $http.get(app.API_URL_BASE+"tareas/finalizadas")
        .then($scope.listOk);
});