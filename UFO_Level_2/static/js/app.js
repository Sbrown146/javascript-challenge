// Javascript Homework.  Scott Brown 
//      ALIENS!!!!  with Queries!


// This is the homework working properly using queries.  Nice to see the program being able to do everything that the combination program in UFO_Level_1 can do and more in less than half the code.  However, like all things in life, there are no solutions.  Only tradeoffs.  This code is limited by 3 issues that I could not find resolutions for:

// 1) All fields blank after a single search meaning all fields have to be entered in again.  This did not occur in the Combination program.

// 2) A 'no results found' entry at the end of the loop that was appended to the table would not remove properly upon reset or a new search so it went unused.  This was not an issue with the Combination program.

// 3) Substrings could not be searched within the Duration and Comments arrays.  Due to this, the search options for them just looks for matching entries.


// Minor complaints considering everything that was required appears to be working correctly.




// Table and button declarations
var $table_body=document.querySelector('tbody');
var $reset_button=document.querySelector('#reset-btn');
var $search_button=document.querySelector('#filter-btn');


// Variable declarations
var $input_variable1=document.querySelector('#datetime');
var $input_variable2=document.querySelector('#city');
var $input_variable3=document.querySelector('#state');
var $input_variable4=document.querySelector('#country');
var $input_variable5=document.querySelector("#shape");
var $input_variable6=document.querySelector('#durationMinutes');
var $input_variable7=document.querySelector('#comments');


// EventListeners for both search and reset buttons.
$search_button.addEventListener('click', Initiate_Search_Button);
$reset_button.addEventListener('click', Hard_Reset);


// Stores the data.js file.  Acts as a dynamic holder for data.js.
var Temp_data_holder=data;


// Function to create the table.
function Initiate_table(){

    // Sets up column names.
    for (var i=0; i<Temp_data_holder.length; i++){
        var info=Temp_data_holder[i];
        var table=Object.keys(info);
        let $table_row=$table_body.insertRow(i);

        // Adds data for rows.
        for (var j=0; j<table.length; j++){
            var table_contents=table[j];
            var $table_cell=$table_row.insertCell(j);
            $table_cell.innerText=info[table_contents];
        }
    }
}

// This load the table when the page is first opened/refreshed.
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
    var input_variable_shape=$input_variable5.value;
    var input_variable_duration=$input_variable6.value.toLowerCase().trim();
    var input_variable_comments=$input_variable7.value;


    // Loops to filter data for matching date, city, state, country, shape, duration and comments.

    // Date
    if (input_variable_date!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_date){
            var input_variable_date_filter=get_date.datetime;
            return input_variable_date_filter===input_variable_date;
        });
    }

    // City
    if (input_variable_city!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_city){
            var input_variable_city_filter=get_city.city;
            return input_variable_city_filter===input_variable_city;
        });
    }

    // State
    if (input_variable_state!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_state){
            var input_variable_state_filter=get_state.state;
            return input_variable_state_filter===input_variable_state;
        });
    }

    // Country
    if (input_variable_country!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_country){
            var input_variable_country_filter=get_country.country;
            return input_variable_country_filter===input_variable_country;
        });
    }

    // Shape
    if (input_variable_shape!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_shape){
            var input_variable_shape_filter=get_shape.shape;
            return input_variable_shape_filter===input_variable_shape;
        });
    }


    // Both duration and comments were originally set to search through their respective fields as matching them would not be very insightful due to their uneven formatting.  However, nothing I tried worked properly this way.  There seems to be 99 different ways to specifically match entries in an array but matching them to generic substrings was not one of them.

    // Duration
    if (input_variable_duration!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_duration){
            var input_variable_duration_filter=get_duration.durationMinutes;
            // for(var i=0; i<input_variable_duration_filter.length; i++){
            //     if(input_variable_duration_filter[i]===input_variable_duration){
            //         return input_variable_duration_filter[i];
            //     }
            // }
            return input_variable_duration_filter===input_variable_duration;
        });
    }
    // Comments
    if (input_variable_comments!=""){
        Temp_data_holder=Temp_data_holder.filter(function(get_comments){
            var input_variable_comments_filter=get_comments.comments;
            return input_variable_comments_filter===input_variable_comments;
        })
    }

    // Originally, console.log was included in each of the loops above to display which values were entered.  However, they would end up being displayed for each iteration through the loop (usually 10+ times).  They are put down here to only be displayed once in the log.

        if (input_variable_date.length>0){
            console.log(`Date selected: ${input_variable_date}`);
        }
        
        if (input_variable_city.length>0){
            console.log(`City selected: ${input_variable_city}`);
        }

        if (input_variable_state.length>0){
            console.log(`State selected: ${input_variable_state}`);
        }

        if (input_variable_country.length>0){
            console.log(`Country selected: ${input_variable_country}`);
        }
        
        if (input_variable_shape.length>0){
            console.log(`Shape selected: ${input_variable_shape}`);
        }
        
        if (input_variable_duration.length>0){
            console.log(`Duration selected: ${input_variable_duration}`);
        }

        if (input_variable_comments.length>0){
            console.log(`Comments selected: ${input_variable_comments}`);
        }


        // This was to display text whenever a search did not meet the above criteria.  While it works, I could not get a way for it to be properly removed after another search or reset.


        // else {
        //     $table_body.append("Your search yielded no results.  Please search again.");
        //     console.log("Your search yielded no results.  Please search again.");
        // }

        Initiate_table();
        Temp_data_holder=data;
        $input_variable1.value="";
        $input_variable2.value="";
        $input_variable3.value="";
        $input_variable4.value="";
        $input_variable5.value="";
        $input_variable6.value="";
        $input_variable7.value="";
    };

    