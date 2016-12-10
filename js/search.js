/**
 * Created by Ruotian on 11/3/2016.
 */

function findWord(){
    var content = document.getElementById("findField").value;
    console.log(content);
    highLight(content);
}

function highLight(content){
    if(content != ""){
        var containerTag = document.getElementById("skills_summary");

        var skillList = $( containerTag ).find( "li" );
        console.log(skillList);

        for(var i = 0; i < skillList.length; i++) {

            var result =  skillList[i].innerHTML;
            console.log(result);
            if(skillList[i].innerHTML.indexOf(content) != -1) {
                skillList[i].innerHTML = "<span style='color:red;'>" + skillList[i].innerHTML + "<span>";
            }
        }
    }
}