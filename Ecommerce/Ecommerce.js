// Seclect the variable

var searchproduct = document.getElementById("search-products")
var productcontainer = document.getElementById("product-container")
var divcontainer = document.querySelectorAll(".image-card-container")

searchproduct.addEventListener("keyup",function(){

  var entervalue = event.target.value.toUpperCase()

  // add the for function

  for( count=0; count<divcontainer.length;count=count+1)
    {
      // Add new Variable

      var productname = divcontainer[count].querySelector("h4").textContent

      // Add If Function

      if(productname.toUpperCase().indexOf(entervalue)<0)
        {
          divcontainer[count].style.display = "none"
        } else{
          divcontainer[count].style.display = "block"
        }
    }
})


