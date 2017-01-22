namespace carsapp.Controllers {

    export class HomeController {
        public vehicles = [
             {
                id: 1,
                // make: ,
                // model: ,
                ShortDescription: "Green MINI Cooper S",
                FullDescription : "This MINI Cooper S is great for the city.",
                CarMakeId : 3,
                Price : 30000,
                ImageUrl : "https://netlogx.com/wp-content/uploads/2012/09/british-racing-green-mini-cooper-s-small1.jpg"
            },
            {
                id: 2,
                // make: ,
                // model: ,
                ShortDescription : "Orange MINI Cooper S",
                FullDescription : "Orange is an odd color for a car.",
                CarMakeId : 3,
                Price : 25000,
                ImageUrl : "https://s-media-cache-ak0.pinimg.com/736x/7d/d3/fc/7dd3fcdea71950a3d1c9c50b3522d488.jpg"
            },
            {
                id: 3,
                // make: ,
                // model: ,
                ShortDescription : "Black MINI Cooper Countryman",
                FullDescription : "Holds more people than a normal MINI cooper and it is invisible at night.",
                CarMakeId : 3,
                Price : 45000,
                ImageUrl : "http://www.moibbk.com/images/mini-cooper-countryman-black-2.jpg"
            },
            {
                id: 4,
                // make: ,
                // model: ,
                ShortDescription : "Tesla Model S",
                FullDescription : "This red Tesla Model S has a 120 mile range.",
                CarMakeId : 2,
                Price : 130000,
                ImageUrl : "http://media.caranddriver.com/images/14q4/638369/2015-tesla-model-s-p85d-first-drive-review-car-and-driver-photo-648964-s-original.jpg"
            },
            {
                id: 5,
                // make: ,
                // model: ,
                ShortDescription : "Tesla Model X",
                FullDescription : "A Tesla Mini Van with Falcon Doors.",
                CarMakeId : 2,
                Price : 150000,
                ImageUrl : "http://cdn.vrworld.com/wp-content/uploads/2015/09/tesla-model-x-concept-doors-open-rear-three-quarter.jpg"
            }
        ]
    public navigate = [
        {title: 'HOME'},
        {title: 'ABOUT'}
        ]
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class DisplayController {
        public message = 'Hello from the display page!';
    }


}
