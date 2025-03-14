import Redis from "ioredis";

const sub=new Redis();

const channel="Tesla"

sub.subscribe(channel,(error)=>{
    if(error){
        throw new Error(error)
    }
    console.log("Subscribed successfully to the channel");
})

sub.on("message",(channel,message)=>{
    console.log(`new message on ${channel}`,message)
})