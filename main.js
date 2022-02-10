const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// normal for loop to loop through the array

for(let i = 0; i < companies.length; i++){
    console.log(companies[i]);
    console.log(companies[i].start);
};
// console.log(companies[0].category)

console.log("_________________")
// use forEach to loop through the array instead of for loop

companies.forEach(function(company){
    console.log(company);
    console.log(company.category);
});

console.log("__________________")
// Use for loop to loop through ages array and get all who are 21 and over

let canDrink = [];
for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

console.log("________________")
// Use .filter() to filter things out of the current array

const canDrinkAlcohol = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
})

console.log(canDrinkAlcohol);
console.log("__________________")

// Make this more simple using ES6 arrow functions

const canDrinkBeer = ages.filter(age => age >= 21);
console.log(canDrinkBeer);

console.log("__________________")

// filter out the retail companies from the objects in the array

const retailCompanies = companies.filter(function(company){
    if(company.category === "Retail"){
        return true;
    }
})
console.log(retailCompanies);

// const empty = [];
// for( let i = 0; i < companies.length; i++){
//     if(companies[i].category ===  "Retail"){
//         empty.push(companies[i]);
//     }
// }
// console.log(empty)

const retailCompanys = companies.filter(company => company.category === "Retail");
console.log(retailCompanys);

// Get companies that started in the 80's

const eightiesCompanies = companies.filter(function(company){
    if(company.start > 1980 && company.start < 1990){
        return true;
    }
});
console.log(eightiesCompanies);

const eightiesCompanys = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanys);

// Get companies that lastes 10 years

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

// Practicing .map() with the arrays
// create array of company names

const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);

const testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
})
console.log(testMap);

const testMap1 = companies.map(company => `${company.name} (${company.start} - ${company.end})`);
console.log(testMap1);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const ageTimesTwo = ages.map(age => age * 2);
console.log(ageTimesTwo);

const squareTimesTwo = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
console.log(squareTimesTwo);

