document.addEventListener('DOMContentLoaded', function() {
    const resultBox = document.querySelector(".result-bar");
    const buttons = document.querySelectorAll('.calculator form input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;
            if (value === 'AC') {
                resultBox.value = '';
            } else if (value === 'DEL') {
                resultBox.value = resultBox.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    resultBox.value = eval(resultBox.value);
                } catch (error) {
                    resultBox.value = "Error";
                }
            } else {
                resultBox.value += value;
            }
        });
    });
});
