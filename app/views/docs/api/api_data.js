define({ "api": [
  {
    "type": "put",
    "url": "/comments",
    "title": "Add comment",
    "name": "AddCommentToRecall",
    "version": "1.0.0",
    "description": "<p>Add a comment to the recall.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "recallnumber",
            "description": "<p>The recall number.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "location",
            "description": "<p>The location of the user.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment.</p> "
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Failure": [
          {
            "group": "FailureHeader",
            "optional": false,
            "field": "InvalidArgumentError",
            "description": "<p><code>recallnumber</code> or <code>location</code> or <code>comment</code> was not provided or was invalid.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "InvalidArgumentError",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\": {\n    \"code\": \"INVALID_ARGUMENT\",\n    \"message\": \"...\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "group": "c__code_TotalBriecall_app_routes_api_js",
    "groupTitle": "c__code_TotalBriecall_app_routes_api_js"
  },
  {
    "type": "get",
    "url": "/counts/recalls",
    "title": "Count Distinct Values",
    "name": "CountDistinctValues",
    "version": "1.0.0",
    "description": "<p>Gets counts for distinct values in a recall field.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "field",
            "description": "<p>The state abbreviation affected by the recall.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "state",
            "description": "<p>The state abbreviation affected by the recall.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "allowedValues": [
              "\"Ongoing\"",
              "\"Completed\"",
              "\"Terminated\"",
              "\"Pending\""
            ],
            "optional": true,
            "field": "status",
            "description": "<p>The state abbreviation affected by the recall.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "total",
            "description": "<p>Total recall count.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "counts",
            "description": "<p>The counts of unique terms.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"total\": 3416,\n  \"counts\": {\n    \"Class I\": 1518,\n    \"Class II\": 1816,\n    \"Class III\": 82\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Failure": [
          {
            "group": "FailureHeader",
            "optional": false,
            "field": "ResourceNotFoundError",
            "description": "<p>There are no recalls associated with provided parameters.</p> "
          },
          {
            "group": "FailureHeader",
            "optional": false,
            "field": "InvalidArgumentError",
            "description": "<p><code>field</code> is invalid. It must be a supported field. <code>state</code> is invalid. It must be a valid state abbreviation, including 'DC'. <code>status</code> is invalid. It must be one of the valid values.</p> <p><code>skip</code> or <code>limit</code> cannot be provided.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ResourceNotFoundError",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n    \"code\": \"NOT_FOUND\",\n    \"message\": \"...\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "InvalidArgumentError",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\": {\n    \"code\": \"INVALID_ARGUMENT\",\n    \"message\": \"...\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "group": "c__code_TotalBriecall_app_routes_api_js",
    "groupTitle": "c__code_TotalBriecall_app_routes_api_js"
  },
  {
    "type": "get",
    "url": "/recalls/:recallid",
    "title": "Get Recall By ID",
    "name": "GetRecallByID",
    "version": "1.0.0",
    "description": "<p>Gets the recall identified by <code>recallid</code>.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "recallid",
            "description": "<p>The recall ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "recall_number",
            "description": "<p>The recall number.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "reason_for_recall",
            "description": "<p>The reason for recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>The status of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "distribution_pattern",
            "description": "<p>The pattern for distribution of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product_quantity",
            "description": "<p>The quantity distributed of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "recall_initiation_date",
            "description": "<p>The timestamp of the initial recall date.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "state",
            "description": "<p>The state for the contact of the distribution firm.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "event_id",
            "description": "<p>The event ID of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product_type",
            "description": "<p>The product type of the recall.</p> <p>The value of this feed is always <code>&quot;Food&quot;</code>.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "product_description",
            "description": "<p>The description of the recalled product.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "country",
            "description": "<p>The country for the contact of the distribution firm.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "city",
            "description": "<p>The city for the contact of the distribution firm.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "recalling_firm",
            "description": "<p>The recalling firm's name.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "report_date",
            "description": "<p>The timestamp of the recall report date.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "voluntary_mandated",
            "description": "<p>The initiating party for the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "classification",
            "description": "<p>The classification of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "code_info",
            "description": "<p>The descriptive markings of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "initial_firm_notification",
            "description": "<p>The initial method of notification from the recalling firm for the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>A unique ID to identify the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "classificationlevel",
            "description": "<p>The <code>classification</code> string expressed as a numerical level.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "mandated",
            "description": "<p>The <code>voluntary_mandated</code> expressed as a boolean.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "affectedstates",
            "description": "<p>The <code>distribution_pattern</code> expressed as an array of state abbreviations.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "affectednationally",
            "description": "<p>The <code>distribution_pattern</code> expressed as matching a national keyword.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"recall_number\": \"F-0489-2015\",\n  \"reason_for_recall\": \"Protein supplement fails to declare allergen: milk\",\n  \"status\": \"Ongoing\",\n  \"distribution_pattern\": \"AK\",\n  \"product_quantity\": null,\n  \"recall_initiation_date\": 1348200000,\n  \"state\": \"ME\",\n  \"event_id\": 63260,\n  \"product_type\": \"Food\",\n  \"product_description\": \"Kettle Corn\",\n  \"country\": \"US\",\n  \"city\": \"Warren\",\n  \"recalling_firm\": \"Kettle Corn Co\",\n  \"report_date\": 1416373200,\n  \"voluntary_mandated\": \"Voluntary: Firm Initiated\",\n  \"classification\": \"Class I\",\n  \"code_info\": \"All lots codes that fail to declare the allergens: milk\",\n  \"initial_firm_notification\": \"Press Release\",\n  \"id\": \"WyJGLTA0ODktMjAxNSIsIjYzMj\",\n  \"classificationlevel\": 1,\n  \"mandated\": false,\n  \"affectedstates\": [\n    \"AK\"\n  ],\n  \"affectednationally\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Failure": [
          {
            "group": "FailureHeader",
            "optional": false,
            "field": "ResourceNotFoundError",
            "description": "<p>There is no recall identified by <code>recallid</code>.</p> "
          },
          {
            "group": "FailureHeader",
            "optional": false,
            "field": "InvalidArgumentError",
            "description": "<p><code>skip</code> or <code>limit</code> cannot be provided.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ResourceNotFoundError",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n    \"code\": \"NOT_FOUND\",\n    \"message\": \"...\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "InvalidArgumentError",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\": {\n    \"code\": \"INVALID_ARGUMENT\",\n    \"message\": \"...\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "group": "c__code_TotalBriecall_app_routes_api_js",
    "groupTitle": "c__code_TotalBriecall_app_routes_api_js"
  },
  {
    "type": "get",
    "url": "/recalls",
    "title": "Search Recalls",
    "name": "SearchRecalls",
    "version": "1.0.0",
    "description": "<p>Gets the recalls matching provided parameters.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "state",
            "description": "<p>The state abbreviation affected by the recall.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "eventid",
            "description": "<p>The event ID.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "firmname",
            "description": "<p>The recalling firm's name.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "from",
            "description": "<p>The timestamp for the earliest point in the desired time period. Requires <code>to</code> parameter.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": true,
            "field": "to",
            "description": "<p>The timestamp for the latest point in the desired time period. Requires <code>from</code> parameter.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number[]</p> ",
            "allowedValues": [
              "{1..3}"
            ],
            "optional": true,
            "field": "classificationlevels",
            "description": "<p>The classification levels of the recall.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "allowedValues": [
              "\"dairy\"",
              "\"dye\"",
              "\"egg\"",
              "\"fish\"",
              "\"gluten\"",
              "\"nut\"",
              "\"soy\""
            ],
            "optional": true,
            "field": "keywords",
            "description": "<p>An array of keywords to target in reason for recall.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "size": "0..5000",
            "optional": true,
            "field": "skip",
            "defaultValue": "0",
            "description": "<p>The offset of the initial result to return.</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "size": "1..100",
            "optional": true,
            "field": "limit",
            "defaultValue": "100",
            "description": "<p>The maximum number of results to return.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "skip",
            "description": "<p>The skip input used to fetch data.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "limit",
            "description": "<p>The limit input used to fetch data.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "total",
            "description": "<p>The total rows found.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "data",
            "description": "<p>An array of response data objects.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.recall_number",
            "description": "<p>The recall number.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.reason_for_recall",
            "description": "<p>The reason for recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.status",
            "description": "<p>The status of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.distribution_pattern",
            "description": "<p>The pattern for distribution of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.product_quantity",
            "description": "<p>The quantity distributed of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.recall_initiation_date",
            "description": "<p>The timestamp of the initial recall date.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.state",
            "description": "<p>The state for the contact of the distribution firm.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.event_id",
            "description": "<p>The event ID of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.product_type",
            "description": "<p>The product type of the recall.</p> <p>The value of this feed is always <code>&quot;Food&quot;</code>.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.product_description",
            "description": "<p>The description of the recalled product.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.country",
            "description": "<p>The country for the contact of the distribution firm.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.city",
            "description": "<p>The city for the contact of the distribution firm.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.recalling_firm",
            "description": "<p>The recalling firm's name.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.report_date",
            "description": "<p>The timestamp of the recall report date.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.voluntary_mandated",
            "description": "<p>The initiating party for the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.classification",
            "description": "<p>The classification of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.code_info",
            "description": "<p>The descriptive markings of the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "data.initial_firm_notification",
            "description": "<p>The initial method of notification from the recalling firm for the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>A unique ID to identify the recall.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "data.classificationlevel",
            "description": "<p>The <code>classification</code> string expressed as a numerical level.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "data.mandated",
            "description": "<p>The <code>voluntary_mandated</code> expressed as a boolean.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "data.affectedstates",
            "description": "<p>The <code>distribution_pattern</code> expressed as an array of state abbreviations.</p> "
          },
          {
            "group": "SuccessHeader",
            "type": "<p>Boolean</p> ",
            "optional": false,
            "field": "data.affectednationally",
            "description": "<p>The <code>distribution_pattern</code> expressed as matching a national keyword.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "HTTP/1.1 200 OK\n{\n  \"skip\": 0,\n  \"limit\": 100,\n  \"total\": 1,\n  \"data\": [{\n    \"recall_number\": \"F-0489-2015\",\n    \"reason_for_recall\": \"Protein supplement fails to declare allergen: milk\",\n    \"status\": \"Ongoing\",\n    \"distribution_pattern\": \"AK\",\n    \"product_quantity\": null,\n    \"recall_initiation_date\": 1348200000,\n    \"state\": \"ME\",\n    \"event_id\": 63260,\n    \"product_type\": \"Food\",\n    \"product_description\": \"Kettle Corn\",\n    \"country\": \"US\",\n    \"city\": \"Warren\",\n    \"recalling_firm\": \"Kettle Corn Co\",\n    \"report_date\": 1416373200,\n    \"voluntary_mandated\": \"Voluntary: Firm Initiated\",\n    \"classification\": \"Class I\",\n    \"code_info\": \"All lots codes that fail to declare the allergens: milk\",\n    \"initial_firm_notification\": \"Press Release\",\n    \"id\": \"WyJGLTA0ODktMjAxNSIsIjYzMj\",\n    \"classificationlevel\": 1,\n    \"mandated\": false,\n    \"affectedstates\": [\n      \"AK\"\n    ],\n    \"affectednationally\": false\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Failure": [
          {
            "group": "FailureHeader",
            "optional": false,
            "field": "ResourceNotFoundError",
            "description": "<p>There are no recalls associated with provided parameters.</p> "
          },
          {
            "group": "FailureHeader",
            "optional": false,
            "field": "InvalidArgumentError",
            "description": "<p><code>state</code> is invalid. It must be a valid state abbreviation, including 'DC'.</p> <p><code>eventid</code> is invalid. It must be a valid number.</p> <p><code>from</code> is invalid. It must be a valid timestamp and must have an associated <code>to</code> parameter. <code>from</code> must be before <code>to</code>.</p> <p><code>to</code> is invalid. It must be a valid timestamp and must have an associated <code>from</code> parameter. <code>to</code> must be after <code>from</code>.</p> <p><code>classificationlevels</code> is invalid. It must be one of the valid values.</p> <p><code>keywords</code> is invalid. It must be one of the valid values.</p> <p><code>skip</code> or <code>limit</code> are invalid. They must be in their respective ranges.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "ResourceNotFoundError",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n    \"code\": \"NOT_FOUND\",\n    \"message\": \"...\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "InvalidArgumentError",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\": {\n    \"code\": \"INVALID_ARGUMENT\",\n    \"message\": \"...\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "group": "c__code_TotalBriecall_app_routes_api_js",
    "groupTitle": "c__code_TotalBriecall_app_routes_api_js"
  }
] });