var jsonData = {
            "name": "Product",
            "properties": {
                "id": {
                    "type": "number",
                    "description": "Product identifier",
                    "required": true
                },
                "name": {
                    "type": "string",
                    "description": "Name of the product",
                    "required": true
                },
                "price": {
                    "type": "number",
                    "minimum": 0,
                    "required": true
                },
                "tags": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "stock": {
                    "type": "object",
                    "properties": {
                        "warehouse": {
                            "type": "number"
                        },
                        "retail": {
                            "type": "number"
                        }
                    }
                },
				"myStock": {
                    "type": "object",
                    "properties": {
                        "warehouse": {
                            "type": "number"
                        },
                        "retail": {
                            "type": "number"
                        }
                    }
                }
            }
        };
