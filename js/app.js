// Work to get the filter buttons working
let storeItems = [...document.querySelectorAll('#store-items div.store-item')];
let links = document.querySelectorAll('#filter-links a');

for(let link of links){
    link.addEventListener('click',(event)=>{
        event.preventDefault()
            categoryFilter(event);
    });
}

function categoryFilter(event) {
    let el = event.target;
        let clicked = event.target.innerText.toLowerCase();
            resetFilter();

            if(el.dataset.filter == clicked){
                storeItems.forEach(curr => {
                    if(curr.dataset.item != clicked){
                        curr.style.display = 'none';
                    }
                });
            }
                if(el.dataset.filter == 'all'){
                    storeItems.forEach(curr => {
                        (curr.style.display == 'none') ? curr.style.display = 'block' : console.log('nothing changed');
                    });
                }
};

function resetFilter() {
    storeItems.forEach(curr => {
        curr.style.display = 'block';
    });
};