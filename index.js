const cvancestors = [
    {
        name: 'Maria Rój',
        photoUrl: "assets/images/ry_roj_maria.jpg",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada felis eu
         ultrices dignissim. Nam facilisis justo dolor, eget cursus mi tincidunt pellentesque. 
         Ut sit amet sollicitudin nunc. Aenean turpis ligula, pulvinar nec metus sagittis, vestibulum
          posuere libero. Mauris ipsum nunc, ornare in ipsum sed, vehicula vulputate odio. Vivamus 
          cursus lacus eu nisi hendrerit, vel hendrerit ipsum bibendum. Quisque pulvinar sapien id
           pellentesque ultricies. Nullam pretium pharetra odio, eget porttitor lectus tristique id.
            Nulla a est ac sem tempor dapibus cursus sed erat. Maecenas velit nisi, pellentesque vel 
            malesuada non, venenatis sit amet mi. Praesent sagittis volutpat arcu, vitae fringilla erat.
             Quisque nec lectus id erat porttitor
         dignissim ut vel magna. Vestibulum gravida convallis urna, vitae rutrum enim iaculis at.`

    },
    {
        name: 'Schodnicka Bogumiła',
        photoUrl: "assets/images/sch_sch_bog.jpg",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada felis eu
         ultrices dignissim. Nam facilisis justo dolor, eget cursus mi tincidunt pellentesque. 
         Ut sit amet sollicitudin nunc. Aenean turpis ligula, pulvinar nec metus sagittis, vestibulum
          posuere libero. Mauris ipsum nunc, ornare in ipsum sed, vehicula vulputate odio. Vivamus 
          cursus lacus eu nisi hendrerit, vel hendrerit ipsum bibendum. Quisque pulvinar sapien id
           pellentesque ultricies. Nullam pretium pharetra odio, eget porttitor lectus tristique id.
            Nulla a est ac sem tempor dapibus cursus sed erat. Maecenas velit nisi, pellentesque vel 
            malesuada non, venenatis sit amet mi. Praesent sagittis volutpat arcu, vitae fringilla erat.
             Quisque nec lectus id erat porttitor
         dignissim ut vel magna. Vestibulum gravida convallis urna, vitae rutrum enim iaculis at. `

    },
    {
        name: 'Schodnicka Stanisława',
        photoUrl: "assets/images/sch_sch_stasia.jpg",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada felis eu
         ultrices dignissim. Nam facilisis justo dolor, eget cursus mi tincidunt pellentesque. 
         Ut sit amet sollicitudin nunc. Aenean turpis ligula, pulvinar nec metus sagittis, vestibulum`

    }
];

const imageElement = document.querySelector('.ancestores__foto');
const textElement = document.querySelector('.ancestores__text');
const nameElement = document.querySelector('.ancestores__username');

let idx = 0;

function updatecv()  {
    const { name, photoUrl, text } = cvancestors[idx];
    console.log(`Updating: ${name}`);
    nameElement.innerText = name;
    imageElement.src = photoUrl;
    textElement.innerText = text;
   
    idx = (idx + 1) % cvancestors.length;
    

    setTimeout(updatecv, 2000);
}

updatecv(); // Initial call to start the animation. 2 seconds after page load. 2000 milliseconds = 2 seconds.

