"use-strict";
//Our customers are going to buy lots of melons!

melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']


// function countMelons(melonList) {
//     //"""Take in a list and return a dictionary of # of melons by melon type."""
//     var melonCounts = {}
//     for (const melon of melonList){
//         if (melon in melonCounts) {
//             melonCounts[melon] += 1;
//         }
//         else{
//             melonCounts[melon] = 1;
//         }
//     }
//     return melonCounts
//     }

// console.log(countMelons(melonsToAdd))

//rewrite

function countMelons(melonsArray) {
    //Take in an array and return a hash table of number of melons by melon type.
    const melonCounts = {};
    for (const melon of melonsArray){
        if (melon in melonCounts){
            melonCounts[melon] += 1;
        } else {
            melonCounts[melon] = 1;
        }
    }
    return melonCounts;
}
console.log(countMelons(melonsToAdd));