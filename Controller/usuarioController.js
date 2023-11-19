const usuarioController = {
    home: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/home.html"))
    },
    registro: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/register.html"))
    },
    login: (req,res) => {
        res.sendFile(path.resolve(__dirname, "./views/login.html"))
    },

}

module.exports = usuarioController;