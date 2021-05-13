//FIRST DECLARE FILESYSTEM AND GET ALL NECESSARY AUTHENTICATION
const fs = require('fs');
var AWS = require("aws-sdk");
let awsConfig = {
    
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

const prompt = require('prompt-sync')();

//FUNCTION TO READ DATA FROM DYNAMODB
let fetchOneByKey = function () {

    var id_val = prompt("Read num: ");

    var params = {
        TableName: "TABLE_LIST",
        Key: {
            "id": Number(id_val)
        }
    };



    // ERROR HANDLING
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            // console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
            const JSONFILEDATA =  "{\n\"list\": [\n" + JSON.stringify(data, null, 2) + "\n]\n}";

            //writing to json file
            fs.writeFile('dynamo.json', JSONFILEDATA, (err) => {
                if(err){
                    throw err;
                }
                console.log("JSON data is saved");
            });
        }
    })
}


fetchOneByKey();
