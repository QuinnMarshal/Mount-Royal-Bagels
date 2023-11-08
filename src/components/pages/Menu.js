import React from 'react';
import '../../App.css';
import './Menu.css'

function Menu() {
  return (
    <>
    <body>
    <div class="menu-container">
        <span style={{display:"flex", justifyContent:"space-between"}}>
            <h2>Bagel Flavors</h2>
        </span>
        <div class="category">
            <span>Plain</span><br></br>
            <span>Whole Wheat</span><br></br>
            <span>Cranberry</span><br></br>
            <span>Cinnamon</span><br></br>
            <span>Cinnamon Raisin</span><br></br>
            <span>Cheese</span><br></br>
            <span>Whole Wheat Cheese</span><br></br>
            <span>Herb and Cheese</span><br></br>
            <span>Jalapeno and Cheese</span><br></br>
            <span>Multigrain</span><br></br>
            <span>Poppy Seed</span><br></br>
            <span>Sesame Seed</span><br></br>
            <span>Everything</span><br></br>
            <span>Rosemary Sea Salt</span><br></br><br></br>
        </div>
        <div class="subcategory">Single Bagel</div>
            <div class="item">
                <span style={{display:"flex", justifyContent:"space-between"}}></span>
                <span>$1.25</span>
            </div>
        <div class="subcategory">1/2 Dozen Bagels</div>
            <div class="item">
                <span style={{display:"flex", justifyContent:"space-between"}}></span>
                <span>$6.99</span>
            </div>

        <h2>Bagel Sandwiches</h2>
        <div class="category">
            <div class="subcategory">Grilled Sandwiches</div>
            <div class="item">
                <span>#1 Breakfast</span>
                <span>$5.99</span>
            </div>
            <i>Your choice of bagel, prepared with an egg, ham, green peppers, onions, cheddar cheese, and mayo</i>
            <div class="item">
                <span>#2 Meaty Cheese</span>
                <span>$5.99</span>
            </div>
            <i>Your choice of bagel, prepared with double the ham, double cheddar cheese, and mayo</i>
            <div class="item">
                <span>#3 BBQ</span>
                <span>$5.99</span>
            </div>
            <i>Your choice of bagel, prepared with roast beef, green peppers, onions, cheddar cheese, and BBQ sauce</i>
            <div class="item">
                <span>#4 Cordon Bleu</span>
                <span>$5.99</span>
            </div>
            <i>Your choice of bagel, prepared with an ham, turkey, tomato, swiss cheese, and mayo</i>
            <div class="item">
                <span>#5 Melty Tuna</span>
                <span>$5.99</span>
            </div>
            <i>Your choice of bagel, prepared with tuna, green peppers, onions, cheddar cheese, and mayo</i>

            <div class="subcategory">Personalized Sandwiches</div>
            <div class="item">
                <span style={{display:"flex", justifyContent:"space-between"}}></span>
                <span>$1.25</span>
            </div>
            <i>Build your own sandwich by choosing your bagel, meat, veggies, cheese, and sauces</i>

            <div class="toppings">
                <span>Meat Options:</span>
                <ul><br></br><i>Ham</i><br></br>
                <i>Turkey</i><br></br>
                <i>Roast Beef</i><br></br>
                <i>Bacon</i><br></br>
                <i>Tuna</i><br></br>
                </ul>
            </div>
            <div class="toppings">
                <span>Veggie Options:</span>
                <ul><br></br><i>Tomato</i><br></br>
                <i>Cucumber</i><br></br>
                <i>Green Pepper</i><br></br>
                <i>Pickles</i><br></br>
                <i>Onion</i><br></br>
                <i>Jalapenos</i><br></br>
                <i>Banana Peppers</i><br></br>
                <i>Lettuce</i><br></br>
                <i>Spinach</i><br></br>
                </ul>
            </div>
            <div class="toppings">
                <span>Cheese Options:</span>
                <ul><br></br><i>Swiss</i><br></br>
                <i>Cheddar</i><br></br>
                </ul>
            </div>
            <div class="toppings">
                <span>Sauce Options:</span>
                <ul><br></br><i>Mayo</i><br></br>
                <i>Mustard</i><br></br>
                <i>Ranch</i><br></br>
                <i>BBQ</i><br></br>
                <i>Hot Sauce</i><br></br>
                <i>Creamy Lemon</i><br></br>
                </ul>
            </div>

            <div class="subcategory">Royal Special Sandwiches</div>
            <div class="item">
                <span>Lox</span>
                <span>$7.99</span>
            </div>
            <i>Your choice of bagel, prepared with smoked salmon, cream cheese, capers, and your choice of cream cheese and veggies</i>
            <div class="item">
                <span>Tuna</span>
                <span>$7.99</span>
            </div>
            <i>Your choice of bagel, prepared with tuna, cheddar cheese, mayo, and your choice of veggies</i>
            <div class="item">
                <span>Pro Veggie</span>
                <span>$7.99</span>
            </div>
            <i>Your choice of bagel, prepared with egg, swiss cheese, mayo, and your choice of veggies</i>
            <div class="item">
                <span>Royal Veggie</span>
                <span>$7.99</span>
            </div>
            <i>Your choice of bagel, prepared with your choice of cream cheese and veggies</i>
          
            <div class="subcategory">Fresh Bagels</div>
            <div class="item">
                <span>Bagel with Butter</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Bagel with Cream Cheese</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Bagel with Pb & J</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Chili with Bagel</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Soup with Bagel</span>
                <span>$4.99</span>
            </div>

            <div class="subcategory">Cream Cheese</div>
            <div class="item">
                <span>Cream Cheese Container</span>
                <span>$4.99</span>
            </div>
            <span>Flavours:</span>
            <ul><i>Plain</i><br></br>
                <i>Jalapeno</i><br></br>
                <i>Basil and Garlic</i><br></br>
                <i>Sundried Tomato</i><br></br>
                <i>Spinach Feta</i><br></br>
                <i>Dill</i><br></br>
                <i>Strawberry</i><br></br>
                <i>Honey Vanilla</i><br></br>
            </ul>

            <div class="subcategory">Hot Drinks</div>
            <div class="item">
                <span>Coffee</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Americano</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Latte</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Creme Brulee Latte</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Chai Latte</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Mocha Latte</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Matcha Latte</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Hot Chocolate</span>
                <span>$4.99</span>
            </div>
            <div class="item">
                <span>Tea</span>
                <span>$4.99</span>
            </div>
        </div>
    </div>
</body>
    </>
    );
  }
  
  export default Menu;