$(() => {

const list = [];

const render = () => {
    console.log('list: ', list);

    // We can't replace the whole unordered list, because we may have
    // changed some CSS in its items
    // $('ul').empty();
    // for (const item of list) {
    //     $('ul').append('<li>' + item + '</li>');
    // }

    // So instead we just add the last list item
    const $listItem = $('<li>');
    $listItem.text(list[list.length - 1]);
    $('ul').append($listItem);

    // Add a click listener to each list item that adds a strike-through
    $('li').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through');
        $(event.currentTarget).effect('shake');
    });
};

// $('#submit-btn').on('click', () => {  // without using a form
$('form').on('submit', (event) => {
    const value = $('#input-box').val();

    list.push(value);

    // $('#input-box').val('');  // without using a form
    $(event.currentTarget).trigger('reset');
    event.preventDefault();

    render();
});

});
