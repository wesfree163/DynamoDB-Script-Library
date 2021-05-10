var AWS = require("aws-sdk");
let awsConfig = {
    
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

const prompt = require('prompt-sync')();

let save = function () {

    // DIFFERENT VARIABLES CAN ACCEPT USER INPUTS
    // var id_val = prompt("Game ID: ");
    // var title = prompt("Title: ");
    // var description = prompt("Description: ");
    // var mainGenre = prompt("Main Genre: ");
    // var genre2 = prompt("Genre 2: ");
    // var genre3 = prompt("Genre 3: ");
    // var genre4 = prompt("Genre 4: ");
    // var gameCenterEnabled = prompt("GameCenter Enabled: ");
    // var releaseDate = prompt("Release Date: ");
    // var supportedDevices = prompt("Supported Devices: ");
    // var contentAdvisoryRating = prompt("Content Advisory rating: ");
    // var language1 = prompt("Language 1: "); 
    // var language2 = prompt("Language 2: "); 
    // var language3 = prompt("Language 3: "); 
    // var language4 = prompt("Language 4: "); 
    // var language5 = prompt("Language 5: "); 
    // var language6 = prompt("Language 6: "); 
    // var language7 = prompt("Language 7: "); 
    // var language8 = prompt("Language 8: "); 
    // var fileSizeBytes = prompt("File Size Bytes: ");
    // var minOSVersion = prompt("Minimum OS Version: ");
    // var developerID = prompt("Developer ID: ");
    // var developerName = prompt("Developer Name: ");
    // var developerUrl = prompt("Developer Url: ");
    // var price = prompt("Price: ");
    // var currency = prompt("Currency: ");
    // var averageUserRating = prompt("Average User Rating: ");
    // var userRatingCount = prompt("User Rating Count: ");
    // var currentVersion = prompt("Current Version: ");
    // var currentVersionReleaseDate = prompt("Current Version Release Date: ");
    // var currentVersionNotes = prompt("Current Version Notes: ");
    // var averageUserRatingForCurrentVersion = prompt("Average User Rating for Current Version: ");
    // var userRatingCountForCurrentVersion = prompt("User Rating Count for Current Version: ");


    // THE VARIABLE COLLECTION OF INFORMATION THAT IS TO BE ACTIVELY STORED IN DYNAMO
    var input = {
                "id": 1,
                "title": "North East Region",
                "items": [
                    {
                        "id": 1,
                        "name": "Delaware Market",
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
                        "name": "New York Market",
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
                ],
                "id": 2,
                "title": "South East Reion",
                "items": [
                    {
                        "id": 1,
                        "name": "Georgia Market",
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
                        "name": "North Carolina Market",
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
                ],
                "id": 3,
                "title": "Midwest Region",
                "items": [
                    {
                        "id": 1,
                        "name": "Kansas Market",
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
                        "name": "Minnesota Market",
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
                ],
                "id": 4,
                "title": "North West Region",
                "items": [
                    {
                        "id": 1,
                        "name": "Oregon Market",
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
                        "name": "Washington Market",
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
                ],
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

    // PUTS VARIABLE DATA AT THE TABLE
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