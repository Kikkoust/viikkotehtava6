document.addEventListener('DOMContentLoaded', function() {

    const buttonElement = document.querySelector('button');
    const tableElement = document.querySelector('table');
    const rowCountElement = document.querySelector('p');
    let rowCount = 0;


    buttonElement.addEventListener('click', function() {
        addNewRowToTable();
        rowCount++;
        updateRowCount();
    });

    function addNewRowToTable() {
        const newRow = document.createElement('tr');
        tableElement.appendChild(newRow);
        
        for (let i = 0; i < 7; i++) {
            addRandomNumberToRow(newRow);
        }
    }

    function addRandomNumberToRow(row) {
        const newCell = document.createElement('td');
        const randomNumber = Math.floor(Math.random() * 10);
        newCell.textContent = randomNumber;
        row.appendChild(newCell);
    }

    function updateRowCount() {
        rowCountElement.textContent = `Valmiita rivejä: ${rowCount}`;
    }
});