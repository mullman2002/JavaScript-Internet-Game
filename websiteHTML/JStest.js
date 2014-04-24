//Sets initial values for the game
function set_init_values() {
   localStorage["count"] = 0;
   localStorage["pointSum"] = 0;
   localStorage["gameIsOn"] = true;
   localStorage["pointsToAdd"] = 0;
  
   //name variables mainly used to turn links on/off on home page
   localStorage["Clothing Store"] = true;
   localStorage["Hair Salon"] = true;
   localStorage["Floral Shop"] = true;
   localStorage["Gift Store"] = true;
   localStorage["Restaurant"] = true;
   localStorage["Movie Theater"] = true;
   localStorage["Shoe Store"] = true;
   localStorage["Book Store"] = true;
   localStorage["Fragrance Shop"] = true;
}

//(string) takes in the name variable of the category,
//and if true, the link will be active on home page,
//else false, the link will be disabled because the user has
//already selected from this category
function linkOnOrOff(string){
   if(localStorage[string] == "true")
   {
       document.write('<a href="' + string + '.html">' + string + '</a>');
   }
   else
   {
       document.write(string);
   }
}

//This function stores the amount of points to be added
//to the users point sum after a selection has been made
function set_pointsToAdd(num){
   localStorage["pointsToAdd"] = num;
}

//prints the values of each variable
function print_storage() {
    alert(localStorage["count"]);
    alert(localStorage["pointSum"]);
    alert(localStorage["gameIsOn"]);
    alert(localStorage["pointsToAdd"]);
}

//increments the count by 1 
//is called after a choice is made
function add_count() {
    var count = parseInt(localStorage["count"]);
    count++;
    localStorage["count"] = count;
}

//adds the total points for the selections
//Converts the current sum from string to integer
//converts the current points to add to integer
//adds the points to the sum integer
//Converts from integer back to string in the pointSum variable
function add_points() {
   var sum = parseInt(localStorage["pointSum"]);
   sum += parseInt(localStorage["pointsToAdd"]);
   localStorage["pointSum"] = sum;
}

//swaps the game state 
function change_game_state() {
   if(localStorage["gameIsOn"] == "false")
   { 
     localStorage["gameIsOn"] = true;
   }
   else
   {
     localStorage["gameIsOn"] = false;
   }
}
 
//when called is used to set the link status to off
//so that the link will not be shown on the home page  
function change_link_status(string){
   localStorage[string] = false;
}

//when the user hits Submit, this function is used
//to complete the other actions. It increases the choice count
//by one, adds the current choice points to the players sum,
//and disables the category link on the home page
function choice_made(string) {
   add_count();
   add_points();
   change_link_status(string);
}
