console.log("Product list call from API")

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log("DATA>>>", data);
        let prodList = data.products;
        let prodDiv = document.getElementById("productList");

        // prodList.map((products) => {
        //     prodDiv.innerHTML += `<p>${products.title}</p>`;
        // });

});