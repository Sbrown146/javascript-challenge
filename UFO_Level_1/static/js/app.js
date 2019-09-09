// Javascript Homework.  Scott Brown 
//      ALIENS!!!!  with Combinations!

// This and the index.html in the UFO_Level_1 folder contains both the required and optional code.  However, a working loop that uses all available search fields is in the UFO_Level_2 folder using queries in javascript (use the query in UFO_Level_2 for grading -> 200 lines of code vs 400+ lines of code here).  I kept this code here as a proof of concept that a proper search can be done by using elementary loop combinations as long as there are only a few search fields available.

// This method would not be recommended using more than 3 fields due to the following combinations needing code:

//  3 search fields :  2^3 = 8 combinations  --> (3 choose 1) + (3 choose 2) + (3 choose 3) + default else statement --> 3 + 3 + 1 + 1 = 8
//  4 search fields :  2^4 = 16 combinations
//  5 search fields :  2^5 = 32 combinations
//  6 search fields :  2^6 = 64 combinations
//  7 search fields :  2^7 = 128 combinations

// I ended up coding out all 32 combinations for the 5 search fields in this code in case I could not get the query to work properly to have a final product to turn it.  Despite its grotesque length, this way only took about 5 hours to code and test while the query easily took double that amount of time to get working properly due to the syntax being rather over my head at times and  frustrating to find references for online.  




// Begin Variable Declarations

// Used primarily for the initiate function
var table_columns=["datetime","city","state","country","shape","durationMinutes","comments"];
var table_body=d3.select("tbody");
var table_row=table_body;


// Reset button variable
var reset_button=d3.select("#reset-btn");


// Search button variables
var search_button=d3.select("#filter-btn");
var input_variable1=d3.select("#datetime");
var input_variable2=d3.select("#city");
var input_variable3=d3.select("#state");
var input_variable4=d3.select("#country");
var input_variable5=d3.select("#shape");




// End Variable Declarations



// Function to collect and display the table.
var Initiate_table=function(table_data){
    table_data.forEach(function(UFO){
        var table_row=table_body.append("tr");
        table_columns.forEach(column=>table_row.append("td").text(UFO[column]))
    });
};


// Reset Button
reset_button.on("click", function(){
    table_body.html("");
    input_variable1.value="";
    input_variable2.value="";
    input_variable3.value="";
    input_variable4.value="";
    input_variable5.value="";
    Initiate_table(data);
    console.log("Table has been reset.");
})


// Initiate the table using data.js
Initiate_table(data);
console.log("Welcome! Browse data or make a selection.");



