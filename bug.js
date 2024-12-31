```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using the previous state value in the callback
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); 
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```