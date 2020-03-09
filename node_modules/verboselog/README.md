# Welcome to verboselog

verboselog was written as a solution to view entire objects or arrays in the console in js.  It is a very simple package that you can write your self, but I got sick of writing it so I made it an npm package.  Feel free to use your self.

## Installation

npm install verboselog

## Useage

`deelog(data, message)`

the first argument is the data you want logged, second is an optional string message you want to connect with data being logged.


```

var data = {
    test1: "test1",
    test2: {
        a:"a",
        b:"b",
        c:"c",,
        d: {
            d:"d"
            }
        }
    },
    test3: [ [ 'a', 'b'], 'a', [ ['a', 'b',], ['a', 'b'] ], ]
}

```

`console.log('here is your data', data)`

### Output

```
here is your data { test1: 'test1',
  test2: { a: 'a', b: 'b', c: 'c', d: { d: 'd' } },
  test3: [ [ 'a', 'b' ], 'a', [ [Array], [Array] ] ] }
```


`verboselog(data, 'here is your data')`

### Output

```
here is your data
{ test1: 'test1',
  test2: { a: 'a', b: 'b', c: 'c', d: { d: 'd' } },
  test3: 
   [ [ 'a', 'b', [length]: 2 ],
     'a',
     [ [ 'a', 'b', [length]: 2 ],
       [ 'a', 'b', [length]: 2 ],
       [length]: 2 ],
     [length]: 3 ] }

```

