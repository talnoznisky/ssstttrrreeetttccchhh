dd = () => {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}

getInputs = () => {
    elements = document.getElementById('form').elements;
    return {
        'input_str': elements['string'].value,
        'repeats': elements['repeats'].value
    }
}

clearTextArea = () => {
    [...document.getElementsByClassName('clearable')].forEach(elem => elem.value = '')
}

fillTextArea = (str) => {
    document.getElementById('textarea').value = str
}

repeatChar = () => {
    inputs = getInputs()
    input_str = inputs['input_str'].toLowerCase()
    repeats = inputs['repeats']

    output_str = String()
    Array.from(input_str).forEach(
        c => output_str += c.repeat(repeats)
    )
    fillTextArea(output_str)
}

copyToClipboard = () => {
    document.getElementById('textarea').select()
    document.execCommand('copy')
}