/* global ap*/

app.controller('CargoController', function($scope, $log, CargoService){
        
    $scope.onDeleteBtnClicked = function (cargo) {
            $log.info("Click en boton borrar");
            if(cargo){
                $scope.cargo = cargo;
            }
            swal({
                    title: "Estas seguro?",
                    text: "Borrar registro!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((borradoOk) => {
                    if(borradoOk){
                        $scope.borrar();
                    }
                });
        
    };
    
    $scope.borrar = function(){
        var cargoId = $scope.cargo.id;
        //var url = app.API_URL_BASE + "cargos/" + cargoId;
        CargoService.delete(cargoId).then($scope.borradoOk, $scope.borradoError);
    }
    
    $scope.borradoOk = function(){
        $scope.listarCargos();
        swal("Registro Borrado", {
           icon: "success", 
        });
    };
    
    $scope.borradoError = function(resp){
       $log.error("Error al borrar: ", resp);
        swal(resp.data.errorMsg, {
            icon: "error",
        });
    };
    
    $scope.listarCargos = function(){
        var url = app.API_URL_BASE + "cargos/";
        $scope.loadingCargos = true;
        CargoService.list().then(function(resp){
            $scope.loadingCargos = false;
            $scope.cargos = resp.data;
        });
    };
    
    //constructor
    (function(){
        $scope.listarCargos();    
    })();
    
});