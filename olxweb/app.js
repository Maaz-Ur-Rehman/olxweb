let loadData=()=>{
    let template = document.getElementById('template');
    dataset.forEach(function(item){
    // create a new element with the contents of the template
    let div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = template.innerHTML.replace('{{title}}', item.title);
    
    document.getElementById('items').appendChild(div);
    });
}
let dataset = [
    {
        title: 'Article 1',
        id: 1
    },

    ];