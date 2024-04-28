
const handle = () => {
    const inputs = document.querySelectorAll('input');
    const arr = [];
    // for (i = 0; i < inputs.length; i++) {
    //     arr.push(inputs[i].value);
    // }

    inputs.forEach(el => arr.push(el));
    alert(arr.join(" "));
}

const button = document.querySelector('.btn');
button.addEventListener("click", handle);

