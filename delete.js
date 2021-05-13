//AWS AUTH (first ~10 lines)
var AWS = require("aws-sdk");
let awsConfig = {
    
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

const prompt = require('prompt-sync')();

//FUNCTION TO REMOVE DATA FROM TABLE
let remove = function () {

    //REQUESTS A NUMBER, SUCCESS REMOVES DATA FROM TABEL, ERROR THROWS ERROR
    //SHUTS DOWN ON FIRST INPUT ERROR
    var id_val = prompt("Delete num: ");

    var params = {
        TableName: "TABLE_LIST",
        Key: {
            "id": Number(id_val)
        }
    };



    // ERROR HANDLING
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::delete::success");
        }
    });
}

remove();
