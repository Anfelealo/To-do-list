function callTasks(){
    $.get("https://immense-plateau-68535.herokuapp.com/list", function(data){
        console.log(data);
        for(let i = 0;  i < data.data.length; i++){
            // console.log(data[i]);
            let tasksList = document.getElementById("tasks-container");
            let sharedTasks = '<div class="col task"><h6>'+data.data[i]+'</h6></div>';
            tasksList.innerHTML += sharedTasks;
            console.log(sharedTasks);
        }
        
    })
}
callTasks();

function addTask(){ 
    let task = document.getElementById("new-task").value;
    $.post("https://immense-plateau-68535.herokuapp.com/add",{
        todoitem: task + " - Andrés"
    }, function(data){
        console.log(data);
    });
}
