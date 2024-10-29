export default class Shape {
    constructor(color) {
        this.color = color;
    }

    // This method should be overridden by subclasses (Polymorphism)
    describe() {
        throw new Error("Method 'describe()' must be implemented.");
    }

    // As required by the rubric - for test purposes
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
    
    /*
    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    calculateArea() {
        throw new Error("You have to implement the method calculateArea!");
    }

    calculatePerimeter() {
        throw new Error("You have to implement the method calculatePerimeter!");
    }
    */
}
