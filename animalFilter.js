const buttons = document.querySelectorAll('.buttonFilter');
const images = document.querySelectorAll('.imageFilter');

for(const button of buttons){
    button.addEventListener('click', function(event){
            event.preventDefault();
            const animal = this.getAttribute('animal');
            //console.log(animal);

            for(image of images){
                let imageClass = image.getAttribute('class');
                //console.log(imageClass);
                if(imageClass.includes(animal) || animal === 'all'){
                   // console.log(animal);
                    image.setAttribute('style', 'display:inline-block');
                }else{
                    image.setAttribute('style', 'display:none');
                }
            }

    })
}

// for(const button of buttons){
//     button.addEventListener('click', function(event){
//         const animals = this.getAttribute('animal');
//         console.log(animals);
//         for(img of images){
//             if(animal === 'all' || img.getAttribute('class').includes(animal) ){
//                 img.style.display = 'inline-block';
//             }
//             else {
//                 image.style.display = 'none';
//               }
//                event.preventDefault();

//          }
//     }
//  )};

const search = document.querySelector('.searchFilter');
for (const image of images) {
    search.addEventListener('keyup', function (event) {
        event.preventDefault();
    const alt = image.getAttribute('alt');
    console.log(alt);
    if (!this.value || (alt && alt.includes(this.value))) {
      image.style.display = 'inline-block';
    }
    else {
      image.style.display = 'none';
    }
    return false;

  }
)};

