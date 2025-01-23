const cvancestors = [
    {
        name: 'Adam Nowak',
        photoUrl: "assets/mini_jurica-koletic-7YVZYZeITc8-unsplash.jpg",
        text: `Urodziłem się w małej wsi w małopolskiej Toporzysku w 1981 roku. Chodziłem do 
        szkoły w Toporzysku, a w szkole średniej byłem w Jordanowie. Pracuję w przedsięmbiorstwie
         drzewnym. Po skończeniu szkoły zaczełem prace w przedsiembiorstwie drzewnym w Toporzysku. 
         Mam żonę Natalię i dwójkę dzieci, Jana i Weronikę`

    },
    {
        name: 'Natalia Nowak',
        photoUrl: "assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
        text: `Urodziłem się w małej wsi w małopolskiej Toporzysku w 1992 roku. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lectus gravida, rhoncus leo sed, sodales massa.
        Donec neque est, porttitor et urna sit amet, convallis semper est. Donec varius ipsum
        in ante sagittis fringilla. Curabitur augue velit, faucibus at sodales quis, scelerisque a neque. 
        Aenean laoreet sapien nulla, posuere dignissim ante faucibus id. Nulla odio metus, luctus et erat eu,
        ultricies finibus urna. Curabitur sed diam ullamcorper, aliquet metus eu, maximus massa. In quis leo nunc.
        Fusce venenatis fermentum tellus. Suspendisse porttitor placerat lectus, sit amet aliquet augue auctor ac.
        Donec dignissim semper accumsan. Aenean non luctus metus. In et nisl quam. 
        Sed augue ipsum, fringilla quis aliquet nec, ornare vitae arcu. Ut metus massa, 
        volutpat non elit vel, molestie aliquet ex. Vestibulum sit amet malesuada tortor. 
        Duis ut aliquet sem. Nam vitae cursus elit. Sed cursus id erat nec consectetur.
        Duis hendrerit faucibus vulputate. Donec sit amet tempus enim, mollis condimentum nunc.

        Suspendisse sit amet lorem sed dolor condimentum condimentum eget in nulla.
        Vestibulum tortor est, faucibus ut malesuada ut, tempus sed dui. Donec bibendum
        sem efficitur tempor bibendum. Etiam laoreet, lorem at pharetra aliquam, nunc neque 
        sollicitudin est, quis mattis lacus sem sit amet enim. Proin augue. `

    },
    {
        name: 'Adam Reader',
        photoUrl: "assets/mini_jurica-koletic-7YVZYZeITc8-unsplash.jpg",
        text: `Urodziłem się w małej wsi w małopolskiej Toporzysku w 1992 roku. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae lectus gravida, rhoncus leo sed, sodales massa.
        Donec neque est, porttitor et urna sit amet, convallis semper est. Donec varius ipsum
        in ante sagittis fringilla. Curabitur augue velit, faucibus at sodales quis, scelerisque a neque. 
        Aenean laoreet sapien nulla, posuere dignissim ante faucibus id. Nulla odio metus, luctus et erat eu,
        ultricies finibus urna. Curabitur sed diam ullamcorper, aliquet metus eu, maximus massa. In quis leo nunc.
        Fusce venenatis fermentum tellus. Suspendisse porttitor placerat lectus, sit amet aliquet augue auctor ac.
        Donec dignissim semper accumsan. Aenean non luctus metus. In et nisl quam. 
        Sed augue ipsum, fringilla quis aliquet nec, ornare vitae arcu. Ut metus massa, 
        volutpat non elit vel, molestie aliquet ex. Vestibulum sit amet malesuada tortor. 
        Duis ut aliquet sem. Nam vitae cursus elit. Sed cursus id erat nec consectetur.
        Duis hendrerit faucibus vulputate. Donec sit amet tempus enim, mollis condimentum nunc.

        Suspendisse sit amet lorem sed dolor condimentum condimentum eget in nulla.
        Vestibulum tortor est, faucibus ut malesuada ut, tempus sed dui. Donec bibendum
        sem efficitur tempor bibendum. Etiam laoreet, lorem at pharetra aliquam, nunc neque 
        sollicitudin est, quis mattis lacus sem sit amet enim. Proin augue. `

    }
];

const imageElement = document.querySelectorAll('.ancestores__foto');
const textElement = document.querySelectorAll('.ancestores__text');
const nameElement = document.querySelectorAll('.ancestores__username');

let index = 0;

function updatecv(){
    // Get current CV data from array at current index
    const { name, photoUrl, text } = cvancestors [index];
    imageElement.src = photoUrl; 
    textElement.innerText = text;
    nameElement.innerText = name;
    index = (index + 1) % cvancestors.length;

    setTimeout (updatecv, 2000);

}


updatecv();