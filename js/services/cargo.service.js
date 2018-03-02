/*global app, angular*/
app.service('CargoService', function ($http, $log) {
    return {
        mapping: app.API_URL_BASE + "cargos/",
        config: {
            headers: {
                'Content-Type': undefined
            },
            transformRequest: angular.identity
        },
        list: function () {
            return $http.get(this.mapping);
        },
        save: function (solicitante) {
            return $http.post(this.mapping, solicitante, this.config);
        },
        
        delete: function(cargoId){
            $log.info("Borrando cargo con id:", cargoId);
            return $http.delete(this.mapping+cargoId);
        }
    };
});
