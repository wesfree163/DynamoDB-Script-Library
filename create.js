// AWS AUTHENTICATION AND DECLARATIONS REQUIRED, first~10 lines of code
var AWS = require("aws-sdk");
let awsConfig = {
    
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

const prompt = require('prompt-sync')();


let save = function () {

    // DIFFERENT VARIABLES CAN ACCEPT USER INPUTS AS AN OPTION FOR COMPLEX SCENARIOS
    // var id_val = prompt("User input integer: ");

    // THE VARIABLE COLLECTION OF INFORMATION THAT IS TO BE ACTIVELY STORED IN DYNAMO
    //HERE IS A SAMPLE OF RETAIL STORE DATA
    var input = {
                "id": 5,
                "title": "South West Region",
                "items": [
                    {
                        "id": 1,
                        "name": "California Market",
                        "subitems": [
                            {
                                "id": 1,
                                "name": "Area Management"
                            },
                            {
                                "id": 2,
                                "name": "Store Locations"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "New Mexico Market",
                        "subitems": [
                            {
                                "id": 1,
                                "name": "Area Management"
                            },
                            {
                                "id": 2,
                                "name": "Store Locations"
                            }
                        ]
                    }
                ]
            };

    // PARSES HEIRARCHY OF DATA AND PUTS VARIABLE DATA AT THE TABLE
    var params = {
        TableName: "TABLE_LIST",
        Item:  input
    };



    // ERROR HANDLING
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();
