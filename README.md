# React useState with setInterval: Stale Closures and Inconsistent Updates

This repository demonstrates a common issue encountered when using `setInterval` with `useState` in React.  Improper handling can lead to stale closures and inconsistent state updates.

## The Problem
The `setInterval` callback function might not always receive the most up-to-date state value. This is because the callback is created during the initial render and might retain a reference to an outdated state value.

## The Solution
The solution involves ensuring that the callback function always receives the current state value. We use a functional update to provide this guarantee. This ensures that `setCount` uses the latest `count` value when setting the new state.