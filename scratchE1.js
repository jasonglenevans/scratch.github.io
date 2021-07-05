class ScratchFetch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Window HTML",
            "name": "Window HTML",
            "blocks": [                        {
                            "opcode": "fetchURL",
                            "blockType": "reporter",
                            "text": "fetch data from [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": "https://api.weather.gov/stations/KNYC/observations"
                                },
                            }
                        }]
        }
    }

    /* add methods for blocks */
}

Scratch.extensions.register(new ScratchFetch())
