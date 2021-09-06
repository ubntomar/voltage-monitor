const axios = require("axios")
axios.defaults.timeout = 6000;
const getMessure = async () => {

    console.log("start..axios.")
    try {
        const response = await axios.get('http://181.60.60.57:8282/50');
        let part = response.data.replace(/'/g, "\"")
        let text = "{" + part + "}"
        var res = (JSON.parse(text))

    } catch (error) {
        return false
    }
    return res
}


