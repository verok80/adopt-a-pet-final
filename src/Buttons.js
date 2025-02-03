function Buttons({ filteredPet }){
    return(
        <div className="container">
<button className=" btn change" onClick = { () => filteredPet("dog")} >Dogs</button>
<button className=" btn change" onClick = { () => filteredPet("cat")}>Cats</button>
        </div>
    )
}
export default  Buttons;