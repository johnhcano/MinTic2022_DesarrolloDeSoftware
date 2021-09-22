class ServerController{
    constructor(){

    }

    register(req, res){
        //obtener datos
        let { nombre, apellido } = req.body;
        console.log("Usuario registrado con éxito");
        console.table({nombre, apellido});
        res.status(200).json({
            message: "Usuario registrado con éxito"
        });
    }

    getUsers(req, res){
        let id = req.params.id;
        let users = [
            {id: 1, nombre: "Geremias", apellido: "Beltran"},
            {id: 2, nombre: "Isadora", apellido: "Montiel"},
            {id: 3, nombre: "Laureano", apellido: "Gómez"},
            {id: 4, nombre: "Carlos", apellido: "Castro"}
        ]
        let userResp = null;
        users.forEach(element => {
            if(id == element.id){
                userResp = element;
            }
        });

        if(userResp != null){
            res.status(200).json(userResp);
        }else{
            res.status(400).json({message: "Usuario no encontrado"});
        }
        
    }

    getAllUsers(req, res) {
        let users = [
            {id: 1, nombre: "Geremías", apellido: "Beltrán"},
            {id: 2, nombre: "Isadora", apellido: "Montiel"},
            {id: 3, nombre: "Laureano", apellido: "Gómez"},
            {id: 4, nombre: "Carlos", apellido: "Castro"}
        ]

        res.status(200).json(users);
    }
}

exports.default = ServerController;