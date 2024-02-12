//creating Bots
function BotForm() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
  
    // Add function to handle submissions
    function handleSubmit(e) {
      e.preventDefault();
      console.log("name:", name);
      console.log("category:", category);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const botData = {
          name: name,
          category: category,
          isInCart: false,
        };
        fetch("http://localhost:3000/bots", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(botData),
        })
          .then((r) => r.json())
          .then((newBot) => onAddBot(newBot));
      }
  
    return (
      // Set up the form to call handleSubmit when the form is submitted
      <form className="NewItem" onSubmit={handleSubmit}>
        {/** ...form inputs here */}
      </form>
    );
  }
