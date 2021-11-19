class Table {

    // using constructor to create table headers
    // get column names (?)

    drawTable(array, element, head, caption) {

        const tableResponsiveEl = document.createElement('div');
        tableResponsiveEl.classList.add('table-responsive');

        const tableEl = document.createElement('table');
        const headEl = document.createElement('thead');
        const bodyEl = document.createElement('tbody');
        const captionEl = document.createElement('caption');

        tableEl.classList.add('table');
        tableEl.classList.add('caption-top');
        tableEl.classList.add('table-hover');

        captionEl.innerText = `${caption}`;

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
                <td>${obj.position}</td>
                <td>${obj.nationality}</td>
            </tr>`

        });
        bodyEl.innerHTML = bodyString;

        tableEl.appendChild(captionEl);
        tableEl.appendChild(headEl);
        tableEl.appendChild(bodyEl);
        tableResponsiveEl.appendChild(tableEl);
        element.appendChild(tableResponsiveEl);
    }
}

export { Table }