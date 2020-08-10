

function loopManyTimes () {
    for(let i = 0; i < 10000; i++) {
        console.log(i)
    }
}

function someOtherTask () {
    for (let i = 0; i < 10; i++) {
        console.log(`This is number ${i}`)
    }
}

console.log('Comes first')

async function tasks() {

    const taks2 = await someOtherTask(); 
    console.log('Response recieved')
    const task1 = await loopManyTimes(); 
}


function writeName(name) {
    console.log(name)
}

writeName("comes second")
writeAge("comes third")

function writeAge(age) {
    console.log(age)
}

const t0 = performance.now()
console.log("sdhe")
const t1 = performance.now()

console.log(`${t0 - t1} ms.`)