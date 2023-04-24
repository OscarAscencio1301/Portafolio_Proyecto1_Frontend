

const Form = () => {
    return (
        <div className="form_container">
            <div className="form_element">
                <label htmlFor="">Nota</label>
                <input type="text" placeholder="Ir al supermecado...." />
            </div>
            <div className="form_element">
                <label htmlFor="">Nivel de Importnacia</label>
                <select name="" id="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="no">Sin importancia</option>
                    <option value="importante">Importante</option>
                    <option value="urgente">Urgente e importante</option>
                </select>
            </div>
            <div className="form_element">
                <label htmlFor="">Descripción</label>
                <textarea name="" id=""></textarea>
            </div>
            <button type="submit">Agregar</button>
        </div>
    )
}

export default Form
