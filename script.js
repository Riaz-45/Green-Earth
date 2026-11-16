const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => {
        displayCategories(data.categories);
    });
}
loadCategories();

const displayCategories = (categories) => {
    // console.log(categories);
    const categoryContainer = document.getElementById('categories-container');
    categoryContainer.innerHTML = `
        <h2 class="font-bold text-xl text-left">Categories</h2>
        <button class="btn border-none bg-transparent hover:bg-[#15803D] hover:text-white">All Trees</button>
    `;

    for(let category of categories){
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
            <button class="btn border-none bg-transparent hover:bg-[#15803D] hover:text-white">${category.category_name}</button>
        `

        categoryContainer.append(categoryDiv);
    }
}