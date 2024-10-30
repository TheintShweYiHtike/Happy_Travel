$(function() {
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
});

let roomCount = 1;
$('#minusBtn').click(function() {
    if (roomCount > 1) {
        roomCount--;
        $('#roomCount').text(roomCount + ' - Room');
    }
});
$('#plusBtn').click(function() {
    roomCount++;
    $('#roomCount').text(roomCount + ' - Room');
});
