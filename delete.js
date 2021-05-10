var AWS = require("aws-sdk");
let awsConfig = {
    
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

const prompt = require('prompt-sync')();

let remove = function () {

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