const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dns.resolveSrv("_mongodb._tcp.cluster0.zdwd0lc.mongodb.net", (err, records) => {
    console.log(err);
    console.log(records);
});