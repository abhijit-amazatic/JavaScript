function calculateHike() {
    const oldSalary = parseFloat(document.getElementById('oldSalary').value);
    const newSalary = parseFloat(document.getElementById('newSalary').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(oldSalary) || isNaN(newSalary) || oldSalary <= 0) {
    resultDiv.textContent = 'Please enter valid salary values.';
    resultDiv.style.color = 'red';
    return;
    }

    const hike = ((newSalary - oldSalary) / oldSalary) * 100;
    resultDiv.textContent = `Hike: ${hike.toFixed(2)}%`;
    resultDiv.style.color = 'green';
}