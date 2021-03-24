db.createUser(
    {
        user    : "mariossan",
        pwd     : "mariossan123",
        roles   : [
            {
                role    : "dbOwner",
                db      : "miprueba"
            }
        ]
    }
);