# css-modules-component-library
test to see if I can replicate the next out of order bug

and i can!

I don't want to publish this to npm since it's kind of a waste. So...

## Replication

1. Clone repo
2. yarn or yalc link this to a create-next-app generated repo, such as: https://github.com/piratetaco/create-next-css-repro
3. yarn build
4. Navigate to .next/static/css/<hash>.css
5. Note how the emitted styles are no longer in the expected order, with baseCell and heading styles coming after cellskinny