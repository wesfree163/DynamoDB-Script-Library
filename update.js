var AWS = require("aws-sdk");
let awsConfig = {
    
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

const prompt = require('prompt-sync')();

let modify = function () {

    var id_val = prompt("Update num: ");

    var params = {
        TableName: "TABLE_LIST",
        Key: { 
            "id": Number(id_val) 
        },
        UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues: {
            ":byUser": "updateUser",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"

    };



    // ERROR HANDLING
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("users::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::update::success "+JSON.stringify(data) );
        }
    });
}

modify();
        