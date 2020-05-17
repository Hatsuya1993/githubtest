const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Using filter

const retailCompanies = companies.filter((comp) => comp.category === "Retail");

const canDrink = ages.filter((canD) => canD > 16);

const year = companies.filter((yer) => yer.start >= 1980 && yer.start < 1990);

const lasted = companies.filter((abc) => abc.end - abc.start >= 10);

// Using Map

const test = companies.map(
  (comp) => `${comp.category}, ${comp.start}, ${comp.end}`
);

const sqr = ages.map((age) => age * age);

// Using   Sort

const srt = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

const srtag = ages.sort((a, b) => (a > b ? 1 : -1));

// Reduce

const red = ages.reduce((total, age) => (total += age), 0);

const range = companies.reduce(
  (total, rang) => (total += rang.end - rang.start),
  0
);

// Merge methods

const car = companies.filter((a) => a.category == "Auto");

const car2 = car.reduce((total, a) => (total += a.end - a.start), 0);

console.log(car2);
