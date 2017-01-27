namespace carsapp.Controllers {

    export class HomeController {
        public cars;
        public openDialog(yourCar) {
            console.log(yourCar);
            this.$mdDialog.show({
                controller: ModalController,
                controllerAs: 'modal',
                templateUrl: '/ngApp/views/modal.html',
                // clickOutsideToClose: true,
                locals: {car: yourCar}
            })
            
        }

        constructor(carService:carsapp.Services.CarService, private $mdDialog: angular.material.IDialogService) { 
            this.cars = carService.listCars();
        }
    
    }
    
    export class ModalController {
        public closeDialog(){
            this.$mdDialog.hide();
        }
        constructor(public car, private $mdDialog: angular.material.IDialogService) {
            
        }
    }
    
    export class AboutController {
       public image = {
            ImageUrl: "/ngApp/controllers/lemonade.jpg"
        }
    }

}

 
                
                // contentElement: '#myDialog',
                // parent: angular.element(document.body),
                // targetEvent: ev,
                // clickOutsideToClose: true