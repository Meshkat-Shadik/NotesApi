module.exports = {
    "title": "Welcome to NOTES-API",
    "routes": "There are 5 routes",

    "GET -> /notes": {
        "method": "GET",
        "body": "not required",
        "description": "Will show all the notes",
    },
    "GET -> /notes/id": {
        "method": "GET",
        "body": "not required",
        "description": "Will show a note by it's id",
    },
    "POST -> /notes": {
        "method": "POST",
        "body": {
            "title": "need",
            "description": "need",
        },
        "description": "Will create a note",
    },
    "PUT -> /notes/id": {
        "method": "PUT",
        "body": {
            "title": "need",
            "description": "need",
        },
        "description": "Will update a note by id",
    },
    "DELETE -> /notes/id": {
        "method": "DELETE",
        "body": "not required",
        "description": "Will delete a note by id",
    },
}