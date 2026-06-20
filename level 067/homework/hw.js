const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getInfo: function() {
        return `This car is a ${this.year} ${this.brand} ${this.model}`;
    }
};
console.log(car.getInfo());

const student = {
    name: "Alex",
    grades: {
        math: 90,
        english: 85,
        science: 95
    },
    getAverage: function() {
        const values = Object.values(this.grades);
        const sum = values.reduce((a, b) => a + b, 0);
        return sum / values.length;
    }
};
console.log(student.getAverage()); 


const book = {
    title: "Harry Potter",
    author: "J.K. Rowling"
};

document.write(`<h3>Book Info</h3>`);
document.write(`<p>Title: ${book.title}</p>`);
document.write(`<p>Author: ${book.author}</p>`);
