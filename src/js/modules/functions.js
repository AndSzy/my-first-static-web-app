function convertDate(dateString) {
    let myDate = new Date(dateString);

    var month = myDate.getUTCMonth() + 1; //months from 1-12
    var day = myDate.getUTCDate();
    var year = myDate.getUTCFullYear();
      
    let newdate = day + "/" + month + "/" + year;

    return newdate;
}

export { convertDate };