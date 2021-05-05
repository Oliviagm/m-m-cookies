function cookie_click() {
    // replace butter
    
    let butter = document.getElementById("butter");
    let egg = document.getElementById("egg");
    let vanilla = document.getElementById("vanilla");
    let brown_sugar = document.getElementById("brown")
    let sugar = document.getElementById("sugar");
    let soda = document.getElementById("soda");
    let salt = document.getElementById("salt");
    let mms = document.getElementById("mms");
    let flour = document.getElementById("flour");

console.log("hereeeeee")

    if (butter.innerHTML === "1 cup butter") {
        // butter
        butter.innerHTML = "1.Preheat oven to 350F"
        //brown
        brown_sugar.innerHTML = "2. In a large bowl, cream butter and both sugars until well blended. Add egg and vanilla extract and mix to combine."
        //sugar
        sugar.innerHTML = "3. In a separate bowl, sift the flour, baking soda and salt together. Slowly add to butter mixture and stir."
        // soda
        soda.innerHTML = "4. Fold in the M&Ms and chill the dough for 1 hr or overnight."
        // salt
        salt.innerHTML = "5. Drop dough by rounded tablespoons onto a lightly greased tray about 2 inches apart."
        //mms
        mms.innerHTML = "6. Bake for 8-10 minutes for chewy cookies or 12-14 minutes for crispy cookies."
        // know we are in second page so go ahead and hide what we do not need
        egg.style.display = 'none';
        vanilla.style.display = 'none';
        flour.style.display = 'none';
    } else {
        butter.innerHTML = "1 cup butter"
        egg.style.display = 'block';
        vanilla.style.display = 'block';
        flour.style.display = 'block';
        brown_sugar.innerHTML = "2/3 cup brown sugar"
        sugar.innerHTML = "2/3 cup sugar";
        // soda
        soda.innerHTML = "1 1/4 tsp baking soda"
        // salt
        salt.innerHTML = "1 tsp salt"
        //mms
        mms.innerHTML = "1 3/4 cups M&Ms"
    }
};

let cookie = document.getElementById("cookie-pic");
cookie.addEventListener('click', cookie_click)

let types = ["Chocolate-Chips", "Sugar", "Snickerdoodle", "Double-Chocolate", "Peanut Butter", "Oatmeal-Rasin"]
let cookieTable = document.getElementById("ctable")

types.forEach(cookie => {
    console.log("here")
    let row = document.createElement("tr")
    row.innerHTML = cookie;
    cookieTable.appendChild(row);
})