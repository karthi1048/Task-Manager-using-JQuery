$(document).ready(function () {
    // Add a task to the list
    $('#addTask').click(function() {
        let task =  $('#taskInput').val();
        if (task) {
            // append list item to the list
            $('#taskList').append('<li><span class="taskText">'+task+'</span> <span class="editTask">Edit</span> <span class="removeButton">Remove</span></li>');
            $('#taskInput').val('');
        }
    })
    // Adding style class on focus
    $('#taskInput').focus(function() {
        $(this).addClass('highlight');
    })
    // Removing style class not on focus
    $('#taskInput').blur(function() {
        $(this).removeClass('highlight');
    })

    // Mark task as completed
    $('#taskList').on('click','.taskText',function() {
        $(this).toggleClass('completed');
    })

    // Remove task from the list
    $('#taskList').on('click','.removeButton',function() {
        $(this).parent().remove();
    })

    // Edit Task
    $('#taskList').on('click','.editTask',function(){
        let $taskTEXT = $(this).siblings('.taskText');
        let cText = $taskTEXT.text();
        let nText = prompt('Edit Task:', cText);
        if(nText) {
            $taskTEXT.text(nText);
        }
    })

    // event for mouseenter
    $('#taskList').on('mouseenter','.taskText', function(){
        $(this).css('cursor','pointer');
    })

})