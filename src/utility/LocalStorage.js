const getItemFromLS = () => {
    const selectedItem = localStorage.getItem('item');
    if(selectedItem){
        const selectedItemParsed = JSON.parse(selectedItem);
        return selectedItemParsed;
    }
    return [];
}

const addItemToLS=(name,status)=>{
    const item = {name,status};
    const savedItems = getItemFromLS();
    savedItems.push(item);
    const savedItemsStringified = JSON.stringify(savedItems);
    localStorage.setItem('item',savedItemsStringified)
}
export {getItemFromLS,addItemToLS}