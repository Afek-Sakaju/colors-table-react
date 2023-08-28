# Colors-Table-React

### This NPM package delivers an immersive and visually striking table component for web applications, developed with ReactJS, JavaScript, SASS, and ESLINT, designed to effortlessly enhance user engagement and excitement. <br />

<img src="./readme-resources/table.png" width=130px height=130px align="right">

---

**Live demo:** </br>[colors-table-react](https://Afek-Sakaju.github.io/colors-table-react/)

---

## Configuration Options

### The colors-table component offers a variety of configuration options to customize its appearance and functionality, including:

-   **rows\columns**: You have the ability to configure the count of rows and columns in the table according to your specific preferences.
-   **allowRepeatedColors**: The provided prop gives you the flexibility to determine whether you want the color of the clicked item to be repeatable after each click.
-   **colors**: You can choose colors from a predefined list when generating the table initially and when changing the color of any item within the table.
-   **backgroundColor**: You have the option to specify a background color for the table, but it is not mandatory.
-   **onChange**: By using the provided prop, you can pass an `onChange` function to the table, enabling the component to be utilized in various ways and adaptable to different concepts.

</br>

## Usage

```js
import React from "react";
import { ManagedColorsTable } from "colors-table-react";
import { MY_COLORS_LIST } from "./consts";

function App() {
    return (
        <div className="app-container">
            <ManagedColorsTable
                rows={5}
                columns={7}
                allowRepeatedColors={false}
                colors={MY_COLORS_LIST}
                backgroundColor="wheat"
                onChange={() => console.log("change-detected!")}
            />
        </div>
    );
}

export default App;
```

**Installation:**</br>

-   `npm install colors-table-react` <br /> Include the package in your project's dependencies.

**Development:**</br>

-   `npm run build-jsdocs`</br>For JSDocs of the utils functions, after running open the 'index.html' file located inside the 'js-docs' folder.

---

### **Here's an example showcasing the utilization of the colors-table component:**

https://github.com/Afek-Sakaju/colors-table-react/assets/100536372/92159353-e3cc-4766-b059-9a6595d4e92b

---

## Author

:octocat: **Afek Sakaju**

-   LinkedIn: [@afeksa](https://www.linkedin.com/in/afeksa/)
-   GitHub: [@Afek-Sakaju](https://github.com/Afek-Sakaju)
