const axios = require("axios")
axios.defaults.timeout = 6000;
var controller = {
    getMessure: (req, res) => {
        if(req.params.id==100){
            axios.get("http://181.60.60.57:8282/50").then((response) => {
                let part = response.data.replace(/'/g, "\"")
                let text = "{" + part + "}"
                var result = (JSON.parse(text))
                return res.status(200).send({
                    data: result.data
                })
            }, (error) => {
                return res.status(400).send({
                    message: "Error"+error
                })
            })
        }
        else{
            return res.status(400).send({
                message: "Id inválido!"
            })
        }
    }
}

module.exports = controller