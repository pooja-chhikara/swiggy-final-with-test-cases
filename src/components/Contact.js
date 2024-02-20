

const Contact = () => {
  return (
    <div>


      
        <h1>Contact Us</h1>
        <form>
        <input
          type="text"
          className="border border-blackp-2 m-2"
          placeholder="name"
          />
          <input
          type="text"
          className="border border-blackp-2 m-2"
          placeholder="message"
          />
          <button
          className="bg-gray-100 border border-black m-2 p-2 rounded-lg"
          >submit</button>
        </form>

    </div>
  )
}

export default Contact