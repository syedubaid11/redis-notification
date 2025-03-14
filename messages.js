import Redis from "ioredis";

const read=new Redis();
const channel="Tesla";


async function message(){
    const redisRead=await read.lrange(`${channel}:messages`,0,9);
    console.log(redisRead)

}

message();