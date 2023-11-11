let ul = document.createElement('ul');

let contentUl= ["Japan (Asia): Known for its rich culture, technology, and delicious cuisine.",
"Brazil (South America): Famous for vibrant carnivals, the Amazon Rainforest, and diverse ecosystems.",
"South Africa (Africa): Offers a mix of stunning landscapes, wildlife, and a rich history.",
"Australia (Oceania): Home to unique wildlife, beautiful beaches, and the iconic Outback.",
"Germany (Europe): Known for its history, castles, precision engineering, and Oktoberfest celebrations."]

contentUl.forEach(function(country){
    let li =document.createElement('li');
    li.innerHTML=country;
    li.style.color= "white"
    li.style.backgroundColor= "darkblue"
    li.style.fontSize= '20px'
    ul.style.backgroundColor= "darkred"
    ul.appendChild(li)
})
document.body.appendChild(ul);

 