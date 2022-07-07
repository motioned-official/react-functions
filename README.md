<h1 align="center">react-functions</h1>
<div align="center">
<b>@motioned-official</b> <a href="https://motioned.tech">Motioned</a> 
</div>
<br>

**`@motioned-official/react-functions`** is a library to provide **React** developers a set of utility functions that can be used in functional components.

Rather than declaring utility functions per every project you will work on, why not using them from a simple installation command.

## Installation

```shell
# npm
npm install @motioned-official/react-functions
# yarn
yarn add @motioned-official/react-functions
```

### List of Available Functions

- `classify(...strings : string[]) : string` : [Function Detail]("./src/classify/index")

### Usage

#### `classify(...strings : string[]) : string`

```ts
function MyComponent() {
  // 'num' number state our component uses.
  const [num, setNum] = useState<number>(0);

  // timeout function to icnrease 'num' by 1 every second.
  useEffect(() => {
    setTimeout(() => {
      setNum((current) => current + 1);
    }, [1000]);
  }, [num]);

  return (
    <span
      className={classify(
        "bg-gray-100",
        num % 2 === 0 ? "text-blue-400" : "text-orange-400"
      )}
    >
      {num}
    </span>
  );
}
// num = 0 => span.className = 'bg-gray-100 text-blue-400'
// num = 1 => span.className = 'bg-gray-100 text-orange-400'
// num = 2 => span.className = 'bg-gray-100 text-blue-400'
// num = 3 => span.className = 'bg-gray-100 text-orange-400'
// ...
```
