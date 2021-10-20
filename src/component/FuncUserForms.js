import '../App.css'

function FuncUserForm (props) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gen, setGen] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(user);

   setName("")
   setEmail("")
   setGen("")
  };

  
    return (
      <div className="form-container">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="name">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Fullname"
            />
          </div>

          <div className="email">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
          </div>

          <div>
          <input
              type="text"
              name="gen"
              value={gen}
              onChange={(e) => setGen(e.target.value)}
              placeholder="Enter your Gen"
            />
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }


export default FuncUserForm;
