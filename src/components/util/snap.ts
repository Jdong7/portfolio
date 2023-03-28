const sectionNames = ["intro","portfolio","works"]
const sections = sectionNames.length

const snapDebounce = 1000;
 

function calcBreakPoints() {
    let distArray = []
    for (let i = 0; i< sections;i++){
      let diff = window.innerHeight*i -(100 *i)
      distArray.push(diff)
    }
    return distArray
}

function snapTo(section:string){
    let distArray = calcBreakPoints()
    let idx = sectionNames.indexOf(section) === -1? 0: sectionNames.indexOf(section)
    window.scrollTo({
        behavior:'smooth',
        top: distArray[idx]
    })
}
export  {
    sectionNames,
    sections,
    snapDebounce,
    calcBreakPoints,
    snapTo,
}