const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 160,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 195,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.mass}) is higher than${mark.fullName}'s (${mark.mass})`)
} else {
    console.log(`${mark.fullName}'s BMI (${mark.mass}) is higher than ${john.fullName}'s (${john.mass})`)
}



