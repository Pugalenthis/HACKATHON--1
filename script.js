async function foo() {
    try {
        let res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")


        let result = await res.json()
        console.log(result)

        let container = document.createElement("div")
        container.setAttribute("class", "container")
        document.body.append(container)

        for (var i = 1; i < result.length; i++) {

            let row = document.createElement("div")
            row.setAttribute("class", "row")

            let col = document.createElement("div")
            col.setAttribute("class", "col-12 col-md-6 col-lg-6")

            let col1 = document.createElement("div")
            col1.setAttribute("class", "col-12 col-md-6 col-lg-6")

            let name = document.createElement("h4")
            name.innerHTML = ` ${result[i].name}(by ${result[i].brand})`


            let image_link = document.createElement("img")
            image_link.setAttribute("src", `${result[i].image_link}`)
            image_link.setAttribute("class", "img-thumbnail")
            image_link.style.width = "300px"
            image_link.style.height = "250px"
            image_link.style.margin = "10px"


            let price = document.createElement("p")
            price.innerHTML = `Price : ₹ ${result[i].price}`



            let product_link = document.createElement("a")
            product_link.setAttribute("href", `${result[i].product_link}`)
            product_link.innerHTML = "Buy-link"



            let description = document.createElement("p")
            description.innerHTML = `${result[i].description}`



            col.append(image_link)
            col1.append(name, price, product_link, description)
            row.append(col, col1)

            container.append(row)
            document.body.append(container)

        }

    } catch (error) {
        console.log(error)
    }
}



