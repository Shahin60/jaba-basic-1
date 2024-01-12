let shahin = document.getElementsByClassName('shahin');
// let shahin =document.getElementsByTagName('p')
for (let i = 0; i < shahin.length; i++) {
    let element = shahin[i];
    
    element.innerHTML ='shahin ahmed'

   element.style.backgroundColor = '#bb4646';
   element.style.color = '#fff'
   element.style.width='130px'
   element.style.margin='5px'
   element.style.fontSize= '22px'
   element.style.margin='auto'
   element.style.padding='5px'
   element.style.borderRadius='5px'
}


// for ( let i=0; i<shahin.length; i++){
//     let byColor =shahin[i];
//     byColor.style.backgroundColor = '#3f9973'
//     byColor.style.color ='#fff'
// }



let query = document.querySelectorAll('.element h1');

for ( let i=0; i<query.length; i++){
var queryStyle = query[i];
    queryStyle.style.backgroundColor = '#bb4646';
    queryStyle.style.color='#fff'
    queryStyle.style.width = '200px'
    queryStyle.style.margin= 'auto'
    queryStyle.style.paddingLeft ='20px'
}
document.querySelector('#shahin').setAttribute('title', 'shahin') 