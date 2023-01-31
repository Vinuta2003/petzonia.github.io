var additemid=0;
function myf(item)
{
    var selected=document.createElement('div');
    selected.classList.add('cartImg');
    selected.setAttribute('id',additemid);
    var img=document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var cartitems=document.getElementsById('title');
    selected.append(img);
    cartitems.append(selected);
}