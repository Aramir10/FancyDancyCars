namespace carsapp.Services {

    export class CarService {
        private CarResource;

        public listCars() {
            return this.CarResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarResource = $resource('/api/cars');
        }
    }
    angular.module('carsapp').service('carService', CarService);
    export class MyService {
        // public carValue(a){
            
        //     console.log(a)
        // }
    }
    angular.module('carsapp').service('myService', MyService);
    }
