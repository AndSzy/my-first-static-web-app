class Table {

    // using constructor to create table headers
    // get column names (?)

    drawTable(array, element, head) {
        const tableEl = document.createElement('table');
        const headEl = document.createElement('thead');
        const bodyEl = document.createElement('tbody');

        tableEl.classList.add('table');

        let headString = '';
        head.forEach((name) => {
            headString += `<th>${name}</th>`
        })
        headEl.innerHTML = `<tr>${headString}</tr>`

        let bodyString = '';
        array.forEach((obj) => {

            bodyString += `<tr>
                <td>${obj.first_name}</td>
                <td>${obj.last_name}</td>
                <td>${obj.nationality}</td>
            </tr>`

        });
        bodyEl.innerHTML = bodyString;

        tableEl.appendChild(headEl);
        tableEl.appendChild(bodyEl);
        element.appendChild(tableEl);
    }
}

export { Table }