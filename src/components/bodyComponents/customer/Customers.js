import productList from "../inventory/productList";

const customers = [{
    id: 1, firstName: "Sibongile",
    lastName: "Dlamini",
    position: "Software Engineer",
    mobile: "+27 72 123 4567",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 2, firstName: "Thabo",
    lastName: "Mokoena",
    position: "Software Engineer",
    mobile: "+27 82 987 6543",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 3, firstName: "Naledi",
    lastName: "Khumalo",
    position: "Software Engineer",
    mobile: "+27 71 234 5678",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 4, firstName: "Lerato",
    lastName: "Moloi",
    position: "Software Engineer",
    mobile: "+27 79 345 6789",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 5, firstName: "Ayanda",
    lastName: "Ngcobo",
    position: "Software Engineer",
    mobile: "+27 74 567 8901",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 6, firstName: "Sipho",
    lastName: "Zulu",
    position: "Software Engineer",
    mobile: "+27 78 234 5671",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 7, firstName: "Kagiso",
    lastName: "Molefe",
    position: "Software Engineer",
    mobile: "+27 76 789 0123",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 8, firstName: "Zandile",
    lastName: "Shabalala",
    position: "Software Engineer",
    mobile: "+27 73 456 7890",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 9, firstName: "Mandisa",
    lastName: "Nkosi",
    position: "Software Engineer",
    mobile: "+27 71 890 1234",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 10, firstName: "Bongani",
    lastName: "Gumede",
    position: "Software Engineer",
    mobile: "+27 82 345 6789",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 11, firstName: "Nandi",
    lastName: "Mabena",
    position: "Software Engineer",
    mobile: "+27 74 901 2345",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}, {
    id: 12, firstName: "Themba",
    lastName: "Masuku",
    position: "Software Engineer",
    mobile: "+27 72 678 9012",
    orders: [{
        id: 1,
        products: [{quantity: 5, product: productList[0]}, {quantity: 5, product: productList[1]}, {quantity: 5, product: productList[2]}],
    }]
}];

export default customers;
