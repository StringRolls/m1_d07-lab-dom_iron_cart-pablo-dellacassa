// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = parseInt(price) * parseInt(quantity)
  const subtotalSpan = product.querySelector(".subtotal span")
  subtotalSpan.innerText = subtotal
  return parseInt(subtotal)
}

  // ITERATION 2-3

function calculateAll() {
    let total =0
    var multiProduct = Array.from(document.getElementsByClassName("product"));
    for(let product of multiProduct){
      total += updateSubtotal(product)
    }
    document.querySelector("#total-value span").innerText = total
    console.log(total)
    }


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode;
  const parent = row.parentNode;
  parent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.querySelectorAll('.btn-remove');
  for(let button of removeBtn) {
    button.addEventListener("click", removeProduct)
  }
});
