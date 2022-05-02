function expandedForm(num) {
    let deconstructed = num.toString().split('')
    let expanded = deconstructed.map( (v, i) => {
        if (v > 0){
            let number = v * (10 **(deconstructed.length - i - 1))
            return `${number} +`
        }
    }).filter( v => v !== undefined)
    return expanded.join(' ').slice(0,-2)
}
expandedForm('1234')

//Difficulty 2/5



//TOP SOLUTIONS 

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");