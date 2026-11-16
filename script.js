const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => {
        displayCategories(data.categories);
    });
}
loadCategories();


const loadCategoryPlants = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayAllPlants(data.plants)
    })
}

const displayCategories = (categories) => {
    // console.log(categories);
    const categoryContainer = document.getElementById('categories-container');
    categoryContainer.innerHTML = `
        <h2 class="font-bold text-xl text-left pl-4">Categories</h2>
        <button onclick="loadAllPlants()" class="btn border-none justify-start w-full bg-transparent hover:bg-[#15803D] hover:text-white">All Trees</button>
    `;

    for(let category of categories){
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <button onclick="loadCategoryPlants(${category.id})" class="btn border-none bg-transparent hover:bg-[#15803D] w-full justify-start hover:text-white">${category.category_name}</button>
        `

        categoryContainer.append(categoryDiv);
    }
}

const loadAllPlants = () => {
    const url = "https://openapi.programming-hero.com/api/plants";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayAllPlants(data.plants);
    });
}
loadAllPlants();

const displayAllPlants = (plants) => {
    // console.log(plants);
    const allPlantsContainer = document.getElementById("allPlants-container");
    allPlantsContainer.innerHTML = " ";

    for(let plant of plants){
        console.log(plant.image)
        const allPlantsDiv = document.createElement('div');
        allPlantsDiv.innerHTML = `
            <div class="bg-white rounded-2xl h-full p-4 flex flex-col">
                <img src="https://openapi.programming-hero.com/api/plants/${plant.image}" alt="${plant.name}">
                <h2 class="font-bold text-xl text-left my-4">${plant.name}</h2>
                <p class="text-[#1F2937]/80 text-sm text-left mb-4">${plant.description}</p>
                <div class="flex justify-between items-center my-4 mt-auto">
                    <p class="bg-[#DCFCE7] rounded-[400px] px-3 py-1 text-[#15803D]">${plant.category}</p>
                    <p class="font-bold size-8">৳${plant.price}</p>
                </div>
                <div>
                    <button class="btn rounded-full border-none bg-[#15803D] text-white w-full hover:bg-[#15803D] hover:text-white">Add to Cart</button> 
                </div>
            </div>
        `

        allPlantsContainer.append(allPlantsDiv);
    }
}