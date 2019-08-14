 $(document).ready(onReady);

function onReady(){
    $('#submit-book').on('click', sendBookToServer);

    getBookData();
}

function sendBookToServer(){
    console.log('In function sendBookToServer');

    const bookToSend ={ title: $('#title').val(),
                        author: $('#author').val(),
                        published:$('#published').val()};
    console.log(bookToSend);
    $.ajax({
        type: 'POST',
        url: '/book',
        data: bookToSend
    }).then(function(response) {
        console.log(response);
        getBookData();

    }).catch(function(error){
        console.log('error in book post', error);
    });                    
}

function getBookData() {
    $.ajax({
        method: 'GET',
        url: '/book'
    }).then(function(response) {
        const listOfBooks = response;
        $('#bookTableBody').empty();
        for(let book of listOfBooks) {
            // Append each book to the table
            $('#bookTableBody').append(`<tr>
                                            <td>${book.title}</td>
                                            <td>${book.author}</td>
                                            <td>${book.published}</td>
                                          </tr>`);
        }
    }).catch(function (error) {
        console.log('error in book get', error);
    });
};