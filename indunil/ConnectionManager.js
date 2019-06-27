module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["sachithra123"] = {
        host: process.env.EndPoint_rdsSachithra123,
        port: process.env.Port_rdsSachithra123,
        user: process.env.User_rdsSachithra123,
        password: process.env.Password_rdsSachithra123,
        database: "indunil"
    };
};