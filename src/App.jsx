import Button from "./Button/Button"
import Card from "./Card"
import List from "./List"
import Student from "./Student"
import UserGreeting from "./UserGreeting"



function App() {

  const fruits = [{ id: 1, name: "watermelon", calories: 85},
                  { id: 2, name: "mango", calories: 201},
                  { id: 3, name: "cantaloupe", calories: 186},
                  { id: 4, name: "peach", calories: 50},
                  { id: 5, name: "cherry", calories: 77}]

  const vegetables = [
                      { id: 6, name: "potato", calories: 110},
                      { id: 7, name: "celery", calories: 15},
                      { id: 8, name: "carrot", calories: 25},
                      { id: 9, name: "corn", calories: 63},
                      { id: 10, name: "broccoli", calories: 50}
                    ]

  return(
    <>
      {/* <Card /> */}
      {/* <Button /> */}
      {/* <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student name="Larry" /> */}
      {/* <UserGreeting isLoggedIn={false} username="VitaminC"/> */}
      {/* <List /> */}
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}

    </>
  )
}

export default App
