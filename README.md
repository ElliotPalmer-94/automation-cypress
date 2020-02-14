# automation-cypress
Playing around with cypress.io

# Installation
# ----------Packages----------

```
npm i
```

# Running Test
# ----------Cypress.io---------- 

Run the following to open cypress
```
npm run cy:open
```
Run the following to run cypress cl
```
npm run cy:run
```

Run the following to run cypress cl on different browsers headerless
```
npm run cy:run:chrome
npm run cy:run:firefox
npm run cy:run:edge
```

To run a particular test for example running `alerts-test.js` run the following:

```
npm run cy:run -- --spec "cypress/integration/alerts-test.js"
npm run cy:run:edge -- --spec "cypress/integration/alerts-test.js"

```

To run a lighthouse test run the following

```
npm run lighthouse

```
