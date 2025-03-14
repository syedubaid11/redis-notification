import Redis from "ioredis";

const pub=new Redis()

const channel="Tesla"

async function main(){
    try {
        const publish=await pub.publish(channel,"you are receiving this info")
        if(publish){
            console.log("channel published")
        }
    } catch (error) {
        console.log(error);
    }
}

main();