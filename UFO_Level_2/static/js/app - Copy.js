//


// Table and button declarations
var $table_body=document.querySelector('tbody');
var $reset_button=document.querySelector('#reset-btn');
var $search_button=document.querySelector('#filter-btn');


// Variable declarations
var $input_variable1=document.querySelector('#datetime');
var $input_variable2=document.querySelector('#city');
var $input_variable3=document.querySelector('#state');
var $input_variable4=document.querySelector('#country');
var $input_variable5=document.querySelector('#shape');
var $input_variable6=document.querySelector('#durationMinutes');
var $input_variable7=document.querySelector('#comments');


// EventListeners for both search and reset buttons.
$search_button.addEventListener('click', Initiate_Search_Button);
$reset_button.addEventListener('click', Hard_Reset);


// Stores the data.js file.
var Temp_data_holder=data;


// Function to create the table.
function Initiate_table(){

    // Sets up column names.
    for (var i=0; i<Temp_data_holder.length; i++){
        var info=Temp_data_holder[i];
        var table=Object.keys(info);
        var $table_row=$table_body.insertRow(i);

        // Adds data for rows.
        for (var j=0; j<table.length; j++){
            var table_contents=table[j];
            var $table_cell=$table_row.insertCell(j);
            $table_cell.innerText=info[table_contents];
        }
    }
}

// This load this table when the page is first opened/refreshed.
Initiate_table();
console.log("Welcome! Browse data or make a selection.");


// Reset button function.  Resets the table in 3 steps:
    // 1) Sets the Temp_data_holder back to the data.js file.
    // 2) Blanks all input variables.
    // 3) Creates the default table for display.

function Hard_Reset(){
    Temp_data_holder=data;
    $input_variable1.value="";
    $input_variable2.value="";
    $input_variable3.value="";
    $input_variable4.value="";
    $input_variable5.value="";
    $input_variable6.value="";
    $input_variable7.value="";
    Initiate_table();
    console.log("Table has been reset.  Make another selection.")
}


// Search Button function.

function Initiate_Search_Button(){

    // Blanks table and stores any input variables.
    $table_body.innerHTML="";
    var input_variable_date=$input_variable1.value.trim();
    var input_variable_city=$input_variable2.value.toLowerCase().trim();
    var input_variable_state=$input_variable3.value.toLowerCase().trim();
    var input_variable_country=$input_variable4.value.toLowerCase().trim();
    var input_variable_shape=$input_variable5.value.toLowerCase().trim();
    var input_variable_duration=$input_variable6.value.toLowerCase().trim();
    var input_variable_comments=$input_variable7.value;


    Temp_data_holder=data.filter(function(search_everything){
        var input_variable_date_filter=search_everything.datetime;
        console.log(`Date selected: ${input_variable_date}`);
        var input_variable_city_filter=search_everything.city;
        console.log(`City selected: ${input_variable_city}`);
        var input_variable_state_filter=search_everything.state;
        console.log(`State selected: ${input_variable_state}`);
        var input_variable_country_filter=search_everything.country;
        console.log(`Country selected: ${input_variable_country}`);
        var input_variable_shape_filter=search_everything.shape;
        console.log(`Shape selected: ${input_variable_shape}`);
        var input_variable_duration_filter=search_everything.durationMinutes;
        console.log(`Duration selected: ${input_variable_duration}`);
        var input_variable_comments_filter=search_everything.comments;
        console.log(`Comments selected: ${input_variable_comments}`);


        if ((input_variable_date_filter===input_variable_date || input_variable_date=="") && (input_variable_city_filter===input_variable_city || input_variable_city=="") && (input_variable_state_filter===input_variable_state || input_variable_state=="") && (input_variable_country_filter===input_variable_country || input_variable_country=="") && (input_variable_shape_filter===input_variable_shape || input_variable_shape=="") && (input_variable_duration_filter===input_variable_duration || input_variable_duration=="") && (input_variable_comments_filter===input_variable_comments || input_variable_comments=="")){


            return (input_variable_date_filter===input_variable_date || input_variable_city_filter===input_variable_city || input_variable_state_filter===input_variable_state || input_variable_country_filter===input_variable_country || input_variable_shape_filter===input_variable_shape || input_variable_duration_filter===input_variable_duration || input_variable_comments_filter===input_variable_comments);
        }

    });
        Initiate_table();
    };