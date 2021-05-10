var ping = require('ping');

async function Ping(hosts){
    if(Array.isArray(hosts) === false){hosts = [hosts]}
    let replay = []
    for(let i = 0;i<hosts.length;i++){
        replay.push(await ping.promise.probe(hosts[i], {timeout: 10,extra: ['-i', '2']}))
    }
    return replay
}

module.exports = Ping

//input = '192.168.1.1' or ['192.168.1.1','192.168.1.2']
