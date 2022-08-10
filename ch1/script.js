/*
 *
 * string-formatting examples 
 * link to online version: https://playcode.io/939551/
 *
 */

const artist = 'AC/DC';
const albumTitle = 'High Voltage';
const releaseYear = 1975;
const recordLabel = 'Albert Productions';
const notes = 'Australia only';

// we can add values to strings using the plus operator
const header1 = artist + ' - ' + albumTitle + ' (' + releaseYear + ') [' + recordLabel + ']'; 

// or, using special syntax for placeholder variables, we can insert data into a template 
// to render a string in a specific format 
const header2 = `${artist} - ${albumTitle} (${releaseYear}) [${recordLabel}]`; 

console.log(header1);
console.log(header2);
console.log('header1 and header2 are equivalent: ', header1 === header2);


/*
 * string formatting using a function and conditional 
 */

function makeHeader(artist, album, year, label, notes) {

    let header = `${artist} - ${album} (${year}) [${label}] (${notes})`;

    if (notes) {
        header = `${header} (${notes})`;
    }

    return header;

}

const header3 = makeHeader('AC/DC','High Voltage', 1975, 'Albert Productions'); 
const header4 = makeHeader('AC/DC','High Voltage', 1975, 'Albert Productions', 'Australia only'); 

console.log(header3);
console.log(header4);

/*
 * Challenges:
 *
 * 1) add a rating parameter to the makeHeader function that appends a rating at the end of the header.
 *   When called with a rating value, it should look like one of the following, depending on whether you
 *   pass in a 'notes' value: 
 *      AC/DC - High Voltage (1975) [Albert Productions] (Australia only) *4/5* 
 *      AC/DC - High Voltage (1975) [Albert Productions] *4/5*
 *
 *    For now, the only optional value in makeHeader is 'notes'.
 *
 *  2) experiment with the formatting in makeHeader and decide which approach you like better, and why 
 *      - the template string version (`${val}`)
 *      - the string concatenation method (val1 + ' (' + val2 '))
 *
 */

