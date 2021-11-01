const URL = "https://platzi-avo.vercel.app/api/avo";
const baseUrl ="https://platzi-avo.vercel.app";
const appNode = document.querySelector("#appNode");
const formatPrice = (price) =>{
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
    return newPrice;
};

async function getData(){
    try{
        const response = await fetch(URL),
        info= await response.json(),
        allItems = [];
            info.data.forEach((item) => {
                // se crean los elementos
                const img = document.createElement("img");
                const title = document.createElement("h2");
                const price = document.createElement("div");
                const container= document.createElement("div");
                // anexa informacion a los elementos creados
                title.textContent = item.name;
                price.textContent = formatPrice(item.price);
                img.src = `${baseUrl}${item.image}`;
                // se añaden las clases para estilizar 
                img.className="justify-self-center";
                title.className = "text-5xl text-center";
                price.className="text-2xl text-center text-gray-400";
                container.className = "container";
                appNode.className = "content";
                // se añaden los elementos al contenedor y a su vez a un array
                container.append(img,title,price);
                allItems.push(container);
            });
            // se agregan los elementos al html
        appNode.append(...allItems) 
    }catch(err){
        console.error(err)
    }
}

getData();