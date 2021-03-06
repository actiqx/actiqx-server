define({ "api": [
  {
    "type": "get",
    "url": "/api/categories",
    "title": "Get Categories",
    "group": "Category",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/category/index.js",
    "groupTitle": "Category",
    "name": "GetApiCategories"
  },
  {
    "type": "post",
    "url": "/api/categories",
    "title": "Save Categories",
    "group": "Category",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t\"Content-Type\":\"application/json\"\n\t\"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent",
            "description": "<p>Optional Parent Category ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"Pick and Delivery Service\",\n\t\"info\": \"Pick and Delivery Service\",\n\t\"icon\": \"http://dailyscot.com/wp-content/uploads/2014/08/parcel.jpg\",\n\t\"userRole\": \"Parcel delivery\",\n\t\"parent\": \"57f6a0a10c450f331485b6d3\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/category/index.js",
    "groupTitle": "Category",
    "name": "PostApiCategories"
  },
  {
    "type": "put",
    "url": "/api/categories",
    "title": "Update Category",
    "group": "Category",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Content-Type\":\"application/json\"\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/category/index.js",
    "groupTitle": "Category",
    "name": "PutApiCategories"
  },
  {
    "group": "Message",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/server/api/message/index.js",
    "groupTitle": "Message",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/messages/conversations",
    "title": "Get Last Message from Each conversation",
    "group": "Message",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/message/index.js",
    "groupTitle": "Message",
    "name": "GetApiMessagesConversations"
  },
  {
    "type": "get",
    "url": "/api/messages/conversations/:id",
    "title": "Get Single User Conversation",
    "group": "Message",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/message/index.js",
    "groupTitle": "Message",
    "name": "GetApiMessagesConversationsId"
  },
  {
    "type": "post",
    "url": "/api/messages",
    "title": "Send Message",
    "group": "Message",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Content-Type\":\"application/json\"\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"to\" : \"xxxxxx\",\n\t\"msg\" : {    \n\t\t\"content\" : \"Hello world\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/message/index.js",
    "groupTitle": "Message",
    "name": "PostApiMessages"
  },
  {
    "type": "get",
    "url": "/api/tasks/:id",
    "title": "Get Task",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "group": "Task",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\" : \"xxxxx\"\t\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/task/index.js",
    "groupTitle": "Task",
    "name": "GetApiTasksId"
  },
  {
    "type": "patch",
    "url": "/api/tasks/:id/assign/",
    "title": "Assign Task for service User",
    "group": "Task",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n\t \"Authorization\": \"Bearer token\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\tuser : \"xxxxxxxxxxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/task/index.js",
    "groupTitle": "Task",
    "name": "PatchApiTasksIdAssign"
  },
  {
    "type": "patch",
    "url": "/api/tasks/:id/bidding",
    "title": "Add bidding",
    "group": "Task",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n\t \"Authorization\": \"Bearer token\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"price\": {\n\t\t\"currency\": \"INR\",\n\t\t\"amount\": \"100.00\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/task/index.js",
    "groupTitle": "Task",
    "name": "PatchApiTasksIdBidding"
  },
  {
    "type": "post",
    "url": "/api/tasks",
    "title": "Create Task",
    "group": "Task",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Content-Type\":\"application/json\"\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"info\" : \"This is one task\",\n    \"category\" : \"57e6b396c9fa01cc1b6cef39\",\n    \"place\" : \"SGR College\",\n    \"location\" : {\n        \"lat\" : 12.9443301999999996,\n        \"lng\" : 77.7056763199999949\n    },\n    \"date\" : \"2016-07-02T17:30:00.000+05:30\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 Created",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/task/index.js",
    "groupTitle": "Task",
    "name": "PostApiTasks"
  },
  {
    "type": "put",
    "url": "/api/users/:id/password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Content-Type\":\"application/json\"\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\t\"oldPassword\": \"email\",\n\t\t\"newPassword\": \"siba4269@gmail.com\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/isExist/:field/:value",
    "title": "check field value exist",
    "name": "Check_User_Property",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\t\"field\": \"email\",\n\t\t\"value\": \"siba4269@gmail.com\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/remove-role/:role",
    "title": "Remove Role from user",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n\t \"Authorization\": \"Bearer token\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n\t\t\"role\" : \"grocery-delivery-service\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/user/index.js",
    "groupTitle": "User",
    "name": "DeleteApiUsersRemoveRoleRole"
  },
  {
    "type": "get",
    "url": "/api/users/me",
    "title": "Login User Info",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Authorization\": \"Bearer Token\" \n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/user/index.js",
    "groupTitle": "User",
    "name": "GetApiUsersMe"
  },
  {
    "type": "post",
    "url": "/auth/local",
    "title": "Login",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username (email/mobile).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"username\": \"siba4269@gmail.com\",\n\t\"password\": \"siba\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK\n{\n\t\"token\" : \"xxxxxxxxxxxxxxxxxxxxxxxxxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/auth/index.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/api/users/add-role",
    "title": "Add Role to user",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n\t \"Authorization\": \"Bearer token\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n\t\t\"newRole\" : \"grocery-delivery-service\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/user/index.js",
    "groupTitle": "User",
    "name": "PatchApiUsersAddRole"
  },
  {
    "type": "patch",
    "url": "/api/users",
    "title": "update device token",
    "name": "Patch_User__device_token_",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\": \"application/json\",\n\t \"Authorization\": \"Bearer token\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n\t\t\"device\": {\n\t\t\t\"typ\": \"ANDROID\",\n\t\t\t\"token\": \"xxxxxxxx\"\n\t\t}\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Signup",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\t \"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\": \"siba prakash\",\n\t\"email\": \"siba4269@gmail.com\",\n\t\"mobile\": \"8892220323\",\n\t\"password\": \"siba\",\n\t\"role\": \"user\",\n\t\"avatar\": \"https://gymkhana.iitb.ac.in/~sports/images/profile.png\",\n    \"timeSlots\": [{\n\t\t\"start\": 6.0,\n\t\t\"end\": 11.0,\n\t\t\"status\": 1\n\t}],\n\t\"location\" : {\n\t   \"latitude\" : 12.894009,\n\t   \"longitude\" : 77.60108\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "201 Created\n\t{\n\t\t\"token\" : \"xxxxxxxxxxxxxxxxxxxxxxxxxxxx\"\n\t}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/api/user/index.js",
    "groupTitle": "User",
    "name": "PostApiUsers"
  }
] });
