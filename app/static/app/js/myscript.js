

$('.plus-cart').click(function(){
    var id=$(this).attr("pid").toString();
    var eml = this.parentNode.children[2]
    console.log("pid =",id)
    $.ajax({
        type:"GET",
        url:"/pluscart",
        data:{
            prod_id:id
        },
        success:function(data){
            console.log("data = ",data);
            eml.innerText=data.quantity 
            document.getElementById("amount").innerText=data.amount 
            document.getElementById("totalamount").innerText=data.totalamount
        }
    })
})


$('.minus-cart').click(function(){
    var id=$(this).attr("pid").toString();
    var eml=this.parentNode.children[2] 
    $.ajax({
        type:"GET",
        url:"/minuscart",
        data:{
            prod_id:id
        },
        success:function(data){
            eml.innerText=data.quantity 
            document.getElementById("amount").innerText=data.amount 
            document.getElementById("totalamount").innerText=data.totalamount
        }
    })
})

$('.remove-cart').click(function(){
    var id=$(this).attr("pid").toString();
    var eml=this
    $.ajax({
        type:"GET",
        url:"/removecart",
        data:{
            prod_id:id
        },
        success:function(data){
            document.getElementById("amount").innerText=data.amount 
            document.getElementById("totalamount").innerText=data.totalamount
            eml.parentNode.parentNode.parentNode.parentNode.remove() 
        }
    })
})

$('.plus-wishlist').click(function(){
    var id=$(this).attr("pid").toString();
    $.ajax({
        type:"GET",
        url:"/pluswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            //alert(data.message)
            window.location.href = `http://localhost:8000/product-detail/${id}`
        }
    })
}) 

$('.minus-wishlist').click(function(){
    var id=$(this).attr("pid").toString();
    $.ajax({
        type:"GET",
        url:"/minuswishlist",
        data:{
            prod_id:id
        },
        success:function(data){
            window.location.href = `http://localhost:8000/product-detail/${id}`
        }
    })
})

function removeItem(cost, button) {
    var totalCostElement = document.getElementById('totalCost');
    var currentTotalCost = parseInt(totalCostElement.innerText.slice(1));
    var newTotalCost = currentTotalCost - cost;

    if (newTotalCost < 0) {
        newTotalCost = 0;
    }

    totalCostElement.innerText = '₹' + newTotalCost;

    var quantityElement = button.nextElementSibling;
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
    } else {
        quantity = 0;
    }
    quantityElement.textContent = quantity;
}

function addItem(cost, button) {
    var totalCostElement = document.getElementById('totalCost');
    var currentTotalCost = parseInt(totalCostElement.innerText.slice(1));
    var newTotalCost = currentTotalCost + cost;

    if (newTotalCost < 0) {
        newTotalCost = 0;
    }

    totalCostElement.innerText = '₹' + newTotalCost;

    var quantityElement = button.previousElementSibling;
    var quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
}