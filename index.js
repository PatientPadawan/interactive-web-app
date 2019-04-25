$(function() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const userTextInput = $(this).find('#shopping-list-entry');
        // empty #shopping-list-entry

        $('ul').append(
            `<li>
                <span class="shopping-item">${userTextInput}</span>
                <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
                </div>
            </li>`
        );
    });

    $('li').on('click', '.shopping-item-delete', function(event) {
        $(this).parentsUntil("ul").remove();
    });
});