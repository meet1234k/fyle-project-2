function calculateTax() {
    const grossIncome = parseFloat(document.getElementById('grossIncome').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const ageGroup = document.getElementById('age').value;

    let errors = validateInputs(grossIncome, extraIncome, deductions, ageGroup);

    if (errors) {
        return;
    }

    let netIncome = grossIncome + extraIncome - deductions;
    let taxRate = 0;
    let taxAmount = 0;

    if (netIncome > 800000) {
        switch (ageGroup) {
            case "<40":
                taxRate = 0.30;
                break;
            case "40-59":
                taxRate = 0.40;
                break;
            case "60+":
                taxRate = 0.10;
                break;
        }
        if (ageGroup==""){
            innerText=`age is not selected`
        }
        taxAmount = (netIncome - 800000) * taxRate;
    }

    document.getElementById('resultText').innerText = `Net Income: ₹${netIncome.toLocaleString()}, Tax Due: ₹${taxAmount.toLocaleString()}`;
    document.getElementById('resultModal').style.display = 'flex';
}

function validateInputs(gross, extra, deductions, age) {
    let hasError = false;
    if (isNaN(gross) || gross < 0) {
        document.querySelector('#grossIncome + .error-icon').style.display = 'inline';
        hasError = true;
    } else {
        document.querySelector('#grossIncome + .error-icon').style.display = 'none';
    }
    if (isNaN(extra) || extra < 0) {
        document.querySelector('#extraIncome + .error-icon').style.display = 'inline';
        hasError = true;
    } else {
        document.querySelector('#extraIncome + .error-icon').style.display = 'none';
    }
    if (isNaN(deductions) || deductions < 0) {
        document.querySelector('#deductions + .error-icon').style.display = 'inline';
        hasError = true;
    } else {
        document.querySelector('#deductions + .error-icon').style.display = 'none';
    }
    if (age === "") {
        document.querySelector('#age + .error-icon').style.display = 'inline';
        hasError = true;
    } else {
        document.querySelector('#age + .error-icon').style.display = 'none';
    }
    return hasError;
}

function closeModal() {
    document.getElementById('resultModal').style.display = 'none';
}
