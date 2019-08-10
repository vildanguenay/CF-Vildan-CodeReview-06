$(document).ready(function () {
    // gets initial number (0) from html and saves it for js
    var number = Number($("#counter").html());
    var id = 0;

    $(".addBtn").click(function () {
        // gets value from inputBox and saves it to later send it to the created task's description
        let text = $(".inputBox").val();
        $("#tasksWrapper").append(
            // set id on tasks-div to remove the whole specific(!) div (otherwise it will remove all tasks at once)
            `<div id=todoId${id} class="tasks">
                <p class="description">${text}</p>
                <button class="checkmark">&#10004;</button>
                <button class="cross">&#10008;</button>
            </div>`);
        addCheckMarkEvent();
        removeTask();
        increment();   
    });

    function increment() {
        number++;
        id++;
        // send new number + id to html for the upcoming task
        $("#counter").html(number);
    }

    function decrement() {
        number--;
        // send new number to html 
        $("#counter").html(number);
        // this function is only called in conjunction with removeTask function 
    }

    function addCheckMarkEvent() {
        // id necessary to specify the clicked btn or task 
        $(`#todoId${id}`).find('.checkmark').click(function (){
            // "this" refers to the button -> target its parent to change the background of the whole task 
            $(this).parent("div").css("background-color", "#e9967a4a");
            $(this).hide(1000);
        })
    }

    function removeTask() {
        $(`#todoId${id}`).find(".cross").click(function (){
            $(this).parent("div").remove();
            decrement();
            // call noTasks after all tasks have been removed
            noTasks();
        });
    }

    function noTasks() {
        if (number == 0) { 
            $("#counter").text("Currently no tasks, you rock!");
        }
    }
    // call noTasks before tasks are added 
    noTasks();
});