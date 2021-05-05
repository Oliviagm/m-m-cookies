let clickCount = 0;

function cookie_click() {
    
    let butter = document.getElementById("butter");
    let egg = document.getElementById("egg");
    let vanilla = document.getElementById("vanilla");
    let brown_sugar = document.getElementById("brown")
    let sugar = document.getElementById("sugar");
    let soda = document.getElementById("soda");
    let salt = document.getElementById("salt");
    let mms = document.getElementById("mms");
    let flour = document.getElementById("flour");

clickCount += 1;
if (clickCount === 30){
  let picture =  document.getElementById("cookie-pic");
  picture.src = "./images/mm-gif.gif";
  picture.innerHTML = `PLEASE DO NOT EAT MEEEEE!!!!!!`
  console.log(picture)

}

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
    let row = document.createElement("tr")
    row.innerHTML = cookie;
    cookieTable.appendChild(row);
})


// more accordian stuff from h3
var acc = document.getElementsByClassName("accordion");


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
