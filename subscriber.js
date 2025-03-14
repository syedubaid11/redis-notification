import Redis from "ioredis";

const sub=new Redis();//for subscibing
const redis=new Redis();//for storing 

const channel="Tesla"

sub.subscribe(channel,(error)=>{
    if(error){
        throw new Error(error)
    }
    console.log("Subscribed successfully to the channel");
})

sub.on("message",async (channel,message)=>{
    console.log(`new message on ${channel}`,message)
    try{
        const storeMessage=await redis.lpush(`${channel}:messages`,message)//pushing the messages via new redis instance
        console.log('message stored')


    }
    catch(error){
        console.log(error);
    }
})