/*global app, angular*/
app.service('SolicitanteService', function ($http) {
    return {
        mapping: app.API_URL_BASE + "solicitantes",
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
        }
    };
});
