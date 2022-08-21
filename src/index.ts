import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';
import { LinkedListCollection } from './LinkedListsCollection';

const numbersCollection = new NumbersCollection([10, -8, 3, -4, 98, 0]);
// const sorter = new Sorter(numbersCollection);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('aXcGlnZmbA');
// const secondSorter = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(500);
linkedListCollection.add(-10);
linkedListCollection.add(-3);
linkedListCollection.add(4);
linkedListCollection.add(85);

// const thirdSorter = new Sorter(linkedListCollection);
linkedListCollection.sort();
linkedListCollection.print();