// Search Sightings Button
search_button.on("click", function(){

    // Input variable declarations:
    var input_variable_date=input_variable1.property("value").trim();
    var input_variable_date_filter=data.filter(data=>data.datetime===input_variable_date);

    var input_variable_city=input_variable2.property("value").toLowerCase().trim();
    var input_variable_city_filter=data.filter(data=>data.city===input_variable_city);

    var input_variable_state=input_variable3.property("value").toLowerCase().trim();
    var input_variable_state_filter=data.filter(data=>data.state===input_variable_state);

    var input_variable_country=input_variable4.property("value").toLowerCase().trim();
    var input_variable_country_filter=data.filter(data=>data.country===input_variable_country);

    var input_variable_shape=input_variable5.property("value");
    var input_variable_shape_filter=data.filter(data=>data.shape===input_variable_shape);




    // Variable Combinations....Buckle Up:

    // All 5 fields used (1 combination):
    var input_variable_all_5=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && data.state===input_variable_state && data.country===input_variable_country && data.shape===input_variable_shape);


    // Only 1 field used (5 combinations):  
    var input_variable_only_date=data.filter(data=>data.datetime===input_variable_date && input_variable_city=="" && input_variable_state=="" && input_variable_country=="" && input_variable_shape=="");

    var input_variable_only_city=data.filter(data=>data.city===input_variable_city && input_variable_date=="" && input_variable_state=="" && input_variable_country=="" && input_variable_shape=="");

    var input_variable_only_state=data.filter(data=>data.state===input_variable_state && input_variable_city=="" && input_variable_date=="" && input_variable_country=="" && input_variable_shape=="");

    var input_variable_only_country=data.filter(data=>data.country===input_variable_country && input_variable_city=="" && input_variable_state=="" && input_variable_date=="" && input_variable_shape=="");

    var input_variable_only_shape=data.filter(data=>data.shape===input_variable_shape && input_variable_city=="" && input_variable_state=="" && input_variable_country=="" && input_variable_date=="");


    // Only 2 fields used (10 combinations):
    var input_variable_date_city=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && input_variable_state=="" && input_variable_country=="" && input_variable_shape=="");

    var input_variable_date_state=data.filter(data=>data.datetime===input_variable_date && data.state===input_variable_state && input_variable_city=="" && input_variable_country=="" && input_variable_shape =="");

    var input_variable_date_country=data.filter(data=>data.datetime===input_variable_date && data.country===input_variable_country && input_variable_city=="" && input_variable_state=="" && input_variable_shape=="");

    var input_variable_date_shape=data.filter(data=>data.datetime===input_variable_date && data.shape===input_variable_shape && input_variable_city=="" && input_variable_state=="" && input_variable_country=="");

    var input_variable_city_state=data.filter(data=>data.city===input_variable_city && data.state===input_variable_state && input_variable_date=="" && input_variable_country=="" && input_variable_shape=="");

    var input_variable_city_country=data.filter(data=>data.city===input_variable_city && data.country===input_variable_country && input_variable_date=="" && input_variable_state=="" && input_variable_shape=="");

    var input_variable_city_shape=data.filter(data=>data.city===input_variable_city && data.shape===input_variable_shape && input_variable_date=="" && input_variable_state=="" && input_variable_country=="");

    var input_variable_state_country=data.filter(data=>data.state===input_variable_state && data.country===input_variable_country && input_variable_date=="" && input_variable_city=="" && input_variable_shape=="");

    var input_variable_state_shape=data.filter(data=>data.state===input_variable_state && data.shape===input_variable_shape && input_variable_date=="" && input_variable_city=="" && input_variable_country=="");

    var input_variable_country_shape=data.filter(data=>data.country===input_variable_country && data.shape===input_variable_shape && input_variable_date=="" && input_variable_city=="" && input_variable_state=="");
    
    
    // Only 3 fields used (10 combinations):
    var input_variable_date_city_state=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && data.state===input_variable_state && input_variable_country=="" && input_variable_shape=="");

    var input_variable_date_city_country=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && data.country===input_variable_country && input_variable_state=="" && input_variable_shape=="");

    var input_variable_date_city_shape=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && data.shape===input_variable_shape && input_variable_state=="" && input_variable_country=="");
    
    var input_variable_date_country_shape=data.filter(data=>data.datetime===input_variable_date && data.country===input_variable_country && data.shape===input_variable_shape && input_variable_state=="" && input_variable_city=="");

    var input_variable_date_state_country=data.filter(data=>data.datetime===input_variable_date && data.state===input_variable_state && data.country===input_variable_country && input_variable_city=="" && input_variable_shape=="");

    var input_variable_date_state_shape=data.filter(data=>data.datetime===input_variable_date && data.state===input_variable_state && data.shape===input_variable_shape && input_variable_city=="" && input_variable_country=="");

    var input_variable_city_country_shape=data.filter(data=>data.city===input_variable_city && data.country===input_variable_country && data.shape===input_variable_shape && input_variable_state=="" && input_variable_date=="");

    var input_variable_city_state_country=data.filter(data=>data.city===input_variable_city && data.country===input_variable_country && data.state===input_variable_state && input_variable_date=="" && input_variable_shape=="");

    var input_variable_city_state_shape=data.filter(data=>data.city===input_variable_city && data.state===input_variable_state && data.shape===input_variable_shape && input_variable_date=="" && input_variable_country=="");

    var input_variable_state_country_shape=data.filter(data=>data.state===input_variable_state && data.country===input_variable_country && data.shape===input_variable_shape && input_variable_date=="" && input_variable_city=="");


    // Only 4 fields used (5 combinations):
    var input_variable_all_but_shape=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && data.state===input_variable_state && data.country===input_variable_country && input_variable_shape=="");

    var input_variable_all_but_country=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && data.state===input_variable_state && data.shape===input_variable_shape && input_variable_country=="");

    var input_variable_all_but_state=data.filter(data=>data.datetime===input_variable_date && data.city===input_variable_city && data.shape===input_variable_shape && data.country===input_variable_country && input_variable_state=="");

    var input_variable_all_but_city=data.filter(data=>data.datetime===input_variable_date && data.shape===input_variable_shape && data.state===input_variable_state && data.country===input_variable_country && input_variable_city=="");

    var input_variable_all_but_date=data.filter(data=>data.shape===input_variable_shape && data.city===input_variable_city && data.state===input_variable_state && data.country===input_variable_country && input_variable_date=="");

    // End Variable Combinations.



    // The forever loop to cover all 32 possible outcome with 5 search fields.  Oh boy......Here we go!
    table_body.html("");

    // The array that all inputs are put into.
    var search_results={input_variable_only_date, input_variable_only_city, input_variable_only_state, input_variable_only_country, input_variable_only_shape, input_variable_date_filter, input_variable_city_filter, input_variable_state, 
    input_variable_country, input_variable_shape,input_variable_date_city, input_variable_date_state, input_variable_date_country, input_variable_state_shape, input_variable_date_shape, input_variable_city_state, input_variable_city_country, input_variable_city_shape, input_variable_state_country, input_variable_city_shape, input_variable_country_shape, input_variable_date_city_state, input_variable_date_city_country, input_variable_date_city_shape, input_variable_date_country_shape, input_variable_date_state_country, input_variable_date_state_shape, input_variable_city_country_shape, input_variable_city_state_country, input_variable_city_state_shape, input_variable_state_country_shape, input_variable_all_but_shape, input_variable_all_but_country, input_variable_all_but_state, input_variable_all_but_city, input_variable_all_but_date, input_variable_all_5};



    // If all five fields have matching data.
    if (search_results.input_variable_all_5.length>0){
        Initiate_table(input_variable_all_5);
        console.log(`Date selected: ${input_variable_date}`);
        console.log(`City selected: ${input_variable_city}`);
        console.log(`State selected: ${input_variable_state}`);
        console.log(`Country selected: ${input_variable_country}`);
        console.log(`Shape selected: ${input_variable_shape}`);
    }


                // For the code regarding combinations of 4, 3, 2, and 1, the coding structure for the first combination is the same for the rest.  I tried to make the input_variable names as descriptive as possible so once the first instance is understood, just looking at the remaining input_variable names will tell you what search fields are being used.

                // If 4 fields have matching data

                // All but date
                else if (input_variable_all_but_date.length>0 && input_variable_city_filter.length>0 && input_variable_state_filter.length>0 && input_variable_country_filter.length>0 && input_variable_shape_filter.length>0){
                    Initiate_table(input_variable_all_but_date);
                    console.log(`City selected: ${input_variable_city}`);
                    console.log(`State selected: ${input_variable_state}`);
                    console.log(`Country selected: ${input_variable_country}`);
                    console.log(`Shape selected: ${input_variable_shape}`);
                }

                // All but city
                else if (input_variable_all_but_city.length>0){
                    Initiate_table(input_variable_all_but_city);
                    console.log(`Date selected: ${input_variable_date}`);
                    console.log(`State selected: ${input_variable_state}`);
                    console.log(`Country selected: ${input_variable_country}`);
                    console.log(`Shape selected: ${input_variable_shape}`);
                }

                // All but state
                else if (input_variable_all_but_state.length>0){
                    Initiate_table(input_variable_all_but_state);
                    console.log(`Date selected: ${input_variable_date}`);
                    console.log(`City selected: ${input_variable_city}`);
                    console.log(`Country selected: ${input_variable_country}`);
                    console.log(`Shape selected: ${input_variable_shape}`);
                }

                // All but country
                else if (input_variable_all_but_country.length>0){
                    Initiate_table(input_variable_all_but_country);
                    console.log(`Date selected: ${input_variable_date}`);
                    console.log(`City selected: ${input_variable_city}`);
                    console.log(`State selected: ${input_variable_state}`);
                    console.log(`Shape selected: ${input_variable_shape}`);
                }

                // All but shape
                else if (input_variable_all_but_shape.length>0){
                    Initiate_table(input_variable_all_but_shape);
                    console.log(`Date selected: ${input_variable_date}`);
                    console.log(`City selected: ${input_variable_city}`);
                    console.log(`State selected: ${input_variable_state}`);
                    console.log(`Country selected: ${input_variable_country}`);
                }


            // If 3 fields have matching data 

            // Date, City, State
            else if (input_variable_date_city_state.length>0){
                Initiate_table(input_variable_date_city_state);
                console.log(`Date selected: ${input_variable_date}`);
                console.log(`City selected: ${input_variable_city}`);
                console.log(`State selected: ${input_variable_state}`);
            }

            // Date, City, Country
            else if (input_variable_date_city_country.length>0){
                Initiate_table(input_variable_date_city_country);
                console.log(`Date selected: ${input_variable_date}`);
                console.log(`City selected: ${input_variable_city}`);
                console.log(`Country selected: ${input_variable_country}`);
            }

            // Date, City, Shape
            else if (input_variable_date_city_shape.length>0){
                Initiate_table(input_variable_date_city_shape);
                console.log(`Date selected: ${input_variable_date}`);
                console.log(`City selected: ${input_variable_city}`);
                console.log(`Shape selected: ${input_variable_shape}`);
            }

            // Date, Country, Shape
            else if (input_variable_date_country_shape.length>0){
                Initiate_table(input_variable_date_country_shape);
                console.log(`Date selected: ${input_variable_date}`);
                console.log(`Country selected: ${input_variable_country}`);
                console.log(`Shape selected: ${input_variable_shape}`);
            }

            // Date, state, country
            else if (input_variable_date_state_country.length>0){
                Initiate_table(input_variable_date_state_country);
                console.log(`Date selected: ${input_variable_date}`);
                console.log(`State selected: ${input_variable_state}`);
                console.log(`Country selected: ${input_variable_country}`);
            }

            // Date, state, shape
            else if (input_variable_date_state_shape.length>0){
                Initiate_table(input_variable_date_state_shape);
                console.log(`Date selected: ${input_variable_date}`);
                console.log(`State selected: ${input_variable_state}`);
                console.log(`Shape selected: ${input_variable_shape}`);
            }

            // City, country, shape
            else if (input_variable_city_country_shape.length>0){
                Initiate_table(input_variable_city_country_shape);
                console.log(`City selected: ${input_variable_city}`);
                console.log(`Country selected: ${input_variable_country}`);
                console.log(`Shape selected: ${input_variable_shape}`);
            }

            // City, state, country
            else if (input_variable_city_state_country.length>0){
                Initiate_table(input_variable_city_state_country);
                console.log(`City selected: ${input_variable_city}`);
                console.log(`State selected: ${input_variable_state}`);
                console.log(`Counrty selected: ${input_variable_country}`);
            }

            // City, state, shape
            else if (input_variable_city_state_shape.length>0){
                Initiate_table(input_variable_city_state_shape);
                console.log(`City selected: ${input_variable_city}`);
                console.log(`State selected: ${input_variable_state}`);
                console.log(`Shape selected: ${input_variable_shape}`);
            }

            // State, country, shape
            else if (input_variable_state_country_shape.length>0){
                Initiate_table(input_variable_state_country_shape);
                console.log(`State selected: ${input_variable_state}`);
                console.log(`Country selected: ${input_variable_country}`);
                console.log(`Shape selected: ${input_variable_shape}`);
            }


        // If 2 fields have matching data.

        // Date and City
        else if (search_results.input_variable_date_city.length>0){
            Initiate_table(input_variable_date_city);
            console.log(`Date selected: ${input_variable_date}`);
            console.log(`City selected: ${input_variable_city}`);
        }

        // Date and State
        else if (search_results.input_variable_date_state.length>0){
            Initiate_table(input_variable_date_state);
            console.log(`Date selected: ${input_variable_date}`);
            console.log(`State selected: ${input_variable_state}`);
        }

        // Date and Country
        else if (search_results.input_variable_date_country.length>0){
            Initiate_table(input_variable_date_country);
            console.log(`Date selected: ${input_variable_date}`);
            console.log(`Country selected: ${input_variable_country}`);
        }

        // Date and Shape
        else if (search_results.input_variable_date_shape.length>0){
            Initiate_table(input_variable_date_shape);
            console.log(`Date selected: ${input_variable_date}`);
            console.log(`Shape selected: ${input_variable_shape}`);
        }

        // City and State
        else if (search_results.input_variable_city_state.length>0){
            Initiate_table(input_variable_city_state);
            console.log(`City selected: ${input_variable_city}`);
            console.log(`State selected: ${input_variable_state}`);
        }

        // City and Country
        else if (search_results.input_variable_city_country.length>0){
            Initiate_table(input_variable_city_country);
            console.log(`City selected: ${input_variable_city}`);
            console.log(`Country selected: ${input_variable_country}`);
        }

        // City and Shape
        else if (search_results.input_variable_city_shape.length>0){
            Initiate_table(input_variable_city_shape);
            console.log(`City selected: ${input_variable_city}`);
            console.log(`Shape selected: ${input_variable_shape}`);
        }        

        // State and Country
        else if (search_results.input_variable_state_country.length>0){
            Initiate_table(input_variable_state_country);
            console.log(`State selected: ${input_variable_state}`);
            console.log(`Country selected: ${input_variable_country}`);
        }

        // State and Shape
        else if (search_results.input_variable_state_shape.length>0){
            Initiate_table(input_variable_state_shape);
            console.log(`State selected: ${input_variable_state}`);
            console.log(`Shape selected: ${input_variable_shape}`);
        }

        // Country and Shape
        else if (search_results.input_variable_country_shape.length>0){
            Initiate_table(input_variable_country_shape);
            console.log(`Country selected: ${input_variable_country}`);
            console.log(`Shape selected: ${input_variable_shape}`);
        }

    // If only 1 field has matching data.

    // Just Date
    else if (input_variable_only_date.length>0){
        Initiate_table(input_variable_only_date);
        console.log(`State selected: ${input_variable_date}`);
    }

    // Just City
    else if (input_variable_only_city.length>0){
        Initiate_table(input_variable_only_city);
        console.log(`City selected: ${input_variable_city}`);
    }

    // Just State
    else if (input_variable_only_state.length>0){
        Initiate_table(input_variable_only_state);
        console.log(`State selected: ${input_variable_state}`);
    }

    // Just Country
    else if (input_variable_only_country.length>0){
        Initiate_table(input_variable_only_country);
        console.log(`Country selected: ${input_variable_country}`);
    }

    // Just Shape
    else if (input_variable_only_shape.length>0){
        Initiate_table(input_variable_only_shape);
        console.log(`Shape selected: ${input_variable_shape}`);
        console.log(shape_parameter);
    }


                    // If no matches are found:
                    else{
                        table_row.append("tr").append("td").text("Your search yielded no results.  Please search again.")
                        console.log("Your search yielded no results.  Please search again.");
                    }
})