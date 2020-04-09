const list = document.querySelector('#form2 ul');
const hideItems = document.querySelector('#hide');


hideItems.addEventListener('change', function (e) {
    if (hideItems.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})