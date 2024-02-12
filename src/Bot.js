
//updating bots
function Bot({bot,onUpdateBot }) {
    // Add function to handle button click
    function handleAddToCartClick() {
      console.log("clicked bot:", bot);
    }

  //patch request
  
    function handleAddToCartClick() {
        // add fetch request
        fetch(`http://localhost:3000/bots/${bot.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isInCart: !bot.isInCart,
          }),
        })
          .then((r) => r.json())
          .then((updatedBot) => console.log(updatedBot));
      }

    return (
      <li className={bot.isInCart ? "in-cart" : ""}>
        <span>{bot.name}</span>
        <span className="category">{bot.category}</span>
        {/* add the onClick listener */}
        <button
          className={bot.isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}
        >
          {bot.isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button className="remove">Delete</button>
      </li>
    );
  }