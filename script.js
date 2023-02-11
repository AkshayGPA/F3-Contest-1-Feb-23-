// console.log("Product list call from API")
// let container = document.getElementsByClassName("container");

// fetch("https://dummyjson.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log("DATA>>>", data);
//         let prodList = data.products;
//         let prodDiv = document.getElementById("productList");

//         // prodList.map((products) => {
//         //     prodDiv.innerHTML += `<p>${products.title}</p>`;
//         // });
//         for (let i = 0; i < prodList.length ; i++){
//             const element = prodList[i];
//             let categoryy = element.category;
//             let idd = element.id;
//             let brandd = element.brand;
//             let titlee = element.title;
//             let descriptionn = element.description;
//             let sellingPrice = element.price;
//             let discount = element.discountPercentage;
//             let availability = element.stock;
//             let prodReview = element.rating;
//             let imageArr = element.images;
//             let imagee = imageArr[0];
            
//             let flexCard = document.createElement("span");

//             flexCard.innerHTML = 
//             `<div class="flexCard">
//                 <img class="img" src="${imagee}">
//                 <p class="prodTitle">Title: ${titlee}</p>
//                 <p class="brand">Brand: ${brandd}</p>
//                 <p class="cost">${sellingPrice}</p>
//                 <p class="rating">Rating : ${prodReview}</p>
//                 <p class="inStock">Stock : ${availability}</p>
//                 <p class="description">${descriptionn}</p>
//                 <p class="rebate">Stock : ${discount}</p>
//             </div>`

//             container.appendChild(flexCard);

//         }



// });







fetch("https://dummyjson.com/products").then((response)=> response.json()).then((data)=>{
    let primeData = data.products;
    let divv = document.getElementById('container');
    console.log(divv); // this stores the main div element where we gonaa display our cards
 
  // to loop over a primeData array of objects
  for (let i = 0; i < primeData.length; i++) {
    const element = primeData[i];
    let categoryy = element.category;
    let idd = element.id;
    let brandd = element.brand;
    let titlee = element.title;
    let descriptionn = element.description;
    let pricee = element.price;
    let discountPercentagee = element.discountPercentage;
    let stockk = element.stock;
    let ratingg = element.rating;
    let imageArr = element.images;
    let imagee = imageArr[0];
    console.log(`iteration ${i}`)
    console.log(element, categoryy, idd, brandd, titlee, descriptionn, pricee, discountPercentagee, stockk, ratingg, imagee);
    let spann = document.createElement("span");
    console.log('Hello');
    spann.innerHTML = 
    `<div class="flexCard" >
        <div id="imgDiv"><img class="img" src="${imagee}" height="80%" width="70%"></div>
        <p class="prodTitle pad"><b>Title:</b> ${titlee}</p>
        <p class="brand pad"><b>Brand:</b> ${brandd}</p>
        <p class="cost pad"><b>Cost:</b> ${pricee}</p>
        <p class="rating pad"><b>Rating:</b> ${ratingg}</p>
        <p class="inStock pad"><b>Stock:</b> ${stockk}</p>
        <p class="discountpercentage pad"><b>Rebate:</b> ${discountPercentagee}%</p>
        <p class="description pad">${descriptionn}</p>
    </div>`
        divv.appendChild(spann);
        // divv.appendChild(spann);
    }
});