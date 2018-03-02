var app = angular.module('owlApp', ['ngRoute']);

app.API_URL_BASE = "http://localhost:9191/owlback/";
app.config(function ($routeProvider, $locationProvider) {

    //evitar '!' en la url
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/solicitantes', {
            templateUrl: 'partials/solicitante/solicitante_index.html'
        })
        .when('/cargos', {
            templateUrl: 'partials/cargo/cargo_index.html'
        })
        .when('/departamentos', {
            templateUrl: 'partials/departamento/departamento_index.html'
        })
        .when('/tareas-finalizadas', {
            templateUrl: 'partials/tarea/tareas_finalizadas.html'
        })
        .when('/tareas-pendientes', {
            templateUrl: 'partials/tarea/tareas_pendientes.html'
        });
    
});
