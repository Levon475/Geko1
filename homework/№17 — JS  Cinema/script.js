const bem = document.querySelector('.bem');
let total = 0;
const price = document.getElementById(`price`)

// 1. Ստեղծում ենք 48 վանդակները
for (let i = 1; i <= 48; i++) {
    const box = document.createElement('div');
    // Կարող ենք նաև համար դնել մեջը
    box.innerText = i; 
    bem.appendChild(box);
}

// 2. Ավելացնում ենք սեղմելու հնարավորությունը
bem.addEventListener('click', function(event) {
    // Ստուգում ենք, որ սեղմվել է հենց վանդակի վրա, այլ ոչ թե արանքների
    const target = event.target;
   
    
    if (target.tagName === 'DIV' && target !== bem) {
        
        // Եթե վանդակը արդեն «զբաղված» (սև) չէ, նոր թույլ տանք նշել
        if (!target.classList.contains('occupied')) {
            // toggle նշանակում է՝ եթե կա class-ը՝ հանիր, եթե չկա՝ ավելացրու
            target.classList.toggle('selected');
            if( target.classList.contains('selected')){
                total += 2000;
            }else{
                total -= 2000;
            }
            price.innerText = total;
        }
    }
      

});
const btn = document.getElementById(`btn`)

btn.addEventListener('click', function() { 
    // 1. Գտիր բոլոր .selected ունեցողներին
    const nshvacner = document.querySelectorAll('.selected');
    


    // 2. Ամեն մեկի վրայով անցիր forEach-ով
    nshvacner.forEach(function(vandak) {
        vandak.classList.add('occupied');
        vandak.classList.remove('selected');
    });

    total = 0;
    price.innerText = total;

    
});