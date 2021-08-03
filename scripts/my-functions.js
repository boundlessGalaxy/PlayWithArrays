/*
function signature:

     makeListFromArray( anyArray, listType = "ul" )

required parameter1 - anyArray can be any array that contains 2 or more items    
optional parameter2 - listType can be a string either "ul" or "ol"
                      default value is "ul"
                      used to determine which kind of HTML list to build

return              - on error, an error message will be returned
                    - on success, an HTML list as a string will be returned                      

*/
function makeListFromArray( anyArray, listType = "ul" ){
    //prepare a string we can build for return
    let function_output = "";
    
    //ensure param1 is an array
    if( Array.isArray(anyArray) == false){
        function_output += "<p>Error: This function requires an array</p>";
        return function_output;
    }

    //ensure param1 has at least 2 or more items
    if( anyArray.length < 2 ){
        function_output += "<p>Error: Array must contain at least two items or more</p>";
        return function_output;
    }

    //ensure list type is appropraite (accepts either 'ul' or 'ol' only)
    if( listType !== "ul" &&  listType !== "ol" ){
        function_output += `<p>Error: In HTML only UL or OL lists can be made. There is no '${listType}' HTML list</p>`;
        return function_output;         
    }

    //parameter validation has been passed.
    //time to build an HTML list
    //start with the opening tag <ul> or <ol>
    function_output += `<${listType}>`;
    //loop thorugh each array item
    anyArray.forEach(function( dataPoint ){
        //concatenate list items
        function_output += `<li>${dataPoint }</li>`;
    });    
    //finish with the closing tag </ul> or </ol>
    function_output += `</${listType}>`;

    //return the string to the invoking instruction
    return function_output;
}
