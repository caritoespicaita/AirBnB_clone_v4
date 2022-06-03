$( document ).ready(function()  {
    const dic_id = {}
    $('input[type=checkbox][data-id={{ amenity.id }}]').change(function() {
        if ($(this).is(':checked')) {
            alert(`${this.value} is checked`);
        }
        else {
            alert(`${this.value} is unchecked`);
        }
    });
});
