import {useState} from 'react'

const TodoForm = () => {
    const [titulo, setTitulo] = useState("");
    const [category, setCategory] = useState("");

    const segurarSubmit = (e) => {
        e.preventDefault()
        console.log(titulo, category);
    };

  return (
    <div>
        <h2>Criar tarefa</h2>
        <form onSubmit={segurarSubmit}>
            <input type="text" placeholder='Digite o título' onChange={(e) => setTitulo(e.target.value)}/>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudo">Estudo</option>
            </select>
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm 