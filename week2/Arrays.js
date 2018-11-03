let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
//Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
favoriteAnimals.push("turtle");

//Log the new array!
console.log(favoriteAnimals);

//add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1,0,"meerkat");

console.log(favoriteAnimals);

// a console.log statement that explains in words you think the new value of the array is.
console.log(favoriteAnimals.length);

//Log the new array!
console.log(favoriteAnimals);

//Log the length of the array, add a message:
console.log('The array has a length of: ' + (favoriteAnimals.length));

//Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3,1);

//Again log the new array.
console.log(favoriteAnimals);

//Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?

console.log(favoriteAnimals.indexOf("meerkat"));

//Log the index of 'meerkat'. Add a message.

console.log('The item you are looking for is at index: ' + (favoriteAnimals.indexOf("meerkat")));

