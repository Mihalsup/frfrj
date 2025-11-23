const results = {
      "madox": "Madox je 16 letý kluk štíhlé postavy a střední velikosti. Většinu času trávil v knihách, ve kterých chtěl být hlavní hrdina. Potom, co je teleportován se svými spolužáky a dostane starou knihu plnou alchymistických receptů, je odhodlán stát se hrdinou.",
      "zlatý dotek": "Zlatý Dotek je mastička béžového zbarvení s vůní dřeviny. Má léčivé schopnosti a dokáže zahojit malá zranění. Recept: 3 pupeny topolu, hrst listů šťovíku, kousek kůry dubu. Postup: rozdrtit listy a kůru, přidat pryskyřici a míchat do krému.",
      "irder": "Irder je jihozápadní království, kterému vládne Voran Laestus. Hlavním městem je Equinox."
    };

    document.getElementById("searchForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

      const search = document.getElementById("searchBar").value.trim().toLowerCase();
      const text = document.getElementById("Stuff");

      if (results[search]) {
        text.innerHTML = `<h2>${search}</h2><p>${results[search]}</p>`;
      } else {
        text.innerHTML = `<p>Nenalezeno: ${search}</p>`;
      }
    });